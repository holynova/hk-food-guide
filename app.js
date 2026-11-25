(() => {
  const DATA = window.HK_FOOD_DATA;
  const STORAGE_KEY = "hk_food_visited_v2";

  const state = {
    view: "overview",
    filter: "all",
    selectedId: null,
    drawerExpanded: false,
    visitedIds: new Set()
  };

  let map = null;
  let markerLayer = null;
  let toastTimer = null;

  const spotById = new Map(DATA.restaurants.map((r) => [r.id, r]));

  const els = {
    viewOverview: document.getElementById("view-overview"),
    viewGuide: document.getElementById("view-guide"),
    tabLinks: document.querySelectorAll(".tab-link"),
    filterRail: document.getElementById("filterRail"),
    btnRecenter: document.getElementById("btnRecenter"),
    btnFitAll: document.getElementById("btnFitAll"),
    mapOfflineNotice: document.getElementById("mapOfflineNotice"),
    drawerToggleBtn: document.getElementById("drawerToggleBtn"),
    expandDrawerLink: document.getElementById("expandDrawerLink"),
    pinFocusPanel: document.getElementById("pinFocusPanel"),
    drawerListWrap: document.getElementById("drawerListWrap"),
    drawerMeta: document.getElementById("drawerMeta"),
    drawerNote: document.getElementById("drawerNote"),
    spotList: document.getElementById("spotList"),
    copyWechatBtn: document.getElementById("copyWechatBtn"),
    copyWechatGuideBtn: document.getElementById("copyWechatGuideBtn"),
    guideCountdown: document.getElementById("guideCountdown"),
    itineraryList: document.getElementById("itineraryList"),
    antiHypeList: document.getElementById("antiHypeList"),
    tipsList: document.getElementById("tipsList"),
    detailBackdrop: document.getElementById("detailBackdrop"),
    detailSheet: document.getElementById("detailSheet"),
    detailCloseBtn: document.getElementById("detailCloseBtn"),
    detailBody: document.getElementById("detailBody"),
    toast: document.getElementById("toast")
  };

  // =========================================================================
  // Helpers & Persistence
  // =========================================================================
  function loadVisited() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("hk_food_guide_state_v1");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      const arr = Array.isArray(parsed) ? parsed : parsed.visitedIds;
      if (Array.isArray(arr)) state.visitedIds = new Set(arr);
    } catch (_) {}
  }

  function saveVisited() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(state.visitedIds)));
    } catch (_) {}
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function showToast(msg) {
    els.toast.textContent = msg;
    els.toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      els.toast.hidden = true;
    }, 2000);
  }

  async function copyText(text, msg) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(msg);
    } catch (_) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast(msg);
    }
  }

  function googleMapsUrl(spot) {
    const q = encodeURIComponent(`${spot.cantoneseName || spot.name} ${spot.address} Hong Kong`);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  }

  function amapUrl(spot) {
    return `https://uri.amap.com/marker?position=${spot.lng},${spot.lat}&name=${encodeURIComponent(spot.name)}`;
  }

  function matchesFilter(spot, filter) {
    if (filter === "all") return true;
    if (filter === "michelin-1") return spot.tier === "michelin-1";
    if (filter === "famous") return spot.tier === "famous";
    if (filter === "local-picks") return spot.tier !== "michelin-1" && spot.tier !== "famous";
    return spot.tags.includes(filter);
  }

  function getVisibleSpots() {
    return DATA.restaurants.filter((s) => matchesFilter(s, state.filter));
  }

  // =========================================================================
  // Quiet Map + Dots
  // =========================================================================
  function initMap() {
    if (typeof L === "undefined") {
      els.mapOfflineNotice.hidden = false;
      return;
    }

    map = L.map("hkMap", {
      center: [22.299, 114.170],
      zoom: 12,
      zoomControl: false,
      attributionControl: false
    });

    const esri = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 19, attribution: "Esri" }
    );

    let errors = 0;
    esri.on("tileerror", () => {
      errors += 1;
      if (errors === 4) {
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19 }).addTo(map);
        els.mapOfflineNotice.hidden = false;
      }
    });
    esri.addTo(map);

    // Hung Hom Reference Pill
    const baseIcon = L.divIcon({
      className: "",
      html: `<div class="dot-home">红磡</div>`,
      iconSize: [46, 24],
      iconAnchor: [23, 12]
    });

    L.marker([DATA.base.lat, DATA.base.lng], { icon: baseIcon, zIndexOffset: 900 })
      .addTo(map)
      .on("click", () => {
        clearPinFocus();
        showToast("红磡住宿据点：东铁线 1 站过海，步行可吃宵夜");
      });

    markerLayer = L.layerGroup().addTo(map);
    map.on("click", clearPinFocus);

    renderMapMarkers(true);
  }

  function makeDotIcon(spot, isSelected) {
    const isStar = spot.tier === "michelin-1";
    const isFamous = spot.tier === "famous";
    const cls = isStar ? "dot-star" : isFamous ? "dot-famous" : "dot-other";
    const size = isStar ? 14 : isFamous ? 11 : 9;
    return L.divIcon({
      className: "",
      html: `<div class="${cls} ${isSelected ? "dot-selected" : ""}"></div>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2]
    });
  }

  function renderMapMarkers(fitBounds = false) {
    if (!markerLayer) return;
    markerLayer.clearLayers();

    const spots = getVisibleSpots();
    spots.forEach((spot) => {
      const isSelected = spot.id === state.selectedId;
      const z = isSelected ? 800 : spot.tier === "michelin-1" ? 400 : spot.tier === "famous" ? 250 : 100;
      const m = L.marker([spot.lat, spot.lng], {
        icon: makeDotIcon(spot, isSelected),
        zIndexOffset: z
      });
      m.on("click", (e) => {
        L.DomEvent.stopPropagation(e);
        focusPinOnMap(spot.id, false);
      });
      m.addTo(markerLayer);
    });

    if (fitBounds && map && spots.length > 0) {
      const pts = spots.map((s) => [s.lat, s.lng]);
      pts.push([DATA.base.lat, DATA.base.lng]);
      map.fitBounds(pts, { padding: [52, 52], maxZoom: 14 });
    }
  }

  function setDrawerExpanded(expanded) {
    state.drawerExpanded = expanded;
    els.viewOverview.classList.toggle("is-expanded", expanded);
    els.expandDrawerLink.textContent = expanded ? "收起" : "展开";
  }

  function focusPinOnMap(spotId, fly = true) {
    const spot = spotById.get(spotId);
    if (!spot) return;

    if (state.view !== "overview") {
      switchView("overview");
    }

    if (!matchesFilter(spot, state.filter)) {
      state.filter = "all";
      syncFilterChips();
      renderList();
    }

    setDrawerExpanded(false);
    state.selectedId = spotId;
    els.viewOverview.classList.add("is-pin-focus");
    renderMapMarkers(false);

    if (map) {
      setTimeout(() => {
        map.invalidateSize();
        if (fly) map.flyTo([spot.lat, spot.lng], 15, { duration: 0.45 });
        else map.panTo([spot.lat, spot.lng], { animate: true, duration: 0.3 });
      }, 60);
    }

    const isStar = spot.tier === "michelin-1";
    const tagCls = isStar ? "spot-tag spot-tag-star" : "spot-tag spot-tag-muted";

    els.pinFocusPanel.innerHTML = `
      <div class="pin-focus-head">
        <div>
          <div class="spot-name-group">
            <h3 class="pin-focus-name">${escapeHtml(spot.name)}</h3>
            <span class="${tagCls}">${escapeHtml(spot.badgeLabel)}</span>
          </div>
          <p class="pin-focus-meta">${escapeHtml(spot.district)} · ${escapeHtml(spot.priceRange)} · 红磡约 ${spot.travelMinutes} 分钟${spot.closedDay ? ` · ${escapeHtml(spot.closedDay)}` : ""}</p>
        </div>
        <button type="button" class="pin-focus-close" id="closePinFocusBtn" aria-label="返回列表">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      <p class="pin-focus-dish">必点：${escapeHtml(spot.mustOrder.map((d) => d.name).join("、"))}</p>
      <div class="pin-focus-actions">
        <button type="button" class="btn btn-ink" id="pinOpenDetailBtn">查看详情</button>
        <a class="btn btn-accent" href="${googleMapsUrl(spot)}" target="_blank" rel="noopener noreferrer">Google导航</a>
        <a class="btn" href="${amapUrl(spot)}" target="_blank" rel="noopener noreferrer">高德地图</a>
      </div>
    `;

    els.drawerListWrap.hidden = true;
    els.pinFocusPanel.hidden = false;

    document.getElementById("closePinFocusBtn").addEventListener("click", clearPinFocus);
    document.getElementById("pinOpenDetailBtn").addEventListener("click", () => openDetailSheet(spot.id));
  }

  function clearPinFocus() {
    if (!state.selectedId) return;
    state.selectedId = null;
    els.viewOverview.classList.remove("is-pin-focus");
    els.pinFocusPanel.hidden = true;
    els.drawerListWrap.hidden = false;
    renderMapMarkers(false);
    if (map) {
      setTimeout(() => map.invalidateSize(), 120);
    }
  }

  // =========================================================================
  // Spacious List Rendering
  // =========================================================================
  function renderList() {
    const spots = getVisibleSpots();
    const visitedText = state.visitedIds.size > 0 ? ` · 已吃 ${state.visitedIds.size}` : "";
    els.drawerMeta.textContent = `共 ${spots.length} 家 · 红磡出发${visitedText}`;

    els.spotList.innerHTML = spots
      .map((spot) => {
        const isStar = spot.tier === "michelin-1";
        const isVisited = state.visitedIds.has(spot.id);
        const tagHtml = isStar
          ? `<span class="spot-tag spot-tag-star">米其林一星</span>`
          : spot.tier === "famous"
          ? `<span class="spot-tag spot-tag-muted">知名名店</span>`
          : "";
        const topDish = spot.mustOrder[0].name;
        const closed = spot.closedDay ? ` · ${escapeHtml(spot.closedDay)}` : "";
        const visitedMark = isVisited ? " · 已打卡" : "";

        return `
          <li class="spot-item ${isVisited ? "is-visited" : ""}" data-spot-id="${spot.id}">
            <div class="spot-item-top">
              <div class="spot-name-group">
                <span class="spot-name">${escapeHtml(spot.name)}</span>
                ${tagHtml}
              </div>
              <span class="spot-price">${escapeHtml(spot.priceRange)}</span>
            </div>
            <p class="spot-desc">${escapeHtml(spot.district)} · <strong>${escapeHtml(topDish)}</strong> · 红磡约 ${spot.travelMinutes} 分钟${closed}${visitedMark}</p>
          </li>
        `;
      })
      .join("");
  }

  // =========================================================================
  // Guide View Rendering
  // =========================================================================
  function inlineSpotLink(id) {
    const s = spotById.get(id);
    if (!s) return "";
    return `<button type="button" class="inline-link" data-spot="${s.id}">${escapeHtml(s.name)}</button>`;
  }

  function renderGuide() {
    const now = new Date();
    const deadline = new Date("2026-12-04T00:00:00+08:00");
    const days = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
    if (days > 0 && days <= 30) {
      els.guideCountdown.textContent = `距 12 月 4 日返程约 ${days} 天。全港 29 家核验食店，按工作日下班、过海摘星与周末进补拆解 5 条顺路路线，点店名可看详情或定位。`;
    }

    els.itineraryList.innerHTML = DATA.itineraries
      .map(
        (it) => `
        <article class="editorial-row">
          <div class="editorial-row-head">
            <h4 class="editorial-title">${escapeHtml(it.title)}</h4>
            <span class="editorial-note">${escapeHtml(it.timing.split("·")[0].trim())}</span>
          </div>
          <ol class="route-steps">
            ${it.stops
              .map((st) => {
                let html = `${escapeHtml(st.text)}${inlineSpotLink(st.spotId)}${escapeHtml(st.after || "")}`;
                if (st.secondSpotId) html += `${inlineSpotLink(st.secondSpotId)}${escapeHtml(st.tail || "")}`;
                if (st.thirdSpotId) html += `${inlineSpotLink(st.thirdSpotId)}${escapeHtml(st.tail3 || "")}`;
                return `<li>${html}</li>`;
              })
              .join("")}
          </ol>
        </article>
      `
      )
      .join("");

    els.antiHypeList.innerHTML = DATA.antiHypeList
      .map(
        (item) => `
        <article class="editorial-row">
          <div class="editorial-row-head">
            <span class="avoid-strike">${escapeHtml(item.avoid)}</span>
            <span class="editorial-note">${escapeHtml(item.tag)}</span>
          </div>
          <p class="editorial-body">${escapeHtml(item.reason)}</p>
          <p class="swap-line">平替：${item.replaceIds.map(inlineSpotLink).join(" / ")} — ${escapeHtml(item.replaceNote)}</p>
        </article>
      `
      )
      .join("");

    els.tipsList.innerHTML = DATA.practicalTips
      .map(
        (tip) => `
        <article class="editorial-row">
          <h4 class="editorial-title" style="margin-bottom:6px;">${escapeHtml(tip.title)}</h4>
          <p class="editorial-body">${escapeHtml(tip.body)}</p>
        </article>
      `
      )
      .join("");
  }

  // =========================================================================
  // Slide-Up Detail Sheet
  // =========================================================================
  function openDetailSheet(spotId) {
    const spot = spotById.get(spotId);
    if (!spot) return;

    const isStar = spot.tier === "michelin-1";
    const isVisited = state.visitedIds.has(spot.id);
    const badgeCls = isStar ? "spot-tag spot-tag-star" : "spot-tag spot-tag-muted";

    els.detailBody.innerHTML = `
      <div class="detail-head">
        <div>
          <h2 class="detail-title" id="detailTitle">${escapeHtml(spot.name)}</h2>
          <p class="detail-sub">${escapeHtml(spot.cantoneseName)} · ${escapeHtml(spot.district)} · ${escapeHtml(spot.category)}</p>
        </div>
        <span class="${badgeCls}">${escapeHtml(spot.badgeLabel)}</span>
      </div>

      <dl class="detail-facts">
        <dt>人均消费</dt><dd>${escapeHtml(spot.priceRange)}（${escapeHtml(spot.payment)}）</dd>
        <dt>红磡出发</dt><dd>约 ${spot.travelMinutes} 分钟 · ${escapeHtml(spot.mtrFromHungHom)}</dd>
        <dt>营业时间</dt><dd>${escapeHtml(spot.hours)}</dd>
        <dt>核验地址</dt>
        <dd class="addr-inline">
          <span>${escapeHtml(spot.address)}</span>
          <button type="button" class="text-btn" id="copyAddrBtn">复制</button>
        </dd>
      </dl>

      <div class="detail-section">
        <h3>必点招牌</h3>
        <ul class="detail-dishes">
          ${spot.mustOrder
            .map((d) => `<li><strong>${escapeHtml(d.name)}</strong>：<span>${escapeHtml(d.note)}</span></li>`)
            .join("")}
        </ul>
      </div>

      <div class="detail-section">
        <h3>口碑核验</h3>
        <p class="detail-text">${escapeHtml(spot.reputationProof)}</p>
      </div>

      <div class="detail-section">
        <h3>错峰与点单</h3>
        <p class="detail-text">${escapeHtml(spot.insiderTip)} ${escapeHtml(spot.cantoneseTip)}</p>
      </div>

      <div class="detail-actions">
        <a class="btn btn-accent" href="${googleMapsUrl(spot)}" target="_blank" rel="noopener noreferrer">Google导航</a>
        <a class="btn" href="${amapUrl(spot)}" target="_blank" rel="noopener noreferrer">高德地图</a>
        <button type="button" class="btn" id="sheetLocateBtn">地图定位</button>
      </div>

      <div class="detail-secondary">
        <button type="button" class="btn ${isVisited ? "btn-ink" : ""}" id="sheetVisitedBtn">
          ${isVisited ? "已打卡（点击取消）" : "标记已打卡"}
        </button>
        <button type="button" class="btn" id="sheetCloseBottomBtn">返回</button>
      </div>
    `;

    els.detailBackdrop.hidden = false;
    els.detailSheet.hidden = false;

    document.getElementById("copyAddrBtn").addEventListener("click", () => {
      copyText(`${spot.name} ${spot.address}`, "已复制地址");
    });

    document.getElementById("sheetLocateBtn").addEventListener("click", () => {
      closeDetailSheet();
      focusPinOnMap(spot.id, true);
    });

    document.getElementById("sheetVisitedBtn").addEventListener("click", () => {
      if (state.visitedIds.has(spot.id)) {
        state.visitedIds.delete(spot.id);
        showToast("已取消打卡");
      } else {
        state.visitedIds.add(spot.id);
        showToast("已标记打卡");
      }
      saveVisited();
      renderList();
      openDetailSheet(spot.id);
    });

    document.getElementById("sheetCloseBottomBtn").addEventListener("click", closeDetailSheet);
  }

  function closeDetailSheet() {
    els.detailBackdrop.hidden = true;
    els.detailSheet.hidden = true;
  }

  // =========================================================================
  // View Switching & WeChat Copy
  // =========================================================================
  function switchView(next) {
    state.view = next;
    els.viewOverview.hidden = next !== "overview";
    els.viewGuide.hidden = next !== "guide";

    els.tabLinks.forEach((btn) => {
      const active = btn.dataset.view === next;
      btn.classList.toggle("active", active);
      if (active) btn.setAttribute("aria-current", "page");
      else btn.removeAttribute("aria-current");
    });

    if (next === "overview" && map) {
      setTimeout(() => map.invalidateSize(), 80);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }

  function syncFilterChips() {
    els.filterRail.querySelectorAll(".chip").forEach((c) => {
      c.classList.toggle("active", c.dataset.filter === state.filter);
    });
  }

  function buildWechatText() {
    const fmt = (r) => `· ${r.name}（${r.district}｜${r.priceRange}）必点：${r.mustOrder[0].name}｜${r.address}`;
    const stars = DATA.restaurants.filter((r) => r.tier === "michelin-1");
    const famous = DATA.restaurants.filter((r) => r.tier === "famous");
    const locals = DATA.restaurants.filter((r) => r.tier !== "michelin-1" && r.tier !== "famous");
    return [
      "【香港美食地图与真口碑食单（29家｜12月4日前）】",
      "在线地图：https://hk-food-guide.xiaosang.cc/",
      "",
      "★ 平价米其林一星（5家）",
      ...stars.map(fmt),
      "",
      "◆ 全港知名名店（8家）",
      ...famous.map(fmt),
      "",
      "● 本地私藏真口碑（16家）",
      ...locals.map(fmt),
      "",
      "公休提醒：九记/胜香园/兰芳园/再兴周日休 · 强记周一休 · 澳牛周四休 · 佳佳已迁白加士街113-115号。"
    ].join("\n");
  }

  // =========================================================================
  // Event Binding
  // =========================================================================
  function bindEvents() {
    els.tabLinks.forEach((btn) => {
      btn.addEventListener("click", () => switchView(btn.dataset.view));
    });

    els.filterRail.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      state.filter = chip.dataset.filter;
      syncFilterChips();
      clearPinFocus();
      renderList();
      renderMapMarkers(true);
    });

    els.drawerToggleBtn.addEventListener("click", () => {
      if (state.selectedId) {
        clearPinFocus();
        return;
      }
      setDrawerExpanded(!state.drawerExpanded);
    });

    els.expandDrawerLink.addEventListener("click", () => {
      setDrawerExpanded(!state.drawerExpanded);
    });

    els.btnRecenter.addEventListener("click", () => {
      if (!map) return;
      clearPinFocus();
      setDrawerExpanded(false);
      map.flyTo([DATA.base.lat, DATA.base.lng], 14, { duration: 0.45 });
    });

    els.btnFitAll.addEventListener("click", () => {
      if (!map) return;
      clearPinFocus();
      setDrawerExpanded(false);
      renderMapMarkers(true);
    });

    els.spotList.addEventListener("click", (e) => {
      const item = e.target.closest("[data-spot-id]");
      if (item) openDetailSheet(item.dataset.spotId);
    });

    document.addEventListener("click", (e) => {
      const link = e.target.closest("[data-spot]");
      if (link) openDetailSheet(link.dataset.spot);
    });

    [els.copyWechatBtn, els.copyWechatGuideBtn].forEach((btn) => {
      if (btn) btn.addEventListener("click", () => copyText(buildWechatText(), "已复制微信食单"));
    });

    els.detailCloseBtn.addEventListener("click", closeDetailSheet);
    els.detailBackdrop.addEventListener("click", closeDetailSheet);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !els.detailSheet.hidden) closeDetailSheet();
    });
  }

  // =========================================================================
  // Init
  // =========================================================================
  function init() {
    loadVisited();
    renderList();
    renderGuide();
    initMap();
    bindEvents();
  }

  init();
})();
