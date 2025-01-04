<template>
    <div :class="[
        'block xl:flex bg-white border border-slate-100 shadow-lg shadow-slate-100 rounded-xl my-10 mx-auto',
        'w-11/12 md:w-10/12 2xl:w-7/12',
        'dark:bg-slate-950 dark:border-slate-800 dark:shadow-slate-950'
    ]">
        <div class="w-full xl:w-96 shrink-0">
            <img
                src="../../assets/img/about_me.png"
                alt="Thomas Lamothe"
                class="rounded-t-xl md:rounded-xl lg:rounded-e-none"
            >
        </div>
        <div class="grow-0 xl:grow">
            <div class="p-5 xl:p-10">
                <h1 class="font-sans font-extrabold text-5xl text-slate-900 flex gap-3 dark:text-slate-300">
                    {{ $t('about.me.title') }} <Emoji />
                </h1>

                <p class="main-text mt-4">{{ $t('about.me.introduction') }}</p>

                <div class="bg-slate-100 rounded-md p-2 mt-2">
                    <p class="bg-red-600/30 text-red-600 p-1 rounded-sm text-sm"><span class="me-2">-</span> <span class="line-through">{{ $t('about.me.deleted') }}</span></p>
                    <p class="bg-green-500/30 mt-2 text-green-600 p-1 rounded-sm text-sm"><span class="me-2">+</span> {{ $t('about.me.added') }}</p>
                </div>

                <i18n-t keypath="about.me.working" class="mt-2 main-text" tag="p">
                    <a :href="iwitLink" target="_blank" class="me-link before:bg-blue-800/90">Iwit Systems</a>
                </i18n-t>

                <i18n-t keypath="about.me.whatido" tag="p" class="main-text">
                    <a :href="symfony" target="_blank" class="me-link before:bg-slate-800/90">Symfony</a>
                    <a :href="vue" target="_blank" class="me-link before:bg-emerald-500/90">Vue.js</a>
                    <a :href="tailwind" target="_blank" class="me-link before:bg-cyan-400/90">Tailwind</a>
                    <a :href="docker" target="_blank" class="me-link before:bg-blue-600/90">Docker</a>
                    <a :href="aws" target="_blank" class="me-link before:bg-yellow-400/90">AWS</a>
                </i18n-t>

                <i18n-t keypath="about.me.projects" tag="p" class="main-text">
                    <a :href="trax" target="_blank" class="me-link before:bg-violet-400/90">Trax</a>
                </i18n-t>

                <p class="mt-2 main-text">{{ $t('about.me.hobbies', { guitarYears: guitarYears }) }}</p>
                <p class="mt-2 main-text">{{ $t('about.me.findme') }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Emoji from '@/components/about/Emoji.vue';

export default {
    components: {
        Emoji
    },
    data() {
        return {
            iwitLink: 'https://iwit-systems.fr',
            symfony: 'https://symfony.com',
            vue: 'https://vuejs.org',
            tailwind: 'https://tailwindcss.com',
            docker: 'https://www.docker.com',
            aws: 'https://aws.amazon.com',
            trax: 'https://trax.thomaslamothe.com'
        }
    },
    computed: {
        guitarYears() {
            return new Date().getFullYear() - 2014;
        }
    }
}
</script>
