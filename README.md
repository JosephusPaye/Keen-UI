# Keen UI

> A lightweight but collection of essential UI components written with Vue and inspired by Material Design.

Keen UI is designed to be a lightweight [Vue.js](http://vuejs.org/) UI framework with a simple API. Though the design is inspired by Google's [Material Design](https://material.io/guidelines), Keen UI is not meant to be a full implementation of the spec.

Keen UI is **not** a CSS framework, and as such you won't find a grid system or styles for typography in it. Instead, the focus is on creating reusable components that have interactivity.

## Documentation and Demo
[http://josephuspaye.github.io/Keen-UI/](http://josephuspaye.github.io/Keen-UI/)

## Requirements
* [Vue.js](http://vuejs.org/) (^v2.1.0) - use [keen-ui@0.8.9](http://josephuspaye.github.io/Keen-UI/v0.8.9/) for Vue 1.x support.

Optional
* [Roboto Web Font](https://www.google.com/fonts/specimen/Roboto) (Normal 400, Medium 500)
* [Material Icons Web Font](http://google.github.io/material-design-icons/#icon-font-for-the-web)

## Browser Support
IE 10+ (due to [Flexbox support](http://caniuse.com/#search=flexbox)).

## Installation

### NPM

```bash
npm install keen-ui --save
```

### Bower

```bash
bower install keen-ui --save
```

## Usage
> Make sure to include the `dist/keen-ui.css` file if you are not using individual components from `lib/` as the styles have been extracted into a single CSS file.

### ES6

*The following instructions can also be used with CommonJS by replacing the ES6-specific syntax with the CommonJS equivalent.*

Use as a plugin (registers all components globally):

```js
import Vue from 'vue';
import Keen from 'keen-ui';

Vue.use(Keen);

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
The `keen-ui.js` file in the `dist` folder contains all the components exported on a global  `window.Keen` object.

Sample usage:

```html
<html>
<head>
    ...
    <link rel="stylesheet" href="path/to/keen-ui.css">
    ...
</head>
<body>
    <div id="app">
        <ui-button>Hello world!</ui-button>
    </div>

    <script src="path/to/vue.js"></script>
    <script src="path/to/keen-ui.js"></script>
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

Each component has been compiled as a self-contained file which you can use without importing the rest of the library. The standalone files are located in the `lib/` folder and they contain their own CSS inlined.

**NOTE**: Files in the `lib/` contain all their own dependencies and a lot them contain the overlapping dependencies. As such, using multiple files from `lib/` could significantly increase the size of your bundle due to duplicate code, and is only recommended if you are using just a handful of components.

### ES6

*The following instructions can also be used with CommonJS by replacing the ES6-specific syntax with the CommonJS equivalent.*

```js
import Vue from 'vue';
import UiButton from 'keen-ui/lib/UiButton';

new Vue({
    components: {
        UiButton
    }
});
```

## Todo
* [ ] Test browser compatibility (IE 10+)
* [ ] Add new components
  * [x] Tooltip
  * [x] Slider
  * [x] Select
  * [ ] Datepicker
* [ ] Add theming guide
* [ ] Add unit tests

## Licence
Keen UI is open source and released under the [MIT Licence](LICENCE).

Copyright (c) 2016-2017 [Josephus Paye II](https://twitter.com/JosephusPaye).
