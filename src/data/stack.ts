import type { Lang } from '../i18n/ui';

export interface StackRow {
  category: Record<Lang, string>;
  tool: string;
  use: Record<Lang, string>;
  alt: string;
  /** 【待确认】 — row needs real data from the owner. */
  tbd?: boolean;
}

export const stackRows: StackRow[] = [
  {
    category: { en: 'Site', zh: '网站' },
    tool: 'Astro 5',
    use: { en: 'Static output, file-based i18n', zh: '静态输出、文件式 i18n' },
    alt: 'Next.js',
  },
  {
    category: { en: 'Deploy', zh: '部署' },
    tool: 'Cloudflare Pages',
    use: { en: 'Static hosting, free tier', zh: '静态托管，免费计划' },
    alt: 'Vercel',
  },
  {
    category: { en: 'Animation', zh: '动画' },
    tool: 'GSAP',
    use: { en: 'Scroll choreography', zh: '滚动编舞' },
    alt: 'motion',
  },
  {
    category: { en: 'AI tools', zh: 'AI 工具' },
    tool: 'TBD',
    use: { en: 'Daily coding loop', zh: '日常编码流程' },
    alt: '—',
    tbd: true,
  },
  {
    category: { en: 'Automation', zh: '自动化' },
    tool: 'TBD',
    use: { en: 'Deploy & sync pipelines', zh: '部署与同步流水线' },
    alt: '—',
    tbd: true,
  },
  {
    category: { en: 'Learning', zh: '学习' },
    tool: 'TBD',
    use: { en: 'Papers, courses, practice', zh: '论文、课程、实践' },
    alt: '—',
    tbd: true,
  },
];
