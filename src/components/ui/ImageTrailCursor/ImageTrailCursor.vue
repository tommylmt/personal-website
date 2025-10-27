<template>
    <div ref="containerRef" class="w-full h-full relative z-[100] rounded-lg bg-transparent overflow-visible">
        <div
            v-for="(image, i) in images"
            :key="i"
            class="content__img w-[190px] aspect-[1.1] rounded-[15px] absolute top-0 left-0 opacity-0 overflow-hidden [will-change:transform,filter]"
        >
            <div
                class="content__img-inner bg-center bg-cover w-[calc(100%+20px)] h-[calc(100%+20px)] absolute top-[-10px] left-[-10px]"
                :style="`background-image: url(${image})`"
            />
        </div>
    </div>
</template>

<script setup>
import { ImageTrail } from './cursor-trail'
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'

defineProps({
    images: {
        type: Array,
        default: () => []
    }
})
const containerRef = useTemplateRef('containerRef')
let currentInstance = null

function initializeVariant() {
    if (!containerRef.value) return

    if (currentInstance && typeof currentInstance.destroy === 'function') {
        currentInstance.destroy()
    }

    currentInstance = new ImageTrail(containerRef.value)
}

onMounted(() => {
    initializeVariant()
})

onBeforeUnmount(() => {
    if (currentInstance && typeof currentInstance.destroy === 'function') {
        currentInstance.destroy()
    }
})
</script>
