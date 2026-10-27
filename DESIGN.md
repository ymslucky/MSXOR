# Design system — Phosphor Noir

<!-- impeccable:design-schema@1 -->

```json
{
  "world": "Phosphor Noir",
  "surface": {
    "bg": "#100F0C",
    "bg2": "#151310",
    "surface": "#1B1814",
    "surface2": "#232019",
    "border": "#2E2A22",
    "borderStrong": "#453F33"
  },
  "ink": {
    "primary": "#F2EDE2",
    "secondary": "#C4BCAB",
    "muted": "#93897A"
  },
  "accent": {
    "primary": "#F5A524",
    "deep": "#D98A0B",
    "wash": "#1E1810"
  },
  "status": {
    "success": "#7BC96F",
    "warning": "#F5A524",
    "error": "#E5645A"
  },
  "fonts": {
    "ui": "Inter Variable + Noto Sans SC",
    "mono": "JetBrains Mono Variable（代码/数据/终端专用，不作装饰）"
  },
  "radius": { "sm": "6px", "md": "10px" },
  "elevation": "1px border 为主；阴影仅在浮层与 hover 出现，带 y 轴偏移",
  "motion": "入口为一次性弹簧/揭示；滚动节奏由 data-animate 驱动；reduced-motion 全降级"
}
```

## Rules
- 深色是本世界的默认与唯一模式；不做浅色皮肤。
- 琥珀色只给信号：强调词、当前态、光标、CTA 描边。不用于大面积填充或渐变文字。
- 等宽字体只用于终端、代码、路径、数据与标签（~/now 这类世界内语义），正文一律 Inter/Noto。
- 章节底色交替使用 bg / surface 两档，以 1px 边线分隔，不用彩色 wash 大面积铺底。
- 阴影必须带偏移与模糊；禁止零偏移光晕式装饰阴影。
- 焦点环、选区、滚动条、光标都从琥珀/磷光绿体系取色。
- 动画保留现有 GSAP/Lenis 编排骨架，强调一次性入场与滚动揭示，不堆循环动效。
