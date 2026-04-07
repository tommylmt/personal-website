<script setup lang="ts">
withDefaults(
    defineProps<{
        icon: string
        name: string
        imageClass?: string
    }>(),
    { imageClass: 'w-4' }
)
</script>

<template>
    <span
        class="flex items-center gap-1 px-2 border border-neutral-200 rounded-3xl text-sm bg-neutral-100 transition-colors hover:border-neutral-300 dark:bg-neutral-900 dark:border-neutral-700"
    >
        <img :src="`/img/about/icons/${icon}`" :class="imageClass" />
        {{ name }}
    </span>
</template>
