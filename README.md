# Keen UI

Keen UI is a [Vue.js](http://vuejs.org) UI library with a simple API, inspired by Google's [Material Design](https://material.io/guidelines).

<sub>_Keen UI is **not** a CSS framework. Therefore, it doesn't include styles for a grid system, typography, etc. Instead, the focus is on interactive components that require Javascript. You should be able to use Keen UI with any page layout, structure, or CSS framework._</sub>

## Documentation and demo

[http://josephuspaye.github.io/Keen-UI/](http://josephuspaye.github.io/Keen-UI/)

## Requirements

* [Vue.js](http://vuejs.org/) (^v2.1.4) - use [keen-ui@0.8.9](http://josephuspaye.github.io/Keen-UI/0.8.9/) for Vue 1.x support.

Optional

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

You can add the reset to your stylesheet (before other styles). If you are using a CSS framework, check to see if the framework already includes a reset (most CSS frameworks do). The root font size set on `<html>` [can be customized](Customization.md#component-sizing) to globally resize the components.

### ES6

Use as a Vue plugin (globally registers all components):

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

### Script tag

First, add a stylesheet link to the Keen UI CSS file in `dist/keen-ui.min.css`. Then, add a script tag pointing to `dist/keen-ui.min.js` _**after**_ adding Vue.

If Keen UI detects the global `Vue` object, all components will be registered automatically. The components will also be made available globally via `window.KeenUI`.

Example:

```html
<!-- Place this in <head> -->
<link rel="stylesheet" href="path/to/keen-ui.min.css">

<!-- Place this in <body> -->
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

## Customization

You can customize many aspects of Keen UI, including theme colors, component sizes, default props, and more.

See [Customization](Customization.md).

## Using standalone components

Each component is built into a standalone file with the necessary CSS included. You can use these individual standalone components without importing the rest of the library. The standalone components are located in the `lib/` folder.

**NOTE**: Standalone component files each contain their own dependencies, and many contain overlapping dependencies. As a result, using multiple standalone files may increase the size of your bundle due to duplicate code.

```js
import Vue from 'vue';
import 'keen-ui/src/bootstrap'; // Required when using standalone components, should be imported only once in your project
import UiButton from 'keen-ui/lib/UiButton';

new Vue({
    components: {
        UiButton
    }
});
```

## Licence

Keen UI is open source and released under the [MIT Licence](LICENCE).

Copyright (c) 2019 [Josephus Paye II](https://twitter.com/JosephusPaye).

> *PS: Made something cool with Keen UI? I would love to know! Tweet to me at [@JosephusPaye](https://twitter.com/JosephusPaye)*.
