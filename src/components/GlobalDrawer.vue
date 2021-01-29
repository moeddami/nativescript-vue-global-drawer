<template>
  <RadSideDrawer ref="nsVueGlobalDrawer" :gesturesEnabled="gesturesEnabled" @drawerClosed="$emit('drawerClosed')"
                 @drawerClosing="$emit('drawerClosing')" @drawerOpened="$emit('drawerOpened')"
                 @drawerOpening="$emit('drawerOpening')" @drawerPan="$emit('drawerPan')">
    <StackLayout :backgroundColor="backgroundColor ? backgroundColor : '#ffffff'" ~drawerContent>
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
  created() {
  },
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