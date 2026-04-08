<template>
    <DraggableBlock
        :style="{
            right: '-20px',
            top: '-25px',
            zIndex: 400,
            width: '600px'
        }"
        :hide-mobile="true"
    >
        <div id="openstreetmap"></div>
        <div class="z-999 absolute w-full left-0 bottom-0 p-3">
            <div class="rounded-2xl shadow-sm w-full bg-white/70 backdrop-blur-lg border border-neutral-200 p-5 dark:bg-neutral-600/50">
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
import 'leaflet/dist/leaflet.css'
import DraggableBlock from '@/components/layout/DraggableBlock.vue'
import * as L from 'leaflet'
import NumberFlow, { NumberFlowGroup } from '@number-flow/vue'
import type { TTime } from '@/types/date.ts'

export default {
    components: { NumberFlowGroup, DraggableBlock, NumberFlow },
    mounted() {
        this.initMap()
        this.setCurrentTime()
    },
    data(): { currentTime: TTime; currentDate: Date } {
        return {
            currentTime: {
                hours: 0,
                minutes: 0,
                seconds: 0
            },
            currentDate: new Date()
        }
    },
    computed: {
        isDarkTheme() {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        },
        tileTheme() {
            return this.isDarkTheme
                ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
                : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'
        },
        tileSettings() {
            return {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            }
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
            const map = L.map('openstreetmap', {
                trackResize: false,
                zoomControl: false
            }).setView([43.6107, 1.4353], 17)
            map.invalidateSize()

            L.tileLayer(this.tileTheme, this.tileSettings).addTo(map)
            L.marker([43.6107, 1.4353], {
                title: 'Home',
                icon: L.divIcon({
                    className: 'p-2 rounded-full bg-blue-500 border-4 border-white shadow-md'
                })
            }).addTo(map)
        }
    }
}
</script>

<style>
#openstreetmap {
    width: 600px !important;
    height: 400px !important;
}
.leaflet-right {
    display: none;
}
</style>
