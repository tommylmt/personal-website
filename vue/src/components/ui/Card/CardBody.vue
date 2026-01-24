<template>
    <div :class="[`w-${$props.size}`, $props.class]" style="transform-style: preserve-3d">
        <slot />
    </div>
</template>

<script setup>
defineProps({
    size: {
        type: Number,
        default: 24
    },
    class: String
})
</script>
