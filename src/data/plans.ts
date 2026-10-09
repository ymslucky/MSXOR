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
    blurb: { en: 'Everything you need to get started.', zh: '起步所需的一切。' },
    features: {
      en: ['10 GB encrypted storage', '1 project', 'Core features', 'Community support'],
      zh: ['10 GB 加密存储', '1 个项目', '核心功能', '社区支持'],
    },
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 9,
    popular: true,
    blurb: { en: 'For daily drivers and power users.', zh: '为日常与重度用户准备。' },
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
    name: 'Max',
    price: 29,
    blurb: { en: 'Maximum space, maximum capability.', zh: '最大空间，完整能力。' },
    features: {
      en: [
        '5 TB encrypted storage',
        'Everything in Pro',
        'Team & family sharing',
        'Early access to new products',
      ],
      zh: ['5 TB 加密存储', '包含 Pro 全部功能', '团队与家庭共享', '新产品抢先体验'],
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
    label: { en: 'Team & family sharing', zh: '团队与家庭共享' },
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
];

export interface FaqItem {
  q: Record<Lang, string>;
  a: Record<Lang, string>;
}

export const faqItems: FaqItem[] = [
  {
    q: { en: 'How can I pay?', zh: '支持哪些支付方式？' },
    a: {
      en: 'We currently accept major credit and debit cards. More payment options are on the roadmap.',
      zh: '目前支持主流信用卡和借记卡，更多支付方式正在规划中。',
    },
  },
  {
    q: { en: 'Can I cancel anytime?', zh: '可以随时取消吗？' },
    a: {
      en: 'Yes. All paid plans are billed monthly with no lock-in — cancel in one click from your account settings.',
      zh: '可以。所有付费计划均按月计费、无任何绑定——在账户设置中一键取消。',
    },
  },
  {
    q: { en: 'What happens to my data if I downgrade?', zh: '降级后我的数据会怎样？' },
    a: {
      en: 'Your files stay safe and intact. Syncing pauses until you are back within the free quota — nothing is ever deleted automatically.',
      zh: '你的文件会安全保留。在回到免费额度之前，同步会暂时暂停——我们绝不会自动删除任何数据。',
    },
  },
  {
    q: { en: 'Do you offer education or student discounts?', zh: '有教育优惠或学生折扣吗？' },
    a: {
      en: 'Education pricing is planned. Reach out and we will make it work for you.',
      zh: '教育优惠已在计划中。欢迎联系我们，我们会为你妥善安排。',
    },
  },
];
