import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

/**
 * 1
 */
import DawnVue from '@render/views/Dawn/Dawn.vue'

/**
 * 2
 */


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/Dawn'
    },
    {
        path: '/Dawn',
        name: 'Dawn',
        component: DawnVue,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
