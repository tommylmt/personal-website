<template>
    <DraggableBlock
        :style="{
            width: `${width}px`,
            zIndex: zIndex,
            ...position
        }"
    >
        <div v-if="isLoading" :class="`w-[${width}px] bg-slate-50 animate-pulse h-[300px]`"></div>
        <img v-else :src="source" alt="Image" :width="width" loading="lazy" />
    </DraggableBlock>
</template>

<script lang="ts">
import DraggableBlock from '@/components/layout/DraggableBlock.vue'

export default {
    components: { DraggableBlock },
    props: {
        source: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            default: 150
        },
        position: {
            type: Object,
            default: () => {
                return {}
            }
        },
        zIndex: {
            type: Number,
            default: 0
        },
        isLoading: {
            type: Boolean,
            default: false
        }
    }
}
</script>
