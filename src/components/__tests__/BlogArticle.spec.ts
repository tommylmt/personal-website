import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, shallowMount } from '@vue/test-utils'
import axios from 'axios'
import { createFakeBlogPost } from '@/components/__tests__/utils/mocks/blog.ts'
import { TestIds } from '@/utils/testIds.ts'
import { ApiMockedUrl } from '@/components/__tests__/utils/mocks/url.ts'
import { getByTestId } from '@/components/__tests__/utils/functions.ts'
import BlogArticle from '@/components/blog/BlogArticle.vue'

const GLOBAL_PROPS = {
    global: {
        provide: {
            baseUrl: ApiMockedUrl
        },
        mocks: {
            useRoute: () => ({ params: { slug: 'a-dummy-slug' } }),
            $t: (key: string) => key
        }
    }
}

const article = createFakeBlogPost(
    'A dummy blog article',
    'a-dummy-blog-article',
    '/uploads/dummy_card_image.webp',
    '2023-10-01T14:50:44',
    '🇺🇸',
    `
# A title
## A subtitle
a sample test **bold**
[a link](https://a-link.com)
## Second check
    `,
    '11111111-2222-3333-4444-555555555555',
    '/uploads/dummy_banner_image.webp',
    15
)

vi.mock('axios')

describe('BlogArticle Component', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('fetches the blog post when mounted', async () => {
        vi.mocked(axios.get).mockResolvedValue({ data: article })

        const wrapper = shallowMount(BlogArticle, GLOBAL_PROPS)

        await flushPromises()

        expect(wrapper.find(getByTestId(TestIds.Blog.Article.title)).text()).toBe(article.title)
        expect(wrapper.find(getByTestId(TestIds.Blog.Article.timeToRead)).text()).toBe(`${article.reading_time} min`)
        expect(wrapper.find(getByTestId(TestIds.Blog.Article.authorName)).text()).toBe(`${article.author} min`)
        expect(wrapper.find(getByTestId(TestIds.Blog.Article.language)).text()).toBe(`${article.language_icon} ${article.language}`)

        // Banner
        expect(wrapper.find(getByTestId(TestIds.Blog.Article.banner)).attributes()['style']).toBeDefined()
        expect(wrapper.find(getByTestId(TestIds.Blog.Article.banner)).attributes()['style']).toBe(
            `background: url("${ApiMockedUrl}${article.banner}");`
        )
    })
})
