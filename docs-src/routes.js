import UiAlert from './pages/UiAlert.vue';
import UiAutocomplete from './pages/UiAutocomplete.vue';
import UiButton from './pages/UiButton.vue';
import UiCheckbox from './pages/UiCheckbox.vue';
import UiCheckboxGroup from './pages/UiCheckboxGroup.vue';
import UiCollapsible from './pages/UiCollapsible.vue';
import UiConfirm from './pages/UiConfirm.vue';
import UiDatepicker from './pages/UiDatepicker.vue';
import UiFab from './pages/UiFab.vue';
import UiFileupload from './pages/UiFileupload.vue';
import UiIcon from './pages/UiIcon.vue';
import UiIconButton from './pages/UiIconButton.vue';
import UiMenu from './pages/UiMenu.vue';
import UiModal from './pages/UiModal.vue';
import UiPopover from './pages/UiPopover.vue';
import UiPreloader from './pages/UiPreloader.vue';
import UiProgressCircular from './pages/UiProgressCircular.vue';
import UiProgressLinear from './pages/UiProgressLinear.vue';
import UiRadio from './pages/UiRadio.vue';
import UiRadioGroup from './pages/UiRadioGroup.vue';
import UiRippleInk from './pages/UiRippleInk.vue';
import UiSelect from './pages/UiSelect.vue';
import UiSlider from './pages/UiSlider.vue';
import UiSnackbar from './pages/UiSnackbar.vue';
import UiSwitch from './pages/UiSwitch.vue';
import UiTabs from './pages/UiTabs.vue';
import UiTextbox from './pages/UiTextbox.vue';
import UiToolbar from './pages/UiToolbar.vue';
import UiTooltip from './pages/UiTooltip.vue';

const menu = [
    {
        title: 'Components',
        menu: [
            {
                path: '/ui-alert',
                component: UiAlert,
                title: 'UiAlert',
                sourceUrl: 'src/UiAlert.vue'
            },
            {
                path: '/ui-autocomplete',
                component: UiAutocomplete,
                title: 'UiAutocomplete',
                sourceUrl: 'src/UiAutocomplete.vue'
            },
            {
                path: '/ui-button',
                component: UiButton,
                title: 'UiButton',
                sourceUrl: 'src/UiButton.vue'
            },
            {
                path: '/ui-checkbox',
                component: UiCheckbox,
                title: 'UiCheckbox',
                sourceUrl: 'src/UiCheckbox.vue'
            },
            {
                path: '/ui-checkbox-group',
                component: UiCheckboxGroup,
                title: 'UiCheckboxGroup',
                sourceUrl: 'src/UiCheckboxGroup.vue'
            },
            {
                path: '/ui-collapsible',
                component: UiCollapsible,
                title: 'UiCollapsible',
                sourceUrl: 'src/UiCollapsible.vue'
            },
            {
                path: '/ui-confirm',
                component: UiConfirm,
                title: 'UiConfirm',
                sourceUrl: 'src/UiConfirm.vue'
            },
            {
                path: '/ui-datepicker',
                component: UiDatepicker,
                title: 'UiDatepicker',
                sourceUrl: 'src/UiDatepicker.vue'
            },
            {
                path: '/ui-fab',
                component: UiFab,
                title: 'UiFab',
                sourceUrl: 'src/UiFab.vue'
            },
            {
                path: '/ui-fileupload',
                component: UiFileupload,
                title: 'UiFileupload',
                sourceUrl: 'src/UiFileupload.vue'
            },
            {
                path: '/ui-icon',
                component: UiIcon,
                title: 'UiIcon',
                sourceUrl: 'src/UiIcon.vue'
            },
            {
                path: '/ui-icon-button',
                component: UiIconButton,
                title: 'UiIconButton',
                sourceUrl: 'src/UiIconButton.vue'
            },
            {
                path: '/ui-menu',
                component: UiMenu,
                title: 'UiMenu',
                sourceUrl: 'src/UiMenu.vue'
            },
            {
                path: '/ui-modal',
                component: UiModal,
                title: 'UiModal',
                sourceUrl: 'src/UiModal.vue'
            },
            {
                path: '/ui-popover',
                component: UiPopover,
                title: 'UiPopover',
                sourceUrl: 'src/UiPopover.vue'
            },
            {
                path: '/ui-preloader',
                component: UiPreloader,
                title: 'UiPreloader',
                sourceUrl: 'src/UiPreloader.vue'
            },
            {
                path: '/ui-progress-circular',
                component: UiProgressCircular,
                title: 'UiProgressCircular',
                sourceUrl: 'src/UiProgressCircular.vue'
            },
            {
                path: '/ui-progress-linear',
                component: UiProgressLinear,
                title: 'UiProgressLinear',
                sourceUrl: 'src/UiProgressLinear.vue'
            },
            {
                path: '/ui-radio',
                component: UiRadio,
                title: 'UiRadio',
                sourceUrl: 'src/UiRadio.vue'
            },
            {
                path: '/ui-radio-group',
                component: UiRadioGroup,
                title: 'UiRadioGroup',
                sourceUrl: 'src/UiRadioGroup.vue'
            },
            {
                path: '/ui-ripple-ink',
                component: UiRippleInk,
                title: 'UiRippleInk',
                sourceUrl: 'src/UiRippleInk.vue'
            },
            {
                path: '/ui-select',
                component: UiSelect,
                title: 'UiSelect',
                sourceUrl: 'src/UiSelect.vue'
            },
            {
                path: '/ui-slider',
                component: UiSlider,
                title: 'UiSlider',
                sourceUrl: 'src/UiSlider.vue'
            },
            {
                path: '/ui-snackbar',
                component: UiSnackbar,
                title: 'UiSnackbar',
                sourceUrl: 'src/UiSnackbarContainer.vue'
            },
            {
                path: '/ui-switch',
                component: UiSwitch,
                title: 'UiSwitch',
                sourceUrl: 'src/UiSwitch.vue'
            },
            {
                path: '/ui-tabs',
                component: UiTabs,
                title: 'UiTabs',
                sourceUrl: 'src/UiTabs.vue'
            },
            {
                path: '/ui-textbox',
                component: UiTextbox,
                title: 'UiTextbox',
                sourceUrl: 'src/UiTextbox.vue'
            },
            {
                path: '/ui-toolbar',
                component: UiToolbar,
                title: 'UiToolbar',
                sourceUrl: 'src/UiToolbar.vue'
            },
            {
                path: '/ui-tooltip',
                component: UiTooltip,
                title: 'UiTooltip',
                sourceUrl: 'src/UiTooltip.vue'
            }
        ]
    }
];

// Generate a Vue Router compatible routes map from the menu
const routes = menu.reduce((paths, section) => {
    const sectionPaths = section.menu.map(menuItem => {
        return {
            path: menuItem.path,
            component: menuItem.component,
            meta: {
                section: section.title,
                title: menuItem.title,
                sourceUrl: menuItem.sourceUrl
            }
        };
    });

    return paths.concat(sectionPaths);
}, []);

// Add the default route at the beginning of the routes array
routes.unshift({
    path: '/',
    redirect: '/ui-alert'
});

// Add the catch all route to redirect 404s
routes.push({
    path: '*',
    redirect: '/ui-alert'
});

export default {
    menu,
    routes
};
