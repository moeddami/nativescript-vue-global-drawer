import {getDrawerNativeView, getDrawerStatus, setDrawerStatus, WARNING_MSG} from './utils'
import Vue from 'nativescript-vue'

const open = () => {
    const drawer = getDrawerNativeView()
    if (drawer)
        drawer.showDrawer()
}

const close = () => {
    const drawer = getDrawerNativeView()
    if (drawer)
        drawer.closeDrawer()
}

const toggle = () => {
    const drawer = getDrawerNativeView()
    if (drawer)
        drawer.toggleDrawerState()
}

const isOpen = () => {
    const drawer = getDrawerNativeView()
    if (drawer)
        return drawer.getIsOpen()
    return false
}

const enable = () => {
    setDrawerStatus(true)
}

const disable = () => {
    const drawer = getDrawerNativeView()
    if (drawer)
        drawer.gesturesEnabled = false
    setDrawerStatus(false)
}

const setGestures = (value) => {
    const drawer = getDrawerNativeView()
    if (drawer)
        drawer.gesturesEnabled = value
}

const getStatus = () => {
    return getDrawerStatus()
}

const getDrawer = () => {
    if (Vue.prototype.$nsVueGlobalDrawer == undefined) {
        console.log(WARNING_MSG)
        return
    }
    return Vue.prototype.$nsVueGlobalDrawer.drawer
}

const getFrame = () => {
    if (Vue.prototype.$nsVueGlobalDrawer == undefined) {
        console.log(WARNING_MSG)
        return
    }
    return Vue.prototype.$nsVueGlobalDrawer.frame
}

export default {
    open,
    close,
    toggle,
    isOpen,
    enable,
    disable,
    setGestures,
    getStatus,
    getDrawer,
    getFrame
}