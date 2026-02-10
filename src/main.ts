import '@/assets/css/main.css'
import '@phosphor-icons/web/light'

import { createApp } from 'vue'
import router from '@/router/index'
import { i18n } from './utils/lang'
import { createPinia } from 'pinia'
import AOS from 'aos'
import App from '@/App.vue'
import { TestIds } from '@/utils/testIds.ts'

const app = createApp(App)

app.config.globalProperties.$baseUrl = import.meta.env.VITE_API_BASE_URL
app.config.globalProperties.$testIds = TestIds
app.config.performance = true

app.use(createPinia())
app.use(router)
app.use(i18n)
app.provide('baseUrl', app.config.globalProperties.$baseUrl)
app.mount('#app')

AOS.init()
