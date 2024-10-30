/// <reference types="vite/client" />

import { h } from 'vue'
import { define } from './types'
import type { Theme as ThemeType } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { NaiveUIContainer } from '@vitepress-demo-preview/component'
import './style.css'
import 'vue-component/dist/index.css'
import './styles/var.scss'
import '@vitepress-demo-preview/component/dist/style.css'
import ThemeSwitch from './components/ThemeSwitch.vue'

export default define<ThemeType>({
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  async enhanceApp({ app }) {
    app.component('ThemeSwitch', ThemeSwitch)
    // Demo Block组件
    app.component('demo-preview', NaiveUIContainer)
    if (!import.meta.env.SSR) {
      // 自定义组件
      const plugin = await import('vue-component')
      app.use(plugin.default)
    }
  }
})
