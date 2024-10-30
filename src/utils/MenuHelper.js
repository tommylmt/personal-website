import { i18n } from '@/utils/lang'

export default class MenuHelper {
    get routes() {
        return [
            {
                name: i18n.global.t("menu.about"),
                path: '/',
                current: true
            }, {
                name: i18n.global.t("menu.stack"),
                path: '/stack',
                current: false
            }, {
                name: i18n.global.t("menu.culture"),
                path: '/culture',
                current: false
            }, {
                name:  i18n.global.t("menu.contact"),
                path: 'mailto:thomaslamothe@free.fr',
                current: false,
                specialLink: true
            },
        ]
    }
}
