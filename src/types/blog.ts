export type TBlogPost = {
    is_active: boolean
    published_at: string
    title: string
    slug: string
    card_image: string
    author: {
        name: string
        avatar: string
    }
    language: string
    language_icon: string
}
