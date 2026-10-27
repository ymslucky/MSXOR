# Design system — Evolution Garage

<!-- impeccable:design-schema@1 -->

```json
{
  "world": "Evolution Garage",
  "surface": {
    "bg": "#F1EEE5",
    "bg2": "#FAF8F2",
    "surface": "#FAF8F2",
    "surface2": "#EAE6D9",
    "border": "#D8D3C4",
    "borderStrong": "#B5AD99"
  },
  "ink": {
    "primary": "#22342E",
    "secondary": "#5A6B62",
    "muted": "#7D8A82"
  },
  "accent": {
    "primary": "#B25A32",
    "deep": "#9C4A26"
  },
  "status": {
    "success": "#4A7C59",
    "warning": "#B25A32",
    "error": "#A9442C"
  },
  "fonts": {
    "display": "Barlow Condensed 700/900（大标题，拉丁）",
    "ui": "Inter Variable + Noto Sans SC",
    "mono": "JetBrains Mono（仅代码/数据/终端点缀）"
  },
  "radius": { "sm": "6px", "md": "12px" },
  "elevation": "1px 边线为主；hover 用带 y 偏移的柔和阴影",
  "motion": "GSAP/Lenis 骨架；ease-out-quint 入场；reduced-motion 全降级"
}
```

## Rules
- 暖纸底 + 墨绿深字是唯一模式；不做暗色皮肤。
- 陶土橙只给信号：强调、CTA hover 阴影、当前态；不做大面积铺色或渐变文字。
- 大标题用 Barlow Condensed 大写压缩体；中文回退 Noto Sans SC。
- 章节只用 纸色/奶油 两档底色 + 1px 分隔线；不用网格纹理。
- CTA 主按钮为墨绿实底纸色字；次级为 1px 描边。
- 等宽字体不作为装饰；终端元素只保留 Hero 一张小型「维修单」。
