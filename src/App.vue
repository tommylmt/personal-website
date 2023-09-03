<script setup>
import NavBar from './components/menu/NavBar.vue'
import MenuHelper from '@/utils/MenuHelper'

const helper = new MenuHelper()
</script>

<template>
    <NavBar :pages="helper.routes" />

    <main id="main">
        <router-view v-slot="{ Component, route }">
            <Transition name="page-transition">
                <component :is="Component" :key="route.path" />
            </Transition>
        </router-view>
    </main>
</template>
