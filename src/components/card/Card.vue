<template>
    <div
        :class="[
            'group relative hover:shadow-lg border rounded-3xl overflow-hidden my-7 xl:my-0',
            'p-2 w-full md:w-[48%] lg:w-[22%]',
            'border-neutral-200 bg-white border shadow-sm shadow-neutral-100',
            'dark:bg-black dark:border-neutral-800 dark:shadow-neutral-950'
        ]"
        data-aos="fade-up"
        :data-aos-delay="delay"
    >
        <div
            :class="['w-full h-70 rounded-2xl']"
            :style="{
                backgroundImage: `url(${img})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
            }"
        ></div>
        <div :class="['p-2']">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    img: string
    delay?: number
}>()
</script>
