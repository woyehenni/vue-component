import { LocaleSpecificConfig } from 'vitepress'

import { DefaultTheme } from 'vitepress/theme'

export const config: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'English',
  lang: 'en',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }]
  }
}
