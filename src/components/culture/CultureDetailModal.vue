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
                class="bg-white p-10 rounded-3xl shadow-lg w-1/2 my-10 left-1/4 relative z-50 dark:bg-slate-950"
            >
                <span
                    @click="close"
                    :class="[
                        'size-7 flex items-center justify-center bg-black rounded-full shadow-md cursor-pointer',
                        'transition-all hover:rotate-180 sticky ml-auto top-9 -right-2 dark:bg-white'
                    ]"
                >
                    <i class="ph-light ph-x text-white text-lg dark:text-black"></i>
                </span>

                <div
                    :style="{ background: `url(${getImage(data.backdrop_path)})`, backgroundSize: 'cover' }"
                    class="rounded-2xl p-10 h-[450px]"
                ></div>

                <h2 class="font-sans text-8xl text-slate-900 font-bold dark:text-slate-200">
                    {{ data.title ?? data.name }}
                </h2>

                <div class="flex gap-2 mt-3 items-center">
                    <div v-if="data.networks" class="flex gap-2 my-3">
                        <img
                            v-for="network in data.networks"
                            :key="network.id"
                            :src="getImage(network.logo_path, 'w45')"
                            :alt="network.name"
                        />
                    </div>

                    <span class="border text-xs border-slate-400 rounded-xl py-1 px-3 bg-white dark:bg-slate-950 dark:text-slate-200">
                        {{ releaseYear }}
                    </span>

                    <ul class="flex gap-1">
                        <li
                            v-for="genre in data.genres"
                            :key="genre.id"
                            class="px-3 rounded-xl py-1 text-white text-xs bg-slate-950 dark:bg-white dark:text-slate-950"
                        >
                            {{ genre.name }}
                        </li>
                    </ul>
                </div>

                <p class="text-slate-500 leading-7 mt-2">{{ data.overview }}</p>

                <template v-if="data.cast?.length > 0">
                    <h3 class="text-7xl mt-4 text-slate-900 font-bold mb-2 dark:text-slate-200">Cast</h3>

                    <div class="flex gap-1">
                        <div
                            v-for="actor in data.cast.slice(0, 5)"
                            :key="actor.id"
                            class="bg-slate-100 basis-1/5 rounded-3xl p-3 dark:bg-slate-900"
                        >
                            <img :src="getImage(actor.profile_path, 'w185')" :alt="actor.name" class="w-full rounded-2xl" />
                            <p class="text-slate-800 text-sm font-bold dark:text-slate-300">{{ actor.name }}</p>
                            <p class="text-slate-500 text-xs">{{ actor.character }}</p>
                        </div>
                    </div>
                </template>

                <template v-if="directors()">
                    <h3 class="text-7xl mt-4 text-slate-900 font-bold mb-2 dark:text-slate-200">Directed by</h3>

                    <div class="flex gap-1">
                        <div
                            v-for="showrunner in directors()"
                            :key="showrunner.id"
                            class="bg-slate-100 basis-1/5 rounded-3xl p-3 dark:bg-slate-900"
                        >
                            <img :src="getImage(showrunner.profile_path, 'w185')" :alt="showrunner.name" class="w-full rounded-2xl" />
                            <p class="text-slate-800 text-sm font-bold dark:text-slate-300">
                                {{ showrunner.name }}
                            </p>
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
        ...mapStores(useCultureStore),
        releaseYear() {
            return new Date(this.data.release_date ?? this.data.first_air_date ?? '').getFullYear()
        }
    },
    watch: {
        'cultureStore.uuid'(newValue) {
            if (newValue) {
                this.isOpen = true
                this.fetch(newValue)
                document.body.style.overflowY = 'hidden'
            }
        }
    },
    methods: {
        directors() {
            if (this.data.created_by) {
                return this.data.created_by
            }

            return this.data.crew
                ?.sort((a, b) => (a.popularity > b.popularity ? -1 : 1))
                .filter((c) => ['Director'].includes(c.job) && c.profile_path)
                .slice(0, 5)
        },
        close() {
            this.data = {}
            this.cultureStore.$reset()
            this.isOpen = false
            document.body.style.overflowY = 'auto'
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
