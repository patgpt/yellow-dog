import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'YellowDog Next Template',
  description: 'A modern Next.js template with TypeScript, TailwindCSS, and more',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/'
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Guide', link: '/fr/guide/' },
          { text: 'Utilitaires', link: '/fr/utils/' },
          { text: 'Composants', link: '/fr/components/' }
        ],
        sidebar: [
          {
            text: 'Pour Commencer',
            items: [
              { text: 'Introduction', link: '/fr/guide/' },
              { text: 'Démarrage Rapide', link: '/fr/guide/quick-start' },
              { text: 'Structure du Projet', link: '/fr/guide/project-structure' }
            ]
          },
          {
            text: 'Utilitaires',
            items: [
              { text: 'Noms de Classes (cn)', link: '/fr/utils/cn' },
              { text: 'Logger', link: '/fr/utils/logger' }
            ]
          },
          {
            text: 'Composants',
            items: [
              { text: "Vue d'ensemble", link: '/fr/components/' },
              { text: 'Atomes', link: '/fr/components/atoms' },
              { text: 'Molécules', link: '/fr/components/molecules' },
              { text: 'Organismes', link: '/fr/components/organisms' }
            ]
          }
        ]
      }
    },
    cn: {
      label: '中文',
      lang: 'zh-CN',
      link: '/cn/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/cn/' },
          { text: '指南', link: '/cn/guide/' },
          { text: '工具', link: '/cn/utils/' },
          { text: '组件', link: '/cn/components/' }
        ],
        sidebar: [
          {
            text: '开始使用',
            items: [
              { text: '介绍', link: '/cn/guide/' },
              { text: '快速开始', link: '/cn/guide/quick-start' },
              { text: '项目结构', link: '/cn/guide/project-structure' }
            ]
          },
          {
            text: '工具',
            items: [
              { text: '类名工具 (cn)', link: '/cn/utils/cn' },
              { text: '日志工具', link: '/cn/utils/logger' }
            ]
          },
          {
            text: '组件',
            items: [
              { text: '概述', link: '/cn/components/' },
              { text: '原子组件', link: '/cn/components/atoms' },
              { text: '分子组件', link: '/cn/components/molecules' },
              { text: '有机组件', link: '/cn/components/organisms' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Utils', link: '/utils/' },
      { text: 'Components', link: '/components/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Quick Start', link: '/guide/quick-start' },
          { text: 'Project Structure', link: '/guide/project-structure' }
        ]
      },
      {
        text: 'Utilities',
        items: [
          { text: 'Class Names (cn)', link: '/utils/cn' },
          { text: 'Logger', link: '/utils/logger' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Overview', link: '/components/' },
          { text: 'Atoms', link: '/components/atoms' },
          { text: 'Molecules', link: '/components/molecules' },
          { text: 'Organisms', link: '/components/organisms' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/your-org/yellow-dog' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present YellowDog'
    }
  }
})
