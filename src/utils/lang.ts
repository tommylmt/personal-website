import { createI18n } from 'vue-i18n'
import { fr } from '@/translations/fr'
import { en } from '@/translations/en'

type MessageSchema = typeof en

export const i18n = createI18n<[MessageSchema], 'en-US' | 'fr-FR'>({
    locale: navigator.language,
    fallbackLocale: 'en-US',
    globalInjection: true,
    datetimeFormats: {
        'fr-FR': {
            short: { year: 'numeric', month: 'numeric', day: 'numeric' },
            long: { year: 'numeric', month: 'long', day: 'numeric' }
        },
        'en-US': {
            short: { year: 'numeric', month: 'numeric', day: 'numeric' },
            long: { year: 'numeric', month: 'long', day: 'numeric' }
        }
    },
    messages: {
        'fr-FR': fr,
        'en-US': en
    }
})
