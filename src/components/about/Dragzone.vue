<template>
    <div class="relative overflow-x-hidden my-20 h-[600px]" ref="dragzone">
        <Earth />
        <MyLife />
        <PictureWrapper source="/img/me-on-earth/cat.webp" :width="300" />
        <PictureWrapper source="/img/me-on-earth/living.webp" :width="500" />
        <PictureWrapper source="/img/me-on-earth/nyc.webp" :width="250" />
        <PictureWrapper source="/img/me-on-earth/office.webp" />
        <PictureWrapper source="/img/me-on-earth/pedalboard.webp" />
        <PictureWrapper source="/img/me-on-earth/quarterpounder.webp" />
        <PictureWrapper source="/img/me-on-earth/replay.webp" />
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
