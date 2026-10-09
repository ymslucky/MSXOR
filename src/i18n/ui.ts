export const languages = {
  en: 'English',
  zh: '简体中文',
};

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const localePrefix = '/zh';

const en = {
  meta: {
    home: {
      title: 'MSXOR — Self-built products for the modern internet',
      description:
        'MSXOR builds and operates its own software end-to-end: encrypted cloud storage, identity and access management, and more.',
    },
    pricing: {
      title: 'Pricing — MSXOR',
      description:
        'Simple, transparent plans for MSXOR products. Start free, upgrade when you need more. Cancel anytime.',
    },
    notFound: {
      title: 'Page not found — MSXOR',
      description: 'The page you are looking for does not exist or has moved.',
    },
  },
  nav: {
    products: 'Products',
    pricing: 'Pricing',
    menu: 'Open menu',
    close: 'Close menu',
  },
  hero: {
    badge: 'Independently engineered',
    tagline:
      'Self-built software for the modern internet — cloud storage, identity, and more. Designed, engineered, and operated end-to-end.',
    ctaPrimary: 'Explore products',
    ctaSecondary: 'View pricing',
  },
  products: {
    label: 'Products',
    title: 'Built from scratch. Run with care.',
    subtitle:
      'Every MSXOR product is designed, engineered, and maintained independently — no shortcuts, no black boxes.',
    more: 'More products are on the way.',
    learnMore: 'Learn more',
  },
  pricingPreview: {
    label: 'Pricing',
    title: 'Simple plans. Honest pricing.',
    subtitle: 'Start free, upgrade when you need more. Every plan includes the essentials.',
    cta: 'See full pricing',
  },
  plan: {
    popular: 'Most popular',
    period: '/mo',
    getStarted: 'Get started',
    perMonth: 'per month, billed monthly',
  },
  ctaBanner: {
    title: 'Ready to see what MSXOR can do?',
    subtitle: 'Jump into a product or compare plans — it takes less than a minute.',
    cta: 'Get started',
  },
  footer: {
    tagline: 'Independently built products for the open internet.',
    site: 'Site',
    products: 'Products',
    rights: '© 2026 MSXOR. All rights reserved.',
    language: 'Language',
  },
  pricing: {
    title: 'Simple, transparent pricing',
    subtitle:
      'Every plan starts with a generous free tier. Upgrade only when you outgrow it — cancel anytime.',
    compare: 'Compare plans',
    compareSubtitle: 'A quick look at what each plan includes.',
    faqTitle: 'Frequently asked questions',
    cta: 'Get started free',
  },
  notFound: {
    title: '404',
    message: 'The page you are looking for does not exist or has moved.',
    homeEn: 'Back to English home',
    homeZh: '前往中文首页',
    pricing: 'View pricing',
  },
};

const zh: typeof en = {
  meta: {
    home: {
      title: 'MSXOR — 为现代互联网打造的自研产品',
      description: 'MSXOR 端到端自研并运营自己的软件：加密云存储、身份与访问管理，以及更多产品。',
    },
    pricing: {
      title: '付费计划 — MSXOR',
      description: 'MSXOR 产品简单透明的付费计划。免费起步，按需升级，随时取消。',
    },
    notFound: {
      title: '页面未找到 — MSXOR',
      description: '你访问的页面不存在或已迁移。',
    },
  },
  nav: {
    products: '产品',
    pricing: '付费计划',
    menu: '打开菜单',
    close: '关闭菜单',
  },
  hero: {
    badge: '独立研发 · 精工打造',
    tagline:
      '为现代互联网打造的自研软件——云存储、身份管理，以及更多。从设计、研发到运营，全程独立完成。',
    ctaPrimary: '探索产品',
    ctaSecondary: '查看付费计划',
  },
  products: {
    label: '产品',
    title: '从零构建，用心运营。',
    subtitle: '每一款 MSXOR 产品都由我们独立设计、研发和维护——没有捷径，没有黑盒。',
    more: '更多产品正在路上。',
    learnMore: '了解更多',
  },
  pricingPreview: {
    label: '付费计划',
    title: '简单的计划，诚实的定价。',
    subtitle: '免费起步，按需升级。每个计划都包含完整的基础功能。',
    cta: '查看完整付费计划',
  },
  plan: {
    popular: '最受欢迎',
    period: '/月',
    getStarted: '立即开始',
    perMonth: '按月付费',
  },
  ctaBanner: {
    title: '准备好了解 MSXOR 了吗？',
    subtitle: '直接体验产品，或对比付费计划——只需要不到一分钟。',
    cta: '立即开始',
  },
  footer: {
    tagline: '为开放互联网独立打造的产品。',
    site: '站点',
    products: '产品',
    rights: '© 2026 MSXOR. 保留所有权利。',
    language: '语言',
  },
  pricing: {
    title: '简单透明的定价',
    subtitle: '每个计划都从慷慨的免费档开始。只在你需要时升级——随时可以取消。',
    compare: '功能对比',
    compareSubtitle: '快速了解每个计划包含的内容。',
    faqTitle: '常见问题',
    cta: '免费开始',
  },
  notFound: {
    title: '404',
    message: '你访问的页面不存在或已迁移。',
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

/** Map a path to its counterpart in the target language. */
export function alternatePath(path: string, target: Lang): string {
  const stripped = path.replace(/^\/zh(?=\/|$)/, '') || '/';
  return target === defaultLang ? stripped : `${localePrefix}${stripped === '/' ? '' : stripped}`;
}
