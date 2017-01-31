## v1.0.0

There are several breaking changes in this release, as the components have been re-written from scratch to support Vue 2. However, this release marks a stabilization of the API (hence v1.0) and breaking changes will be avoided in 1.x where possible.

Please consult the [docs](https://josephuspaye.github.io/Keen-UI/1.0.0/) for component API changes.

### Highlights

* New components: [UiCheckboxGroup](https://josephuspaye.github.io/Keen-UI/1.0.0/#/ui-checkbox-group), [UiDatepicker](https://josephuspaye.github.io/Keen-UI/1.0.0/#/ui-datepicker) and [UiFileupload](https://josephuspaye.github.io/Keen-UI/1.0.0/#/ui-fileupload)
* [Documentation](https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md) for customizing the components
* [Global configuration](https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#global-config) now available for certain component props
* CSS switched from Stylus to Sass, adopting the [BEM](http://getbem.com/naming/) naming convention
* Component sizing switched from `px` to `rem`, using a root font size of `16px`. [Changing](https://github.com/JosephusPaye/Keen-UI/blob/master/Customization.md#component-sizing) this font size will scale the components up/down appropriately.
* Component event names switched from past tense to present to be more in line with the native DOM events
* Remove [validatorjs](https://github.com/skaterdav85/validatorjs) and [draggabilly](http://draggabilly.desandro.com) dependencies
* Now shipping both minified and unminified versions of standalone component files in `lib/`
* Fix several issues and unnecessary API limitations
