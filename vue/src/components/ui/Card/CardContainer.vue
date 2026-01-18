<template>
    <div :class="['flex items-center justify-center p-2', containerClass]" style="perspective: 1000px">
        <div
            ref="containerRef"
            :class="['relative flex items-center justify-center transition-all duration-200 ease-linear', $props.class]"
            style="transform-style: preserve-3d"
            @mouseenter="handleMouseEnter"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
        >
            <slot />
        </div>
    </div>
</template>

<script setup>
import { useMouse } from '@/composables/useMouse'
import { provide, ref } from 'vue'

const props = defineProps({
    class: String,
    containerClass: String,
    ratio: {
        type: Number,
        default: 25
    }
})

const containerRef = ref(null)
const mouseState = useMouse()

provide('use3DCardMouseState', mouseState)

function handleMouseMove({ clientX, clientY }) {
    if (!containerRef.value) return

    const { left, top, width, height } = containerRef.value.getBoundingClientRect()
    const x = (clientX - left - width / 2) / props.ratio
    const y = (clientY - top - height / 2) / props.ratio

    containerRef.value.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
}

function handleMouseEnter() {
    mouseState.setMouseEntered(true)
}

function handleMouseLeave() {
    if (!containerRef.value) return

    mouseState.setMouseEntered(false)
    containerRef.value.style.transform = `rotateY(0deg) rotateX(0deg)`
}
</script>
