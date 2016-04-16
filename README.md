# Keen UI

> A collection of essential UI components written with Vue and inspired by Material Design.

Keen is designed to be a lightweight but complete [Vue.js](http://vuejs.org/) UI framework with a simple API. Keen's design is "inspired" by [Material Design](https://www.google.com/design/spec/material-design/introduction.html) but it doesn't aim to be a full implementation of the spec.

## Documentation and Demo
[http://josephuspaye.github.io/keen-ui/](http://josephuspaye.github.io/keen-ui/)

## Requirements
* [Vue.js](http://vuejs.org/) (^1.0.21)
* [Roboto Web Font](https://www.google.com/fonts/specimen/Roboto) (Normal 400, Medium 500)
* [Material Icons Web Font](http://google.github.io/material-design-icons/#icon-font-for-the-web)

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
> Make sure to include the `dist/keen-ui.css` or `dist/min/keen-ui.min.css` file if you are not buidling individual components from source as the styles have been extracted into a single CSS file.

### Globals (script tag)
The `keen-ui.js` file in the `dist` folder contains all the components exported on a global  `window.Keen` object.

```html
<html>
<head>
    ...
    <link rel="stylesheet" href="path/to/keen.min.css">
    ...
</head>
<body>
    ...

    <script src="path/to/vue.min.js"></script>
    <script src="path/to/keen.min.js"></script>
    <script>
        Vue.use(Keen);

        new Vue({
            el: 'body',
            components: {
                // all components already registered
            }
        });
    </script>
</body>
</html>
```

### CommonJS

#### Plugin (registers all components)

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

#### Individual components

```js
var Vue = require('vue');
var UiButton = require('keen-ui/src/UiAlert');
// or
var UiButton = require('keen-ui').UiButton;

new Vue({
    el: 'body',
    components: {
        'ui-button': UiButton
    }
});
```

### ES6

#### Plugin (registers all components)

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

#### Individual components

```js
import Vue from 'vue';
import UiButton from 'keen-ui/src/UiButton';
// or
import { UiButton } from 'keen-ui';

new Vue({
    components: {
        UiButton
    }
});
```

## Todo
* [ ] Add CodePen demos
* [ ] Test browser compatibility (IE 9+)
* [ ] Add new components
  * [ ] Tooltip
  * [ ] Slider
  * [ ] Select
* [ ] Add customization guide
* [ ] Add unit tests

## Licence
Keen UI is open source and licenced under the [MIT Licence](LICENCE)

Copyright (c) 2016 Josephus Paye II
