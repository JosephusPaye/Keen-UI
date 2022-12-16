const { build } = require('vite');
const getLibConfig = require('./vite.config.lib.provider');

const entries = [
    'UiAlert',
    'UiAutocomplete',
    'UiButton',
    'UiCalendar',
    'UiCheckbox',
    'UiCheckboxGroup',
    'UiCloseButton',
    'UiCollapsible',
    'UiConfirm',
    'UiDatepicker',
    'UiDatepickerCalendar',
    'UiFab',
    'UiFileupload',
    'UiIcon',
    'UiIconButton',
    'UiMenu',
    'UiModal',
    'UiPopover',
    'UiPreloader',
    'UiProgressCircular',
    'UiProgressLinear',
    'UiRadio',
    'UiRadioGroup',
    'UiRippleInk',
    'UiSelect',
    'UiSlider',
    'UiSnackbar',
    'UiSnackbarContainer',
    'UiSwitch',
    'UiTab',
    'UiTabs',
    'UiTextbox',
    'UiToolbar',
    'UiTooltip'
];

entries.forEach(async entry => {
    if (process.env.NODE_ENV === 'production') {
        await build(getLibConfig({ entry, minify: true }));
    }

    await build(getLibConfig({ entry, minify: false }));
});
