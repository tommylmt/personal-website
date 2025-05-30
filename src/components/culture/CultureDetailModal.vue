<template>
    <AnimatePresence :initial="true">
        <div v-if="isOpen" class="fixed h-screen inset-0 z-[9999] overflow-auto">
            <Motion
                v-if="isOpen"
                :initial="{ opacity: 0 }"
                :animate="{ opacity: 1, delay: 300 }"
                :exit="{ opacity: 0, delay: 300 }"
                as="div"
                class="backdrop-blur-sm bg-slate-800/60 size-full top-0 left-0 fixed inset-0"
            ></Motion>
            <Motion
                v-if="isOpen"
                :initial="{ opacity: 0, scale: 0 }"
                :animate="{ scale: 1, opacity: 1 }"
                :exit="{ opacity: 0, scale: 0 }"
                key="filmModal"
                as="div"
                class="bg-white p-10 rounded-3xl shadow-lg w-1/2 my-10 left-1/4 relative z-50"
            >
                <span
                    @click="close"
                    :class="[
                        'w-7 h-7 flex items-center justify-center bg-black rounded-full shadow-md cursor-pointer',
                        'transition-all hover:rotate-180 sticky top-10 right-0'
                    ]"
                >
                    <i class="ph-light ph-x text-white text-lg"></i>
                </span>

                <div
                    :style="{ background: `url(${getImage(data.backdrop_path)})`, backgroundSize: 'cover' }"
                    class="rounded-2xl p-10 h-80"
                ></div>

                <h2 class="font-sans text-8xl text-slate-900 font-bold">{{ data.title ?? data.name }}</h2>
                <p class="text-slate-500 leading-7 mt-2">{{ data.overview }}</p>

                <template v-if="data.cast">
                    <h3 class="text-7xl mt-4 text-slate-900 font-bold">Cast</h3>

                    <div class="flex gap-1">
                        <div v-for="actor in data.cast.slice(0, 5)" :key="actor.id" class="bg-slate-100 basis-1/5 rounded-3xl p-3">
                            <img :src="getImage(actor.profile_path, 'w185')" :alt="actor.name" class="w-full rounded-2xl" />
                            <p class="text-slate-800 text-sm font-bold">{{ actor.name }}</p>
                            <p class="text-slate-500 text-xs">{{ actor.character }}</p>
                        </div>
                    </div>
                </template>
            </Motion>
        </div>
    </AnimatePresence>
</template>

<script>
import { AnimatePresence, Motion } from 'motion-v'
import { mapStores } from 'pinia'
import { useCultureStore } from '@/stores/cultureStore'
import axios from 'axios'

export default {
    components: { AnimatePresence, Motion },
    data() {
        return {
            isOpen: false,
            data: {}
        }
    },
    computed: {
        ...mapStores(useCultureStore)
    },
    watch: {
        'cultureStore.uuid'(newValue) {
            if (newValue) {
                this.isOpen = true
                this.fetch(newValue)
                document.body.style.overflow = 'hidden'
            }
        }
    },
    methods: {
        close() {
            this.data = {}
            this.cultureStore.$reset()
            this.isOpen = false
            document.body.style.overflow = 'auto'
        },
        getImage(path, size = 'original') {
            return this.data.image_base_url + '/t/p/' + size + path
        },
        async fetch(uuid) {
            const { data } = await axios.get(`${this.$baseUrl}/api/${this.$i18n.locale}/culture/${uuid}/details`)

            this.data = data
        }
    }
}
</script>
