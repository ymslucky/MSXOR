export const languages = {
  en: 'English',
  zh: '简体中文',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const localePrefix = '/zh';

const en = {
  meta: {
    home: {
      title: 'MSXOR — Self-evolution for the AI era',
      description:
        'MSXOR is a one-human evolution lab: a cloud drive for your memory, an IAM for your identity. Free, playful, and XORing daily.',
    },
    pricing: {
      title: 'Pricing (spoiler: it is all $0) — MSXOR',
      description:
        'Three plans. One price: $0. MSXOR products are free until we figure out how money works.',
    },
    notFound: {
      title: 'Page not found — MSXOR',
      description: 'This page has not evolved yet.',
    },
  },
  nav: {
    products: 'Evolutions',
    pricing: 'Pricing',
    menu: 'Open menu',
    close: 'Close menu',
  },
  hero: {
    badge: 'MS · Self-evolution lab for the AI era',
    tagline:
      'AI already took your inbox. Time to evolve something else. MSXOR is my one-human lab for self-evolution — so far it has produced a cloud drive that remembers things for you, and an IAM that is very interested in whether you are you.',
    ctaPrimary: 'See the evolutions',
    ctaSecondary: 'Pricing (all $0)',
  },
  xor: {
    label: 'Brand philosophy',
    title: 'Why XOR? Because evolution is a gate.',
    subtitle:
      'XOR outputs 1 only when its two inputs differ. Same in, same out — nothing grows. Different in, something new comes out. That is the whole business plan.',
    cards: [
      {
        expr: '0 ⊕ 0 = 0',
        title: 'The comfort zone',
        body: 'Same input, same output. Perfectly legal. Zero evolution.',
      },
      {
        expr: '0 ⊕ 1 = 1',
        title: 'Learn something',
        body: 'New input hits the gate. Something new comes out. Evolution +1.',
      },
      {
        expr: '1 ⊕ 0 = 1',
        title: 'Build something',
        body: 'Flip the direction: feed your new knowledge back in. Evolution +1 again.',
      },
      {
        expr: '1 ⊕ 1 = 0',
        title: 'Reset & evolve',
        body: 'Mastered both? Great. Zero it out, pick a new track, evolve again.',
      },
    ],
  },
  products: {
    label: 'Evolutions',
    title: 'Things that evolved out of the lab.',
    subtitle: 'Each product started as a what-if at 2 a.m., then refused to stay a thought.',
    more: 'More specimens bubbling in the petri dish.',
    learnMore: 'Take a look',
  },
  pricingPreview: {
    label: 'Pricing',
    title: 'Three tiers. One price: $0.',
    subtitle: 'Decision paralysis, cured. Pick any plan — your wallet will not notice either way.',
    cta: 'Read the fine print (there is none)',
  },
  plan: {
    popular: 'Most popular (they are all free)',
    period: '/mo',
    getStarted: 'Go evolve',
    perMonth: 'All prices in USD, billed never',
  },
  ctaBanner: {
    title: 'Ready to XOR your routine?',
    subtitle: 'Pick a product. Input something different. Watch the output become 1.',
    cta: 'Start evolving',
  },
  footer: {
    tagline: 'Built by MS. Evolving with XOR.',
    site: 'Site',
    products: 'Products',
    rights: '© 2026 MSXOR. All rights reserved. No organisms were harmed.',
    language: 'Language',
  },
  pricing: {
    title: 'Pricing, but everything is 0',
    subtitle:
      'Every plan is free forever — or at least until we figure out how money works. And when we do, early users keep eating free. Pinky promise.',
    compare: 'Compare plans',
    compareSubtitle: 'A very serious, extremely scientific comparison.',
    faqTitle: 'FAQ (and soul-searching)',
    cta: 'Go evolve',
  },
  notFound: {
    title: '404',
    message: 'This page has not evolved yet. Give it a few million iterations.',
    homeEn: 'Back to English home',
    homeZh: '前往中文首页',
    pricing: 'View pricing',
  },
};

const zh: typeof en = {
  meta: {
    home: {
      title: 'MSXOR — AI 时代的自我进化',
      description:
        'MSXOR 是一个人的进化实验室：一个替你记事的云盘，一个死磕"你到底是不是你"的 IAM。免费、好玩、每天 XOR。',
    },
    pricing: {
      title: '付费计划（剧透：全是 0）— MSXOR',
      description: '三档计划，一个价格：0。MSXOR 全线产品免费，直到我们想明白钱是什么。',
    },
    notFound: {
      title: '页面未找到 — MSXOR',
      description: '这个页面还没进化出来。',
    },
  },
  nav: {
    products: '进化产物',
    pricing: '付费计划',
    menu: '打开菜单',
    close: '关闭菜单',
  },
  hero: {
    badge: 'MS · AI 时代的自我进化实验室',
    tagline:
      'AI 都开始替你回邮件了，你总得进化点别的。MSXOR 是我一个人的进化实验室——目前产物：一个替你记事的云盘，和一个非常执着于"你到底是不是你"的 IAM。',
    ctaPrimary: '看看进化产物',
    ctaSecondary: '付费计划（全是 0）',
  },
  xor: {
    label: '品牌哲学',
    title: '为什么叫 XOR？因为进化就是一门逻辑门。',
    subtitle:
      'XOR 只在两个输入不同时输出 1：相同则原地踏步，不同才有新东西。这就是本实验室的全部商业计划。',
    cards: [
      { expr: '0 ⊕ 0 = 0', title: '舒适区', body: '输入相同，输出为零。完全合法，零进化。' },
      { expr: '0 ⊕ 1 = 1', title: '学点新的', body: '新输入撞进逻辑门，输出新东西。进化 +1。' },
      {
        expr: '1 ⊕ 0 = 1',
        title: '造点新的',
        body: '把刚学的再喂回去，输出点作品。进化 +1，连击。',
      },
      { expr: '1 ⊕ 1 = 0', title: '归零再进化', body: '两个都会了？清零，换赛道，继续进化。' },
    ],
  },
  products: {
    label: '进化产物',
    title: '从实验室里进化出来的东西。',
    subtitle: '每一款产品都始于凌晨两点的"要不试试"，然后拒绝继续只是一个念头。',
    more: '更多标本正在培养皿里冒泡。',
    learnMore: '去看看',
  },
  pricingPreview: {
    label: '付费计划',
    title: '三档计划，一个价格：0。',
    subtitle: '选择困难症瞬间治愈。随便选哪档，你的钱包都不会有任何感觉。',
    cta: '阅读 fine print（并没有）',
  },
  plan: {
    popular: '最受欢迎（反正都免费）',
    period: '/月',
    getStarted: '去进化',
    perMonth: '所有价格以美元计，按永不计费',
  },
  ctaBanner: {
    title: '准备好 XOR 你的日常了吗？',
    subtitle: '挑一个产物，输入点不一样的东西，看看输出怎么变成 1。',
    cta: '开始进化',
  },
  footer: {
    tagline: 'MS 出品 · 用 XOR 进化。',
    site: '站点',
    products: '产品',
    rights: '© 2026 MSXOR. 保留所有权利。没有任何生物受到伤害。',
    language: '语言',
  },
  pricing: {
    title: '定价，但全是 0',
    subtitle: '所有计划永久免费——至少直到我们想明白钱怎么赚。真到那一天，早期用户继续白嫖，拉钩。',
    compare: '功能对比',
    compareSubtitle: '非常严肃、极其科学的对比。',
    faqTitle: '常见问题（含灵魂拷问）',
    cta: '去进化',
  },
  notFound: {
    title: '404',
    message: '这个页面还没进化出来。再给它几百万次迭代。',
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
