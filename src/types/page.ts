import type { RouteMeta } from 'vue-router'
import type { Component } from 'vue'

export type TPageMeta = RouteMeta & {
    title: string
    seo: {
        description: string
        'twitter:title': string
        'twitter:description': string
    }
    og: {
        'og:title': string
        'og:description': string
        'og:site_name': string
    }
}

export type TPage = {
    path: string
    name: string
    component: () => Promise<Component>
    meta: TPageMeta
}
