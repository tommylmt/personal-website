<template>
    <div :class="[
        'fixed z-[9998] right-5 transition-all bottom-6 md:bottom-10 motion-duration-200',
        'md:motion-translate-y-in-[150px] md:motion-scale-in-0 md:motion-blur-in md:motion-delay-700'
    ]">
        <div
            class="bg-slate-100 shadow-md min-w-12 h-12 rounded-full cursor-pointer flex justify-center items-center transition-all dark:bg-slate-800"
            @mouseover="switchLocale = true"
            @mouseleave="switchLocale = false"
        >
            <ul class="flex gap-1">
                <template v-if="switchLocale">
                    <template v-for="locale in locales" :key="locale.lang">
                        <li class="flex items-center justify-center w-11 h-11" v-if="locale !== currentLocale">
                            <img
                                :src="locale.icon"
                                alt="current locale"
                                class="w-[60%] rounded-lg"
                                @click="$i18n.locale = locale.lang"
                            >
                        </li>
                    </template>
                </template>
                <li class="flex items-center justify-center w-11 h-11">
                    <img :src="currentLocale.icon" alt="current locale" class="w-[60%] rounded-lg">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Fr from '@/assets/img/france.png'
import Us from '@/assets/img/usa.png'

export default {
    data() {
        return {
            switchLocale: false,
            locales: [{
                icon: Fr,
                lang: 'fr'
            }, {
                icon: Us,
                lang: 'en'
            }]
        }
    },
    computed: {
        currentLocale() {
            return this.locales.find(l => l.lang === this.$i18n.locale);
        }
    }
}
</script>
