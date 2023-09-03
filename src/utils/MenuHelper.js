export default class MenuHelper {
    get routes() {
        return [
            { name: 'À propos', path: '/', current: true },
            { name: 'Stack', path: '/stack', current: false },
            { name: 'Culture', path: '/culture', current: false }
        ]
    }
}
