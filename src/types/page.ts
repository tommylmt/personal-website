export type TPageMeta = {
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
    component: Function
    meta: TPageMeta
}
