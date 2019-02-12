import {getFrame, getNavigateBack, getNavigateTo, getShowModal} from './utils'
import Vue from 'nativescript-vue'
import drawerMethods from "./drawerMethods";

const navigateTo = (component, options = {}) => {
    const frame = getFrame()
    if (frame == undefined)
        return
    const props = {...options.props}

    let closeDrawer = false
    if (options.closeDrawer)
        closeDrawer = options.closeDrawer

    delete options.props
    delete options.closeDrawer

    getFrame().navigate({
        create: () => {
            const vm = new (Vue.extend(component))(
                {
                    propsData: {...props}
                }
            )
            vm.$mount()
            return vm.$el.nativeView
        },
        ...options
    })
    if (closeDrawer)
        drawerMethods.close()
}

const navigateBack = () => {
    const frame = getFrame()
    if (frame)
        frame.goBack()
}

export default {
    navigateTo,
    navigateBack
}