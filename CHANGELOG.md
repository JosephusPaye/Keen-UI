## Next (to be released)

### General

- **Breaking**: Change global prop configuration system to be simpler and more reliable. See updated [Customization guide](#global-prop-configuration) for details.
- Rewrote [Sass customization guide](#sass-customization) for clarity.
- Use [`system-font-css`](https://github.com/jonathantneal/system-font-css) for default font stack. This fixes issues with font weights in IE, Edge and Firefox on Windows.

### UiTabs and UiTab

- UiTabs
    - Change active tab indicator animation, to fix issues related to window resizing and initially hidden tabs. Fixes #328.
    - **Breaking**: Remove `refreshIndicator` method, no longer needed.

- UiTab
    - Tabs can now be created using `v-for`. Fixes #349.
    - **Breaking**: Remove `show` prop, use `v-for` with a filtered array of tabs instead.
    - HTML can now be used in tab headers, using the `header` slot.
    - **Breaking**: Remove `icon` (string) and `iconProps` (object) props, use the `header` slot instead.

### UiProgressLinear

- Rewrite animation to use `transform` only (GPU accelerated), remove ::before/::after pseudo elements used for previous animation.

### UiPopover

- **Breaking**: `trigger` prop is now a DOM Element instance or selector string. If no trigger is provided or the selector doesn't match any element, the popover's immediate parent element is used as the trigger.
- **Breaking**: Rename `dropdownPosition` prop to `position`, to match UiTooltip
- Add new prop `removeOnClose`, used to remove the popover element from the DOM when it is closed

### UiTooltip

- **Breaking**: `trigger` prop is now a DOM Element instance or selector string. If no trigger is provided or the selector doesn't match any element, the tooltip's immediate parent element is used as the trigger.
- Add new prop `removeOnClose`, used to remove the tooltip element from the DOM when it is closed

### UiRippleInk

- **Breaking**: `trigger` prop is now a DOM Element instance or selector string. If no trigger is provided or the selector doesn't match any element, the ripple's immediate parent element is used as the trigger.
- Fix incorrect ripple position when clicking directly on trigger's inner elements. Fixes #220.

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
