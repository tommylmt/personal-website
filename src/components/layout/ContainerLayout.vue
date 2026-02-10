<script setup lang="ts">
import type { TContainerProps } from '@/types/app.ts'

withDefaults(defineProps<TContainerProps>(), {
    mobileWidth: 'w-11/12'
})
</script>

<template>
    <div :class="[mobileWidth, 'md:w-10/12 my-10 mx-auto relative']">
        <slot></slot>
    </div>
</template>
