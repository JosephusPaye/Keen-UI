import './bootstrap';

import UiAlert from './UiAlert.vue';
import UiAutocomplete from './UiAutocomplete.vue';
import UiButton from './UiButton.vue';
import UiCalendar from './UiCalendar.vue';
import UiCheckbox from './UiCheckbox.vue';
import UiCheckboxGroup from './UiCheckboxGroup.vue';
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

const Keen = {
    UiAlert,
    UiAutocomplete,
    UiButton,
    UiCalendar,
    UiCheckbox,
    UiCheckboxGroup,
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
    UiTooltip,

    install(Vue) {
        Vue.component('ui-alert', UiAlert);
        Vue.component('ui-autocomplete', UiAutocomplete);
        Vue.component('ui-button', UiButton);
        Vue.component('ui-calendar', UiCalendar);
        Vue.component('ui-checkbox', UiCheckbox);
        Vue.component('ui-checkbox-group', UiCheckboxGroup);
        Vue.component('ui-collapsible', UiCollapsible);
        Vue.component('ui-confirm', UiConfirm);
        Vue.component('ui-datepicker', UiDatepicker);
        Vue.component('ui-fab', UiFab);
        Vue.component('ui-fileupload', UiFileupload);
        Vue.component('ui-icon', UiIcon);
        Vue.component('ui-icon-button', UiIconButton);
        Vue.component('ui-menu', UiMenu);
        Vue.component('ui-modal', UiModal);
        Vue.component('ui-popover', UiPopover);
        Vue.component('ui-preloader', UiPreloader);
        Vue.component('ui-progress-circular', UiProgressCircular);
        Vue.component('ui-progress-linear', UiProgressLinear);
        Vue.component('ui-radio', UiRadio);
        Vue.component('ui-radio-group', UiRadioGroup);
        Vue.component('ui-ripple-ink', UiRippleInk);
        Vue.component('ui-select', UiSelect);
        Vue.component('ui-slider', UiSlider);
        Vue.component('ui-snackbar', UiSnackbar);
        Vue.component('ui-snackbar-container', UiSnackbarContainer);
        Vue.component('ui-switch', UiSwitch);
        Vue.component('ui-tab', UiTab);
        Vue.component('ui-tabs', UiTabs);
        Vue.component('ui-textbox', UiTextbox);
        Vue.component('ui-toolbar', UiToolbar);
        Vue.component('ui-tooltip', UiTooltip);
    }
};

// Automatically install Keen UI if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Keen);
}

export default Keen;

export { UiAlert };
export { UiAutocomplete };
export { UiButton };
export { UiCalendar };
export { UiCheckbox };
export { UiCheckboxGroup };
export { UiCollapsible };
export { UiConfirm };
export { UiDatepicker };
export { UiFab };
export { UiFileupload };
export { UiIcon };
export { UiIconButton };
export { UiMenu };
export { UiModal };
export { UiPopover };
export { UiPreloader };
export { UiProgressCircular };
export { UiProgressLinear };
export { UiRadio };
export { UiRadioGroup };
export { UiRippleInk };
export { UiSelect };
export { UiSlider };
export { UiSnackbar };
export { UiSnackbarContainer };
export { UiSwitch };
export { UiTab };
export { UiTabs };
export { UiTextbox };
export { UiToolbar };
export { UiTooltip };
