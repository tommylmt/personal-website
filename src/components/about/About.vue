<template>
    <Me />
    <School />
    <ProSituation />
    <SocialMedia />
    <Dragzone />

    <div class="text-center my-40">
        <h3 class="text-slate-200 text-8xl 2xl:text-9xl font-gothic dark:text-slate-900">
            {{ $t('about.theEnd') }}
        </h3>
    </div>
</template>

<script>
import Me from '@/components/about/Me.vue'
import School from "@/components/about/School.vue";
import ProSituation from "@/components/about/ProSituation.vue";
import SocialMedia from "@/components/about/SocialMedia.vue";
import Dragzone from "@/components/about/Dragzone.vue";

export default {
    components: {
        Dragzone,
        SocialMedia,
        ProSituation,
        School,
        Me
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/about/about";
</style>
