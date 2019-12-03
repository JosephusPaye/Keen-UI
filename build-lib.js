const path = require('path');
const execa = require('execa');

function resolve(filename) {
    return path.join(__dirname, 'src', filename);
}

const lib = {
    UiAlert: resolve('UiAlert.vue'),
    UiAutocomplete: resolve('UiAutocomplete.vue'),
    UiButton: resolve('UiButton.vue'),
    UiCalendar: resolve('UiCalendar.vue'),
    UiCheckbox: resolve('UiCheckbox.vue'),
    UiCheckboxGroup: resolve('UiCheckboxGroup.vue'),
    UiCloseButton: resolve('UiCloseButton.vue'),
    UiCollapsible: resolve('UiCollapsible.vue'),
    UiConfirm: resolve('UiConfirm.vue'),
    UiDatepicker: resolve('UiDatepicker.vue'),
    UiDatepickerCalendar: resolve('UiDatepickerCalendar.vue'),
    UiFab: resolve('UiFab.vue'),
    UiFileupload: resolve('UiFileupload.vue'),
    UiIcon: resolve('UiIcon.vue'),
    UiIconButton: resolve('UiIconButton.vue'),
    UiMenu: resolve('UiMenu.vue'),
    UiModal: resolve('UiModal.vue'),
    UiPopover: resolve('UiPopover.vue'),
    UiPreloader: resolve('UiPreloader.vue'),
    UiProgressCircular: resolve('UiProgressCircular.vue'),
    UiProgressLinear: resolve('UiProgressLinear.vue'),
    UiRadio: resolve('UiRadio.vue'),
    UiRadioGroup: resolve('UiRadioGroup.vue'),
    UiRippleInk: resolve('UiRippleInk.vue'),
    UiSelect: resolve('UiSelect.vue'),
    UiSlider: resolve('UiSlider.vue'),
    UiSnackbar: resolve('UiSnackbar.vue'),
    UiSnackbarContainer: resolve('UiSnackbarContainer.vue'),
    UiSwitch: resolve('UiSwitch.vue'),
    UiTab: resolve('UiTab.vue'),
    UiTabs: resolve('UiTabs.vue'),
    UiTextbox: resolve('UiTextbox.vue'),
    UiToolbar: resolve('UiToolbar.vue'),
    UiTooltip: resolve('UiTooltip.vue'),
};

function makeBuildArgs(libName, entry) {
    return [
        'build',
        '--no-clean',
        '--target',
        'lib',
        '--dest',
        'lib',
        '--formats',
        'umd,umd-min',
        '--name',
        libName,
        entry,
    ];
}

async function build() {
    for (const [libName, entry] of Object.entries(lib)) {
        console.log('Building', libName);

        const subprocess = execa(
            'vue-cli-service',
            makeBuildArgs(libName, entry),
            {
                preferLocal: true,
                env: {
                    KEEN_UI_BUILD_LIB: true,
                },
            }
        );

        subprocess.stdout.pipe(process.stdout);

        await subprocess;
    }
}

build();
