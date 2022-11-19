import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Dawn from '@render/views/Dawn/Dawn.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Dawn'
  },
  {
    path: '/Dawn',
    name: 'Dawn',
    component: Dawn
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
