export const languages = {
  en: 'English',
  zh: '简体中文',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const localePrefix = '/zh';

export const githubUrl = 'https://github.com/ymslucky/MSXOR';

const en = {
  meta: {
    home: {
      title: 'MSXOR — Self-evolution for the AI era',
      description:
        'A self-evolution toolkit for the AI era: an encrypted cloud drive, an IAM, and everything free.',
    },
    pricing: {
      title: 'Pricing — MSXOR',
      description: 'Every MSXOR plan is free today. Early users stay free forever.',
    },
    notFound: {
      title: 'Page not found — MSXOR',
      description: 'This page does not exist — yet.',
    },
  },
  nav: {
    products: 'Products',
    pricing: 'Pricing',
    menu: 'Open menu',
    close: 'Close menu',
    github: 'MSXOR on GitHub',
  },
  hero: {
    badge: 'MS · Self-evolution lab',
    tagline:
      'A self-evolution toolkit for the AI era — an encrypted cloud drive, an IAM, and everything free.',
    ctaPrimary: 'Explore products',
    ctaSecondary: 'Pricing',
  },
  xor: {
    label: 'Philosophy',
    title: 'Evolution through difference',
    subtitle: 'XOR outputs 1 only when the inputs differ. So do we.',
    cards: [
      { expr: '0 ⊕ 0 = 0', title: 'Comfort zone', body: 'No difference, no output.' },
      { expr: '0 ⊕ 1 = 1', title: 'Learn', body: 'New in, new out.' },
      { expr: '1 ⊕ 0 = 1', title: 'Build', body: 'Feed it back. Ship.' },
      { expr: '1 ⊕ 1 = 0', title: 'Reset', body: 'Mastered? Zero. Next track.' },
    ],
  },
  products: {
    label: 'Products',
    title: 'Two tools, zero noise.',
    subtitle: 'A cloud drive for memory. An IAM for identity.',
    more: 'More coming.',
    learnMore: 'Learn more',
  },
  pricingPreview: {
    label: 'Pricing',
    title: 'One price: $0.',
    subtitle: 'Free now, free forever for early users.',
    cta: 'See pricing',
  },
  plan: {
    popular: 'Most popular',
    period: '/mo',
    getStarted: 'Get started',
    perMonth: 'Billed monthly — currently $0',
  },
  ctaBanner: {
    title: 'Start where you are.',
    subtitle: 'Free to use, free to keep.',
    cta: 'Get started',
  },
  footer: {
    tagline: 'Built by MS, for the AI era.',
    site: 'Site',
    products: 'Products',
    rights: '© 2026 MSXOR. All rights reserved.',
    language: 'Language',
  },
  pricing: {
    title: 'Simple pricing',
    subtitle: 'Everything is free today. When paid plans arrive, early users stay free forever.',
    compare: 'Compare plans',
    compareSubtitle: 'What each plan includes.',
    faqTitle: 'FAQ',
    cta: 'Get started',
  },
  notFound: {
    title: '404',
    message: 'This page does not exist — yet.',
    homeEn: 'Back to English home',
    homeZh: '前往中文首页',
    pricing: 'View pricing',
  },
};

const zh: typeof en = {
  meta: {
    home: {
      title: 'MSXOR — AI 时代的自我进化',
      description: '为 AI 时代打造的自我进化工具箱：一个加密云盘，一个 IAM，全部免费。',
    },
    pricing: {
      title: '付费计划 — MSXOR',
      description: 'MSXOR 所有计划当前免费。早期用户永久免费。',
    },
    notFound: {
      title: '页面未找到 — MSXOR',
      description: '这个页面不存在——暂时。',
    },
  },
  nav: {
    products: '产品',
    pricing: '付费计划',
    menu: '打开菜单',
    close: '关闭菜单',
    github: 'GitHub 上的 MSXOR',
  },
  hero: {
    badge: 'MS · 自我进化实验室',
    tagline: '为 AI 时代打造的自我进化工具箱：一个加密云盘，一个 IAM，全部免费。',
    ctaPrimary: '查看产品',
    ctaSecondary: '付费计划',
  },
  xor: {
    label: '品牌哲学',
    title: '在差异中进化',
    subtitle: 'XOR 只在输入不同时输出 1。MSXOR 亦然。',
    cards: [
      { expr: '0 ⊕ 0 = 0', title: '舒适区', body: '没有差异，就没有输出。' },
      { expr: '0 ⊕ 1 = 1', title: '学', body: '新知进来，新物出去。' },
      { expr: '1 ⊕ 0 = 1', title: '造', body: '把学到喂回去，做出作品。' },
      { expr: '1 ⊕ 1 = 0', title: '归零', body: '都会了？清零，换赛道。' },
    ],
  },
  products: {
    label: '产品',
    title: '两件工具，零噪音。',
    subtitle: '一个管记忆的云盘，一个管身份的 IAM。',
    more: '更多产品，在路上。',
    learnMore: '了解更多',
  },
  pricingPreview: {
    label: '付费计划',
    title: '唯一的价格：0。',
    subtitle: '现在免费，早期用户永久免费。',
    cta: '查看付费计划',
  },
  plan: {
    popular: '最受欢迎',
    period: '/月',
    getStarted: '立即开始',
    perMonth: '按月计费 · 当前 $0',
  },
  ctaBanner: {
    title: '从现在开始。',
    subtitle: '免费使用，随时开始。',
    cta: '立即开始',
  },
  footer: {
    tagline: 'MS 出品，为 AI 时代而造。',
    site: '站点',
    products: '产品',
    rights: '© 2026 MSXOR. 保留所有权利。',
    language: '语言',
  },
  pricing: {
    title: '简单的定价',
    subtitle: '当前全部免费。付费计划到来时，早期用户永久免费。',
    compare: '功能对比',
    compareSubtitle: '各计划包含的内容。',
    faqTitle: '常见问题',
    cta: '立即开始',
  },
  notFound: {
    title: '404',
    message: '这个页面不存在——暂时。',
    homeEn: 'Back to English home',
    homeZh: '前往中文首页',
    pricing: '查看付费计划',
  },
};

export type Ui = typeof en;

const dictionaries: Record<Lang, Ui> = { en, zh };

export function t(lang: Lang): Ui {
  return dictionaries[lang];
}

export function homePath(lang: Lang): string {
  return lang === defaultLang ? '/' : `${localePrefix}/`;
}

export function pricingPath(lang: Lang): string {
  return lang === defaultLang ? '/pricing' : `${localePrefix}/pricing`;
}

export function productsPath(lang: Lang): string {
  return `${homePath(lang)}#products`;
}

/** Map a path to its counterpart in the target language. */
export function alternatePath(path: string, target: Lang): string {
  const stripped = path.replace(/^\/zh(?=\/|$)/, '') || '/';
  return target === defaultLang ? stripped : `${localePrefix}${stripped === '/' ? '' : stripped}`;
}
