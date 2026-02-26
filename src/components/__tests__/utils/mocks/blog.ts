import type { TBlogPost, TCompleteBlogPost } from '@/types/blog.ts'

export const createFakeBlogPost = (
    title: string,
    slug: string,
    card_image: string,
    published_at: string,
    language_icon: string,
    content: string,
    uuid: string,
    banner: string,
    reading_time: number
): TCompleteBlogPost => {
    return {
        ...createFakeBlogPostForList(title, slug, card_image, published_at, language_icon),
        unique_id: uuid,
        banner: banner,
        reading_time: reading_time,
        content: content,
        table_of_contents: []
    }
}

export const createFakeBlogPostForList = (
    title: string,
    slug: string,
    card_image: string,
    published_at: string,
    language_icon: string
): TBlogPost => {
    return {
        is_active: true,
        published_at,
        title,
        slug,
        card_image,
        author: {
            name: 'Tommy',
            avatar: '/avatar.jpg'
        },
        language: 'Language',
        language_icon
    }
}

export const blogPostList = [
    createFakeBlogPostForList('First article', 'first-article', '/image.jpg', '2026-01-01T12:00:00', '🇫🇷'),
    createFakeBlogPostForList('Second article', 'second-article', '/second.jpg', '2026-01-01T12:00:00', '🇫🇷'),
    createFakeBlogPostForList('Third article', 'third-article', '/third.jpg', '2026-01-01T12:00:00', '🇺🇸')
]
