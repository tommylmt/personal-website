import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import SocialMedia from '@/components/about/SocialMedia.vue'
import { TestIds } from '@/utils/testIds.ts'
import { getByTestId } from '@/components/__tests__/utils/functions.ts'

describe('ErrorBanner Component', () => {
    test('Should all social medias render correctly', () => {
        const wrapper = mount(SocialMedia, {
            global: {
                mocks: {
                    $testIds: TestIds,
                    $t: (key: string) => key
                }
            }
        })
        const {
            About: {
                SocialMedia: { linkWrapper }
            }
        } = TestIds

        expect(wrapper.findAll(getByTestId(linkWrapper)).length).toBe(6)
    })

    test('Each social media should have correct data', () => {
        const data = { link: 'https://link', icon: 'icon-class', label: 'SocialMedia' }
        const wrapper = mount(SocialMedia, {
            global: {
                mocks: {
                    $testIds: TestIds,
                    $t: (key: string) => key
                }
            },
            data() {
                return { socials: [data] }
            }
        })
        const {
            About: {
                SocialMedia: { linkWrapper, link, icon }
            }
        } = TestIds
        expect(wrapper.findAll(getByTestId(linkWrapper)).length).toBe(1)

        wrapper.findAll(getByTestId(linkWrapper)).forEach((element) => {
            expect(element.get(getByTestId(link)).attributes('href')).toBe(data.link)
            expect(element.get(getByTestId(link)).attributes('aria-label')).toBe(data.label)
            expect(element.get(getByTestId(icon)).attributes('class')).includes(data.icon)
        })
    })
})
