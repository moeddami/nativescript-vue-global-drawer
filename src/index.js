import NSVueGlobalDrawer from './components/GlobalDrawer'
import drawerMethods from './methods/drawerMethods'

const NSVueGlobalDrawerPlugin = {
    install(Vue) {
        Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

        Vue.component('GlobalDrawer', NSVueGlobalDrawer)

        Vue.prototype.$drawer = {
            ...drawerMethods
        }
    }
}

export default NSVueGlobalDrawerPlugin