import type {App} from 'vue'

import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '/@/views/dashboard/index.vue'
import About from '/@/views/about/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'dashboard',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  strict: true,
  scrollBehavior: async (to, from, savedPosition) => {
    // await scrollWaiter.wait();
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.matched.every((record, i) => from.matched[i] !== record)) {
        return {left: 0, top: 0}
      }
      return false
    }
  },
})

export function setupRoutes(app: App<Element>): void {
  app.use(router)
}

export default router
