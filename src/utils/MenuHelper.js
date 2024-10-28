export default class MenuHelper {
    get routes() {
        return [
            { name: 'About', path: '/', current: true, color: '#eeebe3' },
            { name: 'Stack', path: '/stack', current: false, color: '#F97300' },
            { name: 'Culture', path: '/culture', current: false, color: '#E9B824' }
        ]
    }
}
