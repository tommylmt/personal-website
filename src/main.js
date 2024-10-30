import '@/assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import Scrollbar from 'smooth-scrollbar'
import router from './router'
import { i18n } from '@/utils/lang'

const app = createApp(App)

app.config.globalProperties.$baseUrl = import.meta.env.VITE_API_BASE_URL

app.use(router)
app.use(i18n)
app.mount('#app')

Scrollbar.init(document.querySelector('#main'), {
    damping: 0.04,
    renderByPixels: false
})
