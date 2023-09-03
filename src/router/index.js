import { createRouter, createWebHistory } from 'vue-router'

import About from '@/components/about/About.vue'
import Stack from '@/components/stack/Stack.vue'
import Culture from '@/components/culture/Culture.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'about',
            component: About
        },
        {
            path: '/stack',
            name: 'stack',
            component: Stack
        },
        {
            path: '/culture',
            name: 'culture',
            component: Culture
        }
    ]
})

export default router
