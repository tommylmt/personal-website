<template>
    <div
        class="relative my-0 md:my-20 md:h-[700px] p-3 md:p-0 overflow-x-scroll md:overflow-x-visible flex gap-5 items-center"
        ref="dragzone"
    >
        <Earth />
        <MyLife />
        <PictureWrapper
            :is-loading="isLoading"
            :source="prefix(pictures['bottom-left'])"
            :width="350"
            :position="{
                top: 'calc(70% - 100px)',
                left: '45px'
            }"
        />
        <PictureWrapper
            :is-loading="isLoading"
            :source="prefix(pictures['middle-left'])"
            :width="500"
            :position="{
                top: '40%',
                left: '18%'
            }"
        />
        <PictureWrapper
            :is-loading="isLoading"
            :source="prefix(pictures['middle-right'])"
            :width="400"
            :position="{
                right: '30%',
                top: '40%'
            }"
        />
        <PictureWrapper
            :is-loading="isLoading"
            :source="prefix(pictures['up-left'])"
            :width="350"
            :position="{
                top: '0'
            }"
        />
        <PictureWrapper
            :is-loading="isLoading"
            :source="prefix(pictures['center'])"
            :width="300"
            :position="{
                top: 'calc(50%)',
                left: '35%'
            }"
        />
        <PictureWrapper
            :is-loading="isLoading"
            :source="prefix(pictures['under-map'])"
            :width="400"
            :position="{
                top: 'calc(30% + 15px)',
                right: '50px'
            }"
            :z-index="78"
        />
        <PictureWrapper
            :is-loading="isLoading"
            :source="prefix(pictures['middle-top'])"
            :width="600"
            :position="{
                top: '40px',
                left: '30%'
            }"
        />
    </div>
</template>

<script>
import Earth from '@/components/about/Earth.vue'
import MyLife from '@/components/about/MyLife.vue'
import PictureWrapper from '@/components/about/PictureWrapper.vue'
import axios from 'axios'

export default {
    components: {
        PictureWrapper,
        MyLife,
        Earth
    },
    async mounted() {
        this.pictures = await axios.get(`${this.$baseUrl}/api/camera-roll`).then((res) => res.data)
        this.isLoading = false
    },
    data() {
        return {
            pictures: {},
            isLoading: true
        }
    },
    methods: {
        prefix(img) {
            return `${this.$baseUrl}${img}`
        }
    }
}
</script>
