const materials = [
  {
    id: "blue-journal", title: "蓝白手账", category: "personal", categoryLabel: "个人风格", image: "./assets/covers/blue-journal.png",
    summary: "方格纸、蓝墨水与轻盈纸片，把记录做成可见的日常。", tags: ["手账", "蓝白", "中文"],
    use: "日记、习惯养成、阅读记录", elements: "点阵纸、蓝色墨迹、胶带、圆润标题、手写批注", motion: "14 层立体薄片持续旋转（Three.js）", colors: ["#2A5BA7", "#E8F0FE", "#F0F4F8", "#FFFFFF"], isMotion: true
  },
  {
    id: "puploop", title: "PupLoop 纸质档案袋", category: "personal", categoryLabel: "个人风格", image: "./assets/covers/puploop.jpg",
    summary: "牛皮纸文件袋、黑白作品卡和荧光贴纸组成的实体作品档案。", tags: ["牛皮纸", "作品集", "贴纸"],
    use: "作品集、素材库、创意工作台", elements: "档案袋、纸质卡片、回形针、编号章、荧光标签", motion: "抽卡、开袋、层叠切换、周边叠入（按原片时间轴）", colors: ["#B9824D", "#171512", "#F3EBDD", "#F4DA42", "#E84B38"], isMotion: true
  },
  {
    id: "peg", title: "Peg 中文极简", category: "personal", categoryLabel: "个人风格", image: "./assets/covers/peg.png",
    summary: "暖白纸面、翡翠绿强调和为中文单独调整的排版系统。", tags: ["极简", "中文", "设计令牌"],
    use: "知识库、文档、中文产品界面", elements: "暖白底、黑色文字、单一绿色强调、舒展行距", motion: "逐字弹入、内容推入、线条描绘", colors: ["#FAFAF8", "#16181D", "#00A878", "#8A8A8E"], isMotion: true
  },
  {
    id: "retro", title: "复古档案册", category: "personal", categoryLabel: "个人风格", image: "./assets/covers/retro.png",
    summary: "打印纸、等宽文字、编号与翻页，像被保存多年的研究档案。", tags: ["复古", "档案", "等宽"],
    use: "研究资料、展览、品牌故事", elements: "连续打印纸、打字机文字、页码、装订孔", motion: "沿左侧轴 3D 翻页（perspective 2500px / 0.8s）", colors: ["#D9D0BE", "#28241F", "#857866", "#B54B34"], isMotion: true
  },
  {
    id: "variant", title: "深色创作工作台", category: "personal", categoryLabel: "个人风格", image: "./assets/covers/variant.svg",
    summary: "黑色画布、窄图标栏和悬浮输入框构成的沉浸式创作空间。", tags: ["深色", "工作台", "工具"],
    use: "AI 创作、内容生成、社区浏览", elements: "52px 窄侧栏、黑色画布、12px 圆角悬浮输入框、低对比元信息", motion: "静态结构已确认，源码中无动效实现", colors: ["#080808", "#1C1C1C", "#E8E8E8", "#757575"], isMotion: true
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

// 每个素材的可复制提示词。
// 个人风格部分逐条对照本地素材库（风格素材库/styles/<id>/）的证据写成，不使用推测参数。
const prompts = {
  "blue-journal": `复现一套「蓝白手账」风格的界面。

配色：点阵方格纸 #E8F0FE、桌面 #F0F4F8，墨水蓝 #2A5BA7，纸面 #FFFFFF。
画框：440 × 880，圆角 40px；日记内边距 32px，背景网格 20px。
字体：标题与日期用 Quicksand（14 / 12px），连续天数 Quicksand 32px / 600，日记正文用 Gaegu 20px / 行高 1.6。
主视觉：用 Three.js 堆叠 14 层立体薄片，几何体 BoxGeometry(3, 0.05, 3)；每层 MeshPhongMaterial 取蓝色、透明度按 0.7 − i × 0.03 逐层递减，并叠加白色 EdgesGeometry 描边。
动效：每帧执行 group.rotation.y += 0.005，让薄片持续缓慢自转；每层保留静态倾角 rotation.y = sin(i × 0.5) × 0.1。
相机与灯光：PerspectiveCamera(45, aspect, 0.1, 1000)，位置 (5, 5, 8)，lookAt(0, planeCount × 0.07, 0)；DirectionalLight(0xffffff, 1) 位于 (5, 10, 7.5)，另加 AmbientLight(0xffffff, 0.6)。
以上参数全部来自原版源码，请照抄数值，不要自行加快转速或加入弹跳。`,

  "puploop": `复现「牛皮纸档案袋」风格的作品集展示。

配色：牛皮纸浅棕、暖白档案页、黑色作品卡为基础，亮红贴纸做焦点，荧光黄 / 草绿 / 亮蓝作小面积点缀（色值为画面估值）。
材质：纸张噪点、纸边、圆角与柔和纸张阴影。
信息设计：大号黑体品牌字、中文标题、双语字段、登记表格、档案编号、条码与标签；回形针、贴纸、手写口号、小涂鸦围绕主内容分布，不填满留白。
构图：作品与档案居中放大，白色背景留出呼吸空间。

动效：按素材库 34.7s 原片的时间轴还原。原片没有动效源码，时间曲线无法从视频还原，需要自行设定并在交付时标注。
0s 档案袋封面与角落涂鸦 → 3s 封面微缩并出现交互光标 → 7s 转到档案袋背面与标签 → 11s 抽出档案页 → 16s 设计师档案与作品卡展开 → 21s 周边商品叠入档案上层 → 26s 作品卡切换为蓝色界面 → 31s 回到档案袋封面。
手法限定为轻微缩放、上浮、错层入场和短促的卡片替换，不要加入原片没有的旋转或弹性回弹。`,

  "peg": `复现「Peg 中文极简」设计系统。

配色：暖白底 #FAFAF8，正文近黑 #16181D，唯一强调色翡翠绿 #00A878，次级文字 #8A8A8E。
中文排版：中文用 Noto Sans SC、拉丁字符用 Inter；正文 16px / 行高 1.75 / 字距 0.01em；标题字重 700；正文段落宽度控制在 34 个汉字以内。不要把拉丁文的负字距策略直接套到中文上。
约束：系统刻意扁平，默认不使用阴影；强调只来自缩放、字重与留白；分隔线 2px 近黑；强调点直径 10px 翡翠绿。

动效令牌（数值照抄素材库 assets/tokens/effects.css）：
--ease-reveal: cubic-bezier(0.2, 0.65, 0.2, 1)
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)
--dur-fast: 200ms ／ --dur-normal: 400ms ／ --dur-slow: 820ms ／ --dur-draw: 1400ms
--enter-y: 22px（入场位移）
逐字弹入：缓动用 --ease-spring，字间延迟拉丁 36ms、中文 48ms。
内容推入：从 --enter-y 的 22px 位移到 0，缓动 --ease-reveal，时长 --dur-normal。
线条描绘：时长 --dur-draw，从 scaleX(0) 生长到 1。
必须遵循 prefers-reduced-motion。`,

  "retro": `复现「复古档案册」风格的阅读器界面。

配色：纸张 #e4e2d7，背页 #dcdad0，墨色 #161616，次要文字 #8a8a85，桌面 #0a0a0a。
版式：最大书宽 600px；左侧装订边 32px、圆孔直径 12px，模拟连续打印纸；内容内边距 16px，正文双栏、栏间距 16px、点状分栏线；边框用 1px dotted 近黑。
字体：正文与元数据用 Space Mono，标题与页码用 VT323。
翻页交互：容器 perspective: 2500px；页面 transform-origin: left center；transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)；翻页态 transform: rotateY(-180deg)，同时页面正面的渐变阴影从 opacity 0 过渡到 1，时长同为 0.8s。鼠标拖拽或触屏滑动位移超过 50px 触发翻页。
保留装饰性的 CSS 条形码。原件禁用了文字选择与缩放，用于真实阅读器时应开放选择、缩放与键盘翻页。`,

  "variant": `复现「Variant 社区」深色创作工作台的静态结构。

已确认的静态设计：
底色纯黑 #000000，图标为白色；左侧窄侧栏宽 52px，图标按钮 28px、圆角 6px；顶部标题栏高 52px，字号 13px、字重 500、白色 50% 透明度；底部创作输入框圆角 12px、黑色 75% 透明度、背景模糊 25px；输入框内包含 Add image / Select style 控件与 Auto / Public 选项，提交按钮为默认禁用态。
字体：标题声明使用 Inter；全局另声明 Variant Neue Display / Variant Neue Text，但品牌字体许可未确认，不要当作可分发字体资产。

动效：素材库只确认了静态结构，源码中没有可读取的动效实现，社区地址还会跳转到登录页。因此不要凭空添加动效；如果确实需要交互反馈，自行定义并明确标注为自定，优先选择输入框聚焦时的边框与背景模糊过渡这类不改变结构的最小反馈。`,

  "xiaohongshu": `这条素材目前只有来源记录，还没有取得可验证的帖子画面，暂时不要用它做风格参考。

建议：等补上真实截图后再拆解配色、版式与动效；在此之前不要推测它的具体视觉元素。`
};

// 动效演示：优先直接呈现素材库里的原件，不做自创演绎。
// embed = 原版 HTML（同源 iframe），video = 原片，tokens = 按库里动效令牌复现。
const motionAssets = {
  "blue-journal": {
    kind: "embed",
    src: "./assets/library/blue-stationery-journal/preview.html",
    ratio: "3 / 4",
    design: [480, 920],
    source: "素材库原件 · preview.html",
    motion: "14 层立体薄片持续旋转",
    steps: [
      "Three.js 每帧 group.rotation.y += 0.005",
      "14 层 BoxGeometry(3, 0.05, 3)，透明度 0.7 − i × 0.03 逐层递减",
      "每层 rotation.y = sin(i × 0.5) × 0.1，相机位于 (5, 5, 8)"
    ],
    note: "原版画框 440 × 880、圆角 40px；字体 Quicksand + Gaegu 已随库本地化。"
  },
  "puploop": {
    kind: "video",
    src: "./assets/library/puploop-portfolio/original.mp4",
    poster: "./assets/library/puploop-portfolio/poster.jpg",
    ratio: "16 / 10",
    source: "素材库原件 · original.mp4",
    motion: "抽卡 · 层叠切换 · 周边叠入",
    steps: [
      "0s 档案袋封面 → 3s 封面微缩并出现交互光标",
      "7s 档案袋背面与标签 → 11s 抽出档案页 → 16s 作品卡展开",
      "21s 周边叠入 → 26s 切换蓝色界面 → 31s 回到封面"
    ],
    note: "原视频 34.7s / 1152×720。库内没有动效源码，时间曲线无法从视频还原，所以这里直接播放原件。"
  },
  "peg": {
    kind: "tokens",
    ratio: "5 / 4",
    source: "素材库原件 · tokens/effects.css",
    motion: "逐字弹入 · 内容推入 · 线条描绘",
    steps: [
      "逐字弹入：--ease-spring cubic-bezier(0.34, 1.56, 0.64, 1)，字间 48ms",
      "内容推入：--enter-y 22px，--ease-reveal cubic-bezier(0.2, 0.65, 0.2, 1)，--dur-normal 400ms",
      "线条描绘：--line-weight 2px；强调点 --peg-dot-size 10px 翡翠绿"
    ],
    note: "演示页引用的 peg-animate.js 未随库保存，这里按库里 effects.css 的动效令牌复现，数值与令牌一致。"
  },
  "retro": {
    kind: "embed",
    src: "./assets/library/retro-archival-reader/preview.html",
    ratio: "4 / 5",
    design: [620, 780],
    autoFlip: true,
    source: "素材库原件 · preview.html",
    motion: "沿左侧轴 3D 翻页",
    steps: [
      "透视 perspective: 2500px，transform-origin: left center",
      "transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
      "翻页 rotateY(-180deg)，同时叠加 0 → 1 的渐变阴影；拖动或滑动超过 50px 触发"
    ],
    note: "原件支持左右拖动翻页；这里每 2.2 秒自动翻一页演示。"
  }
};

// Peg：按素材库动效令牌复现（数值全部取自 effects.css）
const pegDemoHTML = `<div class="demo demo-peg">
  <div class="pg-title">${"从稳定开始".split("").map((c, i) => `<i style="--c:${i}">${c}</i>`).join("")}</div>
  <div class="pg-rule"><i></i></div>
  <div class="pg-lines">
    <div class="pg-line" style="--n:0"></div>
    <div class="pg-line" style="--n:1"></div>
    <div class="pg-line short" style="--n:2"></div>
  </div>
  <div class="pg-peg"></div>
</div>`;

let motionGeneration = 0;
let activeVideo = null;
let activeEmbed = null;

function clearMotion() {
  motionGeneration += 1;
  if (activeVideo) { activeVideo.pause(); activeVideo = null; }
  activeEmbed = null;
}

// 让原版页面按比例完整缩放进舞台
function fitEmbed(asset) {
  if (!activeEmbed || !asset || !asset.design) return;
  const { frame, wrap } = activeEmbed;
  const [dw, dh] = asset.design;
  if (!wrap.clientWidth || !wrap.clientHeight) return;
  const scale = Math.min(wrap.clientWidth / dw, wrap.clientHeight / dh);
  frame.style.width = `${dw}px`;
  frame.style.height = `${dh}px`;
  frame.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

// 复古档案册：驱动原件自身的 .flipped 类循环演示翻页
function startAutoFlip(frame) {
  const generation = motionGeneration;
  const pages = () => {
    try { return frame.contentDocument ? frame.contentDocument.querySelectorAll(".page") : []; }
    catch (error) { return []; }
  };
  let index = 0;
  const step = () => {
    if (generation !== motionGeneration) return;
    const list = pages();
    if (!list.length) return;
    if (index < list.length) {
      list[index].classList.add("flipped");
      index += 1;
      setTimeout(step, 2200);
    } else {
      setTimeout(() => {
        if (generation !== motionGeneration) return;
        pages().forEach(page => page.classList.remove("flipped"));
        index = 0;
        setTimeout(step, 1200);
      }, 1800);
    }
  };
  setTimeout(step, 1600);
}

function renderMotion(item) {
  clearMotion();
  const asset = motionAssets[item.id];
  els.motionStage.replaceChildren();
  els.motionStage.style.aspectRatio = asset ? asset.ratio : "5 / 4";

  if (!asset) {
    els.motionCaption.innerHTML = '<p class="mc-empty">素材库里这条只有静态画面，没有可复现的动效原件；右侧的动效说明来自来源记录，不是实测结果。</p>';
    return;
  }

  if (asset.kind === "embed") {
    const wrap = document.createElement("div");
    wrap.className = "asset-embed";
    const frame = document.createElement("iframe");
    frame.src = asset.src;
    frame.title = `${item.title} 动效原件`;
    frame.setAttribute("scrolling", "no");
    wrap.append(frame);
    els.motionStage.append(wrap);
    activeEmbed = { frame, wrap };
    frame.addEventListener("load", () => {
      fitEmbed(asset);
      if (asset.autoFlip) startAutoFlip(frame);
    });
    requestAnimationFrame(() => fitEmbed(asset));
  } else if (asset.kind === "video") {
    const wrap = document.createElement("div");
    wrap.className = "asset-video";
    const video = document.createElement("video");
    video.src = asset.src;
    if (asset.poster) video.poster = asset.poster;
    video.controls = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";
    wrap.append(video);
    els.motionStage.append(wrap);
    activeVideo = video;
    video.play().catch(() => {});
  } else if (asset.kind === "tokens") {
    els.motionStage.innerHTML = pegDemoHTML;
  }

  const caption = document.createElement("div");
  const source = document.createElement("p");
  source.className = "mc-source";
  source.textContent = asset.source;
  const title = document.createElement("p");
  title.className = "mc-motion";
  title.textContent = asset.motion;
  const list = document.createElement("ol");
  asset.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    list.append(li);
  });
  const note = document.createElement("p");
  note.className = "mc-note";
  note.textContent = asset.note;
  const actions = document.createElement("div");
  actions.className = "mc-actions";
  const replay = document.createElement("button");
  replay.type = "button";
  replay.className = "mc-replay";
  replay.textContent = "↻ 重播动效";
  replay.addEventListener("click", () => renderMotion(item));
  const original = document.createElement("a");
  original.className = "mc-original";
  original.href = asset.src;
  original.target = "_blank";
  original.rel = "noopener";
  original.textContent = "打开原件 ↗";
  actions.append(replay, original);
  caption.append(source, title, list, note, actions);
  els.motionCaption.replaceChildren(caption);
}

// 素材库数据：由 work/build-library-data.py 从本地素材库 styles/*/style.json 抽取
let libraryData = null;
let promptTargetValue = "";
// 本地桥接：跑 work/library-bridge.py 后可直接写入素材库 prompts/ 目录。
// 只有页面本身由桥接提供时才启用直存：公网页面请求本机属于本地网络访问，
// 浏览器会放行 GET 但拦掉带预检的 POST，所以公网上只保留「下载模板」。
const LOCAL_HOST = ["127.0.0.1", "localhost", "::1"].includes(location.hostname);
const BRIDGE_URL = LOCAL_HOST ? location.origin : "http://127.0.0.1:8788";
let bridgeReady = false;

const promptExamples = ["App 首页", "产品落地页", "小红书封面", "汇报 PPT 封面", "微信小程序", "数据看板"];

const tokenLabels = {
  colors: "配色", fonts: "字体", typography: "排版", typography_px: "字号",
  layout: "布局", motion: "动效", spacing: "间距", effects: "效果", shadows: "阴影"
};

function tokenLines(entry) {
  const groups = entry.tokens || {};
  const order = ["colors", "fonts", "typography", "typography_px", "layout", "spacing", "motion", "effects", "shadows"];
  const keys = [...order.filter(key => groups[key]), ...Object.keys(groups).filter(key => !order.includes(key))];
  return keys.map(key => {
    const body = (groups[key] || []).map(([name, value]) => `${name} ${value}`).join("、");
    return `${tokenLabels[key] || key}：${body}`;
  }).filter(line => line.length > 4);
}

function fallbackPrompt(item, goal) {
  return [
    `使用 $style-library 中的素材条目作为参考，为${goal}制作。`,
    "",
    `风格概述：${item.summary}`,
    `视觉元素：${item.elements}`,
    `适用场景：${item.use}`,
    `动效参考：${item.motion}`,
    `色板：${item.colors.join(" / ")}`,
    "",
    "实现要求：保持该风格的层级、留白与节奏；控件状态完整；中文排版使用思源黑体 / Noto Sans SC，行高不低于 1.6；不要覆盖素材库原件。"
  ].join("\n");
}

// 生成复现提示词：优先使用素材库 style.json 的真实参数
function buildPrompt(item, target) {
  const goal = (target === undefined ? promptTargetValue : target || "").trim() || "【产品用途】";
  const entry = libraryData && libraryData[item.id];
  if (!entry) return prompts[item.id] && !promptTargetValue ? prompts[item.id] : fallbackPrompt(item, goal);

  const lines = [];
  lines.push(`使用 $style-library 中的 ${entry.libraryId} 作为参考，为${goal}制作。`);
  lines.push("");
  lines.push("第一步：先读取素材库档案，以它作为唯一权威来源");
  lines.push(`- 风格素材库/styles/${entry.libraryId}/style.json`);
  lines.push(`- 风格素材库/styles/${entry.libraryId}/STYLE.md`);
  lines.push("");
  const tokens = tokenLines(entry);
  if (tokens.length) {
    lines.push("可复用参数（取自 style.json，请照抄数值，不要自行改动）");
    tokens.forEach(line => lines.push(`- ${line}`));
    lines.push("");
  }
  const assets = Object.entries(entry.assets || {});
  if (assets.length) {
    lines.push("素材库原件（可引用，不要覆盖）");
    assets.forEach(([key, value]) => lines.push(`- ${key}: 风格素材库/styles/${entry.libraryId}/${value}`));
    lines.push("");
  }
  lines.push("实现要求");
  lines.push("- 只复用上面记录的参数，不要引入档案里没有的效果；");
  lines.push("- 中文内容另选适配字体，正文行高不低于 1.6；");
  lines.push(`- 不要修改 风格素材库/styles/${entry.libraryId}/ 下的任何原件；`);
  lines.push("- 完成后说明哪些参数来自档案、哪些是你自行决定的。");
  if ((entry.reuseNotes || []).length) {
    lines.push("");
    lines.push("素材库备注");
    entry.reuseNotes.forEach(note => lines.push(`- ${note}`));
  }
  return lines.join("\n");
}

// 导出成素材库 prompts/ 目录可直接使用的模板
function buildPromptFile(item, target) {
  const entry = libraryData && libraryData[item.id];
  const baseName = (entry ? entry.name : item.title).split("·")[0].trim();
  const goal = (target || "").trim();
  const safeGoal = goal ? goal.replace(/[\\/:*?"<>|\s]+/g, "").slice(0, 14) : "";
  const title = `${baseName}复现${safeGoal ? "-" + safeGoal : ""}`;
  const today = new Date().toISOString().slice(0, 10);
  const body = [
    "---",
    "cssclasses: [style-library]",
    "---",
    "",
    "[[风格素材库/素材库首页|首页]]　/　[[风格素材库/prompts/INDEX|提示词]]",
    "",
    `# ${title}`,
    "",
    "[[风格素材库/prompts/INDEX|← 返回提示词库]]",
    "",
    "**用法：** 复制下面文本，替换【占位内容】，再附上你的素材或项目需求。",
    "",
    "```text",
    buildPrompt(item, target),
    "```",
    "",
    "> [!info]- 验证状态与使用记录",
    `> 由风格素材库网页于 ${today} 生成；来源条目 \`${entry ? entry.libraryId : item.id}\`。尚未完成实际生成效果验证。暂无使用记录。`,
    ""
  ].join("\n");
  return { title, body };
}

function renderPrompt() {
  if (!currentDetail) return;
  els.promptText.textContent = buildPrompt(currentDetail);
}

function renderPromptChips() {
  els.promptChips.replaceChildren(...promptExamples.map(text => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.textContent = text;
    chip.addEventListener("click", () => {
      els.promptTarget.value = text;
      promptTargetValue = text;
      renderPrompt();
    });
    return chip;
  }));
}

async function loadLibraryData() {
  try {
    const response = await fetch("./assets/library-data.json", { cache: "no-cache" });
    if (!response.ok) return;
    libraryData = await response.json();
    if (currentDetail) renderPrompt();
  } catch (error) {
    libraryData = null;
  }
}

function downloadPromptFile(title, body) {
  const blob = new Blob([body], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${title}.md`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function setSaveButtonLabel(text, state) {
  els.downloadPrompt.textContent = text;
  els.downloadPrompt.classList.toggle("saved", state === "ok");
  els.downloadPrompt.classList.toggle("failed", state === "fail");
}

async function savePromptFile() {
  if (!currentDetail) return;
  const { title, body } = buildPromptFile(currentDetail, promptTargetValue);
  if (bridgeReady) {
    setSaveButtonLabel("保存中…");
    try {
      const entry = libraryData && libraryData[currentDetail.id];
      const goal = (promptTargetValue || "").trim();
      const summary = goal
        ? `使用已归档的字体、配色与动效参数，用于${goal}。`
        : "使用已归档的字体、配色与动效参数。";
      const response = await fetch(`${BRIDGE_URL}/save-prompt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body, summary, libraryId: entry ? entry.libraryId : currentDetail.id })
      });
      const result = await response.json();
      if (result && result.ok) {
        setSaveButtonLabel(result.overwrote ? "✓ 已覆盖素材库模板" : "✓ 已存入素材库", "ok");
      } else {
        setSaveButtonLabel("保存失败，改为下载", "fail");
        downloadPromptFile(title, body);
      }
    } catch (error) {
      setSaveButtonLabel("保存失败，改为下载", "fail");
      downloadPromptFile(title, body);
    }
  } else {
    downloadPromptFile(title, body);
    setSaveButtonLabel("✓ 已下载 .md", "ok");
  }
  if (promptSaveTimer) clearTimeout(promptSaveTimer);
  promptSaveTimer = setTimeout(() => {
    setSaveButtonLabel(bridgeReady ? "保存到素材库" : "下载模板");
  }, 2600);
}

