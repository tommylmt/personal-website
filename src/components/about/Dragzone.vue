<template>
    <div class="relative my-20 md:h-[700px] p-3 md:p-0 overflow-x-scroll md:overflow-x-visible flex gap-5 items-center" ref="dragzone">
        <Earth />
        <MyLife />
        <PictureWrapper source="/img/me-on-earth/cat.webp" :width="300" :position="{
            top: 'calc(70% - 50px)',
            left: '45px'
        }" />
        <PictureWrapper source="/img/me-on-earth/living.webp" :width="500" :position="{
            top: '35%',
            left: '18%'
        }"/>
        <PictureWrapper source="/img/me-on-earth/nyc.webp" :width="250" :position="{
            right: '30%',
            top: '50%'
        }" />
        <PictureWrapper source="/img/me-on-earth/office.webp" :width="300" :position="{
            top: '50px'
        }" />
        <PictureWrapper source="/img/me-on-earth/pedalboard.webp" :width="300" :position="{
            top: 'calc(50% + 100px)',
            left: '35%'
        }" />
        <PictureWrapper source="/img/me-on-earth/quarterpounder.webp" :width="300" :position="{
            top: 'calc(50% + 15px)',
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
