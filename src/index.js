import './bootstrap';
import configure from './configure';
import { startsWith } from './helpers/util';

import UiAlert from './UiAlert.vue';
import UiAutocomplete from './UiAutocomplete.vue';
import UiButton from './UiButton.vue';
import UiCalendar from './UiCalendar.vue';
import UiCheckbox from './UiCheckbox.vue';
import UiCheckboxGroup from './UiCheckboxGroup.vue';
import UiCloseButton from './UiCloseButton.vue';
import UiCollapsible from './UiCollapsible.vue';
import UiConfirm from './UiConfirm.vue';
import UiDatepicker from './UiDatepicker.vue';
import UiFab from './UiFab.vue';
import UiFileupload from './UiFileupload.vue';
import UiIcon from './UiIcon.vue';
import UiIconButton from './UiIconButton.vue';
import UiMenu from './UiMenu.vue';
import UiModal from './UiModal.vue';
import UiPopover from './UiPopover.vue';
import UiPreloader from './UiPreloader.vue';
import UiProgressCircular from './UiProgressCircular.vue';
import UiProgressLinear from './UiProgressLinear.vue';
import UiRadio from './UiRadio.vue';
import UiRadioGroup from './UiRadioGroup.vue';
import UiRippleInk from './UiRippleInk.vue';
import UiSelect from './UiSelect.vue';
import UiSlider from './UiSlider.vue';
import UiSnackbar from './UiSnackbar.vue';
import UiSnackbarContainer from './UiSnackbarContainer.vue';
import UiSwitch from './UiSwitch.vue';
import UiTab from './UiTab.vue';
import UiTabs from './UiTabs.vue';
import UiTextbox from './UiTextbox.vue';
import UiToolbar from './UiToolbar.vue';
import UiTooltip from './UiTooltip.vue';

const KeenUI = {
    UiAlert,
    UiAutocomplete,
    UiButton,
    UiCalendar,
    UiCheckbox,
    UiCheckboxGroup,
    UiCloseButton,
    UiCollapsible,
    UiConfirm,
    UiDatepicker,
    UiFab,
    UiFileupload,
    UiIcon,
    UiIconButton,
    UiMenu,
    UiModal,
    UiPopover,
    UiPreloader,
    UiProgressCircular,
    UiProgressLinear,
    UiRadio,
    UiRadioGroup,
    UiRippleInk,
    UiSelect,
    UiSlider,
    UiSnackbar,
    UiSnackbarContainer,
    UiSwitch,
    UiTab,
    UiTabs,
    UiTextbox,
    UiToolbar,
    UiTooltip
};

KeenUI.install = function (Vue, config = {}) {
    // Configure the component props
    Object.keys(config).forEach(key => {
        if (startsWith(key, 'Ui')) {
            if (KeenUI[key] === undefined) {
                return;
            }

            const Component = KeenUI[key];
            const props = config[key];

            configure(Component, props);
        }
    });

    // Install the components
    Object.keys(KeenUI).forEach(key => {
        if (startsWith(key, 'Ui')) {
            const Component = KeenUI[key];
            Vue.component(Component.name, Component);
        }
    });
};

// Automatically install Keen UI if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(KeenUI, window.KeenUiConfig);
}

export default KeenUI;

export {
    UiAlert,
    UiAutocomplete,
    UiButton,
    UiCalendar,
    UiCheckbox,
    UiCheckboxGroup,
    UiCloseButton,
    UiCollapsible,
    UiConfirm,
    UiDatepicker,
    UiFab,
    UiFileupload,
    UiIcon,
    UiIconButton,
    UiMenu,
    UiModal,
    UiPopover,
    UiPreloader,
    UiProgressCircular,
    UiProgressLinear,
    UiRadio,
    UiRadioGroup,
    UiRippleInk,
    UiSelect,
    UiSlider,
    UiSnackbar,
    UiSnackbarContainer,
    UiSwitch,
    UiTab,
    UiTabs,
    UiTextbox,
    UiToolbar,
    UiTooltip
};
