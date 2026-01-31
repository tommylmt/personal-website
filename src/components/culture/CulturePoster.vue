<template>
    <div class="w-96 p-3 relative">
        <div
            class="w-full h-[500px] rounded-3xl flex items-end p-5 cursor-none"
            @click="openDetails"
            :style="{
                background: `url(${$baseUrl + '/cdn' + file})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }"
            @mouseenter="mouseenter"
            @mousemove="mousemove"
            @mouseleave="mouseleave"
        >
            <div
                :class="[
                    'shadow-lg backdrop-blur-lg w-full p-3 flex justify-between items-center rounded-2xl pointer-events-none',
                    'bg-white/70 dark:bg-slate-800/70'
                ]"
            >
                <p class="text-slate-500 dark:text-slate-300 text-sm">{{ subtitle }}</p>
                <p class="text-slate-800 dark:text-slate-100 font-sans">{{ artist }}</p>
            </div>
        </div>

        <div
            class="absolute bg-black text-xs text-white py-1 px-3 rounded-xl pointer-events-none"
            :class="visible ? 'scale-100' : 'scale-0'"
            :style="{
                transition: 'transform .3s',
                left: `${mouse.x}px`,
                top: `${mouse.y}px`
            }"
        >
            {{ $t('culture.cursor') }}
        </div>
    </div>
</template>

<script lang="ts">
import { mapStores } from 'pinia'
import { useCultureStore } from '@/stores/cultureStore'

export default {
    props: {
        file: { type: String, required: true },
        subtitle: { type: String, required: true },
        artist: { type: String, required: true },
        uuid: { type: [String, null], required: false, default: null }
    },
    data() {
        return {
            visible: false,
            mouse: {
                x: null,
                y: null
            }
        }
    },
    computed: {
        ...mapStores(useCultureStore)
    },
    methods: {
        mouseenter(e) {
            const { left, top } = e.target.getBoundingClientRect()

            this.visible = true
            this.mouse.x = e.clientX - left
            this.mouse.y = e.clientY - top
        },
        mousemove(e) {
            const { left, top } = e.target.getBoundingClientRect()

            this.mouse.x = e.clientX - left
            this.mouse.y = e.clientY - top
        },
        mouseleave() {
            this.visible = false
        },
        openDetails() {
            if (this.uuid) {
                this.cultureStore.uuid = this.uuid
            }
        }
    }
}
</script>
