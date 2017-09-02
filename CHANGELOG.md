## v1.0.1

* Upgrade Vue to `v2.4.2` and fix template warnings. See [#268](https://github.com/JosephusPaye/Keen-UI/issues/268).
* Add `aria-describedby` attribute to UiTooltip
* Fix bug where help and error content provided via slot isn't shown unless the `help` or `error` props are set. Affects UiAutocomplete, UiCheckboxGroup, UiDatepicker, UiRadioGroup, UiSelect, and UiTextbox. See [#204](https://github.com/JosephusPaye/Keen-UI/issues/301).
* Allow `null` for UiAutocomplete and UiTextbox `value` prop. See [#253](https://github.com/JosephusPaye/Keen-UI/issues/253).
* Allow UiTooltip `trigger` prop to be a VueComponent instance. See [#204](https://github.com/JosephusPaye/Keen-UI/issues/204).
* Add `checked` attribute to the `input` element for UiRadio. See [#207](https://github.com/JosephusPaye/Keen-UI/issues/207).
* Fix error being thrown when using UiRippleInk with SVG elements on touch devices. See [#236](https://github.com/JosephusPaye/Keen-UI/issues/236).
* Fix minor errors and dead links in the docs
* Remove Material Icons webfont and use inline SVG icons in the docs
* Update [contributing guidelines](https://github.com/JosephusPaye/Keen-UI/blob/v1.0.1/CONTRIBUTING.md) with information about linting, BEM and using the `next` branch

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
