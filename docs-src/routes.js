import GettingStarted from './pages/GettingStarted.vue';
import Theming from './pages/Theming.vue';

import UiAlert from './pages/UiAlert.vue';
import UiAutocomplete from './pages/UiAutocomplete.vue';
import UiButton from './pages/UiButton.vue';
import UiCheckbox from './pages/UiCheckbox.vue';
import UiCheckboxGroup from './pages/UiCheckboxGroup.vue';
import UiCollapsible from './pages/UiCollapsible.vue';
import UiConfirm from './pages/UiConfirm.vue';
import UiFab from './pages/UiFab.vue';
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
        title: 'Usage',
        menu: [
            {
                path: '/getting-started',
                component: GettingStarted,
                title: 'Getting Started'
            },
            {
                path: '/theming',
                component: Theming,
                title: 'Theming'
            }
        ]
    },
    {
        title: 'Components',
        menu: [
            {
                path: '/ui-alert',
                component: UiAlert,
                title: 'UiAlert',
                sourceUrl: '#'
            },
            {
                path: '/ui-autocomplete',
                component: UiAutocomplete,
                title: 'UiAutocomplete',
                sourceUrl: '#'
            },
            {
                path: '/ui-button',
                component: UiButton,
                title: 'UiButton',
                sourceUrl: '#'
            },
            {
                path: '/ui-checkbox',
                component: UiCheckbox,
                title: 'UiCheckbox',
                sourceUrl: '#'
            },
            {
                path: '/ui-checkbox-group',
                component: UiCheckboxGroup,
                title: 'UiCheckboxGroup',
                sourceUrl: '#'
            },
            {
                path: '/ui-collapsible',
                component: UiCollapsible,
                title: 'UiCollapsible',
                sourceUrl: '#'
            },
            {
                path: '/ui-confirm',
                component: UiConfirm,
                title: 'UiConfirm',
                sourceUrl: '#'
            },
            {
                path: '/ui-fab',
                component: UiFab,
                title: 'UiFab',
                sourceUrl: '#'
            },
            {
                path: '/ui-icon',
                component: UiIcon,
                title: 'UiIcon',
                sourceUrl: '#'
            },
            {
                path: '/ui-icon-button',
                component: UiIconButton,
                title: 'UiIconButton',
                sourceUrl: '#'
            },
            {
                path: '/ui-menu',
                component: UiMenu,
                title: 'UiMenu',
                sourceUrl: '#'
            },
            {
                path: '/ui-modal',
                component: UiModal,
                title: 'UiModal',
                sourceUrl: '#'
            },
            {
                path: '/ui-popover',
                component: UiPopover,
                title: 'UiPopover',
                sourceUrl: '#'
            },
            {
                path: '/ui-preloader',
                component: UiPreloader,
                title: 'UiPreloader',
                sourceUrl: '#'
            },
            {
                path: '/ui-progress-circular',
                component: UiProgressCircular,
                title: 'UiProgressCircular',
                sourceUrl: '#'
            },
            {
                path: '/ui-progress-linear',
                component: UiProgressLinear,
                title: 'UiProgressLinear',
                sourceUrl: '#'
            },
            {
                path: '/ui-radio',
                component: UiRadio,
                title: 'UiRadio',
                sourceUrl: '#'
            },
            {
                path: '/ui-radio-group',
                component: UiRadioGroup,
                title: 'UiRadioGroup',
                sourceUrl: '#'
            },
            {
                path: '/ui-ripple-ink',
                component: UiRippleInk,
                title: 'UiRippleInk',
                sourceUrl: '#'
            },
            {
                path: '/ui-select',
                component: UiSelect,
                title: 'UiSelect',
                sourceUrl: '#'
            },
            {
                path: '/ui-slider',
                component: UiSlider,
                title: 'UiSlider',
                sourceUrl: '#'
            },
            {
                path: '/ui-snackbar',
                component: UiSnackbar,
                title: 'UiSnackbar & UiSnackbarContainer',
                sourceUrl: '#'
            },
            {
                path: '/ui-switch',
                component: UiSwitch,
                title: 'UiSwitch',
                sourceUrl: '#'
            },
            {
                path: '/ui-tabs',
                component: UiTabs,
                title: 'UiTabs',
                sourceUrl: '#'
            },
            {
                path: '/ui-textbox',
                component: UiTextbox,
                title: 'UiTextbox',
                sourceUrl: '#'
            },
            {
                path: '/ui-toolbar',
                component: UiToolbar,
                title: 'UiToolbar',
                sourceUrl: '#'
            },
            {
                path: '/ui-tooltip',
                component: UiTooltip,
                title: 'UiTooltip',
                sourceUrl: '#'
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
    redirect: '/getting-started'
});

export default {
    menu,
    routes
};
