export const languages = {
  en: 'EN',
  zh: '中文',
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
        'A self-evolution toolkit for the AI era: an encrypted cloud drive, an IAM, live status, everything free.',
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
    palette: 'Quick nav',
  },
  hero: {
    badge: '~/msxor — self-evolution lab',
    tagline:
      'A self-evolution toolkit for the AI era — an encrypted cloud drive, an IAM, everything free.',
    cliCommand: 'npm install -g msxor',
    terminalTitle: 'msxor — bash — 80×24',
    terminalLines: [
      { cmd: 'msxor --version', out: 'msxor/1.0.0 (drive, iam)' },
      { cmd: 'msxor status', out: '● all systems operational' },
      { cmd: 'msxor pricing', out: 'all plans: $0.00 — billed never' },
    ],
    statusVersion: 'v1.0.0',
    statusBuild: 'build: passing',
    statusStars: '★ star on GitHub',
    ctaPrimary: 'Browse modules',
    ctaSecondary: 'View source',
  },
  palette: {
    placeholder: 'Type a command…',
    hint: '↑↓ navigate · ↵ select · esc close',
    home: 'Go to home',
    products: 'Go to products',
    pricing: 'Go to pricing',
    github: 'Open GitHub',
    lang: 'Switch language',
  },
  xor: {
    label: '~/philosophy',
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
    label: '~/products',
    title: 'Capability modules.',
    subtitle: 'A cloud drive for memory. An IAM for identity.',
    more: 'more modules: in development',
    learnMore: 'Learn more',
  },
  status: {
    label: '~/status',
    title: 'System status',
    subtitle: 'Simulated telemetry; real uptime.',
    driveLatency: 'drive latency',
    iamLatency: 'iam latency',
    uptime: 'uptime',
    requests: 'recent requests',
  },
  pricingPreview: {
    label: '~/pricing',
    title: 'One price: $0.',
    subtitle: 'Free now, free forever for early users.',
    cta: 'View pricing',
  },
  plan: {
    popular: 'Most popular',
    period: '/mo',
    getStarted: 'Get started',
    perMonth: 'billed never',
  },
  ctaBanner: {
    title: 'Ship it.',
    subtitle: 'Copy, paste, deploy. Everything else is optional.',
    copyLabel: 'Copy command',
    copied: 'Copied ✓',
    viewSource: 'View source',
    browseModules: 'Browse modules',
  },
  footer: {
    tagline: 'Built by MS, for the AI era.',
    site: 'Site',
    products: 'Products',
    rights: '© 2026 MSXOR. All rights reserved.',
    language: 'Language',
    operational: 'operational',
  },
  pricing: {
    title: 'Pricing',
    subtitle: 'Everything is free today. When paid plans arrive, early users stay free forever.',
    compare: 'Capability matrix',
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
      description: 'AI 时代的自我进化工具箱：加密云盘、IAM、实时状态，全部免费。',
    },
    pricing: {
      title: '定价 — MSXOR',
      description: 'MSXOR 所有计划当前免费。早期用户永久免费。',
    },
    notFound: {
      title: '页面未找到 — MSXOR',
      description: '这个页面不存在——暂时。',
    },
  },
  nav: {
    products: '产品',
    pricing: '定价',
    menu: '打开菜单',
    close: '关闭菜单',
    github: 'GitHub 上的 MSXOR',
    palette: '快速跳转',
  },
  hero: {
    badge: '~/msxor — 自我进化实验室',
    tagline: 'AI 时代的自我进化工具箱：加密云盘、IAM，全部免费。',
    cliCommand: 'npm install -g msxor',
    terminalTitle: 'msxor — bash — 80×24',
    terminalLines: [
      { cmd: 'msxor --version', out: 'msxor/1.0.0 (drive, iam)' },
      { cmd: 'msxor status', out: '● all systems operational' },
      { cmd: 'msxor pricing', out: 'all plans: $0.00 — billed never' },
    ],
    statusVersion: 'v1.0.0',
    statusBuild: 'build: passing',
    statusStars: '★ star on GitHub',
    ctaPrimary: '浏览模块',
    ctaSecondary: '查看源码',
  },
  palette: {
    placeholder: '输入命令…',
    hint: '↑↓ 选择 · ↵ 确认 · esc 关闭',
    home: '回到首页',
    products: '前往产品',
    pricing: '前往定价',
    github: '打开 GitHub',
    lang: '切换语言',
  },
  xor: {
    label: '~/philosophy',
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
    label: '~/products',
    title: '能力模块。',
    subtitle: '一个管记忆的云盘，一个管身份的 IAM。',
    more: '更多模块：开发中',
    learnMore: '了解更多',
  },
  status: {
    label: '~/status',
    title: '系统状态',
    subtitle: '模拟遥测，真实在线。',
    driveLatency: 'drive 延迟',
    iamLatency: 'iam 延迟',
    uptime: '在线率',
    requests: '最近请求',
  },
  pricingPreview: {
    label: '~/pricing',
    title: '唯一的价格：0。',
    subtitle: '现在免费，早期用户永久免费。',
    cta: '查看定价',
  },
  plan: {
    popular: '最受欢迎',
    period: '/月',
    getStarted: '立即开始',
    perMonth: '永不计费',
  },
  ctaBanner: {
    title: '部署它。',
    subtitle: '复制、粘贴、部署。其余都是可选项。',
    copyLabel: '复制命令',
    copied: '已复制 ✓',
    viewSource: '查看源码',
    browseModules: '浏览模块',
  },
  footer: {
    tagline: 'MS 出品，为 AI 时代而造。',
    site: '站点',
    products: '产品',
    rights: '© 2026 MSXOR. 保留所有权利。',
    language: '语言',
    operational: '运行中',
  },
  pricing: {
    title: '定价',
    subtitle: '当前全部免费。付费计划到来时，早期用户永久免费。',
    compare: '能力矩阵',
    compareSubtitle: '各计划包含的内容。',
    faqTitle: '常见问题',
    cta: '立即开始',
  },
  notFound: {
    title: '404',
    message: '这个页面不存在——暂时。',
    homeEn: 'Back to English home',
    homeZh: '前往中文首页',
    pricing: '查看定价',
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
