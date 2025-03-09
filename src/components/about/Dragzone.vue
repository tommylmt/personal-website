<template>
    <div
        class="relative my-0 md:my-20 md:h-[700px] p-3 md:p-0 overflow-x-scroll md:overflow-x-visible flex gap-5 items-center"
        ref="dragzone"
    >
        <Earth />
        <MyLife />
        <PictureWrapper :source="prefix(pictures['bottom-left'])" :width="350" :position="{
            top: 'calc(70% - 100px)',
            left: '45px'
        }" />
        <PictureWrapper :source="prefix(pictures['middle-left'])" :width="500" :position="{
            top: '40%',
            left: '18%'
        }"/>
        <PictureWrapper :source="prefix(pictures['middle-right'])" :width="400" :position="{
            right: '30%',
            top: '40%'
        }" />
        <PictureWrapper :source="prefix(pictures['up-left'])" :width="350" :position="{
            top: '0'
        }" />
        <PictureWrapper :source="prefix(pictures['center'])" :width="300" :position="{
            top: 'calc(50%)',
            left: '35%'
        }" />
        <PictureWrapper :source="prefix(pictures['under-map'])" :width="400" :position="{
            top: 'calc(30% + 15px)',
            right: '50px'
        }" :z-index="78" />
        <PictureWrapper :source="prefix(pictures['middle-top'])" :width="600" :position="{
            top: '40px',
            left: '30%'
        }" />
    </div>
</template>

<script>
import Earth from "@/components/about/Earth.vue";
import MyLife from "@/components/about/MyLife.vue";
import PictureWrapper from "@/components/about/PictureWrapper.vue";
import axios from "axios";

export default {
    components: {
        PictureWrapper,
        MyLife,
        Earth
    },
    async mounted() {
        this.pictures = await axios.get(`${this.$baseUrl}/api/camera-roll`).then(res => res.data);
    },
    data() {
        return {
            pictures: {}
        }
    },
    methods: {
        prefix(img) {
            return `${this.$baseUrl}${img}`;
        }
    }
}
</script>
