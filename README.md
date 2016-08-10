# Keen UI

> A lightweight but complete collection of essential UI components written with Vue and inspired by Material Design.

Keen UI is designed to be a lightweight but complete [Vue.js](http://vuejs.org/) UI framework with a simple API. Though the design is inspired by Google's [Material Design](https://www.google.com/design/spec/material-design/introduction.html), Keen UI is not meant to be a full implementation of the spec.

Keen UI is **not** a CSS framework, and as such you won't find a grid system or styles for typography in it. Instead, the focus is on creating reusable components that have interactivity.

## Documentation and Demo
[http://josephuspaye.github.io/Keen-UI/](http://josephuspaye.github.io/Keen-UI/)

## Requirements
* [Vue.js](http://vuejs.org/) (^v1.0.21)
* [Material Icons Web Font](http://google.github.io/material-design-icons/#icon-font-for-the-web)

Optional
* [Roboto Web Font](https://www.google.com/fonts/specimen/Roboto) (Normal 400, Medium 500)

## Browser Support
IE 9+ (currently only tested in Chrome)

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

### Globals (script tag)
The `keen-ui.js` file in the `dist` folder contains all the components exported on a global  `window.Keen` object.

First, include the JS and CSS files in your page:

```html
<html>
<head>
    ...
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="path/to/keen-ui.css">
    ...
</head>
<body>
    <!-- Example usage of UiButton -->
    <ui-button>Say Hello</ui-button>

    <script src="path/to/vue.js"></script>
    <script src="path/to/keen-ui.js"></script>
    <script src="path/to/app.js"></script>
</body>
</html>
```

Then, register the components globally for use in your templates:

```js
// app.js

Vue.use(Keen);

new Vue({
    el: 'body',
    components: {
        // all components already registered
    }
});
```

### CommonJS

Use as a plugin (registers all components globally):

```js
var Vue = require('vue');
var Keen = require('keen-ui');

Vue.use(Keen);

new Vue({
    el: 'body',
    components: {
        // all components already registered
    }
});
```

Use individual components:

```js
var Vue = require('vue');
var UiButton = require('keen-ui').UiButton;

new Vue({
    el: 'body',
    components: {
        'ui-button': UiButton
    }
});
```

### ES6

Use as a plugin (registers all components globally):

```js
import Vue from 'vue';
import Keen from 'keen-ui';

Vue.use(Keen);

new Vue({
    components: {
        // all components already registered
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

## Using standalone individual components

Each component has been built as a self-contained file which you can use without importing the rest of the framework. The standalone files are located in the `lib/` folder and they contain their own CSS inlined.

**NOTE**: Files in the `lib/` contain all their own dependencies and a lot them contain the same dependencies. For example, UiAlert in `lib/` also includes a copy of UiIconButton, which includes UiMenu, UiPopover, UiIcon and UiTooltip, etc. As such, using multiple files from `lib/` could significantly increase the size of your bundle due to duplicate code, and is only recommended if you are using just a handful of components.

### Globals (script tag)
Include the component JS file in your page and it will be available as the global `Keen.[ComponentName]`.

```html
<html>
<head>
    ...
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    ...
</head>
<body>
    <ui-button>Hello world!</ui-button>

    <script src="path/to/vue.js"></script>
    <script src="path/to/UiButton.js"></script>
    <script>
        new Vue({
            el: 'body',
            components: {
                'ui-button': Keen.UiButton
            }
        });
    </script>
</body>
</html>
```

### CommonJS

```js
var Vue = require('vue');
var UiButton = require('keen-ui/lib/UiButton');

new Vue({
    el: 'body',
    components: {
        'ui-button': UiButton
    }
});
```

### ES6

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
* [ ] Test browser compatibility (IE 9+)
* [ ] Add new components
  * [x] Tooltip
  * [x] Slider
  * [x] Select
  * [ ] Datepicker
* [ ] Add customization guide
* [ ] Add unit tests

## Licence
Keen UI is open source and released under the [MIT Licence](LICENCE).

Copyright (c) 2016 Josephus Paye II
