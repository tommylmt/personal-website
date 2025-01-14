import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to) {
        return { top: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'about',
            component: () => import("@/components/about/About.vue"),
            meta: {
                title: 'seo.title.about',
                description: 'seo.meta.description.about'
            }
        },
        {
            path: '/stack',
            name: 'stack',
            component: () => import('@/components/stack/Stack.vue')
        },
        {
            path: '/culture',
            name: 'culture',
            component: () => import('@/components/culture/Culture.vue')
        }
    ]
})

export default router
