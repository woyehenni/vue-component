import { RouteRecordRaw } from 'vue-router'

const demos = ['VHello']

export function makeRoutes(): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  demos.forEach(name => {
    routes.push({
      path: `/${name}`,
      name: name,
      component: import(`../views/components-demo/${name}Demo.vue`)
    })
  })
  return routes
}
