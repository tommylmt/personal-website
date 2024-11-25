<template>
    <DraggableBlock :style="{
        top: '50%',
        zIndex: 1000,
        left: 'calc(50% - calc(320px / 2))'
    }">
        <div class="p-6 bg-slate-100/70 backdrop-blur-lg w-80 text-center dark:bg-slate-900/70">
            <h3 class="font-extrabold font-sans text-slate-700 text-3xl dark:text-slate-300">
                {{ $t('about.earth.title') }}
            </h3>
            <h6 class="text-slate-400">{{ $t('about.earth.subtitle') }}</h6>
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
