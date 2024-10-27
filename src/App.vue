<script setup>
import MenuHelper from '@/utils/MenuHelper'
import NavBar from './components/Menu/NavBar.vue';

const helper = new MenuHelper()
</script>

<template>
    <NavBar :pages="helper.routes" />
    
    <router-view v-slot="{ Component, route }">
        <Transition name="page" appear>
            <main id="main">
                <component :is="Component" :key="route.path" />
            </main>
        </Transition>
    </router-view>
</template>

<style lang="scss">
.page-enter-active main,
.page-leave-active main {
  transition: all .5s;
  height: auto;
  opacity: 1;
}
.page-enter-from main,
.page-leave-to main {
  height: 0;
  opacity: 0;
}
</style>
