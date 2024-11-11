<template>
    <Me />
    <School />
    <ProSituation />
    <SocialMedia />

    <div class="relative w-full 2xl:w-11/12 my-10 mx-auto">
        <div class="p-6">
            <h3 class="font-sans font-extrabold text-slate-800 dark:text-slate-400 text-3xl">
                {{ $t('about.earth.title') }}
            </h3>
        </div>
    </div>

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
