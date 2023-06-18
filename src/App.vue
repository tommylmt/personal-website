<script setup>
  import { ref, computed } from 'vue'
  import NavBar from './components/menu/NavBar.vue';
  import NotFound from './components/errors/Error404.vue';
  import About from './components/about/About.vue';
  import Culture from './components/culture/Culture.vue';
  import Stack from "@/components/stack/Stack.vue";

  const routes = {
    "/": {name: 'À propos', current: true, path: "#/", component: About},
    "/stack": {name: 'Stack', current: false, path: "#/stack", component: Stack},
    "/culture": {name: 'Culture', current: false, path: "#/culture", component: Culture},
  };
  const currentPath = ref(window.location.hash);

  const currentView = computed(() => {
    let element = routes[currentPath.value.slice(1) || '/'];

    return element?.component || NotFound
  });

  const setCurrentLink = hash => {
    let element = routes[hash.slice(1) || '/'];
    Object.keys(routes).forEach(key => { routes[key].current = false});

    element.current = true;
  };

  window.addEventListener('hashchange', () => {
    setCurrentLink(window.location.hash);

    currentPath.value = window.location.hash;
  });
</script>

<template>
  <NavBar :pages=routes />

  <main id="main">
    <Transition appear name="page-transition">
      <component :is="currentView" />
    </Transition>
  </main>
</template>