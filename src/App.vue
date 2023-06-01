<script setup>
  import { ref, computed } from 'vue'
  import NavBar from './components/menu/NavBar.vue';
  import NotFound from './components/errors/Error404.vue';
  import About from './components/about/About.vue';

  const routes = {
    "/": {name: 'À propos', current: true, path: "#/", component: About},
    "/stack": {name: 'Stack', current: false, path: "#/stack", component: null}, 
    "/culture": {name: 'Culture', current: false, path: "#/culture", component: null},
  };
  const currentPath = ref(window.location.hash);

  const currentView = computed(() => {
    let element = routes[currentPath.value.slice(1) || '/'];

    return element?.component || NotFound
  });

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
  });
</script>

<template>
  <NavBar :pages=routes />

  <main>
    <Transition appear name="page-transition">
      <component :is="currentView" />
    </Transition>
  </main>
</template>