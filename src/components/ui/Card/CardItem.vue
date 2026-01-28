<template>
    <component :is="as" ref="refElement" :class="['transition duration-500 ease-in-out', $props.class]">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { inject, ref, watch } from 'vue'

interface Props {
    as?: string
    class: string
    translateX?: number | string
    translateY?: number | string
    translateZ?: number | string
    rotateX?: number | string
    rotateY?: number | string
    rotateZ?: number | string
}

const props = withDefaults(defineProps<Props>(), {
    as: 'div',
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
})

const refElement = ref(null)
const mouseState = inject('use3DCardMouseState')

function handleAnimation(isMouseEntered) {
    if (!refElement.value) return

    if (isMouseEntered) {
        refElement.value.style.transform = `translateX(${props.translateX}px) translateY(${props.translateY}px) translateZ(${props.translateZ}px) rotateX(${props.rotateX}deg) rotateY(${props.rotateY}deg) rotateZ(${props.rotateZ}deg)`
    } else {
        refElement.value.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
    }
}

watch(mouseState.isMouseEntered, handleAnimation, { immediate: true })
</script>
