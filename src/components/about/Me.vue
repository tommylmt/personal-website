<template>
    <Motion
        :initial="{ scale: 0.75, opacity: 0 }"
        :animate="{ scale: 1, opacity: 1 }"
        as="div"
        :class="[
            'block md:flex bg-white border border-neutral-100 shadow-lg shadow-neutral-100 rounded-3xl my-10 mx-auto',
            'w-11/12 md:w-10/12 xl:w-9/12 2xl:w-7/12',
            'dark:bg-black dark:border-neutral-800 dark:shadow-neutral-950'
        ]"
    >
        <div class="w-full md:w-64 lg:w-80 2xl:w-2/5 shrink-0 p-0 md:p-2 2xl:p-0">
            <img
                src="/img/about/about_me.webp"
                alt="Thomas Lamothe"
                class="rounded-t-3xl md:rounded-3xl 2xl:rounded-e-none"
                fetchpriority="high"
            />
        </div>
        <div class="grow-0 lg:grow">
            <div class="p-5 2xl:p-10 2xl:pb-0">
                <h1 class="font-vintage text-6xl flex gap-3 items-center mt-3 md:mt-0">
                    <span class="text-8xl text-neutral-800 dark:text-neutral-400 title-shadow dark:title-shadow-dark">
                        {{ $t('about.me.title') }}
                    </span>
                    <Emoji />
                </h1>

                <i18n-t keypath="about.me.introduction" class="mt-4 main-text text-xl" tag="p">
                    <span :class="['italic line-through overflow-hidden']">
                        {{ $t('about.me.random') }}
                    </span>
                </i18n-t>

                <div class="my-3 mx-auto w-64 h-[1px] bg-neutral-200 dark:bg-neutral-700"></div>

                <p class="mt-2 main-text">{{ $t('about.me.working') }}</p>

                <i18n-t keypath="about.me.whatido" tag="p" class="main-text">
                    <LinkPreview :url="php">PHP</LinkPreview>
                    <LinkPreview :url="react">React</LinkPreview>
                    <LinkPreview :url="vue">Vue.js</LinkPreview>
                    <LinkPreview :url="tailwind">Tailwind</LinkPreview>
                    <LinkPreview :url="docker">Docker</LinkPreview>
                    <LinkPreview :url="aws">AWS</LinkPreview>
                </i18n-t>

                <i18n-t keypath="about.me.projects" tag="p" class="main-text">
                    <LinkPreview :url="trax">Trax</LinkPreview>
                </i18n-t>

                <p class="mt-2 main-text">
                    {{ $t('about.me.hobbies', { guitarYears: guitarYears }) }}
                </p>
                <p class="mt-2 main-text">{{ $t('about.me.findme') }}</p>
            </div>
        </div>
    </Motion>
</template>

<script lang="ts">
import Emoji from '@/components/about/Emoji.vue'
import LinkPreview from '@/components/ui/LinkPreview.vue'
import { Motion } from 'motion-v'

export default {
    components: {
        LinkPreview,
        Emoji,
        Motion
    },
    data() {
        return {
            php: 'https://php.net',
            react: 'https://react.dev/',
            vue: 'https://vuejs.org',
            tailwind: 'https://tailwindcss.com',
            docker: 'https://www.docker.com',
            aws: 'https://aws.amazon.com',
            trax: 'https://trax.thomaslamothe.com'
        }
    },
    computed: {
        guitarYears() {
            return new Date().getFullYear() - 2014
        }
    }
}
</script>
