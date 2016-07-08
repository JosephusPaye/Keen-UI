## v0.8.9 (Release date here)

### New
* UiTextbox and UiAutocomplete: Add `autofocus` prop
* UiButton and UiIconButton: Add `buttonType` prop
* UiSnackbarContainer: Add `allowHtml` attribute to snackbar object, which allows for HTML in the `message` attribute
* UiAutocomplete: Add new `filter` prop for defining a custom search filter function
* UiAutocomplete: Add `highlighted`, `highlight-overflow` and `selected` events (thanks @rowanwins)
* UiAutocomplete: Add `autoHighlightFirstMatch` and `cycleHighlight` props for customizing highlight behaviour (thanks @rowanwins)
* UiMenu and UiPopover: Add `ui-dropdown::open`, `ui-dropdown::close` and `ui-dropdown::toggle` events
* UiAutocomplete, UiSelect and UiTextbox: Add `ui-input::set-validity` event for setting the validity and a custom error message from outside the component

### Fixes
* UiTextbox and UiAutocomplete: Fix `debounce` prop handling
* UiFab and UiIconButton: Set icon width to `100%` to fix horizontal centering in Safari on macOS
* UiButton and UiIconButton: Fix `dropdownPosition` prop not being passed to UiPopover
* UiAlert: Fix reactivity of `icon` prop
* UiModal, UiMenu and UiPopover: Make sure `lastFocussedElement` exists before attempting to return the focus. This fixes an error with Webpack hot reloading (thanks @lesion).
* UiProgressLinear: Fix color incorrectly defaulting to color-color-primary (thanks @lesion)

### Breaking
* UiTextbox: `autocomplete` prop type changed to String, to allow for configuring browser autocomplete


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
