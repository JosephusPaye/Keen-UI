# Keen UI

> A lightweight collection of essential UI components written with Vue and inspired by Material Design.

Keen UI is designed to be a lightweight [Vue.js](http://vuejs.org) UI library with a simple API. Though the design is inspired by Google's [Material Design](https://material.io/guidelines), Keen UI is not meant to be a full implementation of the spec.

Keen UI is **not** a CSS framework, and as such you won't find a grid system or styles for typography in it. Instead, the focus is on creating reusable components that have interactivity.

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

### NPM (recommended)

```bash
npm install keen-ui --save
```

### Bower

```bash
bower install keen-ui --save
```

## Usage
> Make sure to include either the `dist/keen-ui.css` or `dist/keen-ui.min.css` file if you are not using individual components from `lib/` as the styles have been extracted into a single CSS file.

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

You can add it to your stylesheet manually (before other styles), or, if you are using a CSS framework, check to see if the framework already includes a reset (most CSS frameworks do). The root font size [can be customized](Customization.md#component-sizing) to globally resize the components.

### ES6

*The following examples can also be used with CommonJS by replacing ES6-specific syntax with CommonJS equivalents.*

Use as a plugin (registers all components with Vue globally):

```js
import Vue from 'vue';
import KeenUI from 'keen-ui';

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

If Keen UI detects `Vue` globally, all the components will be registered automatically. The components will also be made available on the global `window.KeenUI` object.

Example:

```html
<html>
<head>
    ...
    <link rel="stylesheet" href="path/to/keen-ui.min.css">
    ...
</head>
<body>
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
</body>
</html>
```

## Using *standalone* individual components

Each component has been compiled as a self-contained file which you can use without importing the rest of the library. The standalone files are located in the `lib/` folder and they contain their own CSS which will be added as `<style>` tags in `<head>`.

**NOTE**: Files in the `lib/` folder contain all their own dependencies and a lot them contain overlapping dependencies. As such, using multiple files from `lib/` could significantly increase the size of your bundle due to duplicate code, and is not recommended unless you are using only a handful of components. This *may* be fixed by minification, but I haven't tested.

### ES6

*The following examples can also be used with CommonJS by replacing ES6-specific syntax with CommonJS equivalents.*

```js
import Vue from 'vue';
import 'keen-ui/src/bootstrap'; // Required when using components from `lib/`, should be imported only once in your project
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
* [ ] Add unit tests

## Licence
Keen UI is open source and released under the [MIT Licence](LICENCE).

Copyright (c) 2016-2017 [Josephus Paye II](https://twitter.com/JosephusPaye).

> *PS: I would love to know how you're using Keen UI. Tweet to me at [@JosephusPaye](https://twitter.com/JosephusPaye)*.
