# MSXOR 个人品牌站 · 设计文档

- 日期：2026-10-09
- 状态：设计已在对话中确认（深色科技风、动画丰富、占位数据起步）

## 1. 背景与目标

MSXOR 是个人品牌，用于向全球互联网用户宣传自研产品（云网盘、IAM 等）。本站是纯静态营销展示站：

- 建立品牌形象：酷炫、高级、吸引人、动画丰富
- 展示产品一览，引导访客进入各产品
- 说明付费计划

**非目标（v1 不做）**：博客/CMS、用户系统、站内试用、真实支付、产品文档站。

## 2. 技术栈

| 层       | 选型                             | 理由                                                          |
| -------- | -------------------------------- | ------------------------------------------------------------- |
| 框架     | Astro 5.x                        | 纯静态输出、内置 i18n 路由、组件化、Cloudflare Pages 一级支持 |
| 语言     | TypeScript (strict)              | 工程规范                                                      |
| 样式     | Tailwind CSS v4                  | 设计系统、响应式、深浅色模式                                  |
| 动画     | GSAP + ScrollTrigger + SplitText | 滚动编舞、文字拆分（均已免费）                                |
| 缓动     | 自定义弹簧/弹性 ease             | 复刻 anime.js 式"果冻感"                                      |
| 平滑滚动 | Lenis                            | 惯性滚动手感                                                  |
| 代码质量 | ESLint + Prettier                | 统一风格                                                      |

## 3. 站点结构与 i18n

**路由**：

- `/` → 根据 `Accept-Language` 重定向到 `/en/` 或 `/zh/`
- `/en/`、`/zh/` 首页
- `/en/pricing`、`/zh/pricing` 付费计划页
- 各语言 404 页

**i18n 实现**：

- 文案集中在 `src/i18n/ui.ts`，类型安全字典（en / zh 两份），新增语言只需新增字典
- 导航栏语言切换器，切换时保持当前页面路径
- `<html lang>` 与 `hreflang` 随语言正确输出

## 4. 页面设计

### 4.1 首页

1. Header：logo + 导航（产品、付费计划）+ 语言切换
2. Hero：MSXOR 大标题逐字弹入、标语、CTA、背景渐变光晕漂浮
3. 产品一览：产品卡片（数据驱动，v1 含云网盘、IAM）
4. 付费计划概要：3 档卡片 + 跳转付费计划页
5. CTA 横幅
6. Footer：品牌、导航链接、版权

### 4.2 付费计划页

- 标题与说明
- 3 档价格卡（Free / Pro / Max，占位数据，Pro 高亮）
- 功能对比表
- FAQ（3-5 条占位）
- CTA

## 5. 动画系统

设计语言：anime.js 式弹性物理感（回弹、过冲、stagger 编舞）。

- Hero 逐字弹入、背景光晕漂浮
- 滚动驱动入场（stagger 波浪）、章节背景色随滚动渐变
- 微交互：磁性按钮、hover 弹性缩放、产品卡 3D 倾斜
- Lenis 惯性平滑滚动
- **无障碍兜底**：`prefers-reduced-motion` 时全部动画降级为简单淡入；移动端动画简化但不缺席

## 6. 内容数据

- `src/data/products.ts`：产品卡片数据（名称、描述、链接、图标、渐变色）
- `src/data/plans.ts`：付费计划数据（档位、价格、功能清单）
- v1 使用合理的占位数据；后续只需修改数据文件即可更新站点，无需改动组件

## 7. 工程规范

- 目录结构：`components / layouts / pages / i18n / data / styles / utils`
- TypeScript strict、ESLint、Prettier
- 语义化 HTML、SEO meta、Open Graph、sitemap、robots.txt
- 无障碍 WCAG AA：对比度、键盘导航、焦点样式、aria 属性
- 性能：字体预加载/子集化、动画懒初始化、Lighthouse ≥ 90（性能/SEO/无障碍/最佳实践）

## 8. 部署

- `astro build` → `dist/`
- Cloudflare Pages 连接 Git 仓库自动部署（推荐路径）；备选 `wrangler pages deploy`
- 免费计划完全满足

## 9. 验证

- 构建通过、ESLint 零错误
- Lighthouse 四项 ≥ 90
- 多视口截图检查（移动 / 平板 / 桌面）
- 中英文页面逐一核对（文案完整性、链接、hreflang）
- `prefers-reduced-motion` 降级验证
