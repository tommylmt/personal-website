<template>
    <div
        :class="[
            'fixed z-[9998] right-5 transition-all duration-500',
            'shadow-md min-w-12 h-12 rounded-full cursor-pointer flex justify-center items-center transition-all',
            'bg-white/20 border border-slate-100/20 backdrop-blur-xl',
            animation
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
                <img :src="currentLocale!.icon" alt="current locale" class="w-[60%] rounded-lg" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import Fr from '@/assets/img/france.webp'
import Us from '@/assets/img/usa.webp'
import { processSeo } from '@/utils/seo'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import type { TPageMeta } from '@/types/page.ts'
import { useAnimation } from '@/composables/useAnimation.ts'

const i18n = useI18n()
const route = useRoute()
const animation = useAnimation('-bottom-50 scale-0 opacity-0', 'scale-100 opacity-100 bottom-6 md:bottom-10', 1_000)

const switchLocale = ref<boolean>(false)
const locales = [
    {
        icon: Fr,
        lang: 'fr-FR'
    },
    {
        icon: Us,
        lang: 'en-US'
    }
]

const currentLocale = computed(() => locales.find((l) => l.lang === i18n.locale.value))

watch(i18n.locale, () => {
    processSeo(route.meta as TPageMeta)
})
</script>
