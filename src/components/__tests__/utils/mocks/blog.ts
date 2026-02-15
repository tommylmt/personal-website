import type { TBlogPost } from '@/types/blog.ts'

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
    createFakeBlogPostForList('First article', 'first-article', 'https://example.org/image.jpg', '2026-01-01T12:00:00', '🇫🇷'),
    createFakeBlogPostForList('Second article', 'second-article', 'https://example.org/second.jpg', '2026-01-01T12:00:00', '🇫🇷'),
    createFakeBlogPostForList('Third article', 'third-article', 'https://example.org/third.jpg', '2026-01-01T12:00:00', '🇺🇸')
]
