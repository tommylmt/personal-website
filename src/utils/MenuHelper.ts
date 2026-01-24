import { MenuItem } from '../types/menu'

export default class MenuHelper {
    private current: string

    constructor(currentPath: string) {
        this.current = currentPath
    }

    get routes(): MenuItem[] {
        return [
            {
                name: 'menu.about',
                path: '/',
                current: '/' === this.current
            },
            {
                name: 'menu.stack',
                path: '/stack',
                current: '/stack' === this.current
            },
            {
                name: 'menu.culture',
                path: '/culture',
                current: '/culture' === this.current
            },
            {
                name: 'menu.contact',
                path: 'mailto:thomaslamothe@free.fr',
                current: false,
                specialLink: true
            }
        ]
    }
}
