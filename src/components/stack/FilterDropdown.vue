<template>
    <span class="relative">
        <button
            @mouseenter="data.isButtonHovered = true"
            @mouseleave="data.isButtonHovered = false"
            role="button"
            @click="data.displayDropdown = !data.displayDropdown"
            :aria-label="$t('stack.filter')"
            :class="[
                'transition-all h-12 flex justify-center items-center rounded-3xl cursor-pointer',
                'group dark:transparent',
                data.isButtonHovered || data.displayDropdown ? 'w-32 shadow-lg' : 'w-12'
            ]"
        >
            <i
                :class="[data.currentFilter ? 'ph-fill text-neutral-800 dark:text-white' : 'ph-light text-neutral-400', 'ph-funnel']"
                class="transition-all text-3xl group-hover:text-neutral-500"
            ></i>
            <span
                class="transition-all text-neutral-400 ms-3 font-sans group-hover:text-neutral-500"
                v-show="data.isButtonHovered || data.displayDropdown"
            >
                {{ $t('stack.filter') }}
            </span>
        </button>
        <ul
            class="dropdown absolute right-0 z-50 p-2 shadow-neutral-200 transition-all shadow-lg rounded-lg bg-white w-52 dark:bg-neutral-900 dark:shadow-neutral-950"
            :class="[data.displayDropdown ? 'top-[60px] opacity-100 z-40!' : 'top-[80px] opacity-0 !-z-40']"
        >
            <li
                v-for="type in props.types"
                :key="type"
                @click="filter(type)"
                class="px-4 py-2 text-sm rounded-md cursor-pointer transition-all"
                :class="[
                    data.currentFilter === type
                        ? 'bg-neutral-900 text-white dark:bg-white/70 dark:text-neutral-950'
                        : 'bg-white text-neutral-800 hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-700'
                ]"
            >
                {{ $t(`stack.types.${slugify(type)}`) }}
            </li>
        </ul>
    </span>
</template>

<script setup lang="ts">
import '@phosphor-icons/web/fill'
import type { TFilterDropdownData } from '@/types/stack.ts'
import { ref } from 'vue'

const props = defineProps<{
    types: string[]
}>()

const data = ref<TFilterDropdownData>({
    isButtonHovered: false,
    displayDropdown: false,
    currentFilter: null
})

const emit = defineEmits<{
    (e: 'clickFilter', filter: string | null): void
}>()

const filter = (type: string) => {
    data.value.currentFilter = data.value.currentFilter === type ? null : type
    emit('clickFilter', data.value.currentFilter)
    data.value.displayDropdown = false
}

const slugify = (name: string) => {
    return name.toLowerCase()
}
</script>
