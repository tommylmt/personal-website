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
                        <div class="a-culture" v-for="movie in movies">
                            <div class="poster" :style="{background: `url(${$baseUrl + movie.file})`}"></div>
                            <div class="a-culture-desc">
                                <h6>Réalisé par</h6>
                                <p>{{ movie.artist}}</p>
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
                        <div class="a-culture" v-for="show in shows">
                            <div class="poster" :style="{background: `url(${$baseUrl + show.file})`, 'background-size': 'cover'}"></div>
                            <div class="a-culture-desc">
                                <h6>Sortie sur</h6>
                                <p>{{ show.artist}}</p>
                            </div>
                        </div>
                    </Vue3Marquee>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'


export default {
    components: {
        Vue3Marquee
    },
    data() {
        return {
            movies: [],
            shows: []
        };
    },
    mounted() {
        this.fetchElements('movies');
        this.fetchElements('shows');
    },
    methods: {
        async fetchElements(endpoint) {
            try {
                const response = await axios.get(`${this.$baseUrl}/api/culture/${endpoint}`);

                this[endpoint] = response.data;
            } catch (e) {
                this[endpoint] = 'Erreur lors de la récupération des films';
            };
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../../assets/scss/Culture/culture.scss';
</style>