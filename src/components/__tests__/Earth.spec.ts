import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import Earth from '@/components/about/Earth.vue'
import NumberFlow from '@number-flow/vue'
import DraggableBlock from '@/components/layout/DraggableBlock.vue'

type MapCustomSettings = {
    accessToken: string
    container: HTMLDivElement
    center: number[]
    zoom: number
    style?: string
}

const mapbox = vi.hoisted(() => {
    const addTo = vi.fn()
    const setLngLat = vi.fn(() => ({ addTo }))
    const Marker = vi.fn(function () {
        return { setLngLat }
    })
    const Map = vi.fn()
    return { addTo, setLngLat, Marker, Map }
})

vi.mock('mapbox-gl', () => ({
    default: { Map: mapbox.Map, Marker: mapbox.Marker }
}))
vi.mock('mapbox-gl/dist/mapbox-gl.css', () => ({}))

const DraggableBlockStub = defineComponent({
    name: 'DraggableBlock',
    props: ['hideMobile'],
    setup(_, { slots }) {
        return () => h('div', { class: 'draggable-block-stub' }, slots.default?.())
    }
})

const NumberFlowGroupStub = defineComponent({
    name: 'NumberFlowGroup',
    setup(_, { slots }) {
        return () => h('div', { class: 'number-flow-group-stub' }, slots.default?.())
    }
})

const I18nDStub = defineComponent({
    name: 'i18n-d',
    props: ['value', 'format', 'tag'],
    setup(props) {
        return () => h('p', { class: 'i18n-d-stub' }, String(props.value))
    }
})

const globalOptions = {
    stubs: {
        DraggableBlock: DraggableBlockStub,
        NumberFlowGroup: NumberFlowGroupStub,
        'i18n-d': I18nDStub
    }
}

function mockDarkMode(matches: boolean) {
    vi.stubGlobal(
        'matchMedia',
        vi.fn(() => ({ matches }))
    )
}

function mountComponent() {
    return mount(Earth, { global: globalOptions })
}

describe('Earth Component', () => {
    beforeEach(() => {
        vi.stubEnv('VITE_MAPBOX_TOKEN', 'test-token')
        mapbox.Map.mockClear()
        mapbox.Marker.mockClear()
        mapbox.setLngLat.mockClear()
        mapbox.addTo.mockClear()
        mockDarkMode(false)
    })

    afterEach(() => {
        vi.useRealTimers()
        vi.unstubAllEnvs()
        vi.unstubAllGlobals()
    })

    describe('rendering', () => {
        it('renders the Toulouse, France label', () => {
            const wrapper = mountComponent()
            expect(wrapper.text()).toContain('Toulouse, France')
        })

        it('wraps content in DraggableBlock with hideMobile enabled', () => {
            const wrapper = mountComponent()
            const block = wrapper.findComponent(DraggableBlock)
            expect(block.exists()).toBe(true)
            expect(block.props('hideMobile')).toBe(true)
        })

        it('passes the expected positioning styles to DraggableBlock', () => {
            const wrapper = mountComponent()
            const style = wrapper.find('.draggable-block-stub').attributes('style') ?? ''
            expect(style).toContain('z-index: 400')
            expect(style).toContain('width: 600px')
            expect(style).toContain('right: -20px')
            expect(style).toContain('top: -25px')
        })

        it('does not render the time until hours is non-zero', () => {
            // hours starts at 0, which is falsy, so the v-if hides the time block
            const wrapper = mountComponent()
            expect(wrapper.findComponent(NumberFlowGroupStub).exists()).toBe(false)
        })

        it('passes the current date to i18n-d', () => {
            const wrapper = mountComponent()
            const i18n = wrapper.findComponent(I18nDStub)
            expect(i18n.exists()).toBe(true)
            expect(i18n.props('value')).toBeInstanceOf(Date)
            expect(i18n.props('format')).toBe('long')
        })
    })

    describe('clock', () => {
        it('updates hours, minutes and seconds every second', () => {
            vi.useFakeTimers()
            vi.setSystemTime(new Date(2026, 0, 15, 14, 5, 9))

            const wrapper = mountComponent()
            vi.advanceTimersByTime(1000)

            const vm = wrapper.vm as unknown as { currentTime: { hours: number; minutes: number; seconds: number } }
            expect(vm.currentTime).toEqual({ hours: 14, minutes: 5, seconds: 10 })
        })

        it('renders NumberFlow values once the time is set', async () => {
            vi.useFakeTimers()
            vi.setSystemTime(new Date(2026, 0, 15, 9, 30, 45))

            const wrapper = mountComponent()
            vi.advanceTimersByTime(1000)
            await wrapper.vm.$nextTick()

            const flows = wrapper.findAllComponents(NumberFlow)
            expect(flows).toHaveLength(3)
            expect(flows[0]!.props('value')).toBe(9)
            expect(flows[1]!.props('value')).toBe(30)
            expect(flows[2]!.props('value')).toBe(46)
            expect(flows[0]!.props('format')).toEqual({ minimumIntegerDigits: 2 })
        })

        it('keeps ticking every second', () => {
            vi.useFakeTimers()
            vi.setSystemTime(new Date(2026, 0, 15, 10, 0, 0))

            const wrapper = mountComponent()
            const vm = wrapper.vm as unknown as { currentTime: { seconds: number } }

            vi.setSystemTime(new Date(2026, 0, 15, 10, 0, 1))
            vi.advanceTimersByTime(1000)
            expect(vm.currentTime.seconds).toBe(2)

            vi.setSystemTime(new Date(2026, 0, 15, 10, 0, 2))
            vi.advanceTimersByTime(1000)
            expect(vm.currentTime.seconds).toBe(3)
        })
    })

    describe('map initialization', () => {
        it('creates a Mapbox map with the token, center and zoom', () => {
            mountComponent()

            expect(mapbox.Map).toHaveBeenCalledTimes(1)
            const [options] = mapbox.Map.mock.calls[0] as unknown as [MapCustomSettings]
            expect(options.accessToken).toBe('test-token')
            expect(options.center).toEqual([1.4353, 43.6107])
            expect(options.zoom).toBe(14)
            expect(options.container).toBeInstanceOf(HTMLDivElement)
            expect(options.container.id).toBe('mapbox')
        })

        it('uses the default style in light mode', () => {
            mountComponent()
            const [options] = mapbox.Map.mock.calls[0] as unknown as [MapCustomSettings]
            expect(options).not.toHaveProperty('style')
        })

        it('uses the dark style when the system prefers dark mode', () => {
            mockDarkMode(true)
            mountComponent()
            const [options] = mapbox.Map.mock.calls[0] as unknown as [MapCustomSettings]
            expect(options.style).toBe('mapbox://styles/mapbox/dark-v11')
        })

        it('adds a marker at the Toulouse coordinates', () => {
            const wrapper = mountComponent()

            expect(mapbox.Marker).toHaveBeenCalledTimes(1)
            const [markerOptions] = mapbox.Marker.mock.calls[0] as unknown as [{ element: HTMLDivElement }]
            expect(markerOptions.element).toBeInstanceOf(HTMLDivElement)
            expect(markerOptions.element.className).toContain('bg-blue-500')

            expect(mapbox.setLngLat).toHaveBeenCalledWith([1.4353, 43.6107])

            const mapInstance = mapbox.Map.mock.instances[0]
            expect(mapbox.addTo).toHaveBeenCalledWith(mapInstance)
            expect(wrapper.exists()).toBe(true)
        })
    })
})
