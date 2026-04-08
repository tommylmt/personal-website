<template>
    <li :class="[mainClass, props.current ? currentClass : '']" ref="list-item" @mouseover="onHover()" @mouseleave="stopHover()">
        <router-link v-if="!props.special" :to="props.path" @click="changeActive()" ref="link" :class="[classList, 'block px-5 py-2']">
            {{ $t(props.name) }}
        </router-link>
        <a v-else :href="props.path" :class="[classList, 'px-5 py-2 block']" target="_blank">
            {{ $t(props.name) }}
        </a>
    </li>
</template>

<script setup lang="ts">
import type { TMenuItemProps } from '@/types/app.ts'
import { useTemplateRef } from 'vue'

const props = defineProps<TMenuItemProps>()

const mainClass = 'font-sans relative hover:text-white dark:text-white transition-color duration-300'
const currentClass = 'current-item text-white'
const classList = 'font-sans font-light'

const emits = defineEmits<{
    (e: 'followItem', item: HTMLLIElement): void
    (e: 'hoverStop'): void
    (e: 'activePageChange', to: string): void
}>()

const listItem = useTemplateRef<HTMLLIElement>('list-item')
const link = useTemplateRef('link')

function onHover() {
    if (listItem.value) {
        emits('followItem', listItem.value)
    }
}

function stopHover() {
    emits('hoverStop')
}

function changeActive() {
    emits('activePageChange', props.path)
}
</script>
