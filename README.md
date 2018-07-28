# v-readmore

The v-readmore component is a component for toggle the display according to the height.

## Demo

in preparation. (v-readmore/examples)

## Installation

```bash
$ npm install --save v-readmore
# or
$ yarn add v-readmore
```

## Usage

1. Import `VReadmore` and install it in Vue constructor.

  ```js
  import Vue from 'vue'
  import VReadmore from 'vue-thin-modal'

  Vue.use(VReadmore)

  new Vue({
    // ...
  })
  ```

3. Use `<v-readmore>` component in your apps.

  ```vue
  <template>
    <v-readmore>
      <li v-for="i in 30" :key="i">item - {{ i }}</li>
    </v-readmore>
  </template>
  ```

### Auto installing v-readmore

If you have `Vue` constructor on `window`, you don't need to call `Vue.use(VReadmore)` since it will be called automatically. This is the case when you load Vue.js and v-readmore via `<script>` element.

## References

### `<v-readmore>` component

#### Props

* `collapsedHeight` - Number

  Required as the modal name. The `name` must be unique against every modal you would use.


#### Slots

* `(default)` - main content.

* `moreLink` - more button element.

* `lessLink` - less button element.

## License

MIT
