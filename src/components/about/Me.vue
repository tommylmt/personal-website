<template>
    <div :class="[
        'block md:flex bg-white border border-slate-100 shadow-lg shadow-slate-100 rounded-xl my-10 mx-auto',
        'w-11/12 md:w-10/12 xl:w-9/12 2xl:w-7/12',
        'dark:bg-slate-950 dark:border-slate-800 dark:shadow-slate-950',
        'motion-scale-in-75 motion-opacity-in-0 motion-blur-in'
    ]">
        <div class="w-full md:w-64 lg:w-80 2xl:w-2/5 shrink-0 p-0 md:p-2 2xl:p-0">
            <img
                src="/img/about/about_me.webp"
                alt="Thomas Lamothe"
                class="rounded-t-xl md:rounded-xl 2xl:rounded-e-none"
                fetchpriority="high"
            >
        </div>
        <div class="grow-0 lg:grow">
            <div class="p-5 2xl:p-10 2xl:pb-0">
                <h1 class="font-sans font-extrabold text-5xl text-slate-900 flex gap-3 dark:text-slate-300">
                    {{ $t('about.me.title') }} <Emoji />
                </h1>

                <i18n-t keypath="about.me.introduction" class="mt-4 main-text text-xl" tag="p">
                    <span :class="[
                        'italic line-through overflow-hidden',
                    ]">
                        {{ $t('about.me.random') }}
                    </span>
                </i18n-t>

                <div class="my-3 mx-auto w-64 h-[1px] bg-slate-200 dark:bg-slate-700"></div>

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
