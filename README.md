# MSXOR Brand Site

English | [简体中文](README.zh.md)

Personal brand site for MSXOR — bilingual (EN/ZH), animation-rich, pure-static, built with Astro.

## Stack

- [Astro 5](https://astro.build) — static output, file-based i18n routing
- TypeScript (strict) · ESLint · Prettier
- [Tailwind CSS 4](https://tailwindcss.com) — design system
- [GSAP](https://gsap.com) (ScrollTrigger) — scroll choreography, spring/elastic eases
- [Lenis](https://lenis.darkroom.engineering) — inertial smooth scrolling
- Noto Sans SC variable font, glyph-subset to site copy (~74 KB)

## Commands

```bash
npm install
npm run dev        # start dev server
npm run build      # build static site to dist/
npm run preview    # preview dist/
npm run check      # astro type check
npm run lint       # eslint
npm run format     # prettier
npm run fonts:subset  # regenerate the CJK font subset (after editing zh copy)
```

## Editing content

All copy lives in two places — no component edits needed:

| Content                      | File                   |
| ---------------------------- | ---------------------- |
| UI copy (both languages)     | `src/i18n/ui.ts`       |
| Product cards                | `src/data/products.ts` |
| Plans, comparison table, FAQ | `src/data/plans.ts`    |

After changing Chinese text run `npm run fonts:subset` so the font subset covers
the new glyphs (missing glyphs fall back to system fonts gracefully).

## Internationalization

- `/` (EN, default) and `/zh/`; pricing at `/pricing` and `/zh/pricing`
- First visit to an EN page auto-redirects zh-browser users once (remembered in
  `sessionStorage`); the language switcher never fights the user
- Noto Sans SC (74 KB subset) is injected after `window load` — first paint uses
  system CJK fonts, then swaps seamlessly (`font-display: swap`)

## Animation system

- Hero title: pure-CSS per-character spring cascade (zero JS dependency, instant LCP)
- Scroll reveals via `data-animate` attributes; content stays visible without JS
  (`.js` gate) and under `prefers-reduced-motion` everything degrades to simple fades
- Lenis + GSAP ticker integration; magnetic buttons; 3D card tilt; section
  background color morphs

## Deployment (Cloudflare Pages)

1. Push this repo to GitHub/GitLab
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git
3. Build settings: framework preset **Astro**, build `npm run build`, output `dist`
4. Set the real domain in `astro.config.mjs` (`site`) before going live

All free-plan friendly: static assets only, no functions required.
