import type { Lang } from '../i18n/ui';

export interface Product {
  id: string;
  name: string;
  icon: 'cloud' | 'shield';
  accent: 'cyan' | 'violet';
  href: string;
  status?: Record<Lang, string>;
  tagline: Record<Lang, string>;
}

export const products: Product[] = [
  {
    id: 'drive',
    name: 'MSXOR Drive',
    icon: 'cloud',
    accent: 'cyan',
    href: 'https://drive.msxor.com',
    status: { en: 'Stable', zh: '稳定版' },
    tagline: {
      en: 'Encrypted cloud storage you actually own. Sync, share, and back up your files on infrastructure you can trust.',
      zh: '真正属于你的加密云存储。在值得信赖的基础设施上同步、分享、备份你的文件。',
    },
  },
  {
    id: 'iam',
    name: 'MSXOR IAM',
    icon: 'shield',
    accent: 'violet',
    href: 'https://iam.msxor.com',
    status: { en: 'Beta', zh: '公测中' },
    tagline: {
      en: 'Identity and access management without the enterprise bloat. SSO, MFA, and fine-grained permissions.',
      zh: '没有企业级冗余的身份与访问管理。单点登录、多因素认证、细粒度权限，一个不少。',
    },
  },
];
