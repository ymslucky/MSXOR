# Product

<!-- impeccable:product-schema@1 -->

## Mission
MSXOR 是 MSXOR 的个人品牌站：以「AI 时代的自我进化」为主题，公开地 build / learn / experiment / iterate，把自己的演进过程当作一份诚实的 changelog 展示。

## Audience
- 主要访客：对个人技术品牌感兴趣的开发者、潜在合作方与雇主（推断自仓库内容与文案语气，未经用户确认）。
- 访客情境：快速了解"这个人现在在做什么、做过什么、信什么"。

## Platform
web

## Stack
- Astro 5 静态站点 + Tailwind CSS 4 + GSAP/Lenis
- 中英双语 i18n（/ 与 /zh/），Noto Sans SC 子集
- 部署：Cloudflare Pages，纯静态

## Capabilities
- 首页叙事章节：Now / Projects / Writing / Stack / Path / About / Contact
- Pricing 页（MSXOR Drive 早期计划，全部免费）
- 命令面板（⌘K）、语言切换、GitHub 星数
- 纯内容数据集中在 `src/i18n/ui.ts` 与 `src/data/plans.ts`

## Constraints
- 双语文案与内容事实保持不变（本文件之外的内容即产品真源）
- 无 JS / reduced-motion 可降级
- 字体子集化流程依赖中文文案稳定

## Open decisions
- 学习/实验栏目中的 [TBD] 文案，等待用户补充
- 访客优先级（招聘 vs 合作）未经用户确认

## Evidence
- README.zh.md、src/i18n/ui.ts、src/data/plans.ts、现有组件实现
