import { createRouter, createWebHashHistory } from 'vue-router'

import { makeRoutes } from './routes'

import DemoList from '../views/DemoList.vue'

const routers = makeRoutes()
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'list',
      component: DemoList
    },
    ...routers,
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: import('../views/404.vue') }
  ]
})

export default router