// 探测本地桥接，决定按钮是「保存到素材库」还是「下载模板」
async function probeBridge() {
  if (!LOCAL_HOST) {
    bridgeReady = false;
    setSaveButtonLabel("下载模板");
    els.promptHint.textContent = "填上你要做的东西，提示词会自动带上这套风格的真实参数。下载的 .md 放进「风格素材库/prompts/」就是一条模板；想直接存进素材库，用本地地址打开 http://127.0.0.1:8788/。";
    return;
  }
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 1500);
    const response = await fetch(`${BRIDGE_URL}/health`, { signal: controller.signal });
    clearTimeout(timer);
    const result = await response.json();
    bridgeReady = Boolean(result && result.ok);
  } catch (error) {
    bridgeReady = false;
  }
  setSaveButtonLabel(bridgeReady ? "保存到素材库" : "下载模板");
}

const els = {
  nav: document.querySelector("#categoryNav"), grid: document.querySelector("#libraryGrid"), template: document.querySelector("#cardTemplate"),
  search: document.querySelector("#searchInput"), count: document.querySelector("#resultCount"), activeLabel: document.querySelector("#activeLabel"),
  viewTitle: document.querySelector("#viewTitle"), viewDescription: document.querySelector("#viewDescription"), empty: document.querySelector("#emptyState"),
  clearSearch: document.querySelector("#clearSearch"), random: document.querySelector("#randomButton"), selectedList: document.querySelector("#selectedList"),
  boardEmpty: document.querySelector("#boardEmpty"), clearBoard: document.querySelector("#clearBoard"), dialog: document.querySelector("#detailDialog"),
  dialogClose: document.querySelector("#dialogClose"), detailImage: document.querySelector("#detailImage"), detailNumber: document.querySelector("#detailNumber"),
  detailCategory: document.querySelector("#detailCategory"), detailTitle: document.querySelector("#detailTitle"), detailSummary: document.querySelector("#detailSummary"),
  detailTags: document.querySelector("#detailTags"), detailUse: document.querySelector("#detailUse"), detailElements: document.querySelector("#detailElements"),
  detailMotion: document.querySelector("#detailMotion"), detailSwatches: document.querySelector("#detailSwatches"), selectDetail: document.querySelector("#selectDetail"),
  visualTabs: document.querySelector("#visualTabs"), visualBody: document.querySelector("#visualBody"), motionStage: document.querySelector("#detailMotionStage"),
  motionCaption: document.querySelector("#detailMotionCaption"), promptText: document.querySelector("#detailPrompt"), copyPrompt: document.querySelector("#copyPrompt"),
  promptTarget: document.querySelector("#promptTarget"), generatePrompt: document.querySelector("#generatePrompt"), promptChips: document.querySelector("#promptChips"),
  downloadPrompt: document.querySelector("#downloadPrompt"), promptHint: document.querySelector("#promptHint")
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
  promptTargetValue = "";
  els.promptTarget.value = "";
  renderPromptChips();
  renderPrompt();
  resetCopyButton();
  renderMotion(item);
  setVisualView(motionAssets[item.id] ? "motion" : "cover");
  updateDetailSelect();
  els.dialog.scrollTop = 0;
  if (!els.dialog.open) els.dialog.showModal();
}

