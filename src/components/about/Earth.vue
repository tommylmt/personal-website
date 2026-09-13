<template>
    <DraggableBlock
        :style="{
            right: '-20px',
            top: '-25px',
            zIndex: 400,
            width: '600px',
            overflow: 'hidden'
        }"
        :hide-mobile="true"
    >
        <div id="mapboxContainer">
            <div ref="mapbox" id="mapbox"></div>
        </div>
        <div class="z-999 absolute w-full left-0 bottom-0 p-3">
            <div
                class="rounded-2xl shadow-sm w-full bg-white/70 backdrop-blur-lg border border-neutral-200 dark:border-neutral-700 p-5 dark:bg-neutral-600/50"
            >
                <p class="font-sans uppercase text-xs text-neutral-500">Toulouse, France</p>
                <p class="text-4xl font-light text-neutral-900 dark:text-neutral-300 tabular-nums" v-if="currentTime.hours">
                    <NumberFlowGroup>
                        <NumberFlow :value="currentTime.hours" :trend="0" :format="{ minimumIntegerDigits: 2 }" suffix=":" />
                        <NumberFlow :value="currentTime.minutes" :trend="0" :format="{ minimumIntegerDigits: 2 }" suffix=":" />
                        <NumberFlow :value="currentTime.seconds" :trend="0" :format="{ minimumIntegerDigits: 2 }" />
                    </NumberFlowGroup>
                </p>
                <i18n-d tag="p" class="text-xs font-light text-neutral-400" :value="currentDate" format="long"></i18n-d>
            </div>
        </div>
    </DraggableBlock>
</template>

<script lang="ts">
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import DraggableBlock from '@/components/layout/DraggableBlock.vue'
import NumberFlow, { NumberFlowGroup } from '@number-flow/vue'
import type { TTime } from '@/types/date.ts'

export default {
    components: { NumberFlowGroup, DraggableBlock, NumberFlow },
    mounted() {
        this.initMap()
        this.setCurrentTime()
    },
    data(): { currentTime: TTime; currentDate: Date; map: unknown } {
        return {
            currentTime: {
                hours: 0,
                minutes: 0,
                seconds: 0
            },
            currentDate: new Date(),
            map: null
        }
    },
    computed: {
        isDarkTheme() {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        }
    },
    methods: {
        setCurrentTime() {
            setTimeout(() => {
                this.currentTime.hours = new Date().getHours()
                this.currentTime.minutes = new Date().getMinutes()
                this.currentTime.seconds = new Date().getSeconds()
                this.currentDate = new Date()

                this.setCurrentTime()
            }, 1000)
        },
        initMap() {
            this.map = new mapboxgl.Map({
                accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
                container: this.$refs.mapbox as HTMLDivElement,
                center: [1.4353, 43.6107],
                zoom: 14,
                ...(this.isDarkTheme ? { style: 'mapbox://styles/mapbox/dark-v11' } : {})
            })

            const el = document.createElement('div')
            el.className = 'p-2 rounded-full bg-blue-500 border-4 border-white shadow-md'

            const marker = new mapboxgl.Marker({ element: el }).setLngLat([1.4353, 43.6107]).addTo(this.map)
        }
    }
}
</script>

<style>
#mapboxContainer {
    width: 600px !important;
    height: 400px !important;
    border-radius: var(--radius-3xl);
    overflow: hidden;
    transform: translateZ(0);
    isolation: isolate;
}

#mapbox {
    width: 100%;
    height: 100%;
}
.mapboxgl-control-container {
    display: none;
}
</style>
