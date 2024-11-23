<template>
    <a
        :href="link"
        target="_blank"
        :class="[
            'transition-all absolute rounded-3xl px-6 w-fit h-12 top-5 right-0 justify-center flex items-center gap-2 font-sans group shadow-lg',
            'shadow-slate-300 bg-slate-900 dark:bg-slate-800 dark:shadow-none'
        ]"
    >
        <span class="transition-all text-slate-300 font-sans group-hover:text-slate-200">
            {{ $t('culture.meetme') }}
        </span>
        <img :src="image" alt="Culture image" :width="width">
    </a>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true,
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
