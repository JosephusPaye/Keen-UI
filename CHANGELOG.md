# v1.3.1

### UiFileupload

- **Potentially Breaking**: Update UiFileupload's `clear()` method to reset the placeholder. See [#510](https://github.com/JosephusPaye/Keen-UI/pull/510).

# v1.3.0

### UiSlider

- **Potentially Breaking**: Update slider to work when initially-hidden, e.g. in a tab or modal. The `refreshSize()` method is no longer needed and has been removed. See [#489](https://github.com/JosephusPaye/Keen-UI/pull/489).

### UiPopover

- Change Tippy's `hideOnClick` prop to `true` to close popover on external click

# v1.2.1

### UiSelectOption

- Allow a `Number` as option. See [#472](https://github.com/JosephusPaye/Keen-UI/issues/472).

### UiCheckbox, UiRadio, UiRadioGroup

- Change selected check to use strict equals (`===`) instead of loose equal (`==`). This allows an empty string `''` to be used as the radio or checkbox's value. See [#465](https://github.com/JosephusPaye/Keen-UI/issues/465).

### UiCheckbox

- Apply `border-radius` to checkmark background. Also switch background from `::before` pseudo element to an actual element: `.ui-checkbox__checkmark-background`. This avoids visual artifacts that appear when applying `border-radius` to a pseudo element. See [#471](https://github.com/JosephusPaye/Keen-UI/issues/471).

### UiDatepicker

- Add new prop `defaultView` to set the default datepicker view: `date` or `year`. See [#454](https://github.com/JosephusPaye/Keen-UI/pull/454).

### UiTextbox

- Add new prop `minlength` to set the `minlength` attribute on the textbox input or textarea.
- Allow a `Number` for `step` prop. See [#460](https://github.com/JosephusPaye/Keen-UI/issues/460).
- Ensure floating label doesn't overflow parent when scaling up. See [#447](https://github.com/JosephusPaye/Keen-UI/issues/447).

# v1.2.0

### UiCalendar (new)

- Added a new calendar component for showing calendars. Using a scoped slot, you can specify a custom template that will be used to render each date in the calendar. This could be used to add things like events to the calendar.

### UiDatepicker

- **Breaking** Remove `OK` and `Cancel` button in modal picker. Now, like the popover picker, dismissing the picker without a selection is "Cancel" and selecting a date is "OK".
- Rewrite internal calendar for better semantics and accessibility.
- Removed month switch animation. This unnecessarily slows down the user when switching through many months.
- Add new prop `appendDropdownToBody` to append the dropdown to the document body.
- Add new prop `dropdownZIndex` to customize the dropdown z-index.
- Fix implementation to respect `yearRange` prop. See [#449](https://github.com/JosephusPaye/Keen-UI/issues/449).
- Keep dropdown open on scroll

### UiModal

- Add new `size`: `auto`, to make the modal's width grow to fit its content.

### UiPopover

- Upgrade to Tippy.js 4.
- **Breaking**: Remove `offset` prop, as it's not recommended for interactive poppers (which is what UiPopover is).
- Add new animation: `scale`.
- Add new prop `zIndex` to customize the z-index of the popover.

### UiSelect

- Keep dropdown open on scroll

### UiTooltip

- Upgrade to Tippy.js 4.
- Add new animation: `scale`.
- Add new prop `zIndex` to customize the z-index of the tooltip.

# v1.1.2

### UiDatepicker

- Fix loss of popover reference when disabled and re-enabled. See [#435](https://github.com/JosephusPaye/Keen-UI/issues/435).

# v1.1.1

### UiDatepicker

- Fix month transition when current date is not in target month. See [#434](https://github.com/JosephusPaye/Keen-UI/issues/434).

# v1.1.0

There are breaking changes in this release. Read through and update your usage where required. The upgrade should take less than an hour. If you find any changes not documented here, please file a new issue.

**Note**: currently Keen UI doesn't follow semver, and there may be breaking changes in minor `x.x` releases. To avoid these breaking changes, use the `~` version constraint to lock to a specific minor version, restricting updates to patch releases only. Example, in `package.json`:

```diff
-"keen-ui": "^1.1.0",
+"keen-ui": "~1.0.0",
```

### General

- **Breaking**: Bumped required Vue version to `v2.5` or later, due to [this scoped slot change](https://gist.github.com/yyx990803/9bdff05e5468a60ced06c29c39114c6b#simplified-scoped-slots-usage).
- **Breaking**: Rewrote global prop configuration system to be simpler and more reliable. See updated [Customization guide](Customization.md#global-prop-configuration) for details.
- Rewrote [Sass customization guide](Customization.md#sass-customization) for clarity.

### UiAlert

- Add new prop `disableAnimation` to disable the show/hide animation.

### UiAutocomplete

- Add new method `focus()` to focus programmatically.
- Add new prop `sort` for a custom sort function.
- Pass default filter function as third parameter to `filter` prop.

### UiButton

- **Breaking**: Accepted values for prop `dropdownPosition` have changed to match Tippy.js. See docs for new values.
- Fix ripple position starting off when directly clicking an inner element. Fixes [#220](https://github.com/JosephusPaye/Keen-UI/issues/220).
- Add `tooltip`, `tooltipPosition` and `openTooltipOn` props.
- Make focus ring transition to fill the button. Previously, it stopped halfway. Fixes [#205](https://github.com/JosephusPaye/Keen-UI/issues/205).
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

- **Breaking**: Remove no longer needed `refreshHeight()` method.
- Refactor toggle transition to be smoother and less janky.

### UiConfirm

- **Breaking**: Default transition `scale` is now `scale-down`. If you didn't use `size="scale"`, this will not affect you.
- Add new prop `size`.
- Document `reveal` and `hide` events.

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
- Add new size: `mini`.
- Add `href` prop. Setting this prop will render an anchor tag.

### UiMenu and UiMenuOption

- Add new props `href` and `target` for menu options. Setting the `href` prop will render the menu option as an anchor tag.
- Fix focus containment when tabbing backwards.

### UiModal

- **Breaking**: Default transition `scale` is now `scale-down`. If you didn't use `size="scale"`, this will not affect you.
- Add new props `alignTop` and `alignTopMargin`, for creating modals that are vertically aligned to the top of the viewport.
- Add new size `fullscreen`.
- Add new transition `scale-up`.

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
- Add new prop `disabled`, to disable the popover.
- Add new prop `offset`, to change the popover's offset from the trigger element.

### UiProgressLinear

- Rewrite animation to use `transform` only (GPU accelerated), remove ::before/::after pseudo elements used for previous animation.

### UiRippleInk

- **Breaking**: `trigger` prop is now a DOM Element instance or selector string. If no trigger is provided or the selector doesn't match any element, the ripple's immediate parent element is used as the trigger.
- Fix incorrect ripple position when clicking directly on trigger's inner elements. Fixes [#220](https://github.com/JosephusPaye/Keen-UI/issues/220).

### UiSelect

- Add new method `clearSelection()` to clear the current selection.
- Add new method `clearQuery()` to clear the current search query.
- Add new method `focus()` to focus programmatically.
- Add new prop `sort` for a custom sort function.
- Pass default filter function as third parameter to `filter` prop.

### UiSlider

- Add new method `focus()` to focus programmatically.
- Add new props `min` and `max` to specify a custom slider range. See [#368](https://github.com/JosephusPaye/Keen-UI/pull/368).

### UiSnackbarContainer

- Add new event `queue-end`, emitted when the last snackbar in a queue is hidden.

### UiTabs and UiTab

- UiTabs
    - **Breaking**: argument passed to `tab-change` event handler is now the tab instance, not the id. To get the id, use `tab.id`.
    - **Breaking**: Remove `refreshIndicator` method, no longer needed.
    - Change active tab indicator animation, to fix issues related to window resizing and initially hidden tabs. Fixes [#328](https://github.com/JosephusPaye/Keen-UI/issues/328).
    - Add new event `tab-click`, emitted when a tab is clicked, whether or not the tab is selected.
    - Add new prop `confirmTabChange`, A function that will be called for confirmation when the user attempts to change tabs.

- UiTab
    - **Breaking**: Remove `show` prop, use `v-for` with a filtered array of tabs instead.
    - **Breaking**: Remove `icon` (string) and `iconProps` (object) props, use the `header` slot instead.
    - Tabs can now be created using `v-for`. Fixes [#349](https://github.com/JosephusPaye/Keen-UI/issues/349).
    - HTML can now be used in tab headers, using the `header` slot.

### UiTextbox

- Add new method `focus()` to focus programmatically.

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
- Add new prop `animation` to choose animation style.
- Add new prop `appendToBody`, to choose between appending tooltip to `document.body` or the local parent element.

## v1.0.1

* Upgrade Vue to `v2.4.2` and fix template warnings. See [#268](https://github.com/JosephusPaye/Keen-UI/issues/268).
* Add `aria-describedby` attribute to UiTooltip.
* Fix bug where help and error content provided via slot isn't shown unless the `help` or `error` props are set. Affects UiAutocomplete, UiCheckboxGroup, UiDatepicker, UiRadioGroup, UiSelect, and UiTextbox. See [#204](https://github.com/JosephusPaye/Keen-UI/issues/301).
* Allow `null` for UiAutocomplete and UiTextbox `value` prop. See [#253](https://github.com/JosephusPaye/Keen-UI/issues/253).
* Allow UiTooltip `trigger` prop to be a VueComponent instance. See [#204](https://github.com/JosephusPaye/Keen-UI/issues/204).
* Add `checked` attribute to the `input` element for UiRadio. See [#207](https://github.com/JosephusPaye/Keen-UI/issues/207).
* Fix error being thrown when using UiRippleInk with SVG elements on touch devices. See [#236](https://github.com/JosephusPaye/Keen-UI/issues/236).
* Fix minor errors and dead links in the docs.
* Remove Material Icons webfont and use inline SVG icons in the docs.
* Update [contributing guidelines](https://github.com/JosephusPaye/Keen-UI/blob/v1.0.1/CONTRIBUTING.md) with information about linting, BEM and using the `next` branch.

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
