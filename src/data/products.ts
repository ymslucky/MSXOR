import type { Lang } from '../i18n/ui';

export interface Product {
  id: string;
  name: string;
  icon: 'drive' | 'iam';
  accent: 'cyan' | 'violet';
  href: string;
  status?: Record<Lang, string>;
  tagline: Record<Lang, string>;
}

export const products: Product[] = [
  {
    id: 'drive',
    name: 'MSXOR Drive',
    icon: 'drive',
    accent: 'cyan',
    href: 'https://drive.msxor.com',
    status: { en: 'Stable & unbothered', zh: '稳定运行中' },
    tagline: {
      en: 'An external SSD for your brain. Sync, share, back up — your second memory never calls in sick.',
      zh: '给你的大脑外接一块 SSD。同步、分享、备份——你的第二段记忆，从不摸鱼。',
    },
  },
  {
    id: 'iam',
    name: 'MSXOR IAM',
    icon: 'iam',
    accent: 'violet',
    href: 'https://iam.msxor.com',
    status: { en: 'Evolving in beta', zh: 'Beta 进化中' },
    tagline: {
      en: 'Passwords keep leaking, so ours asks the only question that matters: are you really you? SSO, MFA, fine-grained access.',
      zh: '密码天天泄露，所以我们只关心一个终极问题：你到底是不是你。单点登录、多因素认证、细粒度权限，一个不少。',
    },
  },
];
