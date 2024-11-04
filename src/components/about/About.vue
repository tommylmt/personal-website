<template>
    <Me />
    <School />
    <ProSituation />
    <SocialMedia />

    <div class="text-center my-40">
        <h3 class="text-slate-200 text-9xl font-gothic">{{ $t('about.theEnd') }}</h3>
    </div>
</template>

<script>
import Me from '@/components/about/Me.vue'
import School from "@/components/about/School.vue";
import ProSituation from "@/components/about/ProSituation.vue";
import SocialMedia from "@/components/about/SocialMedia.vue";

export default {
    components: {
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
