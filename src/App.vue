<script lang="ts">
import NavBar from './components/menu/NavBar.vue'
import MenuHelper from '@/utils/MenuHelper'
import Locale from '@/components/locale/Locale.vue'
import { NOT_FOUND } from '@/utils/constants'

export default {
    data() {
        return {
            helper: null,
            displayMenu: true
        }
    },
    mounted() {
        this.helper = new MenuHelper(location.pathname ?? '/')
    },
    watch: {
        $route(newValue) {
            this.displayMenu = newValue.name !== NOT_FOUND
        }
    },
    components: { Locale, NavBar }
}
</script>

<template>
    <div v-if="helper && displayMenu">
        <NavBar :pages="helper.routes" />
    </div>

    <Locale />

    <main id="main">
        <router-view></router-view>
    </main>
</template>
