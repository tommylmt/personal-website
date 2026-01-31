<template>
    <Motion
        as="div"
        :initial="{ scale: 0, y: 150, blur: 15 }"
        :animate="{ scale: 1, y: 0, blur: 0 }"
        :class="[
            'fixed z-[9998] right-5 transition-all bottom-6 md:bottom-10',
            'shadow-md min-w-12 h-12 rounded-full cursor-pointer flex justify-center items-center transition-all',
            'bg-white/20 border border-slate-100/20 backdrop-blur-xl'
        ]"
        @mouseover="switchLocale = true"
        @mouseleave="switchLocale = false"
    >
        <ul class="flex gap-1">
            <template v-if="switchLocale">
                <template v-for="locale in locales" :key="locale.lang">
                    <li class="flex items-center justify-center w-11 h-11" v-if="locale !== currentLocale">
                        <img :src="locale.icon" alt="current locale" class="w-[60%] rounded-lg" @click="$i18n.locale = locale.lang" />
                    </li>
                </template>
            </template>
            <li class="flex items-center justify-center w-11 h-11">
                <img :src="currentLocale.icon" alt="current locale" class="w-[60%] rounded-lg" />
            </li>
        </ul>
    </Motion>
</template>

<script lang="ts">
import Fr from '@/assets/img/france.webp'
import Us from '@/assets/img/usa.webp'
import { processSeo } from '@/utils/seo'
import { Motion } from 'motion-v'

export default {
    components: { Motion },
    data() {
        return {
            switchLocale: false,
            locales: [
                {
                    icon: Fr,
                    lang: 'fr-FR'
                },
                {
                    icon: Us,
                    lang: 'en-US'
                }
            ]
        }
    },
    watch: {
        '$i18n.locale'() {
            processSeo(this.$route.meta)
        }
    },
    computed: {
        currentLocale() {
            return this.locales.find((l) => l.lang === this.$i18n.locale)
        }
    }
}
</script>
