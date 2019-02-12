import Vue from 'nativescript-vue'

export const getDrawer = () => {
    if (Vue.prototype.$nsVueGlobalDrawer == undefined) {
        console.log('The drawer is unavailable at the moment. Please add it to you App.vue')
        return
    }
    if (!Vue.prototype.$nsVueGlobalDrawer.enabled) {
        console.log('The drawer is disabled.')
        return
    }
    return Vue.prototype.$nsVueGlobalDrawer.drawer.nativeView
}

export const getFrame = () => {
    if (Vue.prototype.$nsVueGlobalDrawer == undefined) {
        console.log('The drawer is unavailable at the moment. Please add it to you App.vue')
        return
    }
    return Vue.prototype.$nsVueGlobalDrawer.frame.nativeView
}


export const getDrawerStatus = () => {
    if (Vue.prototype.$nsVueGlobalDrawer == undefined) {
        console.log('The drawer is unavailable at the moment. Please add it to you App.vue')
        return
    }
    return Vue.prototype.$nsVueGlobalDrawer.enabled
}

export const setDrawerStatus = (status) => {
    if (Vue.prototype.$nsVueGlobalDrawer == undefined) {
        console.log('The drawer is unavailable at the moment. Please add it to you App.vue')
        return
    }
    Vue.prototype.$nsVueGlobalDrawer.enabled = status
}