[![NPM](https://nodei.co/npm/nativescript-vue-global-drawer.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nativescript-vue-global-drawer/)

[![npm version](https://badge.fury.io/js/nativescript-vue-global-drawer.svg)](https://badge.fury.io/js/nativescript-vue-global-drawer)
## NativeScript-Vue Global Drawer

A Vue.js plugin that bootstrap the integration of RadSideDrawer in your NativeScript-Vue project.

Declare your drawer once and access it everywhere through your components.

If you need one drawer over your App pages this for you.

## Install


```
npm install nativescript-ui-sidedrawer --save
npm install nativescript-vue-global-drawer --save
```

## Usage

In main.js

````
import Vue from 'nativescript-vue'
import NSVueGlobalDrawer from 'nativescript-vue-global-drawer'

Vue.use(NSVueGlobalDrawer)

new Vue({
  render: h => h('frame', [h(App)])
}).$start()
````

In App.vue, declare the global drawer.

````
<template>
    <Page actionBarHidden="true">
        <GlobalDrawer>
            <template slot="content">
                <Label class="drawer-header" text="Drawer"/>
                <Label class="drawer-item" text="Item 1"/>
                <Label class="drawer-item" text="Item 2"/>
                <Label class="drawer-item" text="Item 3"/>
            </template>
            <template slot="frame">
                <!--default page-->
                <Page1/>
            </template>
        </GlobalDrawer>
    </Page>
</template>
````

## API

#### Slots

|Name     |Description|
|---------|-----------|
|content  |The drawer content.
|frame    |The default drawer page that will appear in the beginning.

#### Drawer methods

Anywhere in your components you can call these methods to control the drawer behavior.

.$drawer.open() : void

> Open drawer.

````
<Button @tap="$drawer.open()">Show</Button>
````

.$drawer.close() : void

> Close drawer.

````
<Button @tap="$drawer.close()">Close</Button>
````

.$drawer.toggle() : void

> Toggle drawer.

````
<Button @tap="$drawer.toggle()">Toggle</Button>
````

.$drawer.enable() : void

> Enable enable.

````
<Button @tap="$drawer.enable()">Enable</Button>
````

.$drawer.disable() : void

> Disable drawer. This will disable gestures too.

````
<Button @tap="$drawer.disable()">Disable</Button>
````

.$drawer.setGestures(boolean) : void

> Enable/Disable gestures.

````
<Button @tap="$drawer.setGestures(true)">Enable Gestures</Button>
````

.$drawer.getDrawer()

> Get drawer instance.

.$drawer.getFrame()

> Get drawer frame instance.

.$drawer.getStatus() : boolean

> Get drawer status (enabled/disabled).

#### Navigation

To navigate inside the drawer, you have to get the drawer frame instance to use in [manual navigation](https://nativescript-vue.org/en/docs/routing/manual-routing/).

Example:

````
this.$navigateTo(Page1, {
    transition: {},
    transitionIOS: {},
    transitionAndroid: {},
    
    props: {
      foo: 'bar',
    },
    frame: this.$drawer.getFrame()
})
````

#### Events

|Event Name     |Description|
|---------|-----------|
|drawerOpened  |the drawer has been opened.
|drawerOpening |the drawer is about to open.
|drawerClosed  |the drawer has been closed.
|drawerClosing |the drawer is about to close.
|drawerPan     |the drawer is being opened by its edge gesture.

## Contributing

Thank you for considering contributing.

## License

[MIT](https://opensource.org/licenses/MIT)
