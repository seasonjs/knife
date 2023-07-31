import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "knife",
  description: "Js base library which copy from vscode.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '首页', link: '/'},
      {text: '文档', link: '/markdown-examples'}
    ],

    sidebar: [
      {
        text: '接口文档',
        items: [
          {text: 'Markdown Examples', link: '/markdown-examples'},
          {text: 'Runtime API Examples', link: '/api-examples'}
        ]
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ]
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
    }
  }
})
