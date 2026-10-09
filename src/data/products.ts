import type { Lang } from '../i18n/ui';

export interface Product {
  id: string;
  name: string;
  icon: 'drive' | 'iam';
  accent: 'cyan' | 'violet';
  href: string;
  status?: Record<Lang, string>;
  tagline: Record<Lang, string>;
  features: Record<Lang, string[]>;
}

export const products: Product[] = [
  {
    id: 'drive',
    name: 'MSXOR Drive',
    icon: 'drive',
    accent: 'cyan',
    href: 'https://drive.msxor.com',
    status: { en: 'Stable', zh: '稳定版' },
    tagline: {
      en: 'Your second memory — encrypted sync, sharing, and backup.',
      zh: '你的第二记忆：加密同步、分享与备份。',
    },
    features: {
      en: ['End-to-end encryption', 'Multi-device sync', 'One-tap sharing'],
      zh: ['端到端加密', '多端同步', '秒速分享'],
    },
  },
  {
    id: 'iam',
    name: 'MSXOR IAM',
    icon: 'iam',
    accent: 'violet',
    href: 'https://iam.msxor.com',
    status: { en: 'Beta', zh: '公测中' },
    tagline: {
      en: 'Identity and access management that stays out of the way.',
      zh: '身份与访问管理，只做该做的事。',
    },
    features: {
      en: ['Single sign-on (SSO)', 'Multi-factor authentication', 'Fine-grained access control'],
      zh: ['单点登录 SSO', '多因素认证 MFA', '细粒度权限控制'],
    },
  },
];
