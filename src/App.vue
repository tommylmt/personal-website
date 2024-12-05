<script>
import NavBar from './components/menu/NavBar.vue'
import MenuHelper from '@/utils/MenuHelper'
import Locale from '@/components/locale/Locale.vue'
import NowPlaying from "@/components/culture/NowPlaying.vue";

export default {
    data() {
        return {
            helper: null,
        }
    },
    mounted() {
        this.helper = new MenuHelper(location.pathname ?? "/");
    },
    components: {NowPlaying, Locale, NavBar }
}
</script>

<template>
    <div v-if="helper">
        <NavBar :pages="helper.routes" />
    </div>

    <NowPlaying />
    <Locale />

    <main id="main">
        <router-view v-slot="{ Component, route }">
            <Transition name="page-transition">
                <component :is="Component" :key="route.path" />
            </Transition>
        </router-view>
    </main>
</template>

<style>

</style>