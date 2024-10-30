import type { App } from 'vue'
import * as components from './components'

import './index.scss'

export * from './components'

export default function install(app: App) {
  for (const c in components) {
    // @ts-expect-error ignore eslint error
    app.use(components[c])
  }
}
