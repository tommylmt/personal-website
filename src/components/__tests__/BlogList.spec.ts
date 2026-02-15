import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, shallowMount } from '@vue/test-utils'
import BlogList from '@/components/blog/BlogList.vue'
import axios from 'axios'
import { blogPostList } from '@/components/__tests__/utils/mocks/blog.ts'
import { TestIds } from '@/utils/testIds.ts'
import ErrorBanner from '@/components/errors/ErrorBanner.vue'
import { ApiMockedUrl } from '@/components/__tests__/utils/mocks/url.ts'
import { getByTestId } from '@/components/__tests__/utils/functions.ts'

const GLOBAL_PROPS = {
    global: {
        provide: {
            baseUrl: ApiMockedUrl
        },
        mocks: {
            $t: (key: string) => key
        },
        stubs: {
            ContainerLayout: false,
            ErrorBanner: false,
            BlogPost: false
        }
    }
}

vi.mock('axios')

describe('BlogList Component', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('fetches all blog post when mounted', async () => {
        vi.mocked(axios.get).mockResolvedValue({ data: blogPostList })

        const wrapper = shallowMount(BlogList, GLOBAL_PROPS)
        const {
            Blog: {
                List: { aBlogPost }
            }
        } = TestIds

        await flushPromises()

        expect(wrapper.findAll(getByTestId(aBlogPost)).length).toBe(blogPostList.length)
        expect(axios.get).toHaveBeenCalledWith(`${ApiMockedUrl}/api/blog/list`)
    })

    it('display a skeleton loader when data are not loaded', async () => {
        vi.mocked(axios.get).mockImplementation(() => new Promise(() => {}))
        const wrapper = shallowMount(BlogList, GLOBAL_PROPS)
        const {
            Blog: {
                List: { aLoaderSkeleton }
            }
        } = TestIds

        expect(wrapper.findAll(getByTestId(aLoaderSkeleton)).length).toBe(8)
    })

    it('render an error when fetch fail', async () => {
        vi.mocked(axios.get).mockRejectedValue(new Error('Failed to fetch'))
        const wrapper = shallowMount(BlogList, GLOBAL_PROPS)

        await flushPromises()
        expect(wrapper.getComponent(ErrorBanner)).toBeDefined()
    })
})
