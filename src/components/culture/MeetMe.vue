<template>
    <a
        :href="link"
        target="_blank"
        :class="[
            'transition-all absolute rounded-3xl px-6 w-fit h-12  justify-center flex items-center gap-2 font-sans group shadow-lg',
            'shadow-neutral-300 bg-neutral-900 dark:bg-neutral-800 dark:shadow-none top-3 md:top-5 right-3 md:right-0'
        ]"
    >
        <span class="transition-all text-neutral-300 font-sans group-hover:text-neutral-200 hidden md:inline">
            {{ $t('culture.meetme') }}
        </span>
        <img :src="image" alt="Culture image" :width="width" />
    </a>
</template>

<script lang="ts">
export default {
    props: {
        image: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            default: 75
        },
        link: {
            type: String,
            required: true
        }
    }
}
</script>
