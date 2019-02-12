import NSVueGlobalDrawer from './components/GlobalDrawer'
import drawerMethods from './methods/drawerMethods'
import navigationMethods from './methods/navigationMethods'

const NSVueGlobalDrawerPlugin = {
    install(Vue) {
        Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

        Vue.component('GlobalDrawer', NSVueGlobalDrawer)

        Vue.prototype.$drawer = {
            ...drawerMethods,
            ...navigationMethods
        }
    }
}

export default NSVueGlobalDrawerPlugin