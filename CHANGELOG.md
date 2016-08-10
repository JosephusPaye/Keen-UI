## v0.8.9 (August 10, 2016)

### New
* **UiAutocomplete, UiSelect, and UiTextbox**: Add `ui-input::set-validity` event for setting the validity and a custom error message from outside the component
* **UiAutocomplete and UiSelect**: Add new `filter` prop for defining a custom search filter function
* **UiAutocomplete and UiSelect**: Add new prop `keys` to allow for redefining the `text`, `value` and `image` keys
* **UiAutocomplete and UiTextbox**: Add `autofocus` prop
* **UiAutocomplete**: Add `opened`, and `closed` events
* **UiAutocomplete**: Add `highlighted`, `highlight-overflow` and `selected` events (thanks @rowanwins)
* **UiAutocomplete**: Add `autoHighlightFirstMatch` and `cycleHighlight` props for customizing highlight behaviour (thanks @rowanwins)

* **UiButton and UiIconButton**: Add `buttonType` prop

* **UiCheckbox**: New `model` and `value` prop combination can be used for connecting multiple checkboxes to a single model (array).

* **UiFab and UiIconButton**: Add `openTooltipOn` prop for customizing which events cause the tooltip to show

* **UiMenu and UiPopover**: Add `ui-dropdown::open`, `ui-dropdown::close` and `ui-dropdown::toggle` events
* **UiMenu and UiMenuOption**: Add `partial` and `closeOnSelect` props, to allow for using custom HTML in menu options

* **UiModal**: Add `revealed` and `hidden` events, for detecting when the show/hide transition ends

* **UiSelect**: Add new `optionsLoaded` for selects with dynamic options
* **UiSelect**: Allow for more flexibity in the format of the `options` and `default` props. `options` now supports a plain array, e.g. `['Red', 'Blue', 'Green']` as well as an array of objects whose keys can be redefined to something other than `text` and `value`. `default` now supports any string, number or object, or an array of those, (provided the string, number or `value` key of the object matches with an option) - (thanks @qetee)
* **UiSelect**: Add `ui-select::set-selected` event for programmatically setting the currently selected value/values

* **UiSnackbarContainer**: Add `allowHtml` attribute to snackbar object, which allows for HTML in the `message` attribute

* **UiTabs**: Add `id` prop
* **UiTabs**: Add `ui-tabs::select` event for programmatically changing the active tab

### Fixes
* **UiAlert**: Fix reactivity of `icon` prop
* **UiAutocomplete and UiTextbox**: Fix `debounce` prop handling
* **UiAutocomplete, UiSelect and UiTextbox**: Update `validation-rules` prop to accept Array, for specifying regex validation rules that use the pipe `|` character.
* **UiButton and UiIconButton**: Fix `dropdownPosition` prop not being passed to UiPopover
* **UiCollapsible**: fix height issues when using dynamic content in the collapsible body (thanks @citycide). Note that you should still trigger `ui-collapsible::refresh-height` when you change the collapsible body content.
* **UiFab and UiIconButton**: Set icon width to `100%` to fix horizontal centering in Safari on macOS
* **UiMenu, UiModal, and UiPopover**: Make sure `lastFocussedElement` exists before attempting to return the focus. This fixes an error with Webpack hot reloading (thanks @lesion).
* **UiMenu and UiPopover**: Automatically adjust horizontal positioning to keep dropdown in the viewport (thanks @AlexandreBonaventure)
* **UiProgressLinear**: Fix color incorrectly defaulting to `"color-color-primary"` (thanks @lesion)

### Breaking
* **UiCheckbox**: Rename `value` prop to `model`, `value` now maps directly to the checkbox input's `value` attribute and is used with connecting multiple checkboxes to a single array.
* **UiMenu and UiMenuOption**: Rename UiMenuItem component to UiMenuOption
* **UiSelect**: Remove `noResults` prop in favor of setting `optionsLoaded` to `true` and setting an empty array for `options`
* **UiSelect**: Rename `disableFiltering` prop to `optionsDynamic`, because the prop does more than just disabling filtering
* **UiTextbox**: `autocomplete` prop type changed to String, to allow for configuring browser autocomplete

### Docs
* Add View Source links for components and examples

## v0.8.8 (May 21, 2016)

### New
* Add UiSelect component
* Add UiSlider component

### Fixes
* Add pointer cursor to all relevant interactive components (UiButton, UiIconButton, UiFab, UiMenuItem, UiCheckbox, UiRadio, UiSwitch)
* Fix z-index issue with tooltips and dropdowns in a modal
* UiIcon: Vertically align icons to middle for use inline with text
* UiMenu: Show scrollbar when menu height exceeds viewport height
* UiAutocomplete, UiRadioGroup, UiRating and UiTextbox: Keep help text visible when disabled
* UiIconButton and UiFab: Fix horizontal centering of icon in Firefox
* UiIconButton: Change `display` to `inline-flex`
* UiCollapsible: Fix header vertical centering in IE

### Breaking
* UiMenu and UiMenuItem: rename `keyboardShortcut` and `showKeyboardShortcuts` props to `secondaryText` and `showSecondaryText`, menu options should use the `secondaryText` property for showing secondary text like keyboard shortcuts and badges

* UiButton and UiIconButton: rename `showMenuKeyboardShortcuts` prop to `showMenuSecondaryText`, menu options should use the `secondaryText` property for showing secondary text like keyboard shortcuts and badges

* UiSelect: Remove `noResults` prop. To replicate it's functionality, set the `options` to an empty array and set `optionsLoaded` to `true`.
