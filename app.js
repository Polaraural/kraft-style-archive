const materials = [
  {
    id: "blue-journal", title: "蓝白手账", category: "personal", categoryLabel: "个人风格", image: "./assets/covers/blue-journal.png",
    summary: "方格纸、蓝墨水与轻盈纸片，把记录做成可见的日常。", tags: ["手账", "蓝白", "中文"],
    use: "日记、习惯养成、阅读记录", elements: "点阵纸、蓝色墨迹、胶带、圆润标题、手写批注", motion: "纸片轻移、勾选反馈、分页滑动", colors: ["#2A5BA7", "#E8F0FE", "#F0F4F8", "#FFFFFF"], isMotion: true
  },
  {
    id: "puploop", title: "PupLoop 纸质档案袋", category: "personal", categoryLabel: "个人风格", image: "./assets/covers/puploop.jpg",
    summary: "牛皮纸文件袋、黑白作品卡和荧光贴纸组成的实体作品档案。", tags: ["牛皮纸", "作品集", "贴纸"],
    use: "作品集、素材库、创意工作台", elements: "档案袋、纸质卡片、回形针、编号章、荧光标签", motion: "抽卡、开袋、叠放、轻微倾斜", colors: ["#B9824D", "#171512", "#F3EBDD", "#F4DA42", "#E84B38"], isMotion: true
  },
  {
    id: "peg", title: "Peg 中文极简", category: "personal", categoryLabel: "个人风格", image: "./assets/covers/peg.png",
    summary: "暖白纸面、翡翠绿强调和为中文单独调整的排版系统。", tags: ["极简", "中文", "设计令牌"],
    use: "知识库、文档、中文产品界面", elements: "暖白底、黑色文字、单一绿色强调、舒展行距", motion: "淡入、短距离推入、逐字弹入", colors: ["#FAFAF8", "#16181D", "#00A878", "#8A8A8E"], isMotion: true
  },
  {
    id: "retro", title: "复古档案册", category: "personal", categoryLabel: "个人风格", image: "./assets/covers/retro.png",
    summary: "打印纸、等宽文字、编号与翻页，像被保存多年的研究档案。", tags: ["复古", "档案", "等宽"],
    use: "研究资料、展览、品牌故事", elements: "连续打印纸、打字机文字、页码、装订孔", motion: "3D 翻页、纸张展开、逐行打印", colors: ["#D9D0BE", "#28241F", "#857866", "#B54B34"], isMotion: true
  },
  {
    id: "variant", title: "深色创作工作台", category: "personal", categoryLabel: "个人风格", image: "./assets/covers/variant.svg",
    summary: "黑色画布、窄图标栏和悬浮输入框构成的沉浸式创作空间。", tags: ["深色", "工作台", "工具"],
    use: "AI 创作、内容生成、社区浏览", elements: "窄侧栏、黑色画布、悬浮输入框、低对比元信息", motion: "面板淡入、输入框聚焦、卡片浮起", colors: ["#080808", "#1C1C1C", "#E8E8E8", "#757575"], isMotion: true
  },
  {
    id: "xiaohongshu", title: "小红书参考 · 待补图", category: "personal", categoryLabel: "个人风格", image: "./assets/covers/xiaohongshu.png",
    summary: "来源已经建档，目前还没有取得可验证的帖子画面。", tags: ["待补充", "参考"],
    use: "等待后续补图与拆解", elements: "当前不推测具体视觉元素", motion: "待观察", colors: ["#EEF3FA", "#2A5BA7", "#FFFFFF"], isMotion: false
  },
  {
    id: "scrolltide", title: "Scrolltide", category: "direction", categoryLabel: "网站方向", image: "./assets/covers/scrolltide.jpg",
    summary: "3D 场景、GPU shader 与滚动驱动时间线组成的电影感网站。", tags: ["3D", "WebGL", "滚动"],
    use: "产品发布、品牌故事、沉浸式作品集", elements: "全屏首屏、3D 物体、章节式滚动、shader 背景", motion: "滚动相机、视差、镜头切换、流体背景", colors: ["#050608", "#F2EEE4", "#4B8FF7", "#E55134"], isMotion: true
  },
  {
    id: "minimal", title: "Minimal Gallery", category: "direction", categoryLabel: "网站方向", image: "./assets/covers/minimal.png",
    summary: "克制排版、充足留白和编辑式图文节奏的高端网站方向。", tags: ["极简", "编辑感", "留白"],
    use: "工作室、建筑、摄影、时尚", elements: "非对称网格、大字号、精细裁切、低饱和色", motion: "慢速淡入、平滑滚动、图像裁切展开", colors: ["#F4F1E9", "#111111", "#D9D4C8"], isMotion: true
  },
  {
    id: "kage", title: "Kage", category: "direction", categoryLabel: "真实产品", image: "./assets/covers/kage.png",
    summary: "从真实产品界面中筛选页面、组件、颜色和可构建提示。", tags: ["真实产品", "UI", "提示词"],
    use: "App、SaaS、真实业务页面", elements: "真实信息密度、组件组合、状态与页面结构", motion: "根据具体产品案例提取", colors: ["#FFFFFF", "#111111", "#FF4F7B", "#F2F2F2"], isMotion: false
  },
  {
    id: "refero", title: "Refero Styles", category: "direction", categoryLabel: "设计系统", image: "./assets/covers/refero.png",
    summary: "把产品配色、字体、间距与组件整理成可读取的 DESIGN.md。", tags: ["设计系统", "字体", "令牌"],
    use: "项目立项、确定完整视觉方向", elements: "色板、字体层级、间距尺度、组件语言", motion: "根据选定系统单独定义", colors: ["#FBFAF7", "#1E1D1A", "#2864F0", "#F2C94C"], isMotion: false
  },
  {
    id: "404s", title: "404s", category: "direction", categoryLabel: "体验状态", image: "./assets/covers/404s.webp",
    summary: "把错误页和空状态变成幽默、插画或品牌化的恢复触点。", tags: ["404", "空状态", "插画"],
    use: "错误页、空数据、断网、无结果", elements: "品牌插画、恢复 CTA、推荐入口、轻量游戏", motion: "角色反馈、短循环、鼠标互动", colors: ["#1F1F1F", "#F4F1EA", "#E95B3F", "#E8D33E"], isMotion: true
  },
  {
    id: "designmd", title: "DESIGNmd", category: "direction", categoryLabel: "设计系统", image: "./assets/covers/designmd.png",
    summary: "用机器可读文件记录颜色、字体、间距、组件和动效规范。", tags: ["AI", "规范", "DESIGN.md"],
    use: "将设计约束交给编码或设计代理", elements: "颜色令牌、排版角色、间距、组件状态", motion: "以规范参数约束实现", colors: ["#F8F8F5", "#111111", "#7C5CFC", "#16A085", "#F2B84B"], isMotion: false
  },
  {
    id: "shadcn", title: "shadcn/ui", category: "ui", categoryLabel: "UI 组件", image: "./assets/covers/shadcn.png",
    summary: "可访问、可定制、状态完整的产品组件与设计系统底座。", tags: ["React", "组件", "产品"],
    use: "App、SaaS、后台、表单密集界面", elements: "表单、菜单、对话框、表格、日历与导航", motion: "短时状态过渡、可访问反馈", colors: ["#09090B", "#FAFAFA", "#71717A", "#E4E4E7"], isMotion: false
  },
  {
    id: "aceternity", title: "Aceternity UI", category: "ui", categoryLabel: "UI 组件", image: "./assets/covers/aceternity.png",
    summary: "光束、3D 卡片、视差与动态背景形成的高表现力营销组件。", tags: ["3D", "光束", "营销"],
    use: "科技品牌、AI 产品、发布页", elements: "光束、3D 卡片、设备模型、动态背景", motion: "视差、跟随、滚动模型、背景粒子", colors: ["#050505", "#FFFFFF", "#6D5DFB", "#2D8CFF"], isMotion: true
  },
  {
    id: "magic", title: "Magic UI", category: "ui", categoryLabel: "UI 组件", image: "./assets/covers/magic.png",
    summary: "Bento、marquee、globe 和文字动画组成的轻量落地页工具箱。", tags: ["Bento", "Marquee", "轻动效"],
    use: "SaaS 落地页、产品介绍、客户墙", elements: "Bento 网格、跑马灯、地球、社会证明", motion: "无缝循环、光泽扫过、数字增长", colors: ["#FFFFFF", "#171717", "#FF6FB1", "#FFD166"], isMotion: true
  },
  {
    id: "uiverse", title: "Uiverse", category: "ui", categoryLabel: "UI 组件", image: "./assets/covers/uiverse.png",
    summary: "社区贡献的按钮、输入框、开关、加载器和局部 CSS 效果。", tags: ["CSS", "按钮", "社区"],
    use: "为单个控件寻找视觉表现", elements: "按钮、输入、开关、加载器、卡片", motion: "hover、press、focus、loading", colors: ["#171717", "#F6F6F6", "#69E6A6", "#7A6AF6"], isMotion: true
  },
  {
    id: "uiable", title: "UIAble", category: "ui", categoryLabel: "UI 组件", image: "./assets/covers/uiable.png",
    summary: "覆盖表单、表格、上传、设置和仪表盘的真实业务界面模块。", tags: ["工作台", "表格", "业务"],
    use: "运营后台、设置中心、复杂业务表单", elements: "验证、筛选、上传、表格、设置与多状态模块", motion: "状态切换、列表更新、面板进入", colors: ["#EEF6FF", "#165DFF", "#101828", "#FFFFFF"], isMotion: true
  },
  {
    id: "kinetics", title: "Kinetics", category: "motion", categoryLabel: "动效", image: "./assets/covers/kinetics.png",
    summary: "以弹簧参数、直接操控和可中断反馈为核心的微交互目录。", tags: ["弹簧", "拖拽", "磁吸"],
    use: "拖拽、标签、toast、计数器、按住确认", elements: "刚度、阻尼、速度继承、自然回位", motion: "spring、drag、magnetic、hold-to-confirm", colors: ["#0A0A0A", "#F4F0E7", "#FF8A00", "#5B5B5B"], isMotion: true
  },
  {
    id: "motion-primitives", title: "Motion Primitives", category: "motion", categoryLabel: "动效", image: "./assets/covers/motion-primitives.jpg",
    summary: "文字、数字、倾斜、磁吸、聚光和 carousel 的可组合运动原语。", tags: ["文字", "磁吸", "原语"],
    use: "建立统一、可组合的产品动效语法", elements: "文字、数字、tilt、spotlight、dock、carousel", motion: "spring、layout transition、stagger", colors: ["#E6E3DF", "#272522", "#9A938A", "#FFFFFF"], isMotion: true
  },
  {
    id: "microkit", title: "MicroKit", category: "motion", categoryLabel: "动效", image: "./assets/covers/microkit.png",
    summary: "按钮、输入、导航和标签的产品级轻量反馈。", tags: ["微交互", "按钮", "反馈"],
    use: "日常产品控件与状态反馈", elements: "hover、press、focus、选中和加载状态", motion: "transform、opacity、短时缓动", colors: ["#0B0B0D", "#F7F7F5", "#FF710B", "#333333"], isMotion: true
  },
  {
    id: "text-effects", title: "CSS Text Effects", category: "motion", categoryLabel: "动效", image: "./assets/covers/text-effects.png",
    summary: "Glitch、Liquid、Aurora、CRT 与 Moiré 等纯 CSS 标题效果。", tags: ["文字", "CSS", "Glitch"],
    use: "活动页标题、品牌字、短状态", elements: "渐变文字、滤镜、混合模式、扫描线", motion: "glitch、typewriter、liquid、chrome、CRT", colors: ["#07080B", "#54E6FF", "#9B6CFF", "#FF5CAB"], isMotion: true
  },
  {
    id: "mapcn", title: "mapcn", category: "special", categoryLabel: "特殊界面", image: "./assets/covers/mapcn.jpg",
    summary: "地图、标记、弹窗、路线与控制器组成的地图产品组件。", tags: ["地图", "路线", "MapLibre"],
    use: "门店、旅行、配送、房产、地理资产", elements: "地图、marker、popup、label、route、controls", motion: "地图缩放、路线绘制、标记聚合", colors: ["#07152B", "#0F62A6", "#08B88A", "#FF8C32"], isMotion: true
  },
  {
    id: "liquid-glass", title: "Liquid Glass", category: "special", categoryLabel: "特殊界面", image: "./assets/covers/liquid-glass.jpg",
    summary: "实时折射页面内容的玻璃镜头、浮层和媒体控制效果。", tags: ["玻璃", "折射", "浮层"],
    use: "媒体控制、通知、工具条、局部镜头", elements: "实时折射、边缘高光、透明层级、模糊降级", motion: "跟随指针、折射更新、弹性拖拽", colors: ["#030509", "#F5FAFF", "#3E8EFF", "#FF4A5C"], isMotion: true
  }
];

