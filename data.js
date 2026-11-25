// 红磡出发 · 香港真口碑美食数据（核验时间：2025–2026）
// 所有地址、营业时间、搬迁信息与米其林星级均经过二次核实，剔除网红营销与软文店。

window.HK_FOOD_DATA = {
  base: {
    name: "红磡住宿据点",
    subtitle: "港铁红磡站 / 黄埔核心区",
    lat: 22.3029,
    lng: 114.1816,
    deadlineDate: "2026-12-04"
  },

  restaurants: [
    // =========================================================================
    // 1. 平价米其林一星（5家）
    // =========================================================================
    {
      id: "yat-lok",
      name: "一乐烧鹅",
      cantoneseName: "一樂燒鵝",
      enName: "Yat Lok Restaurant",
      district: "中环",
      zone: "island",
      tier: "michelin-1",
      badgeLabel: "米其林一星",
      category: "港式烧味",
      priceRange: "HK$75–130",
      avgPrice: 95,
      lat: 22.2827,
      lng: 114.1555,
      address: "中环士丹利街34-38号地铺",
      mtrFromHungHom: "东铁线红磡→金钟转港岛线中环D2口，步行5分钟",
      travelMinutes: 22,
      hours: "10:00 – 20:30（每天营业）",
      closedDay: "",
      payment: "现金 / 八达通为主",
      tags: ["solo-friendly", "michelin-1"],
      mustOrder: [
        { name: "脆皮烧鹅濑粉", note: "鹅皮极酥脆，汤粉吸饱炭烤鹅油香，配酸梅酱解腻。" },
        { name: "烧鹅脾饭（加例汤）", note: "预算够直接冲鹅腿，早到才有货。" }
      ],
      reputationProof: "连续多年稳守米其林一星，全港门槛最低的摘星餐厅之一。店里一半是中环本地上班族快吃午饭，靠几十年的明炉炭烧真功夫，而非营销包装。",
      insiderTip: "店面极小且几乎必搭台（拼桌），属于“吃完就走”的节奏。避开12:15–13:45中环白领午高峰，10:30–11:30或14:30后最舒服。",
      cantoneseTip: "点单说「一碗烧鹅濑，多鹅汁」，想吃腿直接讲「转鹅脾」。"
    },
    {
      id: "kams-roast-goose",
      name: "甘牌烧鹅",
      cantoneseName: "甘牌燒鵝",
      enName: "Kam's Roast Goose",
      district: "湾仔",
      zone: "island",
      tier: "michelin-1",
      badgeLabel: "米其林一星",
      category: "港式烧味",
      priceRange: "HK$85–180",
      avgPrice: 120,
      lat: 22.2775,
      lng: 114.1753,
      address: "湾仔轩尼诗道226号宝华商业中心地铺",
      mtrFromHungHom: "东铁线红磡→会展站A3口（仅1站过海），步行8分钟",
      travelMinutes: 16,
      hours: "11:30 – 21:30（每天营业）",
      closedDay: "",
      payment: "现金 / 八达通 / 信用卡",
      tags: ["solo-friendly", "takeaway-fast", "michelin-1"],
      mustOrder: [
        { name: "甘牌烧鹅饭 / 太子捞面", note: "镛记第三代传人出品，皮脆肉嫩、油脂甘香且品控极稳。" },
        { name: "肥燶叉烧 & 皮蛋酸姜", note: "带微焦边半肥瘦叉烧口碑不输烧鹅，酸姜解腻一绝。" }
      ],
      reputationProof: "开业数月摘星并连年蝉联米其林一星。虽然游客也会排，但对比很多名气大于实力的老牌酒楼，甘牌出品始终在线，且红磡东铁线一站过海极近。",
      insiderTip: "最强省时秘诀：门口外卖队往往比堂食快一半以上！不想等1小时直接买斩料外卖带回红磡酒店，或者11:10开门前到排头轮。",
      cantoneseTip: "外卖单人可直接叫「外卖一盒烧鹅叉烧双拼饭，汁另上」。"
    },
    {
      id: "yat-tung-heen",
      name: "逸东轩",
      cantoneseName: "逸東軒",
      enName: "Yat Tung Heen (Eaton HK)",
      district: "佐敦",
      zone: "kowloon",
      tier: "michelin-1",
      badgeLabel: "米其林一星",
      category: "粤菜 · 午市点心",
      priceRange: "HK$180–280 (午市)",
      avgPrice: 220,
      lat: 22.3078,
      lng: 114.1715,
      address: "佐敦弥敦道380号香港逸东酒店B2层",
      mtrFromHungHom: "红磡打车8分钟 / 屯马线至柯士甸站步行10分钟",
      travelMinutes: 10,
      hours: "午市 11:00 – 15:00 · 晚市 18:00 – 22:30",
      closedDay: "",
      payment: "信用卡 / 电子支付（加一服务费+茶位）",
      tags: ["booking-required", "michelin-1"],
      mustOrder: [
        { name: "午市星级点心（虾饺/香麻叉烧酥/脆皮流沙包）", note: "平日午市点心性价比全港一星数一数二，环境优雅。" },
        { name: "明炉蜜汁叉烧", note: "厚切焦香，出差请客或犒劳自己都极有面子。" }
      ],
      reputationProof: "2017–2026连续多年蝉联米其林一星，也是离红磡最近的一星中菜！在添好运早已失星工业化的今天，逸东轩平日午市点心是真·高性价比星级饮茶天花板。",
      insiderTip: "强烈建议提前在官网或 Google Maps 订平日午市位（11:00–14:30），walk-in 极难有座；晚市小炒较贵，预算友好请锁定午市点心。",
      cantoneseTip: "订位备注「饮茶点心」，选普洱或香片最百搭。"
    },
    {
      id: "ho-hung-kee",
      name: "何洪记",
      cantoneseName: "何洪記（希慎廣場）",
      enName: "Ho Hung Kee Congee & Noodle",
      district: "铜锣湾",
      zone: "island",
      tier: "michelin-1",
      badgeLabel: "米其林一星",
      category: "粥面 · 云吞",
      priceRange: "HK$110–190",
      avgPrice: 145,
      lat: 22.2800,
      lng: 114.1838,
      address: "铜锣湾轩尼诗道500号希慎广场12楼1204-1205号铺",
      mtrFromHungHom: "东铁线红磡→金钟转港岛线铜锣湾F2口直达商场",
      travelMinutes: 20,
      hours: "11:30 – 22:00（每天营业）",
      closedDay: "",
      payment: "信用卡 / 八达通 / 电子支付（加一服务费）",
      tags: ["solo-friendly", "michelin-1"],
      mustOrder: [
        { name: "正斗鲜虾云吞面", note: "1946年老字号，汤底有醇厚大地鱼鲜香，生面爽弹。" },
        { name: "干炒牛河 & 生滚及第粥", note: "牛河镬气极足、油润不腻，单人也能舒舒服服吃完。" }
      ],
      reputationProof: "连年稳守米其林一星。和街边拥挤小店不同，希慎广场店环境宽敞安静不催客，非常适合出差走累了、或带电脑/见同事时吃一顿体面的星级港式简餐。",
      insiderTip: "饭点需在门口取号，但翻台快。可先在希慎广场楼下逛逛或提前在微信/App留意排队进度。",
      cantoneseTip: "干炒牛河分量较大，一人食建议「细蓉（小碗云吞面）+ 炸两」或单点牛河。"
    },
    {
      id: "pangs-kitchen",
      name: "彭庆记",
      cantoneseName: "彭慶記",
      enName: "Pang's Kitchen",
      district: "跑马地",
      zone: "island",
      tier: "michelin-1",
      badgeLabel: "米其林一星",
      category: "功夫粤菜",
      priceRange: "HK$220–350",
      avgPrice: 270,
      lat: 22.2694,
      lng: 114.1844,
      address: "跑马地奕荫街25号地下",
      mtrFromHungHom: "红磡海底隧道口坐巴士过海 / 打车约15分钟",
      travelMinutes: 18,
      hours: "12:00 – 15:00 · 18:00 – 22:00",
      closedDay: "",
      payment: "现金 / 信用卡（加一服务费）",
      tags: ["booking-required", "michelin-1"],
      mustOrder: [
        { name: "钵仔焗鱼肠", note: "极考火候的怀旧功夫菜，蛋香扑鼻完全不腥。" },
        { name: "士多啤梨骨 & 家乡蒸肉饼", note: "地道老港家常镬气，没有浮夸摆盘全靠味道取胜。" }
      ],
      reputationProof: "藏在跑马地住宅区里的低调一星，几乎零网红营销，靠街坊富豪与老饕口碑连年摘星。若出差有2–4位同事聚餐，这里比网红粤菜馆强出不止一个档次。",
      insiderTip: "店铺很小只有十来张桌，务必提前几天致电订位（+852 2838 5462），临时去大概率没位置。",
      cantoneseTip: "点菜可直接问阿姐「今日有冇靓老火例汤」，常有惊喜。"
    },

    // =========================================================================
    // 2. 红磡 / 黄埔 / 土瓜湾 · 住宿步行/1站饭堂（5家）
    // =========================================================================
    {
      id: "mei-mei-jia",
      name: "美味佳",
      cantoneseName: "美味佳（紅磡宵夜神店）",
      enName: "Mei Mei Jia",
      district: "红磡",
      zone: "hung-hom",
      tier: "local",
      badgeLabel: "红磡地标",
      category: "宵夜 · 串烧",
      priceRange: "HK$40–75",
      avgPrice: 55,
      lat: 22.3061,
      lng: 114.1837,
      address: "红磡宝其利街2号地铺（宝石戏院旁）",
      mtrFromHungHom: "红磡站 / 酒店步行约6–8分钟直达",
      travelMinutes: 7,
      hours: "周日至四 11:00 – 02:00 · 周五六至 03:30",
      closedDay: "",
      payment: "现金 / 八达通",
      tags: ["late-night", "solo-friendly", "takeaway-fast"],
      mustOrder: [
        { name: "蛋炒肠粉", note: "红磡隐藏必点！肠粉裹满鸡蛋煎炒到外脆内糯，浇甜酱辣酱一绝。" },
        { name: "蜜糖炭烧鸡全翼 & 猪颈肉串", note: "即点即烤刷蜜糖，香气飘半条街。" }
      ],
      reputationProof: "红磡街坊与香港理工大学学生几十年认证的宵夜霸主，几乎没有内地旅游软文，纯靠本地人每晚排长龙。价格极良心，加班回酒店买一袋幸福感拉满。",
      insiderTip: "主打立食/外卖，晚上22:00后排队最热闹但出品快。买完提回酒店吹空调配维他柠檬茶或啤酒最爽。",
      cantoneseTip: "点肠粉记得讲「要加甜酱、麻酱、少辣」。"
    },
    {
      id: "meng-mian",
      name: "蒙面",
      cantoneseName: "蒙麵（車仔麵）",
      enName: "Meng Mian Cart Noodles",
      district: "红磡",
      zone: "hung-hom",
      tier: "local",
      badgeLabel: "本地排队王",
      category: "个性车仔面",
      priceRange: "HK$65–100",
      avgPrice: 80,
      lat: 22.3078,
      lng: 114.1860,
      address: "红磡差馆里9-15号协辉大厦地下1号铺",
      mtrFromHungHom: "红磡步行约8分钟 / 黄埔站B口步行5分钟",
      travelMinutes: 8,
      hours: "13:00 – 21:00（每天营业）",
      closedDay: "",
      payment: "现金 / 八达通 / PayMe",
      tags: ["solo-friendly"],
      mustOrder: [
        { name: "即烧蜜汁叉烧串", note: "全场灵魂！现烤半肥瘦微焦裹蜜汁，坐下立刻先点一串。" },
        { name: "特浓番茄薯仔汤车仔面 + 花甲/辣鱿鱼", note: "真番茄慢熬的浓汤配无沙花甲，比普通味精汤车仔面高出两级。" }
      ],
      reputationProof: "OpenRice与香港本地食评圈公认的红磡实力派小店，价格虽比街头老车仔面略贵十几块，但配料新鲜、烧叉烧串水准极高，回头客全是街坊和周边上班族。",
      insiderTip: "叉烧串现点现烤需等10–15分钟，一定要进店第一时间下单，不要等吃完面再加。",
      cantoneseTip: "面底推荐选「银针粉」或「幼面」，最挂浓番茄汤汁。"
    },
    {
      id: "whampoa-kitchen",
      name: "黄埔小厨",
      cantoneseName: "黃埔小廚",
      enName: "Whampoa Kitchen",
      district: "红磡/黄埔",
      zone: "hung-hom",
      tier: "local",
      badgeLabel: "街坊私藏粤菜",
      category: "怀旧小炒",
      priceRange: "HK$150–260",
      avgPrice: 195,
      lat: 22.3115,
      lng: 114.1873,
      address: "红磡青州街3号地下E号铺（原德民街迁至现址）",
      mtrFromHungHom: "红磡/黄埔步行约10分钟",
      travelMinutes: 10,
      hours: "11:30 – 15:00 · 17:30 – 22:30",
      closedDay: "",
      payment: "现金 / 八达通 / 信用卡",
      tags: ["booking-required"],
      mustOrder: [
        { name: "怀旧脆皮芝麻鸡", note: "铺满白芝麻炸到皮脆肉嫩，极考老师傅油温手艺。" },
        { name: "豉油皇鹅肠 & 避风塘炒蟹/濑尿虾", note: "地道老派粤式镬气小炒，完全不敷衍。" }
      ],
      reputationProof: "零旅游团、零小红书打卡滤镜的红磡社区老饕饭堂。已从旧址德民街迁至青州街新铺，坚持做很多酒楼嫌麻烦不愿做的怀旧手工粤菜。",
      insiderTip: "适合2人以上晚餐小聚；招牌芝麻鸡建议提前致电确认留货，免得晚市沽清。",
      cantoneseTip: "和同事去可以直接让老板推荐当日时令海鲜小炒。"
    },
    {
      id: "chor-land",
      name: "楚撚记大排档",
      cantoneseName: "楚撚記大排檔（土瓜灣）",
      enName: "Chor Land Cookfood Stall",
      district: "土瓜湾",
      zone: "hung-hom",
      tier: "local",
      badgeLabel: "高口碑大排档",
      category: "港式大排档",
      priceRange: "HK$140–220",
      avgPrice: 175,
      lat: 22.3193,
      lng: 114.1882,
      address: "土瓜湾马头围道187号地下（近上乡道）",
      mtrFromHungHom: "屯马线红磡→土瓜湾站（仅1站），D2口步行4分钟",
      travelMinutes: 11,
      hours: "17:30 – 00:00（晚市及宵夜）",
      closedDay: "",
      payment: "现金 / 信用卡 / 电子支付",
      tags: ["late-night"],
      mustOrder: [
        { name: "菠萝拔丝咕噜肉", note: "外层薄脆挂真拔丝糖浆，趁热夹起能拉丝，酸甜酥脆。" },
        { name: "猪油捞饭 & 椒盐九肚鱼", note: "经典老港战斗碗配啤酒，锅气十足。" }
      ],
      reputationProof: "香港本地年轻人与打工仔聚餐公认的高质大排档，明码实价绝不宰客，完胜游客区庙街良莠不齐的海鲜大排档。离红磡仅1站地铁。",
      insiderTip: "周末晚市19:00后必排队，建议提前网上/电话订座，或17:45开门直接冲第一轮。",
      cantoneseTip: "点啤酒直接叫「一支大蓝妹（Blue Girl）配战斗碗」。"
    },
    {
      id: "shanghai-food-house",
      name: "上海美食之家",
      cantoneseName: "上海美食之家",
      enName: "Shanghai Food House",
      district: "土瓜湾",
      zone: "hung-hom",
      tier: "local",
      badgeLabel: "街坊晨早神店",
      category: "粢饭 · 点心",
      priceRange: "HK$35–60",
      avgPrice: 45,
      lat: 22.3198,
      lng: 114.1892,
      address: "土瓜湾炮仗街152号地下",
      mtrFromHungHom: "屯马线红磡→土瓜湾站A口步行5分钟",
      travelMinutes: 13,
      hours: "07:00 – 19:00（粢饭卖完即止）",
      closedDay: "",
      payment: "现金 / 八达通",
      tags: ["solo-friendly", "takeaway-fast"],
      mustOrder: [
        { name: "即包毛巾爆馅咸粢饭", note: "传统毛巾现压，里头超脆油条+肉松+榨菜，热辣辣扎实顶饱。" },
        { name: "现煎鲜肉锅贴 & 担担面", note: "底脆汁多，是香港老区难得的平价匠心手艺。" }
      ],
      reputationProof: "土瓜湾旧区纯本地人排队名店，香港饮食节目多次实探推荐，完全没有内地社媒软文。清晨开门前阿叔阿姨就在门口等头炉粢饭。",
      insiderTip: "非常适合出差顺路买一份当早餐或简单午饭，外卖带走最省时。",
      cantoneseTip: "想吃甜口可点甜粢饭，但本地人九成点「咸粢饭加脆油炸鬼」。"
    },

    // =========================================================================
    // 3. 九龙精华线：佐敦 · 油麻地 · 太子 · 深水埗（7家）
    // =========================================================================
    {
      id: "mak-man-kee",
      name: "麦文记面家",
      cantoneseName: "麥文記麵家",
      enName: "Mak Man Kee Noodle Shop",
      district: "佐敦",
      zone: "kowloon",
      tier: "bib",
      badgeLabel: "米其林必比登",
      category: "云吞面",
      priceRange: "HK$50–85",
      avgPrice: 65,
      lat: 22.3049,
      lng: 114.1704,
      address: "佐敦白加士街51号地铺（佐敦站C2口2分钟）",
      mtrFromHungHom: "红磡打车7分钟 / 步行16分钟",
      travelMinutes: 9,
      hours: "12:00 – 00:30（宵夜好去处）",
      closedDay: "",
      payment: "现金 / 八达通",
      tags: ["solo-friendly", "late-night"],
      mustOrder: [
        { name: "全虾鲜虾云吞面", note: "坚持纯原只虎虾不掺肥肉，爽脆弹牙，汤底清甜无味精感。" },
        { name: "南乳猪手捞面", note: "猪手焖到软糯入味，拌全蛋生面非常过瘾。" }
      ],
      reputationProof: "就在网红“澳洲牛奶公司”隔壁却完全靠硬实力稳坐多年米其林必比登。深夜11点依然满座本地食客，是佐敦最值得吃的正宗云吞面之一。",
      insiderTip: "和同条街刚搬完新铺的「佳佳甜品」相距不到100米，两家打包成一顿晚饭+宵夜最完美！",
      cantoneseTip: "云吞面端上来先喝两口头汤、立刻吃面，泡软就失了全蛋面的爽脆。"
    },
    {
      id: "kai-kai-dessert",
      name: "佳佳甜品",
      cantoneseName: "佳佳甜品（2025新總店）",
      enName: "Kai Kai Dessert",
      district: "佐敦",
      zone: "kowloon",
      tier: "bib",
      badgeLabel: "米其林必比登",
      category: "中式热糖水",
      priceRange: "HK$30–48",
      avgPrice: 38,
      lat: 22.3059,
      lng: 114.1705,
      address: "佐敦白加士街113-115号地铺（注：宁波街旧址2025年9月已迁至此）",
      mtrFromHungHom: "红磡打车7分钟 / 麦文记步行1分钟",
      travelMinutes: 9,
      hours: "12:00 – 01:00（每天营业）",
      closedDay: "",
      payment: "现金 / 八达通 / 电子支付",
      tags: ["solo-friendly", "late-night", "seasonal"],
      mustOrder: [
        { name: "浓滑黑芝麻糊（拼核桃露）", note: "石磨般幼滑无渣，11月底凉夜喝一碗热糊太治愈。" },
        { name: "姜汁番薯糖水 / 宁夏红枣炖桃胶", note: "秋冬驱寒首选，姜味辛香扎实不过甜。" }
      ],
      reputationProof: "周润发私藏、连续多年米其林必比登。虽知名度高但价格依旧三十多港币、料极实在。特别提醒：宁波街老铺已结业，别看旧攻略跑空，认准白加士街新大铺！",
      insiderTip: "搬新店后座位比以前宽敞不少，翻台神速，排队看着长其实通常10分钟内就能坐下。",
      cantoneseTip: "芝麻糊和核桃露可以免费要求「双拼」，一碗喝两种招牌。"
    },
    {
      id: "four-seasons-claypot",
      name: "四季煲仔饭",
      cantoneseName: "四季煲仔飯",
      enName: "Four Seasons Claypot Rice",
      district: "油麻地",
      zone: "kowloon",
      tier: "local",
      badgeLabel: "炭炉老字号",
      category: "秋冬煲仔饭",
      priceRange: "HK$70–110",
      avgPrice: 90,
      lat: 22.3106,
      lng: 114.1705,
      address: "油麻地鸦打街46-58号地铺（油麻地站C口步行3分钟）",
      mtrFromHungHom: "黄埔站坐观塘线直达油麻地（仅3站）",
      travelMinutes: 14,
      hours: "17:30 – 23:00（晚市限定）",
      closedDay: "",
      payment: "只收现金（务必带够港币现金！）",
      tags: ["seasonal", "solo-friendly"],
      mustOrder: [
        { name: "白鳝排骨煲仔饭 / 窝蛋牛肉煲仔饭", note: "古法炭炉现点现煲，淋甜豉油后掀盖滋滋作响，底焦香脆。" },
        { name: "鸭蛋酥炸蚝饼", note: "外酥里嫩、生蚝粒大鲜甜，配煲仔饭绝配。" }
      ],
      reputationProof: "对比隔壁庙街过度扩张、品控起伏大的某兴记，本地老饕普遍更认可四季的炭火功架。11月底香港降温，正是吃煲仔饭的黄金窗口期。",
      insiderTip: "只收现金！建议17:15开门前到排第一批，煲仔饭现煲需等20分钟，千万别催单以免破坏饭焦火候。",
      cantoneseTip: "甜豉油淋一圈后盖回盖子焗30秒，饭焦会自动松脱更脆香。"
    },
    {
      id: "wing-hap-lung",
      name: "永合隆饭店",
      cantoneseName: "永合隆飯店",
      enName: "Wing Hap Lung Restaurant",
      district: "太子",
      zone: "kowloon",
      tier: "local",
      badgeLabel: "60年炭烧传奇",
      category: "炭烧乳猪烧肉",
      priceRange: "HK$65–120",
      avgPrice: 88,
      lat: 22.3256,
      lng: 114.1678,
      address: "太子砵兰街392号地铺（太子站C2/D口步行3分钟）",
      mtrFromHungHom: "黄埔站坐观塘线直达太子站（无需换乘）",
      travelMinutes: 18,
      hours: "11:00 – 22:00（炭烧烧肉售完即止）",
      closedDay: "",
      payment: "现金 / 八达通",
      tags: ["solo-friendly"],
      mustOrder: [
        { name: "古法炭烧乳猪饭 / 脆皮烧肉", note: "全港屈指可数仍用真炭炉现场明烤，表皮如玻璃纸般脆响。" },
        { name: "炭烧蜜汁叉烧", note: "带淡淡炭木烟熏香，远非电炉烧味可比。" }
      ],
      reputationProof: "逾60年老字号，蔡澜与多位香港名厨曾多次点名力挺。没有精致装潢、也没有社交平台投流，卖的就是越来越稀缺的真炭火老手艺。",
      insiderTip: "招牌炭烧烧肉与乳猪出炉后极快卖光，强烈建议11:30–13:30午市前往，傍晚去常扑空。",
      cantoneseTip: "点烧肉可以直接问斩料师傅「要五花腩位，皮要最脆嗰截」。"
    },
    {
      id: "she-wong-hip",
      name: "蛇王协",
      cantoneseName: "蛇王協（秋冬限定）",
      enName: "She Wong Hip",
      district: "深水埗",
      zone: "kowloon",
      tier: "local",
      badgeLabel: "50年女蛇王老店",
      category: "秋冬蛇羹",
      priceRange: "HK$60–110",
      avgPrice: 85,
      lat: 22.3303,
      lng: 114.1619,
      address: "深水埗鸭寮街170号地铺（深水埗站A2口步行1分钟）",
      mtrFromHungHom: "观塘线→太子转荃湾线至深水埗站",
      travelMinutes: 22,
      hours: "11:30 – 21:30（秋冬旺季或延至22:00）",
      closedDay: "",
      payment: "现金 / 八达通",
      tags: ["seasonal", "solo-friendly"],
      mustOrder: [
        { name: "太史五蛇羹（配薄脆/菊花瓣/柠檬叶）", note: "11月底正值“秋风起三蛇肥”！汤底鲜甜浓滑，鸡丝木耳蛇丝交织，完全无腥味。" },
        { name: "生炒腊味糯米饭", note: "配热蛇羹一套吃下，全身暖透，是最地道的香港入冬仪式。" }
      ],
      reputationProof: "由香港首位女蛇王周嘉玲主理逾半世纪，店内坐满本地老街坊进补，零网红包装。出差赶上11月底降温，不吃一碗正宗港式蛇羹实在可惜。",
      insiderTip: "如果心理对蛇略微犹豫，闭眼喝第一口就会发现口感极像高级鸡丝鲍鱼羹，鲜香无比。",
      cantoneseTip: "桌上的薄脆、柠檬叶丝和白菊花瓣务必加进去，瞬间提香解腻。"
    },
    {
      id: "sun-heung-yuen",
      name: "新香园（坚记）",
      cantoneseName: "新香園（堅記）",
      enName: "Sun Heung Yuen (Kee)",
      district: "深水埗",
      zone: "kowloon",
      tier: "local",
      badgeLabel: "茶记蛋牛治天花板",
      category: "老派茶餐厅",
      priceRange: "HK$40–65",
      avgPrice: 52,
      lat: 22.3292,
      lng: 114.1612,
      address: "深水埗桂林街38号地铺（深水埗站C2口步行2分钟）",
      mtrFromHungHom: "观塘线→太子转荃湾线至深水埗站",
      travelMinutes: 22,
      hours: "24小时营业（凌晨照常开市）",
      closedDay: "",
      payment: "只收现金为主",
      tags: ["solo-friendly", "late-night"],
      mustOrder: [
        { name: "驰名蛋牛治（务必点「烘底」）", note: "新鲜手剁牛肉碎混半熟滑蛋，夹在烤脆白吐司里，一口爆汁。" },
        { name: "南乳猪手面 & 冻奶茶", note: "老派深水埗街坊味道，价格良心且不赶客。" }
      ],
      reputationProof: "本地人心中吊打网红“澳洲牛奶公司”的真茶餐厅标杆！24小时烟火不断，没有虚高的游客价，也没有骂街式催单服务。",
      insiderTip: "距离蛇王协、刘森记全在3分钟步行圈内，周末来深水埗扫街可以一路连吃三家。",
      cantoneseTip: "一定要补一句「蛋牛治烘底，加一杯冻奶茶少甜少冰」！不烘底灵魂少一半。"
    },
    {
      id: "lau-sum-kee",
      name: "刘森记面家",
      cantoneseName: "劉森記麵家",
      enName: "Lau Sum Kee Noodle",
      district: "深水埗",
      zone: "kowloon",
      tier: "bib",
      badgeLabel: "米其林必比登",
      category: "竹升面 · 虾籽捞",
      priceRange: "HK$50–80",
      avgPrice: 64,
      lat: 22.3316,
      lng: 114.1627,
      address: "深水埗福荣街80号地铺（另桂林街48号有分店）",
      mtrFromHungHom: "观塘线→太子转荃湾线至深水埗站D2口步行3分钟",
      travelMinutes: 23,
      hours: "12:00 – 22:00（福荣街店）",
      closedDay: "",
      payment: "现金 / 八达通",
      tags: ["solo-friendly"],
      mustOrder: [
        { name: "招牌虾籽捞面", note: "坚持自家古法竹升压面，无碱水涩味，铺满金黄咸香虾籽。" },
        { name: "鲜虾云吞 & 桌边免费自家腌酸萝卜", note: "爽脆酸萝卜配虾籽捞面堪称深水埗绝配。" }
      ],
      reputationProof: "三代传承、连年入选米其林必比登，香港硕果仅存仍自己打竹升面的老字号之一。实打实的工艺与本地街坊熟客支撑，零软文水分。",
      insiderTip: "桌上有免费腌白萝卜罐，吃捞面一定要夹几块配着吃，解腻又提鲜；同街还有合益泰肠粉可顺手垫胃。",
      cantoneseTip: "捞面附送一碗大地鱼清汤，拌面干了可以淋一勺汤进去更顺滑。"
    },

    // =========================================================================
    // 4. 港岛过海精选（东铁线一站过海 · 4家硬核本地老字号）
    // =========================================================================
    {
      id: "keung-kee",
      name: "强记美食",
      cantoneseName: "強記美食（灣仔）",
      enName: "Keung Kee",
      district: "湾仔",
      zone: "island",
      tier: "bib",
      badgeLabel: "米其林必比登",
      category: "秋冬腊味糯米饭",
      priceRange: "HK$55–90",
      avgPrice: 70,
      lat: 22.2795,
      lng: 114.1788,
      address: "湾仔骆克道406号地下（近铜锣湾/湾仔交界）",
      mtrFromHungHom: "东铁线红磡→会展站过海步行或转电车约18分钟",
      travelMinutes: 18,
      hours: "12:00 – 22:00（注意：逢星期一休息）",
      closedDay: "周一公休",
      payment: "现金 / 八达通",
      tags: ["seasonal", "solo-friendly"],
      mustOrder: [
        { name: "鸳鸯肠杂锦腊味糯米饭", note: "70年三代手艺！糯米干身粒粒分明，吸透润肠腊肉油脂，秋冬必吃神物。" },
        { name: "香煎虾米肠粉 & 花生猪骨粥", note: "肠粉煎出微焦边配甜麻酱，老港情怀满分。" }
      ],
      reputationProof: "多年蝉联米其林必比登的湾仔传奇，从早年路边车仔档一路做到骆克道实体铺。11月底降温正值腊味最香季节，本地人专程跨区来买。",
      insiderTip: "千万记住「逢星期一休息」！别周一白跑一趟。就在甘牌烧鹅、再兴烧腊附近，非常适合湾仔半日连吃。",
      cantoneseTip: "可加配「煎蛋」或「花生猪骨粥」解油腻。"
    },
    {
      id: "joy-hing",
      name: "再兴烧腊饭店",
      cantoneseName: "再興燒臘飯店",
      enName: "Joy Hing Roasted Meat",
      district: "湾仔",
      zone: "island",
      tier: "local",
      badgeLabel: "百年烧味老店",
      category: "百年蜜汁叉烧",
      priceRange: "HK$50–85",
      avgPrice: 62,
      lat: 22.2778,
      lng: 114.1766,
      address: "湾仔轩尼诗道265-267号地下C座（湾仔站A4口4分钟）",
      mtrFromHungHom: "东铁线红磡→会展站过海步行约10分钟",
      travelMinutes: 16,
      hours: "09:30 – 22:00（注意：周日及公众假期休息）",
      closedDay: "周日公休",
      payment: "现金 / 八达通",
      tags: ["solo-friendly", "takeaway-fast"],
      mustOrder: [
        { name: "半肥瘦「肥燶」叉烧饭", note: "外层带焦糖脆边、入口甘香化渣，一定要淋桌上的秘制叉烧汁！" },
        { name: "三宝饭（叉烧+烧肉+油鸡/烧鸭）", note: "性价比极高，肉量给得毫不手软。" }
      ],
      reputationProof: "清末传承至今的百年老字号，曾获米其林必比登与多家国际媒体推荐。和甘牌烧鹅只隔两条街——如果甘牌队太长，拐来再兴吃叉烧绝不后悔。",
      insiderTip: "「星期日及公众假期休息」！工作日中午12:00–13:30湾仔白领极多，14:00后去非常轻松。",
      cantoneseTip: "点叉烧千万讲「要半肥瘦、带燶边」，纯瘦叉会偏柴。"
    },
    {
      id: "sister-wah",
      name: "华姐清汤腩",
      cantoneseName: "華姐清湯腩（天后）",
      enName: "Sister Wah",
      district: "天后",
      zone: "island",
      tier: "bib",
      badgeLabel: "米其林必比登",
      category: "清汤牛腩 · 九记平替",
      priceRange: "HK$65–110",
      avgPrice: 82,
      lat: 22.2832,
      lng: 114.1917,
      address: "铜锣湾天后电气道13号A地铺（天后站A2口步行2分钟）",
      mtrFromHungHom: "东铁线红磡→金钟转港岛线天后站A2口",
      travelMinutes: 24,
      hours: "11:00 – 22:45（每天营业）",
      closedDay: "",
      payment: "现金 / 八达通",
      tags: ["solo-friendly"],
      mustOrder: [
        { name: "清汤牛腩河粉 / 伊面", note: "牛骨加药材慢火熬清汤，清甜醇厚不咸口，牛腩软嫩有肉香。" },
        { name: "腩汁焖萝卜", note: "萝卜清甜无渣吸满牛腩汁，几乎每桌必点。" }
      ],
      reputationProof: "连年稳守米其林必比登，也是香港本地食客公认最能吊打网红“九记牛腩”的真口碑代表——不用顶着烈日冷风排1小时，也不会被老板摆臭脸，汤头更鲜甜。",
      insiderTip: "预算充足想吃最顶部位可早点去问有没有「崩沙腩」或「坑腩」，限量供应先到先得。",
      cantoneseTip: "「一碗清汤腩河走青（如不吃葱）+ 一碟净萝卜」是老熟客标配。"
    },
    {
      id: "kwan-kee-claypot",
      name: "坤记煲仔小菜",
      cantoneseName: "坤記煲仔小菜（西環）",
      enName: "Kwan Kee Claypot Rice",
      district: "西营盘",
      zone: "island",
      tier: "bib",
      badgeLabel: "米其林必比登",
      category: "全港炭炉煲仔饭天花板",
      priceRange: "HK$110–180",
      avgPrice: 145,
      lat: 22.2862,
      lng: 114.1451,
      address: "西环西营盘皇后大道西263号和益大厦地下1号铺（西营盘站B1口3分钟）",
      mtrFromHungHom: "东铁线红磡→金钟转港岛线西营盘站B1口",
      travelMinutes: 28,
      hours: "17:30 – 22:00（晚市限定 · 不设预约）",
      closedDay: "",
      payment: "现金 / 信用卡",
      tags: ["seasonal"],
      mustOrder: [
        { name: "白鳝滑鸡煲仔饭 / 腊味排骨煲仔饭", note: "公认全港炭炉煲仔饭天花板，炭火香渗透米芯，金黄薄脆饭焦堪比艺术品。" },
        { name: "胡椒猪骨煲", note: "11月底微凉夜晚配一锅浓白胡椒猪骨汤，暖胃到极致。" }
      ],
      reputationProof: "连年米其林必比登，在香港本地美食讨论区（LIHKG/OpenRice）被反复公认“甩开庙街游客煲仔饭一条街”的真神店。",
      insiderTip: "极重要：晚市17:30开铺且不接受预约，强烈建议「17:00前抵达排队拿头轮」，错过第一轮可能要等45分钟以上！",
      cantoneseTip: "1人吃煲仔饭刚刚好；2人以上一定加点胡椒猪骨煲或椒盐鲜鱿。"
    },

    // =========================================================================
    // 5. 全港知名名店 / 经典地标老字号（8家 · 独立类别，附真实优缺点与排雷建议）
    // =========================================================================
    {
      id: "kau-kee",
      name: "九记牛腩",
      cantoneseName: "九記牛腩",
      enName: "Kau Kee Restaurant",
      district: "中环",
      zone: "island",
      tier: "famous",
      badgeLabel: "知名名店",
      category: "上汤/咖喱牛腩",
      priceRange: "HK$70–130",
      avgPrice: 95,
      lat: 22.2845,
      lng: 114.1526,
      address: "中环歌赋街21号地下（上环站E2口/中环站步行约8分钟）",
      mtrFromHungHom: "东铁线红磡→金钟转港岛线中环/上环站",
      travelMinutes: 26,
      hours: "12:30 – 22:30（注意：周日及公众假期休息）",
      closedDay: "周日公休",
      payment: "只收现金（Cash Only）",
      tags: ["famous", "solo-friendly"],
      mustOrder: [
        { name: "上汤牛爽腩（限量）/ 上汤净牛腩", note: "招牌清甜药材牛骨汤底，爽腩带薄筋膜最抢手，通常开铺不久售罄。" },
        { name: "咖喱牛筋腩伊面", note: "微辣浓香咖喱汁挂满伊面，很多人反而更偏爱咖喱款。" }
      ],
      reputationProof: "全港知名度最高的牛腩老店，梁朝伟、周润发等明星旧日饭堂。客观提醒：游客排队久、店员脾气较冲且只收现金，适合想亲身打卡经典的人；若更看重体验可去天后「华姐清汤腩」。",
      insiderTip: "12:30 开门前20分钟到，或 15:30–17:00 下午茶冷门时段排队最短；正对面就是「胜香园」，可顺路同框。",
      cantoneseTip: "有最低消费限制且必须拼桌，想吃「牛爽腩」进门先问今日仲有冇。"
    },
    {
      id: "australia-dairy",
      name: "澳洲牛奶公司",
      cantoneseName: "澳洲牛奶公司",
      enName: "Australia Dairy Company",
      district: "佐敦",
      zone: "kowloon",
      tier: "famous",
      badgeLabel: "知名名店",
      category: "港式快餐 · 炖奶",
      priceRange: "HK$55–85",
      avgPrice: 68,
      lat: 22.3048,
      lng: 114.1704,
      address: "佐敦白加士街47-49号地下（佐敦站C2口步行2分钟）",
      mtrFromHungHom: "红磡打车7分钟 / 步行16分钟",
      travelMinutes: 9,
      hours: "07:30 – 22:00（注意：逢星期四休息）",
      closedDay: "周四公休",
      payment: "只收现金（Cash Only）",
      tags: ["famous", "solo-friendly"],
      mustOrder: [
        { name: "蛋白炖鲜奶（热/冻）", note: "嫩滑奶香浓郁，是全店最稳也最不容易踩雷的招牌。" },
        { name: "炒蛋多士 + 叉烧通粉（茶餐）", note: "招牌半熟滑蛋配厚吐司，感受传奇级的30秒光速出餐。" }
      ],
      reputationProof: "香港最具代表性的茶餐厅文化地标，以“光速上菜+伙计节奏极快”闻名全网。客观提醒：排长队但翻台极快，不适合慢悠悠聊天，建议当作体验老港市井效率的一站。",
      insiderTip: "逢星期四休息！进门前就想好点什么（例如「一份茶餐要炒蛋烘底+一碗热炖奶」），点单干脆伙计其实挺客气。",
      cantoneseTip: "旁边5米就是米其林必比登「麦文记面家」，同街步行1分钟是「佳佳甜品」新店。"
    },
    {
      id: "sing-heung-yuen",
      name: "胜香园",
      cantoneseName: "勝香園（鐵皮大牌檔）",
      enName: "Sing Heung Yuen",
      district: "中环",
      zone: "island",
      tier: "famous",
      badgeLabel: "知名名店",
      category: "露天铁皮大牌档",
      priceRange: "HK$45–75",
      avgPrice: 58,
      lat: 22.2846,
      lng: 114.1527,
      address: "中环美轮街2号排档（九记牛腩正对面）",
      mtrFromHungHom: "东铁线红磡→金钟转中环/上环站",
      travelMinutes: 26,
      hours: "08:00 – 15:30（注意：周日及公众假期休息）",
      closedDay: "周日公休",
      payment: "只收现金（Cash Only）",
      tags: ["famous", "solo-friendly"],
      mustOrder: [
        { name: "番茄牛肉通粉 / 番茄蛋通粉", note: "真番茄熬出酸甜浓汤，是中环上班族与游客公认的招牌。" },
        { name: "柠蜜脆脆（牛油柠檬汁蜜糖脆猪仔包）", note: "外皮烤到咔哧脆、酸甜醒胃，配一杯咸柠七绝配。" }
      ],
      reputationProof: "香港硕果仅存的合法街头露天绿色铁皮大牌档之一，就在九记牛腩正对面。11月底微凉阳光下坐在露天折凳上吃热番茄通粉，极有老港电影氛围。",
      insiderTip: "只做早午市，下午15:30就收档！若遇下雨天露天座位会较不便，晴朗上午10:00–11:30去最惬意。",
      cantoneseTip: "简写暗语叫「茄牛通 + 柠蜜脆脆 + 咸柠七」，地道又省事。"
    },
    {
      id: "lan-fong-yuen",
      name: "兰芳园（中环总店）",
      cantoneseName: "蘭芳園（中環老舖）",
      enName: "Lan Fong Yuen (Central)",
      district: "中环",
      zone: "island",
      tier: "famous",
      badgeLabel: "知名名店",
      category: "丝袜奶茶始祖",
      priceRange: "HK$50–85",
      avgPrice: 65,
      lat: 22.2827,
      lng: 114.1538,
      address: "中环结志街2号地铺（半山扶梯旁）",
      mtrFromHungHom: "东铁线红磡→金钟转中环D2口步行6分钟",
      travelMinutes: 23,
      hours: "07:30 – 18:00（注意：周日休息）",
      closedDay: "周日公休",
      payment: "现金 / 八达通",
      tags: ["famous", "solo-friendly", "takeaway-fast"],
      mustOrder: [
        { name: "招牌丝袜奶茶（热/冻）", note: "1952年创立的港式丝袜奶茶鼻祖，茶味厚重顺滑不发苦。" },
        { name: "葱油鸡扒捞丁", note: "现煎鸡扒配满勺姜葱油拌出前一丁，经典港味组合。" }
      ],
      reputationProof: "港式丝袜奶茶的活招牌。客观建议：去就认准「中环结志街总店」（保留老铁皮档口），出品比商场分店更稳；如果堂食排队太长，直接门口买一杯外带冻奶茶边逛中环最省时。",
      insiderTip: "周日公休，下午18:00打烊；与「一乐烧鹅」「沾仔记」「陆羽茶室」全在3–5分钟步行圈内。",
      cantoneseTip: "喜欢浓茶香直接点「热丝袜奶茶」，外带冻饮可讲「少冰」。"
    },
    {
      id: "lin-heung-lau",
      name: "莲香楼（尖沙咀）",
      cantoneseName: "蓮香樓（傳統點心車）",
      enName: "Lin Heung Lau (Tsim Sha Tsui)",
      district: "尖沙咀",
      zone: "kowloon",
      tier: "famous",
      badgeLabel: "知名名店",
      category: "百年推车饮茶",
      priceRange: "HK$90–160",
      avgPrice: 120,
      lat: 22.3007,
      lng: 114.1739,
      address: "尖沙咀金巴利道25号长利商业大厦1-2楼（尖沙咀站B1口）",
      mtrFromHungHom: "屯马线红磡→尖东站 / 打车6分钟",
      travelMinutes: 10,
      hours: "24小时营业（早茶至深夜全天候供应点心）",
      closedDay: "",
      payment: "现金 / 八达通 / 信用卡",
      tags: ["famous", "late-night"],
      mustOrder: [
        { name: "传统点心车现拿（马拉糕 / 猪肚烧卖 / 鸭脚扎）", note: "保留香港越来越稀有的阿姨推车喊点心文化，趁热直接去车旁截停拿笼。" },
        { name: "莲蓉包 & 霸王鸭（晚市）", note: "老牌广式茶楼的古早风味与热闹市井气。" }
      ],
      reputationProof: "香港最具历史的百年茶楼品牌，保留了极其珍贵的传统手推点心车文化。离红磡非常近，且24小时营业，半夜想喝茶吃虾饺也能去。",
      insiderTip: "讲究“自己找位、看到点心车主动拿着点心卡去拿”，别干坐着等服务员；想吃精致环境选「逸东轩」，想体验老港抢点心车氛围就来「莲香楼」。",
      cantoneseTip: "坐下先跟阿姐开茶（普洱/寿眉/水仙），拿完点心记得给阿姨在卡上盖章。"
    },
    {
      id: "luk-yu-tea-house",
      name: "陆羽茶室",
      cantoneseName: "陸羽茶室",
      enName: "Luk Yu Tea House",
      district: "中环",
      zone: "island",
      tier: "famous",
      badgeLabel: "知名名店",
      category: "百年古董茶楼",
      priceRange: "HK$200–350",
      avgPrice: 260,
      lat: 22.2826,
      lng: 114.1561,
      address: "中环士丹利街24-26号（就在一乐烧鹅旁）",
      mtrFromHungHom: "东铁线红磡→金钟转中环D2口步行4分钟",
      travelMinutes: 22,
      hours: "07:00 – 15:00（建议早午市饮茶前往）",
      closedDay: "",
      payment: "现金 / 信用卡（加一服务费+茶位）",
      tags: ["famous", "booking-required"],
      mustOrder: [
        { name: "酿猪润烧卖 & 滑鸡球大包", note: "传统旧式手工大点心，别家茶楼已极少供应。" },
        { name: "陈年普洱 / 铁观音", note: "老茶室以茶质讲究著称，配酸枝木卡座与花玻璃仿佛穿越1930年代。" }
      ],
      reputationProof: "1933年创立的香港传奇古董茶室，张国荣、金庸及历代政商名流旧日茶聚之地。价格偏高，但花两百多港币吃一顿宛如王家卫电影实景的百年早茶，体验全港独一份。",
      insiderTip: "一楼老主顾卡座气氛最好，建议提前电话订位；穿着尽量整洁休闲（避免拖鞋短裤）。",
      cantoneseTip: "每张点心纸每周微调，点单直接勾传统怀旧点心准没错。"
    },
    {
      id: "tsim-chai-kee",
      name: "沾仔记（中环总店）",
      cantoneseName: "沾仔記麵食",
      enName: "Tsim Chai Kee Noodle",
      district: "中环",
      zone: "island",
      tier: "famous",
      badgeLabel: "知名名店 · 必比登",
      category: "乒乓球云吞面",
      priceRange: "HK$45–75",
      avgPrice: 55,
      lat: 22.2832,
      lng: 114.1544,
      address: "中环威灵顿街98号地铺（中环站D2口步行6分钟）",
      mtrFromHungHom: "东铁线红磡→金钟转中环D2口",
      travelMinutes: 23,
      hours: "11:00 – 21:30（每天营业）",
      closedDay: "",
      payment: "现金 / 八达通",
      tags: ["famous", "solo-friendly"],
      mustOrder: [
        { name: "至尊三宝面（鲜虾云吞 + 鲮鱼球 + 鲜牛肉）", note: "单碗HK$50出头就能一次吃齐三大招牌，性价比在中环堪称奇迹。" },
        { name: "招牌鲜虾云吞面", note: "每颗云吞大如乒乓球、咬开全是大块爽脆鲜虾。" }
      ],
      reputationProof: "多年蝉联米其林必比登的中环平价传奇，全店只卖寥寥几种面却几十年人气不衰。对比中环动辄上百的简餐，这里既知名又实惠、绝不踩雷。",
      insiderTip: "距离「一乐烧鹅」「兰芳园」仅2分钟路程，翻台飞快，即使门口排10个人也只需等5–8分钟。",
      cantoneseTip: "第一次来直接点「一碗至尊三宝河/幼面」，另加一碟蚝油生菜刚刚好。"
    },
    {
      id: "waso-cafe",
      name: "华嫂冰室（尖沙咀）",
      cantoneseName: "華嫂冰室（尖沙咀店）",
      enName: "Waso Cafe (Tsim Sha Tsui)",
      district: "尖沙咀",
      zone: "kowloon",
      tier: "famous",
      badgeLabel: "知名名店",
      category: "人气港式冰室",
      priceRange: "HK$55–90",
      avgPrice: 70,
      lat: 22.3000,
      lng: 114.1731,
      address: "尖沙咀加连威老道10号加威中心地下（另湾仔谢斐道有分店）",
      mtrFromHungHom: "屯马线红磡→尖东站步行7分钟 / 打车6分钟",
      travelMinutes: 11,
      hours: "08:00 – 22:00（每天营业）",
      closedDay: "",
      payment: "现金 / 八达通 / 电子支付",
      tags: ["famous", "solo-friendly"],
      mustOrder: [
        { name: "招牌菠萝包（夹牛油 + 番茄 + 煎蛋）", note: "酥皮热菠萝包配多汁鲜番茄与流心煎蛋，口感层次丰富不腻。" },
        { name: "冰花奶茶 & 鲜油猪仔包", note: "冻奶茶杯壁结出细碎冰花，茶奶平衡顺滑。" }
      ],
      reputationProof: "从元朗屏山起家、周润发与余文乐等港星常客带火的知名冰室。虽偏热门但出品比多数纯营销网红冰室扎实得多，尖沙咀店离红磡也极近。",
      insiderTip: "支持手机提前线上取号（The Gulu 等App或门口扫码），建议避开12:00–13:30午高峰。",
      cantoneseTip: "招牌菠萝包一定要趁热吃，放凉酥皮会软。"
    }
  ],

  transitHubs: [
    {
      line: "步行 · 红磡/黄埔圈",
      badgeClass: "mtr-walk",
      time: "5–10 分钟",
      detail: "下班累了不想坐车：直奔美味佳（蛋炒肠粉+串烧至凌晨）、蒙面（番茄汤车仔面+现烧叉烧串）、黄埔小厨（怀旧芝麻鸡）。"
    },
    {
      line: "东铁线 · 1站极速过海",
      badgeClass: "mtr-east",
      time: "6–20 分钟",
      detail: "红磡站上车仅1站即到会展站（湾仔），2站到金钟！甘牌烧鹅、再兴烧腊、强记糯米饭、何洪记、一乐烧鹅全部极速可达。"
    },
    {
      line: "观塘线 · 黄埔直通九龙老区",
      badgeClass: "mtr-kwun",
      time: "10–22 分钟",
      detail: "黄埔站是始发站必有座位，直达油麻地（四季煲仔饭）、太子（永合隆炭烧乳猪），换1站到深水埗扫街进补。"
    },
    {
      line: "屯马线 · 土瓜湾 & 佐敦",
      badgeClass: "mtr-tuen",
      time: "8–13 分钟",
      detail: "1站到土瓜湾吃楚撚记大排档、上海美食之家；往西1–2站柯士甸/打车7分钟直达佐敦逸东轩（最近米其林一星）、麦文记与佳佳甜品。"
    }
  ],

  itineraries: [
    {
      title: "路线A · 工作日下班步行回血",
      timing: "周中任意晚间 · 零交通成本",
      desc: "白天出差开会累了不想折腾，直接用双脚解决红磡最硬核的本地烟火气。",
      stops: [
        { text: "19:30 晚餐步行去", spotId: "meng-mian", after: "，进门立刻先点即烧蜜汁叉烧串 + 番茄浓汤车仔面（若同事2–3人聚餐，改去", secondSpotId: "whampoa-kitchen", tail: "吃怀旧芝麻鸡）。" },
        { text: "22:30 回酒店前顺路绕到", spotId: "mei-mei-jia", after: "打包一份蛋炒肠粉 + 炭烧鸡全翼当宵夜。" }
      ]
    },
    {
      title: "路线B · 一站过海平价摘星线",
      timing: "工作日午休或下班 · 避开周日/周一",
      desc: "利用红磡东铁线1站过海的地理外挂，花百元港币轻松拿下港岛米其林一星与必比登。",
      stops: [
        { text: "午市错峰（11:15或14:30）过海去湾仔", spotId: "kams-roast-goose", after: "吃米其林一星烧鹅（若堂食队太长直接排外卖，或拐两条街吃百年老店", secondSpotId: "joy-hing", tail: "肥燶叉烧）。" },
        { text: "傍晚顺路吃一碗秋冬限定", spotId: "keung-kee", after: "生炒腊味糯米饭（注意周一休）；若要体面坐下来吃饭，坐1站去铜锣湾", secondSpotId: "ho-hung-kee", tail: "吃云吞面与干炒牛河。" }
      ]
    },
    {
      title: "路线C · 佐敦油麻地摘星+糖水夜游",
      timing: "平日午市订位 / 傍晚散步",
      desc: "离红磡最近的九龙黄金美食带，一顿把星级点心、炭炉煲仔饭、热芝麻糊全安排明白。",
      stops: [
        { text: "提前订位：平日中午打车8分钟到佐敦", spotId: "yat-tung-heen", after: "，以高性价比吃一顿正宗米其林一星广式点心。" },
        { text: "傍晚17:15去油麻地", spotId: "four-seasons-claypot", after: "抢炭炉煲仔饭头轮（带现金），饭后散步到白加士街新店喝一碗", secondSpotId: "kai-kai-dessert", tail: "热芝麻糊；胃还有空就去隔壁", thirdSpotId: "mak-man-kee", tail3: "加碗全虾云吞面。" }
      ]
    },
    {
      title: "路线D · 周末深水埗秋冬进补 + 西环收官",
      timing: "周六/周日半日 · 12月4日前必走",
      desc: "专挑零游客滤镜的香港草根江湖，专攻11月底降温季才最美味的炭烧乳猪、蛇羹与炭火煲仔饭。",
      stops: [
        { text: "11:30 黄埔坐观塘线直达太子", spotId: "wing-hap-lung", after: "抢头炉古法炭烧乳猪/脆皮烧肉。" },
        { text: "14:00 坐1站去深水埗吃", spotId: "she-wong-hip", after: "太史五蛇羹暖身，顺步扫街", secondSpotId: "sun-heung-yuen", tail: "蛋牛治烘底 + ", thirdSpotId: "lau-sum-kee", tail3: "竹升虾籽捞面。" },
        { text: "17:00 提前过海西营盘排", spotId: "kwan-kee-claypot", after: "头轮炭炉煲仔饭+胡椒猪骨煲，完美收官本次出差！" }
      ]
    },
    {
      title: "路线E · 中环经典名店步行圈",
      timing: "周中避开周日 · 一次打卡全港地标",
      desc: "中环几家全港知名度最高的老字号彼此只隔几分钟脚程，想打卡经典名店一次走通最省力。",
      stops: [
        { text: "10:00 先去露天铁皮档", spotId: "sing-heung-yuen", after: "吃番茄通粉+柠蜜脆脆，顺路在", secondSpotId: "lan-fong-yuen", tail: "外带一杯丝袜奶茶。" },
        { text: "12:15 提前排队打卡对面的", spotId: "kau-kee", after: "（若队太长直接拐去2分钟外的", secondSpotId: "tsim-chai-kee", tail: "吃必比登乒乓球云吞，或去", thirdSpotId: "yat-lok", tail3: "吃米其林一星烧鹅）。" }
      ]
    }
  ],

  antiHypeList: [
    {
      avoid: "九记牛腩（高排队风险）",
      tag: "已收录至知名名店",
      reason: "全港名气第一但常排1小时+、只收现金且服务较冲。若不执着打卡地标，可直接换本地更稳的清汤腩。",
      replaceIds: ["sister-wah"],
      replaceNote: "换天后米其林必比登，清汤清甜、牛腩软嫩、不用排长队受气。"
    },
    {
      avoid: "澳洲牛奶公司（极速催单）",
      tag: "已收录至知名名店",
      reason: "想体验老港光速茶记可去打卡，但不想花半小时排队再用5分钟狼吞虎咽，周边就有更好吃的老店。",
      replaceIds: ["sun-heung-yuen", "mak-man-kee"],
      replaceNote: "吃滑蛋牛肉去新香园蛋牛治烘底；澳牛隔壁5米的麦文记云吞面硬实力极强。"
    },
    {
      avoid: "庙街兴记煲仔饭",
      tag: "品控飘忽",
      reason: "分店扩张多、旅游团密集，炭火感弱且经常出现饭生或焦糊不均，网红营销成分大。",
      replaceIds: ["kwan-kee-claypot", "four-seasons-claypot"],
      replaceNote: "本地老饕认准西环坤记（天花板）与油麻地四季（真炭炉）。"
    },
    {
      avoid: "添好运（各连锁分店）",
      tag: "已失星工业化",
      reason: "深水埗老店早年已失去米其林一星，如今全港连锁高度中央厨房化，不再是昔日便宜摘星神店。",
      replaceIds: ["yat-tung-heen"],
      replaceNote: "想吃真·平价米其林一星点心，直接提前订佐敦逸东轩平日午市。"
    },
    {
      avoid: "庙街露天海鲜大排档",
      tag: "易遇称重刺客",
      reason: "游客区部分海鲜档按两计价不透明、加工费高，出品也以应付游客为主。",
      replaceIds: ["chor-land", "whampoa-kitchen"],
      replaceNote: "红磡1站到土瓜湾楚撚记，或步行去黄埔小厨，明码实价且镬气十足。"
    },
    {
      avoid: "小红书爆款新派网红冰室/厚吐司",
      tag: "高价软文重灾区",
      reason: "装修出片但常由探店KOL批量投流，一杯饮品配吐司动辄上百港币，味道千篇一律。",
      replaceIds: ["keung-kee", "kai-kai-dessert"],
      replaceNote: "预算花在三代传承的强记糯米饭、佳佳甜品新店，三十到八十港币吃出真功夫。"
    }
  ],

  practicalTips: [
    {
      title: "现金 + 八达通缺一不可",
      body: "香港大量真正好吃的老字号（如四季煲仔饭、新香园、麦文记、一乐烧鹅等）依然只收港币现金或八达通，不支持微信/支付宝。出差随身备 HK$500–800 现金（尽量带面额 HK$100/50 纸币，小店常拒收千元大钞）+ Apple Pay 绑八达通最省心。"
    },
    {
      title: "11月底–12月初正是秋冬限定黄金期",
      body: "此时香港气温约 16–23°C，早晚微凉，是吃「炭炉煲仔饭、生炒腊味糯米饭、太史五蛇羹、热芝麻糊」一年中最对味的季节，错过冬天就吃不出那种热乎乎的幸福感。"
    },
    {
      title: "牢记两家“公休陷阱”与一处搬迁情报",
      body: "湾仔「强记美食」逢星期一休息；「再兴烧腊」逢星期日及公众假期休息；佐敦「佳佳甜品」已于2025年9月从宁波街搬到白加士街113-115号新铺，切勿照旧攻略跑空。"
    },
    {
      title: "米其林星级酒楼 vs 街头老店礼仪",
      body: "逸东轩、彭庆记、何洪记等堂食酒楼会收 10% 加一服务费及茶位费，且逸东轩/彭庆记务必提前订位；一乐烧鹅、麦文记、新香园等街坊铺默认「搭台」（拼桌），手机先看好菜、坐下迅速点单，吃完买单走人最地道。"
    }
  ]
};
