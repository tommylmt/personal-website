import "./assets/scss/main.scss";

import { createApp } from 'vue'
import App from './App.vue'
import Scrollbar from 'smooth-scrollbar';

const app = createApp(App);

app.config.globalProperties.$baseUrl = import.meta.env.VITE_API_BASE_URL;
app.mount('#app');

Scrollbar.init(document.querySelector("#main"), {
  damping: 0.04,
  renderByPixels: false
});