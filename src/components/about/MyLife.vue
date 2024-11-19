<template>
    <DraggableBlock :style="{
        top: '50%',
        zIndex: 500
    }">
        <div class="p-6 bg-slate-100">
            <h3 class="font-sans font-light text-slate-400 dark:text-slate-400 text-3xl">
                {{ $t('about.earth.title') }}
            </h3>
        </div>
    </DraggableBlock>
</template>

<script>
import DraggableBlock from '@/components/layout/DraggableBlock.vue';

export default {
    components: {
        DraggableBlock
    }
}
</script>
