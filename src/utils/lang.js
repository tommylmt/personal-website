import { createI18n } from 'vue-i18n'
import { fr } from '@/translations/fr'
import { en } from '@/translations/en'

export const i18n = createI18n({
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        fr: fr,
        en: en
    }
})