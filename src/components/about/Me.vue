<template>
    <div class="flex bg-white border border-slate-100 shadow-lg shadow-slate-100 rounded-xl my-10 mx-auto w-7/12">
        <div class="w-96 shrink-0">
            <img src="../../assets/img/about_me.png" alt="Thomas Lamothe" class="rounded-s-xl">
        </div>
        <div class="grow">
            <div class="p-10">
                <h1 class="font-sans font-extrabold text-5xl text-slate-900 flex gap-3">
                    {{ $t('about.me.title') }} <Emoji />
                </h1>

                <p class="mt-4 main-text">{{ $t('about.me.introduction') }}</p>

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
