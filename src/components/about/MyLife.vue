<template>
    <DraggableBlock
        :style="{
            top: '50%',
            zIndex: 1000,
            left: 'calc(50% - calc(320px / 2))'
        }"
    >
        <div class="p-6 bg-neutral-100/70 backdrop-blur-lg w-80 text-center dark:bg-neutral-900/70">
            <h3 class="font-extrabold font-sans text-neutral-800 text-3xl dark:text-neutral-300">🍻 {{ $t('about.earth.title') }}</h3>
            <p class="text-neutral-700">{{ $t('about.earth.subtitle') }}</p>
        </div>
    </DraggableBlock>
</template>

<script lang="ts">
import DraggableBlock from '@/components/layout/DraggableBlock.vue'

export default {
    components: {
        DraggableBlock
    }
}
</script>
