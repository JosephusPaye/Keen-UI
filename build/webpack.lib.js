'use strict';

const merge = require('deepmerge');
const webpack = require('webpack');

const options = require('./options');
const base = require('./webpack.base.js');

const config = merge(base, {
    entry: {
        UiAlert: ['./src/UiAlert.vue'],
        UiAutocomplete: ['./src/UiAutocomplete.vue'],
        UiButton: ['./src/UiButton.vue'],
        UiCalendar: ['./src/UiCalendar.vue'],
        UiCheckbox: ['./src/UiCheckbox.vue'],
        UiCheckboxGroup: ['./src/UiCheckboxGroup.vue'],
        UiCloseButton: ['./src/UiCloseButton.vue'],
        UiCollapsible: ['./src/UiCollapsible.vue'],
        UiConfirm: ['./src/UiConfirm.vue'],
        UiDatepicker: ['./src/UiDatepicker.vue'],
        UiDatepickerCalendar: ['./src/UiDatepickerCalendar.vue'],
        UiFab: ['./src/UiFab.vue'],
        UiFileupload: ['./src/UiFileupload.vue'],
        UiIcon: ['./src/UiIcon.vue'],
        UiIconButton: ['./src/UiIconButton.vue'],
        UiMenu: ['./src/UiMenu.vue'],
        UiModal: ['./src/UiModal.vue'],
        UiPopover: ['./src/UiPopover.vue'],
        UiPreloader: ['./src/UiPreloader.vue'],
        UiProgressCircular: ['./src/UiProgressCircular.vue'],
        UiProgressLinear: ['./src/UiProgressLinear.vue'],
        UiRadio: ['./src/UiRadio.vue'],
        UiRadioGroup: ['./src/UiRadioGroup.vue'],
        UiRippleInk: ['./src/UiRippleInk.vue'],
        UiSelect: ['./src/UiSelect.vue'],
        UiSlider: ['./src/UiSlider.vue'],
        UiSnackbar: ['./src/UiSnackbar.vue'],
        UiSnackbarContainer: ['./src/UiSnackbarContainer.vue'],
        UiSwitch: ['./src/UiSwitch.vue'],
        UiTab: ['./src/UiTab.vue'],
        UiTabs: ['./src/UiTabs.vue'],
        UiTextbox: ['./src/UiTextbox.vue'],
        UiToolbar: ['./src/UiToolbar.vue'],
        UiTooltip: ['./src/UiTooltip.vue']
    },

    output: {
        path: options.paths.output.lib,
        filename: options.isProduction ? '[name].min.js' : '[name].js',
        library: ['KeenUI', '[name]'],
        libraryTarget: 'umd'
    },

    plugins: [
        new webpack.BannerPlugin({
            banner: options.banner,
            raw: true,
            entryOnly: true
        })
    ]
}, { clone: false });

// First item in module.rules array is Vue
config.module.rules[0].options.loaders = {
    scss: 'vue-style-loader!css-loader!sass-loader'
};

if (options.isProduction) {
    config.plugins = config.plugins.concat([
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),

        // Set the production environment
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        // Minify with dead-code elimination
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]);
}

module.exports = config;
