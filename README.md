# Keen UI

Keen UI is a lightweight [Vue.js](http://vuejs.org) UI library with a simple API. The design is inspired by Google's [Material Design](https://material.io/guidelines). However, Keen UI is not meant to be a full implementation of the Material Design spec.

Keen UI is **not** a CSS framework. As such, it doesn't include a grid system, typography styles, etc. Instead, the focus is on interactive components that require Javascript.

## Documentation and demo
[http://josephuspaye.github.io/Keen-UI/](http://josephuspaye.github.io/Keen-UI/)

## Requirements
* [Vue.js](http://vuejs.org/) (^v2.1.4) - use [keen-ui@0.8.9](http://josephuspaye.github.io/Keen-UI/0.8.9/) for Vue 1.x support.

Optional
* [Roboto font](https://www.google.com/fonts/specimen/Roboto) (Normal 400, Medium 500)
* [Material Icons font](http://google.github.io/material-design-icons/#icon-font-for-the-web)

## Browser support
IE 10+ (due to [Flexbox support](http://caniuse.com/#search=flexbox)).

## Installation

```bash
npm install keen-ui --save
```

## Usage

##### CSS Reset

Before using Keen UI, ensure that the following CSS resets are applied to your site.

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    font-size: 100%;
}
```

You can add the reset to your stylesheet (before other styles). If you are using a CSS framework, check to see if the framework already includes a reset (most CSS frameworks do). The root font size [can be customized](Customization.md#component-sizing) to globally resize the components.

### ES6

Use as a plugin (registers all components with Vue globally):

```js
import Vue from 'vue';
import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';

Vue.use(KeenUI);

new Vue({
    components: {
        // all Keen UI components already registered
    }
});
```

Use individual components:

```js
import Vue from 'vue';
import { UiAlert, UiButton } from 'keen-ui';

new Vue({
    components: {
        UiAlert,
        UiButton
    }
});
```

### Globals (script tag)

First, add a stylesheet link to the Keen UI CSS file in `dist/keen-ui.min.css`. Then, add a script tag pointing to `dist/keen-ui.min.js` *after* adding Vue.

If Keen UI detects `Vue` globally, all the components will be registered automatically. The components will also be made available globally via `window.KeenUI`.

Example:

```html
<!-- Place this in the <head> -->
<link rel="stylesheet" href="path/to/keen-ui.min.css">

<!-- Place this in the <body> -->
<div id="app">
    <ui-button>Hello world!</ui-button>
</div>

<script src="path/to/vue.js"></script>
<script src="path/to/keen-ui.min.js"></script>
<script>
    new Vue({
        el: '#app',
        components: {
            // all Keen UI components already registered
        }
    });
</script>
```

## Using standalone components

Each component has been built into a standalone file with CSS included. You can use individual standalone components without importing the rest of the library. The standalone components are located in the `lib/` folder.

**NOTE**: Standalone component files each contain their own dependencies and a lot them contain overlapping dependencies. As such, using multiple standalone files could significantly increase the size of your bundle due to duplicate code, and is not recommended unless you are using only a handful of components.

### ES6

```js
import Vue from 'vue';
import 'keen-ui/src/bootstrap'; // Required when using standlone components, should be imported only once in your project
import UiButton from 'keen-ui/lib/UiButton';

new Vue({
    components: {
        UiButton
    }
});
```

## Todo
* [ ] Test browser compatibility (IE 10+)
  * [x] Chrome, IE, Edge, Firefox on Windows
  * [ ] Chrome, Safari, Firefox on macOS
* [x] Add new components
  * [x] Tooltip
  * [x] Slider
  * [x] Select
  * [x] Datepicker
  * [x] File upload
* [x] Add customization guide
* [ ] Add automated tests

## Licence
Keen UI is open source and released under the [MIT Licence](LICENCE).

Copyright (c) 2016-2017 [Josephus Paye II](https://twitter.com/JosephusPaye).

> *PS: I would love to know how you're using Keen UI. Tweet to me at [@JosephusPaye](https://twitter.com/JosephusPaye)*.
