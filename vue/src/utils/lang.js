import { createI18n } from 'vue-i18n'
import { fr } from '@/translations/fr'
import { en } from '@/translations/en'

export const i18n = createI18n({
    locale: navigator.language,
    fallbackLocale: 'en-US',
    globalInjection: true,
    datetimeFormats: {
        'fr-FR': {
            long: { year: 'numeric', month: 'long', day: 'numeric' }
        },
        'en-US': {
            long: { year: 'numeric', month: 'long', day: 'numeric' }
        }
    },
    messages: {
        'fr-FR': fr,
        'en-US': en
    }
})
