<template>
    <div class="w-10/12 my-10 mx-auto relative">
        <div class="relative">
            <h1 class="font-sans font-extrabold text-5xl text-slate-800 dark:text-slate-300">
                {{ $t('culture.movies') }}
            </h1>
            <p class="font-sans text-slate-500 dark:text-slate-400">{{ $t('culture.moviesubtitle') }}</p>

            <button class="absolute top-5 right-0">{{ $t('culture.meetme') }} SensCritique</button>
        </div>
        <div class="my-5">
            <Vue3Marquee :pauseOnHover="true">
                <CulturePoster
                    v-for="movie in movies"
                    :key="movie.artist"
                    translation-key="culture.director"
                    :artist="movie.artist"
                    :file="movie.file"
                />
            </Vue3Marquee>
        </div>
        <div class="my-10">
            <div class="relative">
                <h1 class="font-sans font-extrabold text-5xl text-slate-800 dark:text-slate-300">
                    {{ $t('culture.tvshows') }}
                </h1>
                <p class="font-sans text-slate-500 dark:text-slate-400">{{ $t('culture.tvshowsubtitle') }}</p>

                <button class="absolute top-5 right-0">{{ $t('culture.meetme') }} TV Time</button>
            </div>
            <div class="my-5">
                <Vue3Marquee :pauseOnHover="true">
                    <CulturePoster
                        v-for="show in shows"
                        :key="show.artist"
                        translation-key="culture.available"
                        :artist="show.artist"
                        :file="show.file"
                    />
                </Vue3Marquee>
            </div>
        </div>
        <div class="relative">
            <h1 class="font-sans font-extrabold text-5xl text-slate-800 dark:text-slate-300">
                {{ $t('culture.music') }}
            </h1>
            <p class="font-sans text-slate-500 dark:text-slate-400">{{ $t('culture.musicsubtitle') }}</p>

            <button class="absolute top-5 right-0">{{ $t('culture.meetme') }} Deezer</button>
        </div>
        <div class="my-5 mb-40">
            <div class="flex flex-wrap justify-evenly">
                <div
                    v-for="element in songs"
                    :key="element.id"
                    class="a-music"
                    @mouseover="playMusic(element)"
                    @mouseleave="stopMusic()"
                >
                    <img :src="element.album.cover_medium" width="100" alt="Musique" />
                    <p>{{ element.title }}</p>
                    <h6>{{ element.artist.name }}</h6>
                </div>
            </div>
        </div>
    </div>

    <div id="audioWrapper" class="hidden">
        <audio :src="currentSong" controls crossorigin="anonymous" ref="audio"></audio>
    </div>
</template>

<script>
import axios from 'axios'
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import CulturePoster from "@/components/culture/CulturePoster.vue";

export default {
    components: {
        CulturePoster,
        Vue3Marquee
    },
    data() {
        return {
            movies: [],
            shows: [],
            songs: [],
            currentSong: null,
            playPromise: null
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
                const response = await axios.get(`${this.$baseUrl}/api/culture/${endpoint}`)

                this[endpoint] = response.data
            } catch (e) {
                this[endpoint] = 'Erreur lors de la récupération des films'
            }
        },
        async retrieveDeezerCharts() {
            try {
                const response = await axios.get(`${this.$baseUrl}/api/culture/charts`)

                this.songs = response.data.data
            } catch (e) {
                this.songs = 'Erreur lors de la récupération des charts'
            }
        },
        playMusic(element) {
            this.currentSong = element.preview
            this.playPromise = this.$refs.audio.play()
        },
        stopMusic() {
            if (this.playPromise !== undefined) {
                this.playPromise.then(() => {
                    this.$refs.audio.pause()
                })
            }
        }
    }
}
</script>
