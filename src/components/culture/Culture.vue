<template>
    <div class="w-full md:w-10/12 my-10 mx-auto relative">
        <div class="relative p-3 md:p-0">
            <h1 class="font-sans font-extrabold text-5xl text-slate-800 dark:text-slate-300">
                {{ $t('culture.movies') }}
            </h1>
            <p class="font-sans text-slate-500 dark:text-slate-400">{{ $t('culture.moviesubtitle') }}</p>

            <MeetMe :link="links.senscritique" image="/img/culture/senscritique.png" :width="45" />
        </div>
        <div class="my-5">
            <Vue3Marquee :pauseOnHover="true">
                <CulturePoster
                    v-for="movie in movies"
                    :key="movie.artist"
                    :subtitle="`📽️ ${$t('culture.director')}`"
                    :artist="movie.artist"
                    :file="movie.file"
                />
            </Vue3Marquee>
        </div>
        <div class="my-10">
            <div class="relative p-3 md:p-0">
                <h1 class="font-sans font-extrabold text-5xl text-slate-800 dark:text-slate-300">
                    {{ $t('culture.tvshows') }}
                </h1>
                <p class="font-sans text-slate-500 dark:text-slate-400">{{ $t('culture.tvshowsubtitle') }}</p>

                <MeetMe :link="links.tvtime" image="/img/culture/tvtime.png" :width="100" />
            </div>
            <div class="my-5">
                <Vue3Marquee :pauseOnHover="true">
                    <CulturePoster
                        v-for="show in shows"
                        :key="show.artist"
                        :subtitle="`📺 ${$t('culture.available')}`"
                        :artist="show.artist"
                        :file="show.file"
                    />
                </Vue3Marquee>
            </div>
        </div>
        <div class="relative p-3 md:p-0">
            <h1 class="font-sans font-extrabold text-5xl text-slate-800 dark:text-slate-300">
                {{ $t('culture.music') }}
            </h1>
            <p class="font-sans text-slate-500 dark:text-slate-400">{{ $t('culture.musicsubtitle') }}</p>

            <MeetMe :link="links.deezer" image="/img/culture/deezer.svg" :width="100" />
        </div>
        <div class="my-7 mb-40">
            <div class="flex flex-wrap gap-y-10 md:gap-10 justify-between p-3 md:p-0">
                <Music v-for="element in songs" :song="element" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import CulturePoster from "@/components/culture/CulturePoster.vue";
import MeetMe from "@/components/culture/MeetMe.vue";
import Music from "@/components/culture/Music.vue";

export default {
    components: {
        Music,
        MeetMe,
        CulturePoster,
        Vue3Marquee
    },
    data() {
        return {
            movies: [],
            shows: [],
            songs: [],
            links: {
                deezer: 'https://www.deezer.com/us/profile/1567995002',
                tvtime: 'https://tvtime.com/r/35sjB',
                senscritique: 'https://www.senscritique.com/tommy-dvdrip-mkv'
            }
        }
    },
    mounted() {
        this.fetchElements('movies')
        this.fetchElements('shows')
        this.retrieveDeezerCharts()
    },
    methods: {
        async fetchElements(endpoint) {
            try {
                const { data } = await axios.get(`${this.$baseUrl}/api/culture/${endpoint}`)

                this[endpoint] = data
            } catch (e) {
                this[endpoint] = 'Erreur lors de la récupération des films'
            }
        },
        async retrieveDeezerCharts() {
            try {
                const { data } = await axios.get(`${this.$baseUrl}/api/culture/charts`)

                this.songs = data.data
            } catch (e) {
                this.songs = 'Erreur lors de la récupération des charts'
            }
        },
    }
}
</script>
