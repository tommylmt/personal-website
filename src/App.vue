<script setup>
  import NavBar from './components/menu/NavBar.vue';
  import NotFound from './components/errors/Error404.vue';

  let currentPath = window.location.hash;

  let currentView = () => {
    return routes[currentPath.slice(1) || '/']?.component || NotFound
  }

  const routes = [
    {name: 'About', current: true, path: "#/", component: null}, 
    {name: 'Stack', current: false, path: "#/stack", component: null}, 
    {name: 'Culture', current: false, path: "#/culture", component: null},
  ];

  window.addEventListener('hashchange', () => {
    currentPath = window.location.hash
  });
</script>

<template>
  <NavBar :pages=routes />
  
  <main>
    <component :is="currentView()" />
  </main>
</template>
