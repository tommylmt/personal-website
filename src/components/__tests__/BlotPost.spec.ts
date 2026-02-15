import { beforeEach, describe, expect, it, vi } from 'vitest'
import { TestIds } from '@/utils/testIds.ts'
import { ApiMockedUrl } from '@/components/__tests__/utils/mocks/url.ts'
import BlogPost from '@/components/blog/BlogPost.vue'
import { createFakeBlogPostForList } from '@/components/__tests__/utils/mocks/blog.ts'
import { getByTestId } from '@/components/__tests__/utils/functions.ts'
import { mount } from '@vue/test-utils'

const GLOBAL_PROPS = {
    global: {
        provide: {
            baseUrl: ApiMockedUrl
        },
        mocks: {
            $t: (key: string) => key
        },
        stub: {
            RouterLink: true,
            'i18n-d': true
        }
    }
}

vi.mock('axios')

describe('BlogPost Component', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('render correct props data', async () => {
        const data = createFakeBlogPostForList(
            'Woh such a good article',
            'woodstock-super-cat-oh-oh-oh',
            '/uploads/my-image.webp',
            '2023-10-01T14:50:44',
            '🇺🇸'
        )
        const wrapper = mount(BlogPost, {
            ...GLOBAL_PROPS,
            props: {
                post: data
            }
        })

        expect(wrapper.find(getByTestId(TestIds.Blog.Post.title)).text()).toBe(data.title)
        expect(wrapper.find(getByTestId(TestIds.Blog.Post.metadata)).text()).toContain(data.language_icon)

        // Card image style
        expect(wrapper.find(getByTestId(TestIds.Blog.Post.cardImage)).attributes()['style']).toBeDefined()
        expect(wrapper.find(getByTestId(TestIds.Blog.Post.cardImage)).attributes()['style']).toBe(
            `background: url("${ApiMockedUrl}/cdn${data.card_image}");`
        )
    })
})
