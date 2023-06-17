<template>
  <div>
    <h1>Stack</h1>
    <p>Liste des applications que j'utilise au quotidien.</p>
  </div>
  <div id="stackWrapper">
    <div class="stack-flex">
      <div v-for="icon in icons" class="a-skill">
        <span v-html="icon.svg" class="skill-icon"></span>
        <p>{{ icon.title }}</p>
        <span>{{ icon.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as sicons from 'simple-icons';
import axios from "axios";

export default {
  data() {
    return {
      icons: [],
    };
  },
  mounted() {
    this.retrieveSkills();
  },
  methods: {
    async retrieveSkills() {
      const res = await axios.get(`${this.$baseUrl}/api/stack/`);

      this.prepareIcons(res.data);
    },
    prepareIcons(data) {
      data.forEach(el => {
        this.icons.push({...sicons[el.code], ...{ description: el.description }});
      });
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/scss/Stack/stack";
</style>