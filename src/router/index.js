import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import { processSeo } from '@/utils/seo'
import { NOT_FOUND } from '@/utils/constants'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
        return { top: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'about',
            component: () => import('@/components/about/About.vue'),
            meta: {
                title: 'seo.title.about',
                seo: {
                    description: 'seo.meta.about.description',
                    'twitter:title': 'seo.meta.about.twitter.title',
                    'twitter:description': 'seo.meta.about.twitter.description'
                },
                og: {
                    'og:title': 'seo.meta.about.og.title',
                    'og:description': 'seo.meta.about.og.description',
                    'og:site_name': 'seo.meta.about.og.title'
                }
            }
        },
        {
            path: '/stack',
            name: 'stack',
            component: () => import('@/components/stack/Stack.vue'),
            meta: {
                title: 'seo.title.stack',
                seo: {
                    description: 'seo.meta.stack.description',
                    'twitter:title': 'seo.meta.stack.twitter.title',
                    'twitter:description': 'seo.meta.stack.twitter.description'
                },
                og: {
                    'og:title': 'seo.meta.stack.og.title',
                    'og:description': 'seo.meta.stack.og.description',
                    'og:site_name': 'seo.meta.stack.og.title'
                }
            }
        },
        {
            path: '/culture',
            name: 'culture',
            component: () => import('@/components/culture/Culture.vue'),
            meta: {
                title: 'seo.title.culture',
                seo: {
                    description: 'seo.meta.culture.description',
                    'twitter:title': 'seo.meta.culture.twitter.title',
                    'twitter:description': 'seo.meta.culture.twitter.description'
                },
                og: {
                    'og:title': 'seo.meta.culture.og.title',
                    'og:description': 'seo.meta.culture.og.description',
                    'og:site_name': 'seo.meta.culture.og.title'
                }
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: NOT_FOUND,
            component: () => import('@/components/errors/Error404.vue'),
            meta: {
                title: 'seo.title.notfound',
                seo: {
                    description: 'seo.meta.culture.description',
                    'twitter:title': 'seo.meta.culture.twitter.title',
                    'twitter:description': 'seo.meta.culture.twitter.description'
                },
                og: {
                    'og:title': 'seo.meta.culture.og.title',
                    'og:description': 'seo.meta.culture.og.description',
                    'og:site_name': 'seo.meta.culture.og.title'
                }
            }
        }
    ]
})

router.afterEach((to) => {
    nextTick(() => {
        processSeo(to.meta)
    })
})

export default router
