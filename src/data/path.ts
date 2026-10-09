import type { Lang } from '../i18n/ui';

export interface Milestone {
  version: string;
  date: string;
  /** Current position — visually emphasized on the timeline. */
  current?: boolean;
  summary: Record<Lang, string>;
  /** 【待确认】 — milestone needs real data from the owner. */
  tbd?: boolean;
}

/** Real history comes from this repo's git log; earlier steps await owner input. */
export const milestones: Milestone[] = [
  {
    version: 'v0.1',
    date: '2026-10-09',
    summary: {
      en: 'Design spec written; scope locked: bilingual, static, animation-first.',
      zh: '设计规格成稿；范围锁定：双语、纯静态、动画优先。',
    },
  },
  {
    version: 'v1.0',
    date: '2026-10-09',
    summary: {
      en: 'Brand site shipped. Astro + i18n + GSAP. Lighthouse 100 across the board.',
      zh: '品牌站上线。Astro + i18n + GSAP。Lighthouse 四项满分。',
    },
  },
  {
    version: 'v2.0',
    date: '2026-10-09',
    summary: {
      en: 'Humor pass; XOR manifesto added as the brand core.',
      zh: '幽默文案版；XOR 宣言成为品牌内核。',
    },
  },
  {
    version: 'v3.0',
    date: '2026-10-09',
    summary: {
      en: 'Copy tightened to industry standard; GitHub links wired.',
      zh: '文案对齐行业标准；接入 GitHub 链接。',
    },
  },
  {
    version: 'v4.0',
    current: true,
    date: '2026-10-09',
    summary: {
      en: 'Light blueprint redesign; ⌘K palette; terminal UI; deploy config.',
      zh: '亮色蓝图重构；⌘K 命令面板；终端 UI；部署配置。',
    },
  },
  {
    version: 'next',
    date: 'TBD',
    summary: {
      en: '[TBD] earlier milestones: first commit, first product, first real user.',
      zh: '【待确认】更早的里程碑：第一次提交、第一个产品、第一个真实用户。',
    },
    tbd: true,
  },
];
