<template>
    <ContainerLayout>
        <h1 class="font-sans font-extrabold text-4xl md:text-5xl text-neutral-800 dark:text-neutral-300" data-aos="fade-up">
            {{ $t('stack.title') }}
        </h1>
        <p class="font-sans text-neutral-500 dark:text-neutral-400" data-aos="fade-up" data-aos-delay="100">
            {{ $t('stack.subtitle') }}
        </p>

        <div class="md:absolute top-3 right-0 flex justify-center md:justify-normal gap-3 items-center">
            <button
                :class="[
                    'transition-all h-12 flex justify-center items-center rounded-3xl cursor-pointer',
                    'group hover:shadow-lg dark:transparent',
                    !displayShuffleTitle ? 'w-12' : 'w-36'
                ]"
                @mouseover="displayShuffleTitle = true"
                @mouseleave="displayShuffleTitle = false"
                @click="shuffle"
                role="button"
                :aria-label="$t('stack.shuffle')"
            >
                <i class="transition-all ph-light ph-shuffle text-neutral-400 text-3xl group-hover:text-neutral-500"></i>
                <span v-show="displayShuffleTitle" class="transition-all text-neutral-400 ms-3 font-sans group-hover:text-neutral-500">
                    {{ $t('stack.shuffle') }}
                </span>
            </button>
            <FilterDropdown :types="skillTypes" @click-filter="filter" />
        </div>

        <div class="mt-5 lg:mt-5 mb-20 md:mb-40" data-aos="fade-up" data-aos-delay="200" v-if="icons.length > 0">
            <div id="muuri">
                <StackElement v-for="icon in icons" :icon="icon" :key="icon.title" />
            </div>
        </div>
    </ContainerLayout>
</template>

<script setup lang="ts">
import StackElement from '@/components/stack/StackElement.vue'
import FilterDropdown from '@/components/stack/FilterDropdown.vue'
import ContainerLayout from '@/components/layout/ContainerLayout.vue'
import type { TApiStackElement } from '@/types/stack.ts'
import 'web-animations-js'
import Muuri, { Item } from 'muuri'
import { onMounted, ref } from 'vue'
import { useApiClient } from '@/composables/useApiClient.ts'

const icons = ref<TApiStackElement[]>([])
const displayShuffleTitle = ref<boolean>(false)
const muuri = ref<null | Muuri>(null)
const skillTypes = ref<string[]>([])

const { apiRequest } = useApiClient()

onMounted(() => {
    retrieveSkills()
})

const retrieveSkills = async () => {
    const data = await apiRequest<TApiStackElement[]>('/api/stack')

    prepareIcons(data).then(() => {
        muuri.value = new Muuri('#muuri', {
            layout: {
                fillGaps: true,
                rounding: true
            },
            layoutOnResize: true,
            dragEnabled: true,
            sortData: {
                id: (_, element) => {
                    return parseFloat(element.children[0]!.textContent)
                }
            }
        })
    })
}

const prepareIcons = (data: TApiStackElement[]) => {
    return new Promise((resolve: (value: unknown) => void) => {
        data.sort((a, b) => a.title.localeCompare(b.title)).forEach((el) => {
            icons.value.push({ ...el, ...{ type: el.skill_type?.name } })
        })
        skillTypes.value = [...new Set(data.map((s) => s.skill_type?.name))].sort((a, b) => a.localeCompare(b)) as string[]

        resolve(null)
    })
}

const shuffle = () => {
    if (muuri.value) {
        muuri.value.sort(randomSortItems())
        muuri.value.refreshItems().layout()
    }
}

const filter = (type: string | null) => {
    if (muuri.value) {
        if (!type) {
            muuri.value.show(muuri.value.getItems())

            return
        }

        muuri.value.filter((item) => item.getElement()!.dataset.type === type)
    }
}

const randomSortItems = (): Item[] => {
    if (muuri.value) {
        const elements = muuri.value.getItems()
        let currentIndex = elements.length

        while (currentIndex != 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            ;[elements[currentIndex], elements[randomIndex]] = [elements[randomIndex] as Item, elements[currentIndex] as Item]
        }

        return elements
    }

    return []
}
</script>

<style>
@import '@/assets/css/stack/stack.css';
</style>
