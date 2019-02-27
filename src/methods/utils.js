import Vue from 'nativescript-vue'

export const WARNING_MSG = 'The drawer is unavailable at the moment. Please add it to you App.vue'

export const getDrawerNativeView = () => {
    if (Vue.prototype.$nsVueGlobalDrawer == undefined) {
        console.log(WARNING_MSG)
        return
    }
    if (!Vue.prototype.$nsVueGlobalDrawer.enabled) {
        console.log(WARNING_MSG)
        return
    }
    return Vue.prototype.$nsVueGlobalDrawer.drawer.nativeView
}

export const getDrawerStatus = () => {
    if (Vue.prototype.$nsVueGlobalDrawer == undefined) {
        console.log(WARNING_MSG)
        return
    }
    return Vue.prototype.$nsVueGlobalDrawer.enabled
}

export const setDrawerStatus = (status) => {
    if (Vue.prototype.$nsVueGlobalDrawer == undefined) {
        console.log(WARNING_MSG)
        return
    }
    Vue.prototype.$nsVueGlobalDrawer.enabled = status
}