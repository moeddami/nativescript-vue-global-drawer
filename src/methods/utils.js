import Vue from 'nativescript-vue'

export const WARNING_MSG = 'The drawer is unavailable at the moment. Please add it to you App.vue'

export const getDrawerNativeView = () => {
    if (Vue.prototype.$nsVueGlobalDrawer === undefined) {
        console.log(WARNING_MSG + " 1")
        return
    }
    if (!Vue.prototype.$nsVueGlobalDrawer.enabled) {
        console.log(WARNING_MSG + " 2")
        return
    }
    return Vue.prototype.$nsVueGlobalDrawer.drawer.nativeView
}

export const getDrawerStatus = () => {
    if (Vue.prototype.$nsVueGlobalDrawer === undefined) {
        console.log(WARNING_MSG + " 3")
        return
    }
    return Vue.prototype.$nsVueGlobalDrawer.enabled
}

export const setDrawerStatus = (status) => {
    if (Vue.prototype.$nsVueGlobalDrawer === undefined) {
        console.log(WARNING_MSG + ' 4')
        return
    }
    Vue.prototype.$nsVueGlobalDrawer.enabled = status
}