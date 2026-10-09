import type { Lang } from '../i18n/ui';

export interface Project {
  id: string;
  name: string;
  tagline: Record<Lang, string>;
  /** Rendered only when non-empty. */
  stack: string[];
  status: Record<Lang, string>;
  version?: string;
  href: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    id: 'site',
    name: 'msxor.dev (this site)',
    tagline: {
      en: 'The evolution log itself: Astro + i18n + GSAP, deployed as pure static assets.',
      zh: '进化日志本体：Astro + i18n + GSAP，纯静态部署。',
    },
    stack: ['Astro 5', 'TypeScript', 'Tailwind 4', 'GSAP'],
    status: { en: 'Stable', zh: '稳定' },
    version: 'v2026.10',
    href: 'https://github.com/ymslucky/MSXOR',
    repo: 'ymslucky/MSXOR',
  },
  {
    id: 'drive',
    name: 'MSXOR Drive',
    tagline: {
      en: 'Encrypted cloud storage you actually own. Sync, share, back up.',
      zh: '真正属于你的加密云存储：同步、分享、备份。',
    },
    // 【待确认】 real stack of MSXOR Drive — fill in before shipping
    stack: [],
    status: { en: 'Stable', zh: '稳定' },
    version: 'v1.0',
    href: 'https://drive.msxor.com',
  },
  {
    id: 'iam',
    name: 'MSXOR IAM',
    tagline: {
      en: 'Identity and access management that stays out of the way. SSO, MFA, fine-grained access.',
      zh: '身份与访问管理，只做该做的事：SSO、MFA、细粒度权限。',
    },
    // 【待确认】 real stack of MSXOR IAM — fill in before shipping
    stack: [],
    status: { en: 'Beta', zh: '公测' },
    version: 'v0.9',
    href: 'https://iam.msxor.com',
  },
];
