import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

import { config as configEn } from './config/config-en'
import { config as configZh } from './config/config-zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'Vue Component',
  description: 'A Vue.js UI library with a simple API',
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://cdn.tailwindcss.com'
      }
    ]
  ],
  locales: {
    root: configEn,
    zh: configZh
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.svg',
    footer: {
      message: 'Released under the Private License.',
      copyright: 'Copyright © 2024 woyehenni'
    },
    search: {
      provider: 'local'
    },
    // sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/woyehenni/vue-component'
      }
    ]
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      },
      postcss: {}
    }
  }
})
