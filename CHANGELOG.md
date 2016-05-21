## v0.8.8 (May 21, 2016)

### New
* Add UiSelect component
* Add UiSlider component

### Fixes
* Add pointer cursor to all relevant interactive components (UiButton, UiIconButton, UiFab, UiMenuItem, UiCheckbox, UiRadio, UiSwitch)
* Vertically align icons to middle for use inline with text
* Show scrollbar when menu height exceeds viewport height
* Change UiIconButton `display` to `inline-flex`
* UiAutocomplete, UiRadioGroup, UiRating and UiTextbox: keep help text visible when disabled
* Fix z-index issue with tooltips and dropdowns in a modal

### Breaking
* UiMenu and UiMenuItem: rename `keyboardShortcut` and `showKeyboardShortcuts` props to `secondaryText` and `showSecondaryText`, menu options should use the `secondaryText` property for showing secondary text like keyboard shortcuts and badges

* UiButton and UiIconButton: rename `showMenuKeyboardShortcuts` prop to `showMenuSecondaryText`, menu options should use the `secondaryText` property for showing secondary text like keyboard shortcuts and badges
