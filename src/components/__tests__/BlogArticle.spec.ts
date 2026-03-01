import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import axios from 'axios'
import { createFakeBlogPost } from '@/components/__tests__/utils/mocks/blog.ts'
import { TestIds } from '@/utils/testIds.ts'
import { ApiMockedUrl } from '@/components/__tests__/utils/mocks/url.ts'
import { getByTestId } from '@/components/__tests__/utils/functions.ts'
import BlogArticle from '@/components/blog/BlogArticle.vue'
import { type RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
import BlogArticleLoader from '@/components/blog/BlogArticleLoader.vue'

const GLOBAL_PROPS = {
    global: {
        provide: {
            baseUrl: ApiMockedUrl
        },
        mocks: {
            $t: (key: string) => key,
            $d: (date: Date) => date.toLocaleDateString()
        },
        stubs: {
            'i18n-d': {
                template: '<p>{{ value.toLocaleDateString() }}</p>',
                props: ['value', 'format']
            },
            RouterLink: {
                template: '<a><slot /></a>',
                props: ['to', 'aria-label']
            }
        }
    }
}

const mockArticle = createFakeBlogPost(
    'A dummy blog article',
    'a-dummy-blog-article',
    '/uploads/dummy_card_image.webp',
    '2023-10-01T14:50:44',
    '🇺🇸',
    '# Heading\n\nThis is **bold** text.\n\n```javascript\nconst test = "code";\n```',
    '11111111-2222-3333-4444-555555555555',
    '/uploads/dummy_banner_image.webp',
    15,
    [
        { level: 1, text: 'Introduction' },
        { level: 2, text: 'Getting Started' }
    ]
)

vi.mock('axios')
vi.mock('vue-router', () => ({
    useRoute: vi.fn()
}))

describe('BlogArticle Component', () => {
    beforeEach(() => {
        vi.clearAllMocks()
        vi.mocked(useRoute).mockReturnValue({
            params: { slug: 'a-dummy-blog-article' }
        } as unknown as RouteLocationNormalizedLoaded)
    })

    it('displays loader while article is loading', () => {
        vi.mocked(axios.get).mockImplementation(() => new Promise(() => {}))

        const wrapper = mount(BlogArticle, GLOBAL_PROPS)

        expect(wrapper.findComponent(BlogArticleLoader).exists()).toBe(true)
    })

    it('fetches and displays article on mount', async () => {
        vi.mocked(axios.get).mockResolvedValue({ data: mockArticle })

        const wrapper = mount(BlogArticle, GLOBAL_PROPS)
        const {
            Blog: { Article }
        } = TestIds

        await flushPromises()

        expect(axios.get).toHaveBeenCalledWith(`${ApiMockedUrl}/api/blog/a-dummy-blog-article`)
        expect(wrapper.get(getByTestId(Article.title)).text()).toBe('A dummy blog article')
        expect(wrapper.get(getByTestId(Article.timeToRead)).text()).toContain('15 min')
        expect(wrapper.get(getByTestId(Article.language)).text()).toContain('🇺🇸 English')
        expect(wrapper.get(getByTestId(Article.authorName)).text()).toBe('Tommy')
    })

    it('does not display banner when article has no banner', async () => {
        const articleWithoutBanner = { ...mockArticle, banner: null }
        vi.mocked(axios.get).mockResolvedValue({ data: articleWithoutBanner })

        const wrapper = mount(BlogArticle, GLOBAL_PROPS)
        const {
            Blog: { Article }
        } = TestIds

        await flushPromises()

        expect(wrapper.find(getByTestId(Article.banner)).exists()).toBe(false)
    })

    it('renders markdown content as HTML', async () => {
        vi.mocked(axios.get).mockResolvedValue({ data: mockArticle })

        const wrapper = mount(BlogArticle, GLOBAL_PROPS)
        const {
            Blog: { Article }
        } = TestIds

        await flushPromises()

        const markdown = wrapper.get(getByTestId(Article.markdown))
        expect(markdown.html()).toContain('<h1>Heading</h1>')
        expect(markdown.html()).toContain('<strong>bold</strong>')
    })

    it('highlights code blocks in markdown', async () => {
        vi.mocked(axios.get).mockResolvedValue({ data: mockArticle })

        const wrapper = mount(BlogArticle, GLOBAL_PROPS)
        const {
            Blog: { Article }
        } = TestIds

        await flushPromises()

        const markdown = wrapper.get(getByTestId(Article.markdown))
        expect(markdown.text()).toContain('const test = "code"')
    })

    it('displays author information with avatar', async () => {
        vi.mocked(axios.get).mockResolvedValue({ data: mockArticle })

        const wrapper = mount(BlogArticle, GLOBAL_PROPS)
        const {
            Blog: { Article }
        } = TestIds

        await flushPromises()

        const authorIcon = wrapper.get(getByTestId(Article.authorIcon))
        expect(authorIcon.attributes('src')).toBe(`${ApiMockedUrl}/avatar.jpg`)
        expect(authorIcon.attributes('alt')).toBe('Tommy')
    })

    it('renders table of contents with proper indentation', async () => {
        vi.mocked(axios.get).mockResolvedValue({ data: mockArticle })

        const wrapper = mount(BlogArticle, GLOBAL_PROPS)

        await flushPromises()

        const dynamicIsland = wrapper.findComponent({ name: 'DynamicIsland' })
        expect(dynamicIsland.exists()).toBe(true)

        const tocItems = dynamicIsland.findAll('p')
        expect(tocItems).toHaveLength(2)
        expect(tocItems[0]!.text()).toBe('Introduction')
        expect(tocItems[1]!.text()).toBe('Getting Started')
    })

    it('handles fetch errors gracefully', async () => {
        vi.mocked(axios.get).mockRejectedValue(new Error('Failed to fetch'))

        const wrapper = mount(BlogArticle, GLOBAL_PROPS)

        await flushPromises()

        // Component should still render without crashing
        expect(wrapper.exists()).toBe(true)
    })

    it('uses correct slug from route params', async () => {
        vi.mocked(useRoute).mockReturnValue({
            params: { slug: 'different-slug' }
        } as unknown as RouteLocationNormalizedLoaded)
        vi.mocked(axios.get).mockResolvedValue({ data: mockArticle })

        mount(BlogArticle, GLOBAL_PROPS)

        await flushPromises()

        expect(axios.get).toHaveBeenCalledWith(`${ApiMockedUrl}/api/blog/different-slug`)
    })
})