const categories = [
  { id: "all", label: "全部素材", color: "#df4f38", description: "从工作台、网站方向到微交互，按图片快速挑选。" },
  { id: "personal", label: "个人风格", color: "#f4d83f", description: "已经拆解并保存到本地的完整视觉风格。" },
  { id: "direction", label: "网站方向", color: "#2d7b62", description: "完整网站、真实产品与机器可读设计系统。" },
  { id: "ui", label: "UI 组件", color: "#2567a9", description: "用于产品界面、业务工作台和落地页的组件来源。" },
  { id: "motion", label: "动效", color: "#df4f38", description: "弹簧、微交互与文字效果的运动参考。" },
  { id: "special", label: "特殊界面", color: "#8353a8", description: "地图、折射玻璃和特殊技术能力。" }
];

const els = {
  nav: document.querySelector("#categoryNav"), grid: document.querySelector("#libraryGrid"), template: document.querySelector("#cardTemplate"),
  search: document.querySelector("#searchInput"), count: document.querySelector("#resultCount"), activeLabel: document.querySelector("#activeLabel"),
  viewTitle: document.querySelector("#viewTitle"), viewDescription: document.querySelector("#viewDescription"), empty: document.querySelector("#emptyState"),
  clearSearch: document.querySelector("#clearSearch"), random: document.querySelector("#randomButton"), selectedList: document.querySelector("#selectedList"),
  boardEmpty: document.querySelector("#boardEmpty"), clearBoard: document.querySelector("#clearBoard"), dialog: document.querySelector("#detailDialog"),
  dialogClose: document.querySelector("#dialogClose"), detailImage: document.querySelector("#detailImage"), detailNumber: document.querySelector("#detailNumber"),
  detailCategory: document.querySelector("#detailCategory"), detailTitle: document.querySelector("#detailTitle"), detailSummary: document.querySelector("#detailSummary"),
  detailTags: document.querySelector("#detailTags"), detailUse: document.querySelector("#detailUse"), detailElements: document.querySelector("#detailElements"),
  detailMotion: document.querySelector("#detailMotion"), detailSwatches: document.querySelector("#detailSwatches"), selectDetail: document.querySelector("#selectDetail")
};

