import '@/assets/scss/main.scss'
import "@phosphor-icons/web/light";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from '@/utils/lang'
import { createPinia } from 'pinia'
import { Observer } from 'tailwindcss-intersect';

const app = createApp(App)

app.config.globalProperties.$baseUrl = import.meta.env.VITE_API_BASE_URL
app.config.performance = true;

Observer.start();

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')

