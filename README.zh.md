# MSXOR 品牌站

MSXOR 个人品牌站——中英双语、动画丰富、纯静态。主题：**AI 时代的自我进化**。

[English](README.md) · 简体中文

## 技术栈

- [Astro 5](https://astro.build) — 纯静态输出、文件式 i18n 路由
- TypeScript (strict) · ESLint · Prettier
- [Tailwind CSS 4](https://tailwindcss.com) — 设计系统
- [GSAP](https://gsap.com)（ScrollTrigger）— 滚动编舞、弹簧/弹性缓动
- [Lenis](https://lenis.darkroom.engineering) — 惯性平滑滚动
- Noto Sans SC 可变字体，按站点用字子集化（约 74 KB）

## 常用命令

```bash
npm install
npm run dev        # 启动开发服务器
npm run build      # 构建静态站点到 dist/
npm run preview    # 预览 dist/
npm run check      # astro 类型检查
npm run lint       # eslint
npm run format     # prettier
npm run fonts:subset  # 重新生成中文字体子集（修改中文文案后运行）
```

## 修改内容

所有文案集中在两处——不需要碰组件：

| 内容                 | 文件                   |
| -------------------- | ---------------------- |
| 界面文案（中英双语） | `src/i18n/ui.ts`       |
| 产品卡片             | `src/data/products.ts` |
| 计划、功能对比、FAQ  | `src/data/plans.ts`    |

修改中文文案后记得运行 `npm run fonts:subset`，让字体子集覆盖新字符
（未覆盖的字符会优雅回退到系统字体，不会乱码）。

## 国际化

- `/`（英文，默认）与 `/zh/`；付费计划在 `/pricing` 与 `/zh/pricing`
- 中文浏览器首次访问英文页会自动跳转一次（记录在 `sessionStorage`）；
  语言切换器永远不会和用户"对着干"
- Noto Sans SC（74 KB 子集）在 `window load` 之后注入——首屏先用系统中文字体，
  随后无缝切换（`font-display: swap`）

## 动画系统

- Hero 大标题：纯 CSS 逐字弹簧入场（零 JS 依赖，LCP 秒出）
- 滚动揭示通过 `data-animate` 属性驱动；无 JS 时内容照常可见（`.js` 门控），
  `prefers-reduced-motion` 下全部降级为简单淡入
- Lenis + GSAP ticker 集成；磁性按钮；卡片 3D 倾斜；章节背景色渐变

## 部署（Cloudflare Pages）

1. 把仓库推到 GitHub / GitLab
2. Cloudflare 控制台 → Workers & Pages → Create → Pages → 连接 Git 仓库
3. 构建设置：框架预设 **Astro**，构建命令 `npm run build`，输出目录 `dist`
4. 上线前把 `astro.config.mjs` 里的 `site` 改成真实域名

纯静态资源，无需 Functions，免费计划完全够用。
