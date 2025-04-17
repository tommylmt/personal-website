export default class MenuHelper {
    constructor(currentRoute) {
        this.current = currentRoute
    }

    get routes() {
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
