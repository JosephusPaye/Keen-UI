var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var banner = require('./webpack.banner.js');

delete config.devtool;
delete config.watch;
delete config.plugins;
delete config.module.rules[0].use.options.loaders;

config.entry = {
    UiAlert: ['./src/UiAlert.vue'],
    UiAutocomplete: ['./src/UiAutocomplete.vue'],
    UiButton: ['./src/UiButton.vue'],
    UiCheckbox: ['./src/UiCheckbox.vue'],
    UiCollapsible: ['./src/UiCollapsible.vue'],
    UiConfirm: ['./src/UiConfirm.vue'],
    UiFab: ['./src/UiFab.vue'],
    UiIcon: ['./src/UiIcon.vue'],
    UiIconButton: ['./src/UiIconButton.vue'],
    UiMenu: ['./src/UiMenu.vue'],
    UiMenuOption: ['./src/UiMenuOption.vue'],
    UiModal: ['./src/UiModal.vue'],
    UiPopover: ['./src/UiPopover.vue'],
    UiPreloader: ['./src/UiPreloader.vue'],
    UiProgressCircular: ['./src/UiProgressCircular.vue'],
    UiProgressLinear: ['./src/UiProgressLinear.vue'],
    UiRadio: ['./src/UiRadio.vue'],
    UiRating: ['./src/UiRating.vue'],
    UiRatingIcon: ['./src/UiRatingIcon.vue'],
    UiRatingPreview: ['./src/UiRatingPreview.vue'],
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
};

config.plugins = [
    new webpack.BannerPlugin(banner),

    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),

    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
];

config.output = {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    library: ['Keen', '[name]'],
    libraryTarget: 'umd'
};

module.exports = config;