let activeCategory = "all";
let query = "";
let currentDetail = null;
let selected = new Set(JSON.parse(localStorage.getItem("kraft-selected") || "[]").filter(id => materials.some(item => item.id === id)).slice(0, 4));

function visibleMaterials() {
  const needle = query.trim().toLowerCase();
  return materials.filter(item => {
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    const searchText = [item.title, item.summary, item.categoryLabel, item.use, item.elements, ...item.tags].join(" ").toLowerCase();
    return categoryMatch && (!needle || searchText.includes(needle));
  });
}

function renderNav() {
  els.nav.replaceChildren();
  categories.forEach(category => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `category-button${activeCategory === category.id ? " active" : ""}`;
    button.style.setProperty("--tab-color", category.color);
    const total = category.id === "all" ? materials.length : materials.filter(item => item.category === category.id).length;
    button.innerHTML = `<span>${category.label}</span><small>${String(total).padStart(2, "0")}</small>`;
    button.addEventListener("click", () => {
      activeCategory = category.id;
      render();
      document.querySelector(".archive-desk").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    els.nav.append(button);
  });
}

function makeTags(tags, target) {
  target.replaceChildren(...tags.map(tag => {
    const chip = document.createElement("i");
    chip.textContent = tag;
    return chip;
  }));
}

function renderGrid(items) {
  els.grid.replaceChildren();
  items.forEach((item, index) => {
    const card = els.template.content.firstElementChild.cloneNode(true);
    card.style.setProperty("--i", index);
    card.dataset.id = item.id;
    card.dataset.motion = item.isMotion ? "true" : "false";
    card.classList.toggle("selected", selected.has(item.id));
    const open = card.querySelector(".card-open");
    const image = card.querySelector("img");
    image.src = item.image;
    image.alt = `${item.title} 风格预览`;
    card.querySelector(".card-index").textContent = `FILE ${String(materials.indexOf(item) + 1).padStart(2, "0")} / ${item.categoryLabel}`;
    card.querySelector(".card-title").textContent = item.title;
    card.querySelector(".card-summary").textContent = item.summary;
    makeTags(item.tags.slice(0, 3), card.querySelector(".card-tags"));
    open.setAttribute("aria-label", `查看 ${item.title} 详情`);
    open.addEventListener("click", () => openDetail(item));
    const selectButton = card.querySelector(".card-select");
    selectButton.textContent = selected.has(item.id) ? "✓ 已放入灵感板" : "＋ 放入灵感板";
    selectButton.addEventListener("click", () => toggleSelection(item.id));
    els.grid.append(card);
  });
  els.empty.hidden = items.length > 0;
  els.grid.hidden = items.length === 0;
}

function renderSelection() {
  const chosen = [...selected].map(id => materials.find(item => item.id === id)).filter(Boolean);
  els.selectedList.replaceChildren();
  chosen.forEach(item => {
    const row = document.createElement("div");
    row.className = "selected-item";
    const img = document.createElement("img"); img.src = item.image; img.alt = "";
    const title = document.createElement("b"); title.textContent = item.title;
    const remove = document.createElement("button"); remove.type = "button"; remove.textContent = "×"; remove.setAttribute("aria-label", `移除 ${item.title}`);
    remove.addEventListener("click", () => toggleSelection(item.id));
    row.append(img, title, remove);
    els.selectedList.append(row);
  });
  els.boardEmpty.hidden = chosen.length > 0;
  els.clearBoard.disabled = chosen.length === 0;
  localStorage.setItem("kraft-selected", JSON.stringify([...selected]));
}

function toggleSelection(id) {
  if (selected.has(id)) selected.delete(id);
  else if (selected.size < 4) selected.add(id);
  else {
    const board = document.querySelector(".selection-board");
    board.animate([{ transform: "translateX(0)" }, { transform: "translateX(-5px)" }, { transform: "translateX(5px)" }, { transform: "translateX(0)" }], { duration: 260 });
    return;
  }
  renderGrid(visibleMaterials());
  renderSelection();
  if (currentDetail?.id === id) updateDetailSelect();
}

function updateDetailSelect() {
  const isSelected = currentDetail && selected.has(currentDetail.id);
  els.selectDetail.textContent = isSelected ? "✓ 已放入本次灵感板" : "放入本次灵感板";
  els.selectDetail.classList.toggle("selected", Boolean(isSelected));
}

function openDetail(item) {
  currentDetail = item;
  els.detailImage.src = item.image;
  els.detailImage.alt = `${item.title} 风格大图`;
  els.detailNumber.textContent = `ARCHIVE / ${String(materials.indexOf(item) + 1).padStart(2, "0")}`;
  els.detailCategory.textContent = item.categoryLabel.toUpperCase();
  els.detailTitle.textContent = item.title;
  els.detailSummary.textContent = item.summary;
  makeTags(item.tags, els.detailTags);
  els.detailUse.textContent = item.use;
  els.detailElements.textContent = item.elements;
  els.detailMotion.textContent = item.motion;
  els.detailSwatches.replaceChildren(...item.colors.map(color => {
    const swatch = document.createElement("i"); swatch.style.background = color; swatch.title = color; return swatch;
  }));
  updateDetailSelect();
  if (!els.dialog.open) els.dialog.showModal();
}

function render() {
  const category = categories.find(item => item.id === activeCategory);
  const items = visibleMaterials();
  renderNav();
  renderGrid(items);
  renderSelection();
  els.count.textContent = items.length;
  els.activeLabel.textContent = `当前：${category.label}`;
  els.viewTitle.textContent = query ? `搜索：${query}` : category.label;
  els.viewDescription.textContent = query ? `在“${category.label}”中找到 ${items.length} 条素材。` : category.description;
}

els.search.addEventListener("input", event => { query = event.target.value; render(); });
els.search.addEventListener("keydown", event => { if (event.key === "Escape") { query = ""; els.search.value = ""; render(); } });
els.clearSearch.addEventListener("click", () => { query = ""; els.search.value = ""; activeCategory = "all"; render(); els.search.focus(); });
els.random.addEventListener("click", () => { const items = visibleMaterials(); if (items.length) openDetail(items[Math.floor(Math.random() * items.length)]); });
els.clearBoard.addEventListener("click", () => { selected.clear(); render(); });
els.dialogClose.addEventListener("click", () => els.dialog.close());
els.dialog.addEventListener("click", event => { if (event.target === els.dialog) els.dialog.close(); });
els.selectDetail.addEventListener("click", () => { if (currentDetail) toggleSelection(currentDetail.id); });
document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); els.search.focus(); }
});

render();
