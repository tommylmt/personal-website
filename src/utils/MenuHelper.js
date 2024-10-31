export default class MenuHelper {
    get routes() {
        return [
            {
                name: "menu.about",
                path: '/',
                current: true
            }, {
                name: "menu.stack",
                path: '/stack',
                current: false
            }, {
                name: "menu.culture",
                path: '/culture',
                current: false
            }, {
                name: "menu.contact",
                path: 'mailto:thomaslamothe@free.fr',
                current: false,
                specialLink: true
            },
        ]
    }
}
