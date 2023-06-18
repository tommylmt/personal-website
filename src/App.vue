<script setup>
import { computed, ref } from "vue";
  import NavBar from './components/menu/NavBar.vue';
  import MenuHelper from "@/utils/MenuHelper";

  const helper = new MenuHelper();

  let view = ref(helper.getCurrentView());
  let currentView = computed(() => {
    return view.value;
  });

  window.addEventListener('menu.elementchange', e => {
    view.value = e.detail.view;
  });
</script>

<template>
  <NavBar :pages=helper.routes />

  <main id="main">
    <Transition appear name="page-transition">
      <component :is="currentView" />
    </Transition>
  </main>
</template>