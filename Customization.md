# Customization

## Sass customization

If you use Sass with [`webpack`](https://webpack.js.org) and [`vue-loader`](https://github.com/vuejs/vue-loader) in your project, you can customize the components by overriding Sass variables and then importing the `.vue` source files. This is done using [`sass-resources-loader`](https://github.com/shakacode/sass-resources-loader).

### Setup

1. Install [`sass-resources-loader`](https://github.com/shakacode/sass-resources-loader).

    ```
    npm install sass-resources-loader --save-dev
    ```

2. Create a `variables.scss` file somewhere in your project, for example, at `src/styles/variables.scss`.

    **Note**: since this file will be imported into every Sass file, make sure it doesn't contain any CSS rules, only Sass variables.

3. Add the following rule to your webpack config file. If you're using a Vue CLI template, [see here](https://vue-loader.vuejs.org/en/configurations/pre-processors.html#loading-a-global-settings-file) for details.

    ```js
    {
        loader: 'sass-resources-loader',
        options: {
            resources: path.resolve(__dirname, './src/styles/variables.scss')
        }
    }
    ```

4. Now you can customize the component styles by overriding Keen UI variables in the `variables.scss` file you created.

### Brand colors

The `primary` and `accent` theme colors can be customized using the `$brand-primary-color` and `$brand-accent-color` variables.

1. Add the following to your `variables.scss` file:

    ```scss
    $brand-primary-color: #673AB7;
    $brand-accent-color: #FF4081;
    ```

2. Import and use the components from `keen-ui/src`. Example:

    ```html
    <!-- App.vue -->
    <template>
        <div>
            <ui-button color="primary">Primary button</ui-button>
            <ui-button color="accent">Accent button</ui-button>
        </div>
    </template>

    <script>
    import 'keen-ui/src/bootstrap'; // Required to setup Keen UI, should be imported only once in your project
    import UiButton from 'keen-ui/src/UiButton.vue';

    export default {
        components: {
            UiButton
        }
    }
    </script>
    ```

### Other variables

All other variables in [`keen-ui/src/styles/variables.scss`](.../src/styles/variables.scss) can be overridden to customize other aspects of the components in the same manner as the example above.

Some components also have component-specific variables that can be found in their source files. Those can be overridden as well.

## Component sizing

All components use the `rem` CSS unit for properties with length values (e.g. `font-size`, `margin`, `padding`, `width`, `height`, etc). This allows you to customize the size of all components by setting `font-size` on the root (`<html>`) element.

The default root font size is `100%`, which uses the browser's font size setting, typically `16px`.

To scale the size of components up, set a font size higher than `100%` on the root element, for example:

```css
html {
    font-size: 110%;
}
```

To scale the size of components down, set a font size lower than `100%` on the root element, for example:

```css
html {
    font-size: 90%;
}
```

## Global prop configuration

Component props which have default values can be set globally when installing Keen UI as a Vue plugin, or when using individual components.

### Using Keen UI as a plugin

```js
import Vue from 'vue';
import KeenUI from 'keen-ui';

Vue.use(KeenUI, {
    UiButton: {
        disableRipple: true
    },
    UiTooltip: {
        position: 'top center'
    }
});
```

### Using individual components

```js
import UiButton from 'keen-ui';
import configure from 'keen-ui/src/configure'

configure(UiButton, {
    disableRipple: true
});

// UiButton's disableRipple prop is now true by default
```
