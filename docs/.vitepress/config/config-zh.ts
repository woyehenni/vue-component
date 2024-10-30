import { LocaleSpecificConfig } from 'vitepress'
import { DefaultTheme } from 'vitepress/theme'

const root = '/zh'
export const config: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: '中文',
  lang: 'zh',
  themeConfig: {
    outlineTitle: '本页目录',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索'
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '重置',
            backButtonTitle: '返回',
            noResultsText: '无法找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    nav: [
      { text: 'Home', link: `${root}` },
      { text: 'Doc', link: `${root}/home` },
      {
        text: 'More',
        items: [{ text: 'CHANGELOG', link: 'https://github.com/woyehenni/vue-component/CHANGELOG.md' }]
      }
      // {
      //   text: 'Theme',
      //   component: 'ThemeSwitch',
      //   props: {}
      // }
    ],
    sidebar: [
      {
        text: '开发指南',
        items: [
          {
            text: '介绍',
            link: `${root}/home`
          },
          {
            text: '快速上手',
            link: `${root}/quickstart`
          },
          {
            text: '本地开发',
            link: `${root}/development`
          },
          {
            text: '常见问题',
            link: `${root}/faq`
          },
          {
            text: '国际化',
            link: `${root}/locale`
          }
        ]
      },
      {
        text: '基础组件',
        items: [
          {
            text: 'Hello',
            link: `${root}/components/hello`
          }
        ]
      }
    ]
  }
}
