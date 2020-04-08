# VDialog

A dialog component for showing users content which overlays the rest of the applications. When opened, it traps the user's focus so that keyboard navigation will remain within the dialog until it is closed. It supports being closed by clicking outside the dialog content or pressing the ESC key.

[Source](https://github.com/Stegosource/vuetensils/blob/master/src/components/VDialog/VDialog.vue)

## Installation

Globally:

```js
// main.js
import Vue from "vue"
import { VDialog } from "vuetensils"

Vue.component("VDialog", VDialog)
```

Locally:

```vue
<script>
// SomeComponent.vue
import { VDialog } from "vuetensils"

export default {
  components: {
    VDialog,
  },
  // ...
}
</script>
```

## Styled Example

```vue live
<template>
  <VDialog
    v-model="dialog"
    @chane="$log"
    bg-transition="fade"
    class="my-dialog"
  >
    <template #toggle="{ on, attrs }">
      <button v-on="on" v-bind="attrs">Show the dialog</button>
    </template>

    This is the dialog content.
    <br />
    It traps the user focus.
    <br />
    <button @click="dialog = false" aria-label="close" class="my-dialog__close">
      &times;
    </button>
  </VDialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
}
</script>
```

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transform: translateY(0);
  transition: opacity 0.5s, transform 0.5s;
}

.slide-up-enter,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.my-dialog .vts-dialog {
  background: rgba(0, 0, 0, 0.7);
}

.my-dialog .vts-dialog__content {
  position: relative;
  border-radius: 7px;
  padding: 20px;
  font-family: sans-serif;
  background: #fff;
  transition: transform 0.3s;
}

.my-dialog .fade-enter .vts-dialog__content,
.my-dialog .fade-leave-active .vts-dialog__content {
  transform: translateY(20px);
}

.my-dialog__close {
  position: absolute;
  top: 5px;
  right: 5px;
  border: 0;
  padding: 5px;
  background: transparent;
}
```

## NOTE:

Dialog background colors have been removed. The following styles have been added to this site to make the dialogs easier to see:

```css
.bg-white {
  background-color: #fff;
}

.bg-black-alpha .vts-modal {
  background: rgba(0, 0, 0, 0.2);
}
```

## Basic dialog

```vue live
<template>
  <VDialog class="test" :classes="{ bg: 'bg-black-alpha' }">
    <template #toggle="{ bind, on }">
      <button v-bind="bind" v-on="on">Show the dialog</button>
    </template>

    <div class="bg-white">This is the dialog content.</div>
  </VDialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
}
</script>
```

## Using v-model

```vue live
<template>
  <div>
    <VDialog v-model="dialog" :classes="{ bg: 'bg-black-alpha' }">
      <div class="bg-white">This is the dialog content.</div>
    </VDialog>
    <button @click="dialog = !dialog">Show the dialog</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
}
</script>
```

## Add a close button

```vue live
<template>
  <div>
    <VDialog v-model="dialog" :classes="{ bg: 'bg-black-alpha' }">
      <div class="bg-white">
        This is the dialog content.
        <br />
        <button @click="dialog = false">Close</button>
      </div>
    </VDialog>
    <button @click="dialog = !dialog">Show the dialog</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
}
</script>
```

## Prevent scrolling

```vue live
<template>
  <VDialog noScroll :classes="{ bg: 'bg-black-alpha' }">
    <template #toggle="{ bind, on }">
      <button v-bind="bind" v-on="on">Show the dialog</button>
    </template>

    <div class="bg-white">This is the dialog content.</div>
  </VDialog>
</template>
```

## With transitions

```vue live
<template>
  <div>
    <VDialog
      v-model="dialog"
      transition="slide-up"
      bg-transition="fade"
      :classes="{ bg: 'bg-black-alpha' }"
    >
      <div class="bg-white">
        This is the dialog content.
        <br />
        It traps the user focus.
        <br />
        <button @click="dialog = false">Close</button>
      </div>
    </VDialog>
    <button @click="dialog = !dialog">Show the dialog</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
}
</script>
```

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transform: translateY(0);
  transition: opacity 0.5s, transform 0.5s;
}

.slide-up-enter,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
```

## Custom Classes

This component can accept a `classes` prop to cusomize the output HTML classes:

```
:classes="{ root: 'root-class', content: 'content-class' }"
```
