<template>
    <div id="culture">
        <div class="a-culture-block">
            <div class="a-title">
                <h1>Films</h1>
                <p>Films que j'ai récemment aimé</p>
            </div>
            <div class="culture-marquee">
                <div class="culture-wrapper">
                    <Vue3Marquee :pauseOnHover="true">
                        <div class="a-culture" v-for="movie in movies" :key="movie.artist">
                            <div
                                class="poster"
                                :style="{ background: `url(${$baseUrl + movie.file})` }"
                            ></div>
                            <div class="a-culture-desc">
                                <h6>Réalisé par</h6>
                                <p>{{ movie.artist }}</p>
                            </div>
                        </div>
                    </Vue3Marquee>
                </div>
            </div>
        </div>
        <div class="a-culture-block">
            <div class="a-title">
                <h1>Séries</h1>
                <p>Séries que j'ai récemment aimé</p>
            </div>
            <div class="culture-marquee">
                <div class="culture-wrapper">
                    <Vue3Marquee :pauseOnHover="true">
                        <div class="a-culture" v-for="show in shows" :key="show.artist">
                            <div
                                class="poster"
                                :style="{
                                    background: `url(${$baseUrl + show.file})`,
                                    'background-size': 'cover'
                                }"
                            ></div>
                            <div class="a-culture-desc">
                                <h6>Sortie sur</h6>
                                <p>{{ show.artist }}</p>
                            </div>
                        </div>
                    </Vue3Marquee>
                </div>
            </div>
        </div>
        <div class="a-culture-block">
            <div class="a-title">
                <h1>Musique</h1>
                <p>Titres que j'écoute en ce moment.</p>
            </div>
            <div class="culture-marquee">
                <div class="music-wrapper">
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

        <div id="audioWrapper">
            <audio :src="currentSong" controls crossorigin="anonymous" ref="audio"></audio>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

export default {
    components: {
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

<style scoped lang="scss">
@import '@/assets/scss/Culture/culture.scss';
</style>
