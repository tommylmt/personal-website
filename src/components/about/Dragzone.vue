<template>
    <div class="relative my-20 h-[700px] overflow-x-scroll md:overflow-x-visible flex gap-5 items-center" ref="dragzone">
        <Earth />
        <MyLife />
        <PictureWrapper source="/img/me-on-earth/cat.webp" :width="300" :position="{
            bottom: '-50px',
            left: '45px'
        }" />
        <PictureWrapper source="/img/me-on-earth/living.webp" :width="500" :position="{
            top: '35%',
            left: '18%'
        }"/>
        <PictureWrapper source="/img/me-on-earth/nyc.webp" :width="250" :position="{
            right: '30%',
            bottom: '0'
        }" />
        <PictureWrapper source="/img/me-on-earth/office.webp" :width="300" :position="{
            top: '50px'
        }" />
        <PictureWrapper source="/img/me-on-earth/pedalboard.webp" :width="300" :position="{
            bottom: '-100px',
            left: '35%'
        }" />
        <PictureWrapper source="/img/me-on-earth/quarterpounder.webp" :width="300" :position="{
            bottom: '-50px',
            right: '5%'
        }" :z-index="78" />
        <PictureWrapper source="/img/me-on-earth/replay.webp" :width="600" :position="{
            top: '40px',
            left: '30%'
        }" />
    </div>
</template>

<script>
import Earth from "@/components/about/Earth.vue";
import MyLife from "@/components/about/MyLife.vue";
import PictureWrapper from "@/components/about/PictureWrapper.vue";

export default {
    components: {
        PictureWrapper,
        MyLife,
        Earth
    },
}
</script>
