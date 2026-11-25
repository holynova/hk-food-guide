(() => {
  const DATA = window.HK_FOOD_DATA;
  const STORAGE_KEY = "hk_food_visited_v2";

  const state = {
    view: "overview",
    filter: "all",
    sort: "recommended",
    selectedId: null,
    mapExpanded: false,
    visitedIds: new Set()
  };

  let map = null;
  let markerLayer = null;
  let toastTimer = null;

  const spotById = new Map(DATA.restaurants.map((r) => [r.id, r]));

  const els = {
    headerMeta: document.getElementById("headerMeta"),
    segBtns: document.querySelectorAll(".u-tab"),
    copyWechatBtn: document.getElementById("copyWechatBtn"),
    views: {
      overview: document.getElementById("view-overview"),
      guide: document.getElementById("view-guide")
    },
    mapFrame: document.getElementById("mapFrame"),
    btnRecenter: document.getElementById("btnRecenter"),
    btnFitAll: document.getElementById("btnFitAll"),
    btnExpandMap: document.getElementById("btnExpandMap"),
    mapOfflineNotice: document.getElementById("mapOfflineNotice"),
    mapPinSheet: document.getElementById("mapPinSheet"),
    mapPinInfo: document.getElementById("mapPinInfo"),
    mapPinActions: document.getElementById("mapPinActions"),
    filterRail: document.getElementById("filterRail"),
    listStatus: document.getElementById("listStatus"),
    sortSelect: document.getElementById("sortSelect"),
    spotList: document.getElementById("spotList"),
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

  function starIcon(size = 11) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  }

  function matchesFilter(spot, filter) {
    if (filter === "all") return true;
    if (filter === "michelin-1") return spot.tier === "michelin-1";
    if (filter === "famous") return spot.tier === "famous";
    if (filter === "local-picks") return spot.tier !== "michelin-1" && spot.tier !== "famous";
    if (filter === "kowloon-all") return spot.zone === "kowloon" || spot.zone === "hung-hom";
    if (filter === "hung-hom" || filter === "kowloon" || filter === "island") {
      return spot.zone === filter;
    }
    return spot.tags.includes(filter);
  }

  function getVisibleSpots() {
    let list = DATA.restaurants.filter((s) => matchesFilter(s, state.filter));
    if (state.sort === "time") {
      list = [...list].sort((a, b) => a.travelMinutes - b.travelMinutes);
    } else if (state.sort === "price-asc") {
      list = [...list].sort((a, b) => a.avgPrice - b.avgPrice);
    }
    return list;
  }

  function updateHeaderCountdown() {
    const now = new Date();
    const deadline = new Date("2026-12-04T00:00:00+08:00");
    const days = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
    els.headerMeta.textContent =
      days > 0 && days <= 30
        ? `全港 ${DATA.restaurants.length} 家 · 红磡出发参考 · 距12月4日 ${days} 天`
        : `全港 ${DATA.restaurants.length} 家 · 红磡出发参考 · 12月4日前`;
  }

  // =========================================================================
  // Map (Overview Hero)
  // =========================================================================
  function initMap() {
    if (typeof L === "undefined") {
      els.mapOfflineNotice.hidden = false;
      return;
    }

    map = L.map("hkMap", {
      center: [22.299, 114.173],
      zoom: 13,
      zoomControl: false,
      attributionControl: false
    });

    // Esri World Street Map: free, zero API key, crisp bilingual HK MTR & street labels
    const esriStreet = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 19, attribution: "Esri" }
    );

    let errors = 0;
    esriStreet.on("tileerror", () => {
      errors += 1;
      if (errors === 4) {
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19 }).addTo(map);
        els.mapOfflineNotice.hidden = false;
      }
    });
    esriStreet.addTo(map);

    // Hung Hom Base Pin
    const baseIcon = L.divIcon({
      className: "hk-base-wrap",
      html: `<div class="hk-base-marker"><span class="hk-base-dot"></span><span>红磡</span></div>`,
      iconSize: [58, 24],
      iconAnchor: [29, 12]
    });

    L.marker([DATA.base.lat, DATA.base.lng], { icon: baseIcon, zIndexOffset: 1000 })
      .addTo(map)
      .on("click", () => {
        clearMapSelection();
        showToast("红磡住宿据点：东铁线1站过海，步行可吃宵夜");
      });

    markerLayer = L.layerGroup().addTo(map);
    map.on("click", clearMapSelection);

    renderMapMarkers(true);
  }

  function makePinIcon(spot, indexNum, isSelected) {
    const isStar = spot.tier === "michelin-1";
    const isFamous = spot.tier === "famous";
    const cls = isStar ? "pin-star" : isFamous ? "pin-famous" : "pin-local";
    const inner = isStar ? starIcon(11) : String(indexNum);
    return L.divIcon({
      className: "hk-pin-wrap",
      html: `<div class="hk-pin ${cls} ${isSelected ? "pin-selected" : ""}"><span class="hk-pin-inner">${inner}</span></div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 27]
    });
  }

  function renderMapMarkers(fitBounds = false) {
    if (!markerLayer) return;
    markerLayer.clearLayers();

    const spots = getVisibleSpots();
    spots.forEach((spot, i) => {
      const isSelected = spot.id === state.selectedId;
      const m = L.marker([spot.lat, spot.lng], {
        icon: makePinIcon(spot, i + 1, isSelected),
        zIndexOffset: isSelected ? 900 : spot.tier === "michelin-1" ? 400 : 100
      });
      m.on("click", (e) => {
        L.DomEvent.stopPropagation(e);
        selectSpotOnMap(spot.id, false);
      });
      m.addTo(markerLayer);
    });

    if (fitBounds && map && spots.length > 0) {
      const pts = spots.map((s) => [s.lat, s.lng]);
      pts.push([DATA.base.lat, DATA.base.lng]);
      map.fitBounds(pts, { padding: [36, 36], maxZoom: 15 });
    }
  }

  function selectSpotOnMap(spotId, scrollToTop = true) {
    const spot = spotById.get(spotId);
    if (!spot) return;

    if (state.view !== "overview") {
      switchView("overview");
    }

    if (!matchesFilter(spot, state.filter)) {
      state.filter = "all";
      syncFilterPills();
      renderList();
    }

    state.selectedId = spotId;
    renderMapMarkers(false);

    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (map) {
      map.flyTo([spot.lat - 0.0022, spot.lng], 15, { duration: 0.45 });
    }

    els.mapPinInfo.innerHTML = `
      <div class="pin-sheet-head">
        <h3 class="pin-sheet-name">${escapeHtml(spot.name)}</h3>
        <span class="pin-sheet-price">${escapeHtml(spot.priceRange)}</span>
      </div>
      <p class="pin-sheet-meta">${escapeHtml(spot.badgeLabel)} · ${escapeHtml(spot.district)} · 红磡约 ${spot.travelMinutes} 分钟 · 必点：${escapeHtml(spot.mustOrder[0].name)}</p>
    `;

    els.mapPinActions.innerHTML = `
      <button type="button" class="btn-action btn-action-primary" id="pinDetailBtn">查看详情</button>
      <a class="btn-action btn-action-jade" href="${googleMapsUrl(spot)}" target="_blank" rel="noopener noreferrer">Google导航</a>
      <a class="btn-action" href="${amapUrl(spot)}" target="_blank" rel="noopener noreferrer">高德地图</a>
    `;

    els.mapPinSheet.hidden = false;
    document.getElementById("pinDetailBtn").addEventListener("click", () => openDetailSheet(spot.id));
  }

  function clearMapSelection() {
    if (!state.selectedId) return;
    state.selectedId = null;
    els.mapPinSheet.hidden = true;
    renderMapMarkers(false);
  }

  // =========================================================================
  // Distilled List Rendering
  // =========================================================================
  function renderList() {
    const spots = getVisibleSpots();
    els.listStatus.textContent = `显示 ${spots.length} 家 · 已打卡 ${state.visitedIds.size}/${DATA.restaurants.length}`;

    els.spotList.innerHTML = spots
      .map((spot, idx) => {
        const isStar = spot.tier === "michelin-1";
        const isFamous = spot.tier === "famous";
        const badgeCls = isStar
          ? "spot-badge-star"
          : isFamous
          ? "spot-badge-famous"
          : "spot-badge-local";
        const pinBtnCls = isStar ? "is-star" : isFamous ? "is-famous" : "";
        const isVisited = state.visitedIds.has(spot.id);
        const topDish = spot.mustOrder.map((d) => d.name).join(" / ");
        const closedNote = spot.closedDay ? ` · <span class="spot-closed">${escapeHtml(spot.closedDay)}</span>` : "";

        return `
          <li class="spot-row ${isVisited ? "is-visited" : ""}" data-spot-row="${spot.id}">
            <div class="spot-row-main">
              <div class="spot-row-top">
                <span class="spot-row-num">${String(idx + 1).padStart(2, "0")}</span>
                <h3 class="spot-row-name">${escapeHtml(spot.name)}</h3>
                <span class="spot-badge ${badgeCls}">${escapeHtml(spot.badgeLabel)}</span>
              </div>
              <p class="spot-row-meta">${escapeHtml(spot.district)} · ${escapeHtml(spot.category)} · 红磡约 ${spot.travelMinutes} 分钟${closedNote}${isVisited ? " · 已打卡" : ""}</p>
              <p class="spot-row-dish">必点：${escapeHtml(topDish)}</p>
            </div>
            <div class="spot-row-side">
              <span class="spot-price">${escapeHtml(spot.priceRange)}</span>
              <button type="button" class="row-pin-btn ${pinBtnCls}" data-locate-id="${spot.id}" aria-label="在地图上定位${escapeHtml(spot.name)}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4.5 8-11.8A8 8 0 0 0 12 2a8 8 0 0 0-8 8.2c0 7.3 8 11.8 8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
              </button>
            </div>
          </li>
        `;
      })
      .join("");
  }

  // =========================================================================
  // Concise Guide View
  // =========================================================================
  function inlineSpotLink(id) {
    const s = spotById.get(id);
    if (!s) return "";
    return `<button type="button" class="text-link" data-spot="${s.id}">${escapeHtml(s.name)}</button>`;
  }

  function renderGuide() {
    els.itineraryList.innerHTML = DATA.itineraries
      .map(
        (it) => `
        <div class="editorial-row">
          <div class="editorial-row-head">
            <h3 class="editorial-title">${escapeHtml(it.title)}</h3>
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
        </div>
      `
      )
      .join("");

    els.antiHypeList.innerHTML = DATA.antiHypeList
      .map(
        (item) => `
        <div class="editorial-row">
          <div class="editorial-row-head">
            <span class="avoid-strike">${escapeHtml(item.avoid)}</span>
            <span class="avoid-tag">${escapeHtml(item.tag)}</span>
          </div>
          <p class="editorial-body">${escapeHtml(item.reason)}</p>
          <p class="swap-line">换吃：${item.replaceIds.map(inlineSpotLink).join(" / ")} — ${escapeHtml(item.replaceNote)}</p>
        </div>
      `
      )
      .join("");

    els.tipsList.innerHTML = DATA.practicalTips
      .map(
        (tip) => `
        <div class="editorial-row">
          <h3 class="editorial-title" style="margin-bottom:4px;">${escapeHtml(tip.title)}</h3>
          <p class="editorial-body">${escapeHtml(tip.body)}</p>
        </div>
      `
      )
      .join("");
  }

  // =========================================================================
  // Detail Sheet (Progressive Disclosure)
  // =========================================================================
  function openDetailSheet(spotId) {
    const spot = spotById.get(spotId);
    if (!spot) return;

    const isStar = spot.tier === "michelin-1";
    const isFamous = spot.tier === "famous";
    const detailBadgeCls = isStar
      ? "spot-badge-star"
      : isFamous
      ? "spot-badge-famous"
      : "spot-badge-local";
    const isVisited = state.visitedIds.has(spot.id);

    els.detailBody.innerHTML = `
      <div class="detail-head">
        <div>
          <h2 class="detail-title" id="detailTitle">${escapeHtml(spot.name)}</h2>
          <p class="detail-sub">${escapeHtml(spot.cantoneseName)} · ${escapeHtml(spot.district)} · ${escapeHtml(spot.category)}</p>
        </div>
        <span class="spot-badge ${detailBadgeCls}">${escapeHtml(spot.badgeLabel)}</span>
      </div>

      <dl class="detail-facts">
        <dt>人均消费</dt><dd>${escapeHtml(spot.priceRange)}（${escapeHtml(spot.payment)}）</dd>
        <dt>红磡出发</dt><dd>约 ${spot.travelMinutes} 分钟 · ${escapeHtml(spot.mtrFromHungHom)}</dd>
        <dt>营业时间</dt><dd>${escapeHtml(spot.hours)}</dd>
        <dt>核验地址</dt>
        <dd class="addr-inline">
          <span>${escapeHtml(spot.address)}</span>
          <button type="button" class="copy-mini" id="copyAddrBtn">复制</button>
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
        <a class="btn-action btn-action-jade" href="${googleMapsUrl(spot)}" target="_blank" rel="noopener noreferrer">Google导航</a>
        <a class="btn-action" href="${amapUrl(spot)}" target="_blank" rel="noopener noreferrer">高德地图</a>
        <button type="button" class="btn-action" id="sheetLocateBtn">地图定位</button>
      </div>

      <div class="detail-secondary-row">
        <button type="button" class="btn-action ${isVisited ? "btn-action-primary" : ""}" id="sheetVisitedBtn">
          ${isVisited ? "已打卡（点击取消）" : "标记为已打卡"}
        </button>
        <button type="button" class="btn-action" id="sheetCloseBottomBtn">返回列表</button>
      </div>
    `;

    els.detailBackdrop.hidden = false;
    els.detailSheet.hidden = false;
    document.body.style.overflow = "hidden";

    document.getElementById("copyAddrBtn").addEventListener("click", () => {
      copyText(`${spot.name} ${spot.address}`, "已复制地址");
    });

    document.getElementById("sheetLocateBtn").addEventListener("click", () => {
      closeDetailSheet();
      selectSpotOnMap(spot.id, true);
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
    document.body.style.overflow = "";
  }

  // =========================================================================
  // View Switching & Share Text
  // =========================================================================
  function switchView(next) {
    state.view = next;
    Object.entries(els.views).forEach(([key, el]) => {
      el.hidden = key !== next;
    });
    els.segBtns.forEach((btn) => {
      const active = btn.dataset.view === next;
      btn.classList.toggle("active", active);
      if (active) btn.setAttribute("aria-current", "page");
      else btn.removeAttribute("aria-current");
    });
    if (next === "overview" && map) {
      setTimeout(() => map.invalidateSize(), 60);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function syncFilterPills() {
    els.filterRail.querySelectorAll(".filter-pill").forEach((pill) => {
      pill.classList.toggle("active", pill.dataset.filter === state.filter);
    });
  }

  function buildWechatText() {
    const fmt = (r) => `· ${r.name}（${r.district}｜${r.priceRange}）必点：${r.mustOrder[0].name}｜${r.address}`;
    const stars = DATA.restaurants.filter((r) => r.tier === "michelin-1");
    const famous = DATA.restaurants.filter((r) => r.tier === "famous");
    const locals = DATA.restaurants.filter((r) => r.tier !== "michelin-1" && r.tier !== "famous");
    return [
      "【香港全港美食总览（29家｜红磡出发参考｜12月4日前）】",
      "",
      "★ 平价米其林一星（5家）",
      ...stars.map(fmt),
      "",
      "◆ 全港知名名店（8家 · 经典地标）",
      ...famous.map(fmt),
      "",
      "● 本地私藏真口碑（16家 · 红磡/九龙/港岛）",
      ...locals.map(fmt),
      "",
      "公休提醒：九记/胜香园/兰芳园/再兴周日休 · 强记周一休 · 澳牛周四休 · 佳佳已迁白加士街113-115号。"
    ].join("\n");
  }

  // =========================================================================
  // Event Binding
  // =========================================================================
  function bindEvents() {
    els.segBtns.forEach((btn) => {
      btn.addEventListener("click", () => switchView(btn.dataset.view));
    });

    els.copyWechatBtn.addEventListener("click", () => {
      copyText(buildWechatText(), "已复制微信精简食单");
    });

    els.filterRail.addEventListener("click", (e) => {
      const pill = e.target.closest(".filter-pill");
      if (!pill) return;
      state.filter = pill.dataset.filter;
      syncFilterPills();
      clearMapSelection();
      renderList();
      renderMapMarkers(true);
    });

    els.sortSelect.addEventListener("change", (e) => {
      state.sort = e.target.value;
      renderList();
      renderMapMarkers(false);
    });

    els.spotList.addEventListener("click", (e) => {
      const locBtn = e.target.closest("[data-locate-id]");
      if (locBtn) {
        e.stopPropagation();
        selectSpotOnMap(locBtn.dataset.locateId, true);
        return;
      }
      const row = e.target.closest("[data-spot-row]");
      if (row) openDetailSheet(row.dataset.spotRow);
    });

    document.addEventListener("click", (e) => {
      const spotLink = e.target.closest("[data-spot]");
      if (spotLink) openDetailSheet(spotLink.dataset.spot);
    });

    els.btnRecenter.addEventListener("click", () => {
      if (!map) return;
      clearMapSelection();
      map.flyTo([DATA.base.lat, DATA.base.lng], 15, { duration: 0.45 });
    });

    els.btnFitAll.addEventListener("click", () => {
      if (!map) return;
      clearMapSelection();
      renderMapMarkers(true);
    });

    els.btnExpandMap.addEventListener("click", () => {
      state.mapExpanded = !state.mapExpanded;
      els.mapFrame.classList.toggle("is-expanded", state.mapExpanded);
      els.btnExpandMap.classList.toggle("active", state.mapExpanded);
      els.btnExpandMap.textContent = state.mapExpanded ? "收起" : "大图";
      setTimeout(() => {
        if (map) map.invalidateSize();
      }, 320);
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
    updateHeaderCountdown();
    renderList();
    renderGuide();
    initMap();
    bindEvents();
  }

  init();
})();
