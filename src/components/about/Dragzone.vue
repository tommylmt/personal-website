<template>
    <div
        class="relative my-0 md:my-20 md:h-[700px] p-3 md:p-0 overflow-x-scroll md:overflow-x-visible flex gap-5 items-center"
        ref="dragzone"
    >
        <Earth />
        <MyLife />
        <PictureWrapper
            :is-loading="isLoading"
            :source="imageForPosition('bottom-left')"
            :width="350"
            :position="{
                top: 'calc(70% - 100px)',
                left: '45px'
            }"
        />
        <PictureWrapper
            :is-loading="isLoading"
            :source="imageForPosition('middle-left')"
            :width="500"
            :position="{
                top: '40%',
                left: '18%'
            }"
        />
        <PictureWrapper
            :is-loading="isLoading"
            :source="imageForPosition('middle-right')"
            :width="400"
            :position="{
                right: '30%',
                top: '40%'
            }"
        />
        <PictureWrapper
            :is-loading="isLoading"
            :source="imageForPosition('up-left')"
            :width="350"
            :position="{
                top: '0'
            }"
        />
        <PictureWrapper
            :is-loading="isLoading"
            :source="imageForPosition('center')"
            :width="300"
            :position="{
                top: 'calc(50%)',
                left: '35%'
            }"
        />
        <PictureWrapper
            :is-loading="isLoading"
            :source="imageForPosition('under-map')"
            :width="400"
            :position="{
                top: 'calc(30% + 15px)',
                right: '50px'
            }"
            :z-index="78"
        />
        <PictureWrapper
            :is-loading="isLoading"
            :source="imageForPosition('middle-top')"
            :width="600"
            :position="{
                top: '40px',
                left: '30%'
            }"
        />
    </div>
</template>

<script setup lang="ts">
import Earth from '@/components/about/Earth.vue'
import MyLife from '@/components/about/MyLife.vue'
import PictureWrapper from '@/components/about/PictureWrapper.vue'
import type { TPicturePosition } from '@/types/about.ts'
import { useApiClient } from '@/composables/useApiClient.ts'
import { inject, onMounted, ref } from 'vue'

const { apiRequest } = useApiClient()

const pictures = ref<Record<TPicturePosition, string> | undefined>(undefined)
const isLoading = ref<boolean>(true)
const baseUrl = inject('baseUrl')

onMounted(async () => {
    pictures.value = await apiRequest<Record<TPicturePosition, string>>('/api/camera-roll')
    isLoading.value = false
})

const imageForPosition = (position: TPicturePosition): string => {
    const image = pictures.value ? pictures.value[position] : null

    if (image) {
        return baseUrl + image
    }

    return ''
}
</script>
