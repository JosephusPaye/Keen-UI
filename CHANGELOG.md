## Next (to be released)

### General

- **Breaking**: Required Vue version bumped to `v2.5` or later, due to [this scoped slot change](https://gist.github.com/yyx990803/9bdff05e5468a60ced06c29c39114c6b#simplified-scoped-slots-usage).
- **Breaking**: Change global prop configuration system to be simpler and more reliable. See updated [Customization guide](Customization.md#global-prop-configuration) for details.
- Rewrote [Sass customization guide](Customization.md#sass-customization) for clarity.

### UiAlert

- Add new prop `disableAnimation` to disable the show/hide animation.

### UiAutocomplete

- Add new method `focus()` to focus programmatically.
- Add new prop `sort` for a custom sort function.
- Pass default filter function as third parameter to `filter` prop.

### UiButton

- **Breaking**: Accepted values for prop `dropdownPosition` have changed to match Tippy.js. See docs for new values.
- Fix ripple position starting off when directly clicking an inner element. Fixes #220.
- Add `tooltip`, `tooltipPosition` and `openTooltipOn` props
- Make focus ring transition to fill the button. Previously, it stopped halfway. Fixes #205.
- Remove UiProgressCircular from the DOM when `loading` is false. Previously, it was hidden with `display: none`.
- Remove pointer cursor, to match default HTML buttons. If you want the hand pointer on buttons by default, add:
    ```css
    .ui-button {
        cursor: pointer;
    }
    ```
- For secondary buttons, use button color as background for hover and focus.
- Add new prop `href`. Setting this prop will render an anchor tag.

### UiCollapsible

- Refactor toggle transition to be smoother and less janky

### UiDatepicker

- **Breaking**: The month of the submitted value now starts at `1`, instead of JavaScript's default which starts at `0`. So, January is now `1` instead of `0`, February is `2`, etc.
- Allow a string for `value` prop. See [#45](https://github.com/JosephusPaye/Keen-UI/issues/202).
- Add new prop `startOfWeek` to change the starting day of the week in the calendar shown.
- Add new method `clear` to clear the selected date.

### UiFab

- **Breaking**: `tooltipPosition` prop accepted values have changed to match Tippy.js. See docs for new values.

### UiFileupload

- Add new method `openPicker()` to open the file picker programmatically.
- Add new method `clear()` to clear the selected file, if any.

### UiIconButton

- **Breaking**: Accepted values for prop `dropdownPosition` have changed to match Tippy.js. See docs for new values.
- **Breaking**: `tooltipPosition` prop accepted values have changed to match Tippy.js. See docs for new values.
- Remove UiProgressCircular from the DOM when `loading` is false. Previously, it was hidden with `display: none`.
- Remove pointer cursor, to match default HTML buttons.
- For secondary icon buttons, use button color as background for hover and focus.
- Add new size: `mini`
- Add `href` prop. Setting this prop will render an anchor tag.

### UiMenu and UiMenuOption

- Add new props `href` and `target` for menu options. Setting the `href` prop will render the menu option as an anchor tag.
- Fix focus containment when tabbing backwards.

### UiModal

- **Breaking**: Default transition `scale` is now `scale-down`.
- Add new props `alignTop` and `alignTopMargin`, for creating modals that are vertically aligned to the top of the viewport.
- Add new size `fullscreen`.
- Add new transition `scale-up`.

### UiSnackbarContainer

- Add new event `queue-end`, emitted when the last snackbar in a queue is hidden.

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

- **Breaking**: Switch positioning library to Tippy.js, which uses Popper.js.
- **Breaking**: `trigger` prop is now a DOM Element, VueComponent instance,  or selector string. If no trigger is provided or the selector doesn't match any element, the popover's immediate parent element is used as the trigger.
    ```html
    <!-- Instead of: ref + trigger -->
    <button ref="button">My Button</button>
    <ui-popover trigger="button">My Popover</ui-popover>

    <!-- Use: nested <ui-popover> in target element -->
    <button>
        My Button <ui-popover>My Popover</ui-popover>
    </button>
    ```
- **Breaking**: Rename `dropdownPosition` prop to `position`, to match UiTooltip. Accepted values have changed to match Tippy.js. See docs for new values.
- Remove prop `removeOnClose`, no longer needed. All popovers are now removed from the DOM on close.
- Add new prop `animation` to choose animation style.
- Add new prop `closeOnScroll` to close an open popover on external scroll.
- Add new prop `appendToBody`, to choose between appending popover to `document.body` or the local parent element.
- Add new method `isOpen()`, used to determine if the popover is open.
- Add new events `reveal` and `hide`.
- Add new prop `disabled`, to disable the popover
- Add new prop `offset`, to change the popover's offset from the trigger element

### UiTooltip

- **Breaking**: Switch positioning library to Tippy.js, which uses Popper.js.
- **Breaking**: `trigger` prop is now a DOM Element, VueComponent instance,  or selector string. If no trigger is provided or the selector doesn't match any element, the tooltip's immediate parent element is used as the trigger.
    ```html
    <!-- Instead of: ref + trigger -->
    <button ref="button">My Button</button>
    <ui-tooltip trigger="button">My Tooltip</ui-tooltip>

    <!-- Use: nested <ui-tooltip> in target element -->
    <button>
        My Button <ui-tooltip>My Tooltip</ui-tooltip>
    </button>
    ```
- **Breaking**: `position` prop accepted values have changed to match Tippy.js. See docs for new values.
- Add new prop `animation` to choose animation style
- Add new prop `appendToBody`, to choose between appending tooltip to `document.body` or the local parent element

### UiRippleInk

- **Breaking**: `trigger` prop is now a DOM Element instance or selector string. If no trigger is provided or the selector doesn't match any element, the ripple's immediate parent element is used as the trigger.
- Fix incorrect ripple position when clicking directly on trigger's inner elements. Fixes #220.

### UiSelect

- Add new method `clearSelection()` to clear the current selection.
- Add new method `clearQuery()` to clear the current search query.
- Add new method `focus()` to focus programmatically.
- Add new prop `sort` for a custom sort function.
- Pass default filter function as third parameter to `filter` prop.

### UiSlider

- Add new method `focus()` to focus programmatically.
- Add new props `min` and `max` to specify a custom slider range. See [#368](https://github.com/JosephusPaye/Keen-UI/pull/368)

### UiTextbox

- Add new method `focus()` to focus programmatically.

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
