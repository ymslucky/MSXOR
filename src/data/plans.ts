import type { Lang } from '../i18n/ui';

export type PlanId = 'free' | 'pro' | 'max';

/** A value that is either a plain string or a per-language string. */
export type Tx = string | Record<Lang, string>;

export function tx(value: Tx, lang: Lang): string {
  return typeof value === 'string' ? value : value[lang];
}

export interface Plan {
  id: PlanId;
  name: string;
  price: number;
  popular?: boolean;
  blurb: Record<Lang, string>;
  features: Record<Lang, string[]>;
}

export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    blurb: { en: 'Everything to get started.', zh: '起步所需，一应俱全。' },
    features: {
      en: ['10 GB encrypted storage', '1 project', 'Core features', 'Community support'],
      zh: ['10 GB 加密存储', '1 个项目', '核心功能', '社区支持'],
    },
  },
  {
    id: 'pro',
    name: 'Free Plus',
    price: 0,
    popular: true,
    blurb: { en: 'More space. Same price.', zh: '更大的空间，同样的价格。' },
    features: {
      en: [
        '1 TB encrypted storage',
        'Unlimited projects',
        'Advanced sharing & controls',
        'Priority email support',
      ],
      zh: ['1 TB 加密存储', '无限项目', '高级分享与管控', '优先邮件支持'],
    },
  },
  {
    id: 'max',
    name: 'Free Max',
    price: 0,
    blurb: { en: 'All capabilities. Nothing held back.', zh: '全部能力，毫无保留。' },
    features: {
      en: [
        '5 TB encrypted storage',
        'Everything in Free Plus',
        'Team & family sharing',
        'Early access to new products',
      ],
      zh: ['5 TB 加密存储', '包含 Free Plus 全部功能', '团队与家庭共享', '新品抢先体验'],
    },
  },
];

export interface CompareRow {
  id: string;
  label: Record<Lang, string>;
  values: Record<PlanId, Tx>;
}

const yes = '✓';
const no = '—';

export const compareRows: CompareRow[] = [
  {
    id: 'storage',
    label: { en: 'Encrypted storage', zh: '加密存储空间' },
    values: { free: '10 GB', pro: '1 TB', max: '5 TB' },
  },
  {
    id: 'projects',
    label: { en: 'Projects', zh: '项目数量' },
    values: { free: '1', pro: '∞', max: '∞' },
  },
  {
    id: 'sharing',
    label: { en: 'Advanced sharing & controls', zh: '高级分享与管控' },
    values: { free: no, pro: yes, max: yes },
  },
  {
    id: 'team',
    label: { en: 'Team sharing', zh: '团队共享' },
    values: { free: no, pro: no, max: yes },
  },
  {
    id: 'support',
    label: { en: 'Support', zh: '支持' },
    values: {
      free: { en: 'Community', zh: '社区' },
      pro: { en: 'Priority email', zh: '优先邮件' },
      max: { en: 'Priority email', zh: '优先邮件' },
    },
  },
  {
    id: 'price',
    label: { en: 'Price', zh: '价格' },
    values: { free: '$0', pro: '$0', max: '$0' },
  },
];

export interface FaqItem {
  q: Record<Lang, string>;
  a: Record<Lang, string>;
}

export const faqItems: FaqItem[] = [
  {
    q: { en: 'Is it really free?', zh: '真的免费吗？' },
    a: { en: 'Yes — every plan is free today.', zh: '是，当前所有计划免费。' },
  },
  {
    q: { en: 'Will it stay free?', zh: '以后会收费吗？' },
    a: {
      en: 'Paid plans may arrive, but early users stay free forever.',
      zh: '未来会有付费计划，早期用户永久免费。',
    },
  },
  {
    q: { en: 'Is my data safe?', zh: '数据安全吗？' },
    a: {
      en: 'Encrypted storage and regular backups. Your data stays yours.',
      zh: '加密存储、定期备份，数据始终属于你。',
    },
  },
  {
    q: { en: 'Can I use it commercially?', zh: '可以商用吗？' },
    a: { en: 'Yes, for any project.', zh: '可以，用于任何项目都可以。' },
  },
];
