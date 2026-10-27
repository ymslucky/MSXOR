# Design system — HyperCard Shoebox Stack

<!-- impeccable:design-schema@1 -->

```json
{
  "world": "HyperCard Shoebox Stack",
  "surface": {
    "bg": "#FFFFFF",
    "surface": "#FFFFFF",
    "border": "#101010",
    "borderWidth": "2px cards / 1px dividers"
  },
  "ink": {
    "primary": "#101010",
    "note": "唯一前景色；无彩色、无灰字（灰只以 stipple 点阵纹理出现）"
  },
  "accent": {
    "primary": "#101010",
    "note": "强调即反转：黑底白字"
  },
  "fonts": {
    "display": "Silkscreen 400/700（像素体，拉丁；中文回退 Noto Sans SC 900）",
    "ui": "Inter Variable + Noto Sans SC",
    "mono": "JetBrains Mono（仅代码块）"
  },
  "radius": { "sm": "0px", "md": "2px" },
  "elevation": "无阴影；按下/悬停 = 黑白反转",
  "motion": "GSAP/Lenis；卡片 dissolve 交叉淡化；reduced-motion 全降级"
}
```

## Rules
- 1-bit 黑白是唯一模式；不做彩色、不做暗色。
- 卡片是基本单位：2px 黑边、直角、stipple 纹带开头、底部三键导航（上一张 / INDEX / 下一张）。
- 按钮是「画出来的」：2px 黑边像素体标签，hover/active 反转为黑底白字。
- 链接用点状下划线；无阴影、无渐变、无网格线。
- 像素体只用于标题、导航与按钮标签；正文一律 Inter/Noto。
