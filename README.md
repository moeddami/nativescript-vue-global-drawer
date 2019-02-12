## NativeScript-Vue Global Drawer

A Vue plugin that bootstrap the integration of RadSideDrawer in your NativeScript-Vue project.

Declare your drawer once and access it everywhere through your components.

If you need one drawer over your App pages this for you.

## Install

No need to install RadSideDrawer, the plugin will do it for you ;)

```
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

In App.vue, declare the global grawer.

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

.$drawer.open()

> Open drawer.

````
<Button @tap="$drawer.open()">Show</Button>
````

.$drawer.close()

> Close drawer.

````
<Button @tap="$drawer.close()">Close</Button>
````

.$drawer.toggle()

> Toggle drawer.

````
<Button @tap="$drawer.toggle()">Toggle</Button>
````

.$drawer.enable()

> Enable enable.

````
<Button @tap="$drawer.enable()">Enable</Button>
````

.$drawer.disable()

> Disable drawer. This will disable gestures too.

````
<Button @tap="$drawer.disable()">Disable</Button>
````

.$drawer.setGestures(boolean)

> Enable/Disable gestures.

````
<Button @tap="$drawer.setGestures(true)">Enable Gestures</Button>
````

#### Navigation methods

To control the navigation inside the drawer, call these methods anywhere in your components.

.$drawer.navigateTo(component, options)
> Navigate to a page.

>options: Same as [manual navigation](https://nativescript-vue.org/en/docs/routing/manual-routing/) plus closeDrawer property to close the drawer after navigating (default: false).
````
this.$drawer.navigateTo(Page1, {
    closeDrawer: true,
    transition: {},
    transitionIOS: {},
    transitionAndroid: {},
    
    props: {
      foo: 'bar',
    }
})
````


.$drawer.navigateBack()

> Navigate to previous page.

````
this.$drawer.navigateBack()
````

## Contributing

Thank you for considering contributing.

## License

[MIT](https://opensource.org/licenses/MIT)