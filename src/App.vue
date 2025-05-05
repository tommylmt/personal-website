<script>
import NavBar from './components/menu/NavBar.vue'
import MenuHelper from '@/utils/MenuHelper'
import Locale from '@/components/locale/Locale.vue'

export default {
    data() {
        return {
            helper: null
        }
    },
    mounted() {
        this.helper = new MenuHelper(location.pathname ?? '/')
    },
    components: { Locale, NavBar }
}
</script>

<template>
    <div v-if="helper">
        <NavBar :pages="helper.routes" />
    </div>

    <Locale />

    <main id="main">
        <router-view></router-view>
    </main>
</template>
