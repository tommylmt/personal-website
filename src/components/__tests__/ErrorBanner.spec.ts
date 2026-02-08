import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ErrorBanner from '@/components/errors/ErrorBanner.vue'

describe('ErrorBanner Component', () => {
    it('render properly', () => {
        const wrapper = mount(ErrorBanner, {
            props: { title: 'translation.key' },
            global: {
                mocks: {
                    $t: (key: string) => key
                }
            }
        })

        expect(wrapper.text()).toBe('translation.key')
    })
})
