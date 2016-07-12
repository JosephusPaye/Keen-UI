import './helpers/modality';

import UiAlert from './UiAlert.vue';
import UiAutocomplete from './UiAutocomplete.vue';
import UiButton from './UiButton.vue';
import UiCheckbox from './UiCheckbox.vue';
import UiCollapsible from './UiCollapsible.vue';
import UiConfirm from './UiConfirm.vue';
import UiFab from './UiFab.vue';
import UiIcon from './UiIcon.vue';
import UiIconButton from './UiIconButton.vue';
import UiMenu from './UiMenu.vue';
import UiMenuOption from './UiMenuOption.vue';
import UiModal from './UiModal.vue';
import UiPopover from './UiPopover.vue';
import UiPreloader from './UiPreloader.vue';
import UiProgressCircular from './UiProgressCircular.vue';
import UiProgressLinear from './UiProgressLinear.vue';
import UiRadio from './UiRadio.vue';
import UiRadioGroup from './UiRadioGroup.vue';
import UiRating from './UiRating.vue';
import UiRatingIcon from './UiRatingIcon.vue';
import UiRatingPreview from './UiRatingPreview.vue';
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
    UiCheckbox,
    UiCollapsible,
    UiConfirm,
    UiFab,
    UiIcon,
    UiIconButton,
    UiMenu,
    UiMenuOption,
    UiModal,
    UiPopover,
    UiPreloader,
    UiProgressCircular,
    UiProgressLinear,
    UiRadio,
    UiRadioGroup,
    UiRating,
    UiRatingIcon,
    UiRatingPreview,
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
        Vue.component('ui-checkbox', UiCheckbox);
        Vue.component('ui-collapsible', UiCollapsible);
        Vue.component('ui-confirm', UiConfirm);
        Vue.component('ui-fab', UiFab);
        Vue.component('ui-icon', UiIcon);
        Vue.component('ui-icon-button', UiIconButton);
        Vue.component('ui-menu', UiMenu);
        Vue.component('ui-menu-option', UiMenuOption);
        Vue.component('ui-modal', UiModal);
        Vue.component('ui-popover', UiPopover);
        Vue.component('ui-preloader', UiPreloader);
        Vue.component('ui-progress-circular', UiProgressCircular);
        Vue.component('ui-progress-linear', UiProgressLinear);
        Vue.component('ui-radio', UiRadio);
        Vue.component('ui-radio-group', UiRadioGroup);
        Vue.component('ui-rating', UiRating);
        Vue.component('ui-rating-icon', UiRatingIcon);
        Vue.component('ui-rating-preview', UiRatingPreview);
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

module.exports = Keen;
