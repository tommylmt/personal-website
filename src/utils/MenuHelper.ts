import {NavItem} from "@/src/types/menu";

export default class MenuHelper {
    private readonly current: string;

    constructor(currentRoute: string) {
        this.current = currentRoute
    }

    get routes(): NavItem[] {
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
