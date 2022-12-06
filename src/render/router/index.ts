import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

/**
 * 1
 */
import DawnVue from '@render/views/Dawn/Dawn.vue'

/**
 * 2
 */
import HomeVue from '@render/views/Dawn/Children/Home/Home.vue'
import MessageVue from '@render/views/Dawn/Children/Message/Message.vue'
import HelpVue from '@render/views/Dawn/Children/Help/Help.vue'
import SettingVue from '@render/views/Dawn/Children/Setting/Setting.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/Dawn'
    },
    {
        path: '/Dawn',
        name: 'Dawn',
        component: DawnVue,
        children: [
            {
                path: 'Home',
                name: 'Home',
                component: HomeVue,
            },
            {
                path: 'Message',
                name: 'Message',
                component: MessageVue,
            },
            {
                path: 'Help',
                name: 'Help',
                component: HelpVue,
            },
            {
                path: 'Setting',
                name: 'Setting',
                component: SettingVue,
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
