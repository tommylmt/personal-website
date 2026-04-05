<template>
    <ContainerLayout mobile-width="w-full">
        <div class="relative p-3 md:p-0">
            <h1 class="font-sans font-extrabold text-5xl text-neutral-800 dark:text-neutral-300" data-aos="fade-up">
                {{ $t('culture.movies') }}
            </h1>
            <p class="font-sans text-neutral-500 dark:text-neutral-400" data-aos="fade-up" data-aos-delay="100">
                {{ $t('culture.moviesubtitle') }}
            </p>

            <MeetMe :link="links.senscritique" image="/img/culture/senscritique.webp" :width="45" />
        </div>
        <div class="my-5" data-aos="fade-up" data-aos-delay="200">
            <ErrorBanner v-if="errors" :title="errors" />

            <template v-else>
                <Vue3Marquee :pauseOnHover="true" :duration="speedForElements(movies)">
                    <CulturePoster
                        v-for="movie in movies"
                        :key="movie.artist"
                        :subtitle="`📽️ ${$t('culture.director')}`"
                        :artist="movie.artist"
                        :file="movie.file"
                        :uuid="movie.unique_id"
                    />
                </Vue3Marquee>
            </template>
        </div>
        <div class="my-10">
            <div class="relative p-3 md:p-0">
                <h1 class="font-sans font-extrabold text-5xl text-neutral-800 dark:text-neutral-300" data-aos="fade-up">
                    {{ $t('culture.tvshows') }}
                </h1>
                <p class="font-sans text-neutral-500 dark:text-neutral-400" data-aos="fade-up" data-aos-delay="100">
                    {{ $t('culture.tvshowsubtitle') }}
                </p>

                <MeetMe :link="links.tvtime" image="/img/culture/tvtime.webp" :width="30" />
            </div>
            <div class="my-5" data-aos="fade-up" data-aos-delay="200">
                <ErrorBanner v-if="errors" :title="errors" />

                <template v-else>
                    <Vue3Marquee direction="reverse" :pauseOnHover="true" :duration="speedForElements(shows)">
                        <CulturePoster
                            v-for="show in shows"
                            :key="show.artist"
                            :subtitle="`📺 ${$t('culture.available')}`"
                            :artist="show.artist"
                            :file="show.file"
                            :uuid="show.unique_id"
                        />
                    </Vue3Marquee>
                </template>
            </div>
        </div>
        <div class="relative p-3 md:p-0">
            <h1 class="font-sans font-extrabold text-5xl text-neutral-800 dark:text-neutral-300">
                {{ $t('culture.music') }}
            </h1>
            <p class="font-sans text-neutral-500 dark:text-neutral-400">
                {{ $t('culture.musicsubtitle') }}
            </p>

            <MeetMe :link="links.spotify" image="/img/culture/spotify.svg" :width="30" />
        </div>
        <div class="my-7 mb-20 md:mb-40">
            <ErrorBanner v-if="errorSongs" :title="errorSongs" />
            <div
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-6 xl:gap-10 p-3 md:p-0"
                v-else
            >
                <Music v-for="element in songs" :song="element" :key="element.id" />
            </div>
        </div>
    </ContainerLayout>

    <CultureDetailModal />
</template>

<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'
import CulturePoster from '@/components/culture/CulturePoster.vue'
import MeetMe from '@/components/culture/MeetMe.vue'
import Music from '@/components/culture/Music.vue'
import ErrorBanner from '@/components/errors/ErrorBanner.vue'
import CultureDetailModal from '@/components/culture/CultureDetailModal.vue'
import ContainerLayout from '@/components/layout/ContainerLayout.vue'
import type { SpotifySong, TCultureElement } from '@/types/culture.ts'
import { CULTURE_LINKS, MEDIA_TYPE } from '@/utils/constants'
import { computed, onMounted, ref } from 'vue'
import { useApiClient } from '@/composables/useApiClient.ts'

const movies = ref<TCultureElement[]>([])
const shows = ref<TCultureElement[]>([])
const errors = ref<false | string>(false)
const errorSongs = ref<false | string>(false)
const songs = ref<SpotifySong[]>([])

const { apiRequest } = useApiClient()

const links = computed(() => CULTURE_LINKS)

onMounted(() => {
    fetchElements()
    retrieveCharts()
})

const speedForElements = (elements: TCultureElement[]) => {
    return (20 / 5) * elements.length
}

const fetchElements = async () => {
    try {
        const data = await apiRequest<TCultureElement[]>('/api/culture')

        movies.value = data.filter((media) => media.media_type.slug === MEDIA_TYPE.Movie)
        shows.value = data.filter((media) => media.media_type.slug === MEDIA_TYPE.TvShows)
    } catch (_) {
        errors.value = 'culture.errors.fetching'
    }
}

const retrieveCharts = async () => {
    try {
        songs.value = await apiRequest<SpotifySong[]>('/api/charts')
    } catch (_) {
        errorSongs.value = 'culture.errors.charts'
    }
}
</script>