// 左侧视图：动效演示 / 原图封面
function setVisualView(view) {
  const hasDemo = Boolean(currentDetail && motionAssets[currentDetail.id]);
  const next = view === "motion" && hasDemo ? "motion" : "cover";
  els.visualBody.dataset.view = next;
  els.motionCaption.classList.toggle("on", next === "motion" || !hasDemo);
  [...els.visualTabs.querySelectorAll("button")].forEach(button => {
    const selected = button.dataset.view === next;
    button.setAttribute("aria-selected", String(selected));
    button.disabled = button.dataset.view === "motion" && !hasDemo;
  });
  if (next === "motion") fitEmbed(motionAssets[currentDetail.id] || {});
}

function resetCopyButton() {
  els.copyPrompt.textContent = "复制";
  els.copyPrompt.classList.remove("copied");
}

async function copyPrompt() {
  if (!currentDetail) return;
  const text = els.promptText.textContent || buildPrompt(currentDetail);
  let ok = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      ok = true;
    }
  } catch (error) {
    ok = false;
  }
  if (!ok) {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.append(helper);
    helper.select();
    try { ok = document.execCommand("copy"); } catch (error) { ok = false; }
    helper.remove();
  }
  els.copyPrompt.textContent = ok ? "✓ 已复制" : "复制失败，请手动选择";
  els.copyPrompt.classList.toggle("copied", ok);
  if (copyResetTimer) clearTimeout(copyResetTimer);
  copyResetTimer = setTimeout(resetCopyButton, 2200);
}

