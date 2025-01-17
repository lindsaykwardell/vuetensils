# VDropdown

Adds a button that can show/hide dropdown content when it is hovered over, or clicked. When it is clicked, the content will persist until the user clicks out or focuses out. Includes relevant ARIA attributes for the hidden content.

[Source](https://github.com/Stegosource/vuetensils/blob/master/src/components/VDropdown/VDropdown.vue)

## Installation

Globally:

```js
// main.js
import Vue from "vue"
import { VDropdown } from "vuetensils"

Vue.component("VDropdown", VDropdown)
```

Locally:

```vue
<script>
// SomeComponent.vue
import { VDropdown } from "vuetensils"

export default {
  components: {
    VDropdown,
  },
  // ...
}
</script>
```

## Styled Examples

```vue live
<template>
  <VDropdown text="Show me what you got!" transition="slide-up" class="styled">
    <div class="dropdown-content">Here is some custom dropdown content.</div>
  </VDropdown>
</template>
```

```css
.vts-dropdown__trigger {
  border: 0;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  color: #fff;
  background: darkcyan;
  transition: border-radius 0.5s ease;
}

.vts-dropdown__trigger[aria-expanded] {
  border-radius: 5px 5px 0 0;
}

.dropdown-content {
  border: 1px solid darkcyan;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  background-color: #fff;
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

## NOTE:

Dialog background colors have been removed. The following styles have been added to this site to make the dialogs easier to see:

```css
.bg-white {
  background-color: #fff;
}
```

## Unstyled Examples

```vue live
<template>
  <VDropdown text="Show me what you got!">
    <div class="bg-white">
      <p>This will close on click-out or focus-out.</p>
      <p>Try keyboard navigation.</p>
      <nav>
        <ul>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
        </ul>
      </nav>
    </div>
  </VDropdown>
</template>
```

## Position top

```vue live
<template>
  <VDropdown text="Show me what you got!" position="top">
    <div class="bg-white">
      Here is the dropdown content.
    </div>
  </VDropdown>
</template>
```

## With a transition

```vue live
<template>
  <VDropdown text="Show me what you got!" transition="slide-up">
    <div class="bg-white">
      Here is the dropdown content.
    </div>
  </VDropdown>
</template>
```

```css
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
:classes="{ root: 'root-class', trigger: 'trigger-class', content: 'content-class' }"
```
