<template>
    <DraggableBlock>
        <img :src="image" alt="Image">
    </DraggableBlock>
</template>

<script>
import DraggableBlock from "@/components/layout/DraggableBlock.vue";

export default{
    components: {DraggableBlock},
    props: [{
        image: {
            type: String,
            required: true
        }
    }]
}
</script>
