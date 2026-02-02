<template>
    <div :class="[`w-${props.size}`, props.class]" style="transform-style: preserve-3d">
        <slot />
    </div>
</template>

<script setup lang="ts">
interface Props {
    size?: number
    class: string | string[]
}

const props = withDefaults(defineProps<Props>(), {
    size: 24
})
</script>
