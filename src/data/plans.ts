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
    blurb: {
      en: 'Yes, zero. We have not figured out how money works yet.',
      zh: '对，你没看错，是 0。我们暂时还没想明白钱是什么。',
    },
    features: {
      en: [
        '10 GB encrypted storage (legendary tier)',
        '1 project (the power of focus)',
        'Community support (probably the founder replying)',
        'Leave anytime, no hard feelings',
      ],
      zh: [
        '10 GB 加密空间（金色传说起步）',
        '1 个项目（专注的力量）',
        '社区支持（大概率是站长本人在回复）',
        '随时跑路，啊不，随时取消',
      ],
    },
  },
  {
    id: 'pro',
    name: 'Free Plus',
    price: 0,
    popular: true,
    blurb: {
      en: 'Sounds 100x more premium. Costs exactly 100x more too.',
      zh: '听起来高级 100 倍，价格也恰好贵了 100 倍。',
    },
    features: {
      en: [
        '1 TB encrypted storage (a full 100 Free plans)',
        'Unlimited projects (chaos counts as organization)',
        'Priority email support (read first, reply eventually)',
        'This tier is highlighted, so clearly we tried',
      ],
      zh: [
        '1 TB 加密空间（整整 100 个 Free）',
        '无限项目（乱到找不到也算数）',
        '优先邮件支持（邮件会先看，回复看缘分）',
        '这一档有高亮光环，说明我们真的努力了',
      ],
    },
  },
  {
    id: 'max',
    name: 'Free Max',
    price: 0,
    blurb: {
      en: 'The name says Max. The price says no.',
      zh: '名字里带 Max，气势拉满；价格原地踏步。',
    },
    features: {
      en: [
        '5 TB encrypted storage (speedrun your backups)',
        'Everything in Free Plus, missing nothing',
        'Team sharing (bring friends, freeload together)',
        'Early access to new specimens',
      ],
      zh: [
        '5 TB 加密空间（量子波动速存）',
        'Free Plus 的全部，一个不少',
        '团队共享（拉朋友一起白嫖）',
        '新标本抢先体验资格',
      ],
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
      free: { en: 'Community (probably the founder)', zh: '社区（大概率是站长本人）' },
      pro: { en: 'Priority email', zh: '优先邮件' },
      max: { en: 'Priority email', zh: '优先邮件' },
    },
  },
  {
    id: 'price',
    label: { en: 'Price', zh: '价格' },
    values: {
      free: { en: '$0 forever', zh: '永远 0' },
      pro: { en: '$0 forever', zh: '永远 0' },
      max: { en: '$0 forever', zh: '永远 0' },
    },
  },
];

export interface FaqItem {
  q: Record<Lang, string>;
  a: Record<Lang, string>;
}

export const faqItems: FaqItem[] = [
  {
    q: { en: 'Is it really all free?', zh: '真的全免费？' },
    a: {
      en: 'Really. Free until we figure out a business model — at the current pace, that is a long free lunch.',
      zh: '真的。免费到我们想清楚商业模式为止——按目前进度，这顿午餐还长着呢。',
    },
  },
  {
    q: { en: 'How do you survive?', zh: '那你们靠什么活下去？' },
    a: {
      en: 'Enthusiasm, sleep deprivation, and faith in the word "what if". Paid features? Later. Or later-later.',
      zh: '热情、睡眠不足，和对"要不试试"这四个字的信念。付费功能？以后再说，或者以后的以后再说。',
    },
  },
  {
    q: { en: 'Is my data safe?', zh: '数据安全吗？' },
    a: {
      en: 'Encrypted storage, regular backups — safer than your phone camera roll, statistically.',
      zh: '加密存储、定期备份——统计意义上，比你手机相册安全多了。',
    },
  },
  {
    q: { en: 'Can I use it commercially?', zh: '能商用吗？' },
    a: {
      en: 'Go for it. If your business takes off, come back and leave a star. That is the entire invoice.',
      zh: '随便用。哪天商用出息了，记得回来点个 star。这就是全部账单。',
    },
  },
];
