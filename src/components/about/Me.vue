<template>
    <Motion
        :initial="{ scale: 0.75, opacity: 0 }"
        :animate="{ scale: 1, opacity: 1 }"
        as="div"
        :class="[
            'block md:flex bg-white border border-neutral-200 shadow-sm shadow-neutral-100 rounded-3xl my-10 mx-auto',
            'w-11/12 md:w-10/12 xl:w-9/12 2xl:w-7/12',
            'dark:bg-black dark:border-neutral-800 dark:shadow-neutral-950'
        ]"
    >
        <div class="w-1/2 mx-auto md:mx-0 md:w-64 lg:w-80 2xl:w-75 shrink-0 p-2 relative">
            <img src="/img/about/about_me.webp" alt="Thomas Lamothe" class="rounded-3xl md:rounded-2xl" fetchpriority="high" />
        </div>
        <div class="grow-0 lg:grow">
            <div class="p-5 2xl:p-10 2xl:pb-0">
                <h1 class="font-serif font-bold text-3xl flex gap-3 items-center mt-3 md:mt-0">
                    <span class="text-4xl text-neutral-800 dark:text-neutral-400">
                        {{ $t('about.me.title') }}
                    </span>
                    <Emoji />
                </h1>

                <i18n-t keypath="about.me.introduction" class="mt-4 main-text" tag="p">
                    <span :class="['italic line-through overflow-hidden']">
                        {{ $t('about.me.random') }}
                    </span>
                </i18n-t>

                <i18n-t keypath="about.me.whatido" tag="p" class="main-text">
                    <LinkPreview :url="php">
                        <IconChip icon="php.svg" name="PHP" image-class="w-5" />
                    </LinkPreview>
                    <LinkPreview :url="react">
                        <IconChip icon="react.svg" name="React" />
                    </LinkPreview>
                    <LinkPreview :url="vue">
                        <IconChip icon="vue.svg" name="Vue.js" />
                    </LinkPreview>
                    <LinkPreview :url="tailwind">
                        <IconChip icon="tailwindcss.svg" name="Tailwind CSS" />
                    </LinkPreview>
                    <LinkPreview :url="docker">
                        <IconChip icon="docker.svg" name="Docker" />
                    </LinkPreview>
                    <LinkPreview :url="rust">
                        <IconChip icon="rust.svg" name="Rust" />
                    </LinkPreview>
                </i18n-t>

                <i18n-t keypath="about.me.projects" tag="p" class="main-text">
                    <LinkPreview :url="trax"><IconChip icon="trax.webp" name="Trax" /></LinkPreview>
                </i18n-t>

                <p class="mt-2 main-text">
                    {{ $t('about.me.hobbies', { guitarYears }) }}
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
import IconChip from '@/components/about/IconChip.vue'

export default {
    components: {
        IconChip,
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
            rust: 'https://rust-lang.org',
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
