# Customization

- [Sass customization](#sass-customization)
  - [Setup](#setup)
  - [Customizing brand colors](#customizing-brand-colors)
  - [Customizing other variables](#customizing-other-variables)
- [Component size customization](#component-size-customization)
- [Default props customization](#default-props-customization)

## Sass customization

You can customize the components by overriding Sass variables and importing the components from `keen-ui/src` if you use Sass in your project with one the following setups:

- [Vite](https://vitejs.dev)
- [Vue CLI](https://cli.vuejs.org/)
- [Webpack](https://webpack.js.org) and [`vue-loader`](https://github.com/vuejs/vue-loader)

### Setup

1. Create a `variables.scss` file somewhere in your project, for example, at `src/styles/variables.scss`.

   > **Note**
   > Since this file will be imported into every Sass file, make sure it doesn't contain any CSS rules. It should contain only Sass variables, functions or mixins.

2. If you're using Vite, add the following to `vite.config.js` ([more details here](https://vitejs.dev/config/shared-options.html#css-preprocessoroptions)):

   ```js
   const scssVariablesFile = path
     .resolve(__dirname, "./src/styles/variables.scss")
     .replace(/\\/g, "/");
   export default defineConfig({
     css: {
       preprocessorOptions: {
         scss: {
           additionalData: `@use "${scssVariablesFile}" as *;`,
         },
       },
     },
   });
   ```

   See [`usage-examples/vite-sass-customization`](./usage-examples/vite-sass-customization) for a complete example.

3. If you are using Vue CLI, add the following to `vue.config.js` ([more details here](https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders)):

   ```js
   module.exports = {
     css: {
       loaderOptions: {
         sass: {
           data: `@use "@/styles/variables.scss" as *;`,
         },
       },
     },
   };
   ```

4. If you are using Webpack + `vue-loader` without Vue CLI, do the following:

   - Install [`sass-resources-loader`](https://github.com/shakacode/sass-resources-loader).

     ```
     npm install sass-resources-loader --save-dev
     ```

   - Add the following rule to your webpack config file:

     ```js
     {
       loader: 'sass-resources-loader',
       options: {
         resources: path.resolve(__dirname, './src/styles/variables.scss')
       }
     }
     ```

5. Now you can customize the component styles by overriding Keen UI variables in the `variables.scss` file you created, and importing the component from source. Read on for more details.

### Customizing brand colors

The `primary` and `accent` theme colors can be customized using the `$brand-primary-color` and `$brand-accent-color` variables.

1. Add the following to your `variables.scss` file:

   ```scss
   $brand-primary-color: #673ab7;
   $brand-accent-color: #ff4081;
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
     import { UiButton } from "keen-ui/src/index";

     export default {
       components: {
         UiButton,
       },
     };
   </script>
   ```

### Customizing other variables

All other variables in [`keen-ui/src/styles/variables.scss`](./src/styles/variables.scss) can be overridden to customize other aspects of the components in the same manner as the example above.

Some components also have component-specific variables that can be found in their source files. Those can be overridden as well.

You can also override the `rem()` Sass function by defining a `rem-custom()` function to be used instead for calculating the size of components, as described below. Please refer to the original function in [`src/styles/util.scss`](./src/styles/util.scss).

## Component size customization

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

## Default props customization

Component props which have default values can be changed globally when installing Keen UI as a Vue plugin, or when using individual components.

### Configure all components

```js
import { createApp } from "vue";
import KeenUI from "keen-ui";

const app = createApp();

app.use(KeenUI, {
  UiButton: {
    disableRipple: true,
  },
  UiTooltip: {
    position: "top",
  },
});
```

### Configure individual components

```js
import { UiButton } from "keen-ui";
import configure from "keen-ui/src/configure";

configure(UiButton, {
  disableRipple: true,
});

// UiButton's disableRipple prop is now true by default
// Now you can register and use UiButton
```
