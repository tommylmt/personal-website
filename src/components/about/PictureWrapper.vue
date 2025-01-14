<template>
    <DraggableBlock :style="{
        width: `${width}px`,
        zIndex: zIndex,
        ...position
    }">
        <img :src="source" alt="Image" :width="width" loading="lazy">
    </DraggableBlock>
</template>

<script>
import DraggableBlock from "@/components/layout/DraggableBlock.vue";

export default{
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
                return {};
            }
        },
        zIndex: {
            type: Number,
            default: 0
        }
    }
}
</script>
