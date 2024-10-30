import type { App, Component, Plugin } from 'vue'

export type WithInstall<T> = T & Plugin

export const withInstall = <T extends Component>(component: T) => {
  ;(component as WithInstall<T>).install = (app: App) => {
     
    const name = component.name || (component as any).__name
    if (name) {
      app.component(name, component)
    }
  }
  return component as WithInstall<T>
}
