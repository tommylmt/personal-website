<template>
    <div class="w-96 p-3">
        <div
            class="w-full h-[500px] rounded-3xl flex items-end p-5 cursor-pointer"
            @click="openDetails"
            :style="{
                background: `url(${$baseUrl + '/cdn' + file})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }"
        >
            <div
                :class="[
                    'shadow-lg backdrop-blur-lg w-full p-3 flex justify-between items-center rounded-2xl',
                    'bg-white/70 dark:bg-slate-800/70'
                ]"
            >
                <p class="text-slate-500 dark:text-slate-300 text-sm">{{ subtitle }}</p>
                <p class="text-slate-800 dark:text-slate-100 font-sans">{{ artist }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useCultureStore } from '@/stores/cultureStore'

export default {
    props: {
        file: { type: String, required: true },
        subtitle: { type: String, required: true },
        artist: { type: String, required: true },
        uuid: { type: [String, null], required: false, default: null }
    },
    computed: {
        ...mapStores(useCultureStore)
    },
    methods: {
        openDetails() {
            if (this.uuid) {
                this.cultureStore.uuid = this.uuid
            }
        }
    }
}
</script>
