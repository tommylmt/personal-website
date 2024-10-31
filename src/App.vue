<script>
import NavBar from './components/menu/NavBar.vue'
import MenuHelper from '@/utils/MenuHelper'
import Locale from '@/components/locale/Locale.vue'

export default {
    data() {
        return {
            helper: new MenuHelper()
        }
    },
    components: { Locale, NavBar }
}
</script>

<template>
    <NavBar :pages="helper.routes" />
    <Locale />

    <main id="main">
        <router-view v-slot="{ Component, route }">
            <Transition name="page-transition">
                <component :is="Component" :key="route.path" />
            </Transition>
        </router-view>
    </main>
</template>
