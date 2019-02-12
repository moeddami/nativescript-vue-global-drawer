<template>
    <RadSideDrawer ref="nsVueGlobalDrawer" :gesturesEnabled="gesturesEnabled" @drawerClosing="$emit('drawerClosing')"
                   @drawerClosed="$emit('drawerClosed')" @drawerOpening="$emit('drawerOpening')"
                   @drawerOpened="$emit('drawerOpened')" @drawerPan="$emit('drawerPan')">
        <StackLayout ~drawerContent :backgroundColor="backgroundColor ? backgroundColor : '#ffffff'">
            <slot name="content"></slot>
        </StackLayout>

        <StackLayout ~mainContent>
            <Frame ref="nsVueGlobalDrawerFrame">
                <slot name="frame"></slot>
            </Frame>
        </StackLayout>
    </RadSideDrawer>
</template>

<script>
    import Vue from 'nativescript-vue'

    export default {
        props: ['gesturesEnabled', 'backgroundColor'],
        mounted() {
            Vue.prototype.$nsVueGlobalDrawer = {
                drawer: this.$refs.nsVueGlobalDrawer,
                frame: this.$refs.nsVueGlobalDrawerFrame,
                enabled: true
            }
        }
    }
</script>

<style scoped>

</style>