let copyResetTimer = null;
let promptInputTimer = null;
let promptSaveTimer = null;

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
els.dialog.addEventListener("close", clearMotion);
window.addEventListener("resize", () => {
  if (currentDetail && motionAssets[currentDetail.id]) fitEmbed(motionAssets[currentDetail.id]);
});
els.dialog.addEventListener("click", event => { if (event.target === els.dialog) els.dialog.close(); });
els.selectDetail.addEventListener("click", () => { if (currentDetail) toggleSelection(currentDetail.id); });
els.copyPrompt.addEventListener("click", copyPrompt);
els.downloadPrompt.addEventListener("click", savePromptFile);
els.generatePrompt.addEventListener("click", renderPrompt);
els.promptTarget.addEventListener("input", event => {
  promptTargetValue = event.target.value;
  if (promptInputTimer) clearTimeout(promptInputTimer);
  promptInputTimer = setTimeout(renderPrompt, 260);
});
els.promptTarget.addEventListener("keydown", event => {
  if (event.key === "Enter") { event.preventDefault(); renderPrompt(); }
});
els.visualTabs.addEventListener("click", event => {
  const button = event.target.closest("button[data-view]");
  if (!button || button.disabled) return;
  setVisualView(button.dataset.view);
});
document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); els.search.focus(); }
});

render();
loadLibraryData();
probeBridge();

// 支持 ?style=<id> 深链，便于直接分享某张风格卡
const deepLink = new URLSearchParams(location.search).get("style");
if (deepLink) {
  const target = materials.find(item => item.id === deepLink);
  if (target) {
    activeCategory = "all";
    query = "";
    render();
    openDetail(target);
  }
}
