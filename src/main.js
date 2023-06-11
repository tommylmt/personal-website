import "./assets/scss/main.scss";

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.config.globalProperties.$baseUrl = import.meta.env.VITE_API_BASE_URL;
app.mount('#app');
