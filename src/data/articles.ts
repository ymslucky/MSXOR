import type { Lang } from '../i18n/ui';

export interface Article {
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  tags: string[];
  minutes: number;
  status: 'draft';
  href: string;
}

/** 【待确认】 planned first posts — outlines fixed, content in progress. */
export const articles: Article[] = [
  {
    title: {
      en: 'How I run AI agents in my daily build loop',
      zh: '我如何把 AI Agent 用进每日构建流程',
    },
    summary: {
      en: 'A concrete loop: issue → agent draft → human diff review → tests → ship. With failure modes.',
      zh: '一个具体的闭环：issue → agent 起草 → 人工 diff 审查 → 测试 → 发布。包括失败模式。',
    },
    tags: ['AI', 'workflow'],
    minutes: 8,
    status: 'draft',
    href: '#',
  },
  {
    title: {
      en: 'The self-hosted stack behind MSXOR',
      zh: 'MSXOR 背后的自托管技术栈',
    },
    summary: {
      en: 'What runs where, what it costs, what breaks at 3 a.m., and what I would hosted-manage again.',
      zh: '什么跑在哪里、成本多少、凌晨三点什么会挂、以及哪些我宁愿继续托管。',
    },
    tags: ['self-hosting', 'infra'],
    minutes: 12,
    status: 'draft',
    href: '#',
  },
  {
    title: {
      en: 'Learning in public: a 90-day experiment log',
      zh: '公开学习：一份 90 天实验日志',
    },
    summary: {
      en: 'Daily notes, weekly reviews, monthly retro. Did shipping in public actually compound?',
      zh: '每日笔记、每周复盘、每月回顾。公开构建真的产生复利了吗？',
    },
    tags: ['learning', 'meta'],
    minutes: 10,
    status: 'draft',
    href: '#',
  },
];
