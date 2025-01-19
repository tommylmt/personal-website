<template>
    <div
        class="relative my-0 md:my-20 md:h-[700px] p-3 md:p-0 overflow-x-scroll md:overflow-x-visible flex gap-5 items-center"
        ref="dragzone"
    >
        <Earth />
        <MyLife />
        <PictureWrapper source="/img/me-on-earth/cat.webp" :width="350" :position="{
            top: 'calc(70% - 100px)',
            left: '45px'
        }" />
        <PictureWrapper source="/img/me-on-earth/living.webp" :width="500" :position="{
            top: '40%',
            left: '18%'
        }"/>
        <PictureWrapper source="/img/me-on-earth/nyc.webp" :width="400" :position="{
            right: '30%',
            top: '40%'
        }" />
        <PictureWrapper source="/img/me-on-earth/office.webp" :width="350" :position="{
            top: '0'
        }" />
        <PictureWrapper source="/img/me-on-earth/pedalboard.webp" :width="300" :position="{
            top: 'calc(50%)',
            left: '35%'
        }" />
        <PictureWrapper source="/img/me-on-earth/quarterpounder.webp" :width="400" :position="{
            top: 'calc(30% + 15px)',
            right: '50px'
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
