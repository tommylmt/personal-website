<template>
    <div class="w-full md:w-10/12 my-10 mx-auto relative">
        <div class="relative p-3 md:p-0">
            <h1 class="font-sans font-extrabold text-5xl text-slate-800 dark:text-slate-300" data-aos="fade-up">
                {{ $t('culture.movies') }}
            </h1>
            <p class="font-sans text-slate-500 dark:text-slate-400" data-aos="fade-up" data-aos-delay="100">
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
                <h1 class="font-sans font-extrabold text-5xl text-slate-800 dark:text-slate-300" data-aos="fade-up">
                    {{ $t('culture.tvshows') }}
                </h1>
                <p class="font-sans text-slate-500 dark:text-slate-400" data-aos="fade-up" data-aos-delay="100">
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
            <h1 class="font-sans font-extrabold text-5xl text-slate-800 dark:text-slate-300">
                {{ $t('culture.music') }}
            </h1>
            <p class="font-sans text-slate-500 dark:text-slate-400">
                {{ $t('culture.musicsubtitle') }}
            </p>

            <MeetMe :link="links.spotify" image="/img/culture/spotify.svg" :width="30" />
        </div>
        <div class="my-7 mb-20 md:mb-40">
            <ErrorBanner v-if="errorSongs" :title="errorSongs" />
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 xl:gap-10 p-3 md:p-0" v-else>
                <Music v-for="element in songs" :song="element" :key="element.id" />
            </div>
        </div>
    </div>

    <CultureDetailModal />
</template>

<script>
import axios from 'axios'
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import CulturePoster from '@/components/culture/CulturePoster.vue'
import MeetMe from '@/components/culture/MeetMe.vue'
import Music from '@/components/culture/Music.vue'
import ErrorBanner from '@/components/errors/ErrorBanner.vue'
import { MEDIA_TYPE } from '@/utils/constants'
import CultureDetailModal from '@/components/culture/CultureDetailModal.vue'

export default {
    components: {
        CultureDetailModal,
        ErrorBanner,
        Music,
        MeetMe,
        CulturePoster,
        Vue3Marquee
    },
    data() {
        return {
            movies: [],
            shows: [],
            errors: false,
            errorSongs: false,
            songs: [],
            links: {
                spotify: 'https://open.spotify.com/user/313guoevms7cob2dvjizsmwfk4o4',
                tvtime: 'https://tvtime.com/r/35sjB',
                senscritique: 'https://www.senscritique.com/tommy-dvdrip-mkv'
            }
        }
    },
    mounted() {
        this.fetchElements()
        this.retrieveDeezerCharts()
    },
    methods: {
        speedForElements(elements) {
            return (20 / 5) * elements.length
        },
        async fetchElements() {
            try {
                const { data } = await axios.get(`${this.$baseUrl}/api/culture`)

                this.movies = data.filter((media) => media.media_type.slug === MEDIA_TYPE.Movie)
                this.shows = data.filter((media) => media.media_type.slug === MEDIA_TYPE.TvShows)
            } catch (e) {
                this.errors = 'culture.errors.fetching'
            }
        },
        async retrieveDeezerCharts() {
            try {
                const { data } = await axios.get(`${this.$baseUrl}/api/charts`)

                this.songs = data
            } catch (e) {
                this.errorSongs = 'culture.errors.charts'
            }
        }
    }
}
</script>
