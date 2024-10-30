import * as components from './index'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VHello: typeof components.VHello
  }
}
export {}
