<template>
    <div id="aboutMe">
        <div class="left">
            <img src="../../assets/img/about_me.jpg" alt="Thomas Lamothe">
        </div>
        <div class="right">
            <h1>Bonjour <span @mouseover=randomEmoji() @mouseleave="this.emoji = '🤘'" class="finger">{{ emoji }}</span></h1>

            <p>Je suis Thomas, ceci est mon site web. Pas mal non ? C'est... français.</p>
            <p>Je me permets d'interrompre votre navigation parce qu'on se fout un peu de ma gueule... C'est du vol et du plagiat. J'aime pas trop les voleurs et les... fils de putes.</p>

            <p class="high-margin">Je suis Lead Développeur chez <a :href=iwitLink target="_blank">Iwit Systems</a> à Toulouse, France.</p>
            <p>Mon travail consiste essentiellement dans le développement d'applications web métier complexes. Je bosse majoritairement avec 
                <a target="_blank" :href=symfonyLink>Symfony</a>, 
                <a target="_blank" :href=vueLink>Vue.js</a> et <a target="_blank" :href=dockerLink>Docker</a> le tout déployé sur une infra
                <a :href=awsLink>AWS</a>.
            </p>

            <p class="high-margin">Je suis également à l'initiative de projets comme <a :href="traxLink" target="_blank">Trax</a>, Orkestrum, Cinécombles et de nombreux autres qui ne verront jamais le jour.</p>
            <p>Passionné par la culture underground, je fais de la musique (guitare) depuis {{ guitarYears }} ans, aime me déplacer en skate, les concerts, les tatouages, les vides greniers, les films des frères Coen, les fringues et la bière.</p>
            <p>Tu peux me croiser facilement sur Toulouse et cela serait un plaisir d'échanger avec toi.</p>
        </div>
    </div>

    <ListBlock :listTitle="'Expériences'" />
</template>

<script>
import ListBlock from './ListBlock.vue';
import { mainRoutes } from '@/helpers/aboutData';

export default {
    data() {
        return {
            emoji: "🤘",
            emojisArray: ["✊", "🤘", "🤙", "✌", "🖕"],
            iwitLink: mainRoutes.iwitLink,
            symfonyLink: mainRoutes.symfonyLink,
            vueLink: mainRoutes.vueLink,
            dockerLink: mainRoutes.dockerLink,
            traxLink: mainRoutes.traxLink,
            awsLink: mainRoutes.awsLink,
        };
    },
    computed: {
        guitarYears() {
            return new Date().getFullYear() - 2014;
        }
    },
    methods: {
        randomEmoji() {
            this.shuffleEmojiArray().forEach((e, index) => {
                setTimeout(() => {
                    this.emoji = e;
                }, (index + 1) * 500);
            });
        },
        shuffleEmojiArray() {
            let currentIndex = this.emojisArray.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [this.emojisArray[currentIndex], this.emojisArray[randomIndex]] = [
                    this.emojisArray[randomIndex],
                    this.emojisArray[currentIndex]
                ];
            }
            return this.emojisArray;
        }
    },
    components: { ListBlock }
}
</script>