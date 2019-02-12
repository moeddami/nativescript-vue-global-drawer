import {getDrawer, setDrawerStatus} from './utils'

const open = () => {
    const drawer = getDrawer()
    if (drawer)
        drawer.showDrawer()
}

const close = () => {
    const drawer = getDrawer()
    if (drawer)
        drawer.closeDrawer()
}

const toggle = () => {
    const drawer = getDrawer()
    if (drawer)
        drawer.toggleDrawerState()
}

const isOpen = () => {
    const drawer = getDrawer()
    if (drawer)
        return drawer.getIsOpen()
    return false
}

const enable = () => {
    setDrawerStatus(true)
    const drawer = getDrawer()
}

const disable = () => {
    const drawer = getDrawer()
    if (drawer)
        drawer.gesturesEnabled = false
    setDrawerStatus(false)
}

const setGestures = (value) => {
    const drawer = getDrawer()
    if (drawer)
        drawer.gesturesEnabled = value
}

export default {
    open,
    close,
    toggle,
    isOpen,
    enable,
    disable,
    setGestures
}