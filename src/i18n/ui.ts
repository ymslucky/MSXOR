export const languages = {
  en: 'EN',
  zh: '中文',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const localePrefix = '/zh';

export const githubUrl = 'https://github.com/ymslucky/MSXOR';
export const siteVersion = 'v2026.10';

const en = {
  meta: {
    home: {
      title: 'MSXOR — An individual geek evolving in the AI era',
      description:
        'Build, learn, experiment, iterate — in public. MSXOR is one geek\u2019s evolution log, toolbox, and lab for the AI era.',
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
    now: 'Now',
    projects: 'Projects',
    articles: 'Writing',
    stack: 'Stack',
    path: 'Path',
    about: 'About',
    pricing: 'Pricing',
    menu: 'Open menu',
    close: 'Close menu',
    github: 'MSXOR on GitHub',
    palette: 'Quick nav',
  },
  hero: {
    badge: '~/msxor — evolving in the AI era',
    positioning:
      'An individual geek, compounding skills in the AI era. Build, learn, experiment, iterate — in public.',
    statusBuilding: 'building: this site + msxor drive',
    statusIterating: 'iterating: v2026.10',
    statusLearning: 'learning: [TBD]',
    cloneCmd: 'git clone https://github.com/ymslucky/MSXOR.git',
    copyLabel: 'Copy',
    copied: 'Copied ✓',
    ctaPrimary: 'Read the log',
    ctaSecondary: 'GitHub',
    terminalTitle: 'msxor — log — 80×24',
    terminalLines: [
      { cmd: 'msxor whoami', out: 'individual geek · ai-era evolution lab' },
      { cmd: 'msxor status', out: '● evolving · v2026.10' },
      { cmd: 'msxor log --oneline', out: 'spec → ship → iterate → evolve' },
    ],
    statusVersion: 'v2026.10',
    statusBuild: 'build: passing',
    statusStars: '★ star on GitHub',
  },
  palette: {
    placeholder: 'Type a command…',
    hint: '↑↓ navigate · ↵ select · esc close',
    now: 'Go to Now',
    projects: 'Go to Projects',
    articles: 'Go to Writing',
    stack: 'Go to Stack',
    path: 'Go to Path',
    about: 'Go to About',
    github: 'Open GitHub',
    lang: 'Switch language',
  },
  now: {
    label: '~/now',
    title: 'Now',
    subtitle: 'What I am building, learning, and testing — this quarter, not lifetime goals.',
    buildingTitle: 'Building',
    buildingBody:
      'MSXOR Drive (encrypted cloud storage) and this site. Small scope, frequent releases.',
    learningTitle: 'Learning',
    learningBody:
      '[TBD] — what are you learning right now? e.g. local LLM inference, agent workflows, distributed systems.',
    experimentingTitle: 'Experimenting',
    experimentingBody:
      '[TBD] — current experiments? e.g. automation pipelines, eval harnesses, self-hosting setups.',
    updated: 'updated 2026-10-09',
    tbd: 'TBD',
  },
  projects: {
    label: '~/projects',
    title: 'Projects',
    subtitle: 'Things I build, run, and maintain. Working software over slide decks.',
    stackTitle: 'Stack',
    repo: 'repo',
    site: 'site',
    learnMore: 'Details',
  },
  articles: {
    label: '~/writing',
    title: 'Writing',
    subtitle: 'Notes on individual evolution in the AI era. Drafts ship first; polish later.',
    drafting: 'drafting',
    minutes: 'min read',
    tbdHint: 'First posts are being drafted — titles and outlines are fixed, content is coming.',
  },
  stack: {
    label: '~/stack',
    title: 'Tool stack',
    subtitle: 'Tools I actually use, and what I would replace them with. No affiliate links.',
    category: 'Category',
    tool: 'Tool',
    use: 'Use case',
    alt: 'Alternative',
    tbd: 'TBD',
  },
  path: {
    label: '~/path',
    title: 'Evolution path',
    subtitle: 'Versions, dates, and what changed. An honest changelog, not a highlight reel.',
    next: 'next',
  },
  about: {
    label: '~/about',
    title: 'MS + XOR',
    subtitle:
      'MS is me. XOR is the difference operator: same input, same output; different input, new output. This site is the log of those differences.',
    xorTitle: 'Why XOR? Because evolution is a gate.',
    xorSubtitle: 'XOR outputs 1 only when the inputs differ. So do I.',
    cards: [
      { expr: '0 ⊕ 0 = 0', title: 'Comfort zone', body: 'No difference, no output.' },
      { expr: '0 ⊕ 1 = 1', title: 'Learn', body: 'New in, new out.' },
      { expr: '1 ⊕ 0 = 1', title: 'Build', body: 'Feed it back. Ship.' },
      { expr: '1 ⊕ 1 = 0', title: 'Reset', body: 'Mastered? Zero. Next track.' },
    ],
    aiEraTitle: 'The AI-era part',
    aiEraBody:
      'AI compresses the distance between idea and working software. What it does not replace: taste, judgment, and the habit of shipping. This lab optimizes for those three.',
  },
  plan: {
    popular: 'Most popular',
    period: '/mo',
    getStarted: 'Get started',
    perMonth: 'billed never - currently $0',
  },
  contact: {
    label: '~/contact',
    title: 'Say hi',
    subtitle: 'No newsletter funnel. If something here is useful, star the repo or open an issue.',
    github: 'GitHub',
    x: 'X / Twitter',
    email: 'Email',
    rss: 'RSS',
  },
  footer: {
    tagline: 'Built by MS, for the AI era. Evolving with XOR.',
    site: 'Site',
    sections: 'Sections',
    rights: '© 2026 MSXOR. All rights reserved.',
    language: 'Language',
    operational: 'evolving',
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
      title: 'MSXOR — AI 时代持续进化的个体极客',
      description:
        '公开地构建、学习、实验、迭代。MSXOR 是一个极客在 AI 时代的进化日志、工具箱和实验场。',
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
    now: '现在',
    projects: '项目',
    articles: '文章',
    stack: '工具栈',
    path: '进化路径',
    about: '关于',
    pricing: '定价',
    menu: '打开菜单',
    close: '关闭菜单',
    github: 'GitHub 上的 MSXOR',
    palette: '快速跳转',
  },
  hero: {
    badge: '~/msxor — AI 时代的个体进化',
    positioning: '一个在 AI 时代复利成长的个体极客。构建、学习、实验、迭代——全部公开。',
    statusBuilding: '构建中: 本站 + msxor drive',
    statusIterating: '迭代版本: v2026.10',
    statusLearning: '学习中: 【待确认】',
    cloneCmd: 'git clone https://github.com/ymslucky/MSXOR.git',
    copyLabel: '复制',
    copied: '已复制 ✓',
    ctaPrimary: '查看进化日志',
    ctaSecondary: 'GitHub',
    terminalTitle: 'msxor — log — 80×24',
    terminalLines: [
      { cmd: 'msxor whoami', out: 'individual geek · ai-era evolution lab' },
      { cmd: 'msxor status', out: '● evolving · v2026.10' },
      { cmd: 'msxor log --oneline', out: 'spec → ship → iterate → evolve' },
    ],
    statusVersion: 'v2026.10',
    statusBuild: 'build: passing',
    statusStars: '★ star on GitHub',
  },
  palette: {
    placeholder: '输入命令…',
    hint: '↑↓ 选择 · ↵ 确认 · esc 关闭',
    now: '前往 现在',
    projects: '前往 项目',
    articles: '前往 文章',
    stack: '前往 工具栈',
    path: '前往 进化路径',
    about: '前往 关于',
    github: '打开 GitHub',
    lang: '切换语言',
  },
  now: {
    label: '~/now',
    title: '现在',
    subtitle: '这一季度在构建什么、学什么、测什么——不是人生目标，是当前状态。',
    buildingTitle: '构建中',
    buildingBody: 'MSXOR Drive（加密云存储）和这个网站。小范围，高频发布。',
    learningTitle: '学习中',
    learningBody: '【待确认】——你现在在学什么？例如：本地 LLM 推理、Agent 工作流、分布式系统。',
    experimentingTitle: '实验中',
    experimentingBody: '【待确认】——当前在做什么实验？例如：自动化流水线、评测工具、自托管方案。',
    updated: '更新于 2026-10-09',
    tbd: '待确认',
  },
  projects: {
    label: '~/projects',
    title: '项目',
    subtitle: '我在构建、运行和维护的东西。能跑的软件优先于漂亮的 PPT。',
    stackTitle: '技术栈',
    repo: '仓库',
    site: '站点',
    learnMore: '详情',
  },
  articles: {
    label: '~/writing',
    title: '文章',
    subtitle: '关于 AI 时代个体进化的笔记。草稿先行，打磨在后。',
    drafting: '撰写中',
    minutes: '分钟阅读',
    tbdHint: '首批文章正在撰写——标题和大纲已定，内容在路上。',
  },
  stack: {
    label: '~/stack',
    title: '工具栈',
    subtitle: '我实际在用的工具，以及它们的替代品。没有返利链接。',
    category: '分类',
    tool: '工具',
    use: '使用场景',
    alt: '替代方案',
    tbd: '待确认',
  },
  path: {
    label: '~/path',
    title: '进化路径',
    subtitle: '版本、日期、以及每次改了什么。诚实的 changelog，不是精华集锦。',
    next: '下一个',
  },
  about: {
    label: '~/about',
    title: 'MS + XOR',
    subtitle:
      'MS 是我。XOR 是异或算子：输入相同，输出不变；输入不同，才有新东西。这个网站就是这些"差异"的日志。',
    xorTitle: '为什么是 XOR？因为进化是一门逻辑门。',
    xorSubtitle: 'XOR 只在输入不同时输出 1。我也一样。',
    cards: [
      { expr: '0 ⊕ 0 = 0', title: '舒适区', body: '没有差异，就没有输出。' },
      { expr: '0 ⊕ 1 = 1', title: '学', body: '新知进来，新物出去。' },
      { expr: '1 ⊕ 0 = 1', title: '造', body: '把学到喂回去，做出作品。' },
      { expr: '1 ⊕ 1 = 0', title: '归零', body: '都会了？清零，换赛道。' },
    ],
    aiEraTitle: 'AI 时代的部分',
    aiEraBody:
      'AI 压缩了从想法到可用软件的距离，但它替代不了三件事：品味、判断、持续发布的习惯。这个实验室就为这三件事而优化。',
  },
  plan: {
    popular: '最受欢迎',
    period: '/月',
    getStarted: '立即开始',
    perMonth: '永不计费 · 当前 $0',
  },
  contact: {
    label: '~/contact',
    title: '打个招呼',
    subtitle: '没有订阅漏斗。如果这里的内容对你有用，给仓库点个 star 或提个 issue。',
    github: 'GitHub',
    x: 'X / Twitter',
    email: '邮箱',
    rss: 'RSS',
  },
  footer: {
    tagline: 'MS 出品，为 AI 时代而造，用 XOR 进化。',
    site: '站点',
    sections: '栏目',
    rights: '© 2026 MSXOR. 保留所有权利。',
    language: '语言',
    operational: '进化中',
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

/** Anchor to a home-page section, works from any page. */
export function sectionPath(lang: Lang, id: string): string {
  return `${homePath(lang)}#${id}`;
}

/** Map a path to its counterpart in the target language. */
export function alternatePath(path: string, target: Lang): string {
  const stripped = path.replace(/^\/zh(?=\/|$)/, '') || '/';
  return target === defaultLang ? stripped : `${localePrefix}${stripped === '/' ? '' : stripped}`;
}
