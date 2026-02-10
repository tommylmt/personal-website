<template>
    <div v-if="isOpen" class="fixed h-screen inset-0 z-[9999] overflow-auto xl:p-0 p-3">
        <AnimatePresence :initial="true">
            <Motion
                v-if="isOpen"
                :initial="{ opacity: 0 }"
                :animate="{ opacity: 1 }"
                :exit="{ opacity: 0 }"
                as="div"
                key="backdropModal"
                class="backdrop-blur-xs bg-neutral-800/60 size-full top-0 left-0 fixed inset-0"
            ></Motion>
        </AnimatePresence>
        <AnimatePresence :initial="true">
            <Motion
                v-if="isOpen"
                :initial="{ opacity: 0, scale: 0 }"
                :animate="{ scale: 1, opacity: 1 }"
                :exit="{ opacity: 0, scale: 0 }"
                key="filmModal"
                as="div"
                :class="[
                    'bg-white p-4 xl:p-10 rounded-3xl shadow-lg relative z-50 dark:bg-neutral-950',
                    'w-full xl:w-2/3 2xl:w-1/2 mx-auto xl:my-10'
                ]"
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

                <CultureDetailModalLoader v-if="isLoading" />
                <template v-else-if="data">
                    <div
                        :style="{
                            background: `url(${getImage(data.backdrop_path)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }"
                        class="rounded-2xl p-10 h-64 md:h-[450px]"
                    ></div>

                    <h2 class="font-sans text-6xl text-neutral-900 font-bold dark:text-neutral-200 mt-3">
                        {{ data.title ?? data.name }}
                    </h2>

                    <div class="flex gap-2 mt-3 items-center flex-wrap">
                        <div v-if="data.networks" class="flex gap-2 my-3">
                            <img
                                v-for="network in data.networks"
                                :key="network.id"
                                :src="getImage(network.logo_path, 'w45')"
                                :alt="network.name"
                            />
                        </div>

                        <span
                            class="border text-xs border-neutral-400 rounded-xl py-1 px-3 bg-white dark:bg-neutral-950 dark:text-neutral-200"
                        >
                            {{ releaseYear }}
                        </span>

                        <ul class="flex gap-1">
                            <li
                                v-for="genre in data.genres"
                                :key="genre.id"
                                class="px-3 rounded-xl py-1 text-white text-xs bg-neutral-950 dark:bg-white dark:text-neutral-950"
                            >
                                {{ genre.name }}
                            </li>
                        </ul>
                    </div>

                    <p class="text-neutral-500 leading-7 mt-2">{{ data.overview }}</p>

                    <template v-if="data.cast?.length > 0">
                        <h3 class="text-5xl mt-8 text-neutral-900 font-bold mb-5 dark:text-neutral-200">
                            {{ $t('culture.details.casting') }}
                        </h3>

                        <div class="flex gap-3 overflow-x-scroll md:overflow-x-visible">
                            <div v-for="actor in data.cast.slice(0, 5)" :key="actor.id" class="basis-1/3 shrink-0 md:shrink md:basis-1/5">
                                <img :src="getImage(actor.profile_path, 'w185')" :alt="actor.name" class="w-full rounded-2xl" />
                                <p class="text-neutral-800 text-sm font-bold dark:text-neutral-300 mt-2">{{ actor.name }}</p>
                                <p class="text-neutral-500 text-xs">{{ actor.character }}</p>
                            </div>
                        </div>
                    </template>

                    <template v-if="directors()">
                        <h3 class="text-5xl mt-8 text-neutral-900 font-bold mb-5 dark:text-neutral-200">
                            {{ $t('culture.details.directors') }}
                        </h3>

                        <div class="flex gap-3 overflow-x-scroll md:overflow-x-visible">
                            <div v-for="showrunner in directors()" :key="showrunner.id" class="basis-1/3 shrink-0 lg:shrink-1 md:basis-1/5">
                                <img :src="getImage(showrunner.profile_path, 'w185')" :alt="showrunner.name" class="w-full rounded-2xl" />
                                <p class="text-neutral-800 text-sm font-bold dark:text-neutral-300 mt-2">
                                    {{ showrunner.name }}
                                </p>
                            </div>
                        </div>
                    </template>
                </template>
            </Motion>
        </AnimatePresence>
    </div>
</template>

<script lang="ts">
import { AnimatePresence, Motion } from 'motion-v'
import { mapStores } from 'pinia'
import { useCultureStore } from '@/stores/cultureStore'
import axios from 'axios'
import CultureDetailModalLoader from '@/components/culture/CultureDetailModalLoader.vue'
import type { TCultureDetail, TCultureDetailModalData } from '@/types/culture.ts'

export default {
    components: { CultureDetailModalLoader, AnimatePresence, Motion },
    data(): TCultureDetailModalData {
        return {
            isOpen: false,
            isLoading: true,
            data: null
        }
    },
    computed: {
        ...mapStores(useCultureStore),
        releaseYear() {
            return new Date(this.data?.release_date ?? this.data?.first_air_date ?? '').getFullYear()
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
            if (this.data?.created_by) {
                return this.data.created_by
            }

            return this.data!.crew?.sort((a, b) => (a.popularity > b.popularity ? -1 : 1))
                .filter((c) => ['Director'].includes(c.job) && c.profile_path)
                .slice(0, 5)
        },
        close() {
            this.data = null
            this.cultureStore.$reset()
            this.isOpen = false
            this.isLoading = true
            document.body.style.overflowY = 'auto'
        },
        getImage(path: string, size = 'original') {
            if (this.data?.image_base_url) {
                return this.data.image_base_url + '/t/p/' + size + path
            }

            return undefined
        },
        async fetch(uuid: string) {
            const { data } = await axios.get<TCultureDetail>(`${this.$baseUrl}/api/${this.$i18n.locale}/culture/${uuid}/details`)

            this.data = data
            this.isLoading = false
        }
    }
}
</script>
