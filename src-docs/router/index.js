import Vue from 'vue'

import UiAlertDocs from '../components/UiAlertDocs.vue'
import UiAutocompleteDocs from '../components/UiAutocompleteDocs.vue'
import UiButtonDocs from '../components/UiButtonDocs.vue'
import UiCarouselDocs from '../components/UiCarouselDocs.vue'
import UiCheckboxDocs from '../components/UiCheckboxDocs.vue'
import UiCollapsibleDocs from '../components/UiCollapsibleDocs.vue'
import UiConfirmDocs from '../components/UiConfirmDocs.vue'
import UiFabDocs from '../components/UiFabDocs.vue'
import UiIconButtonDocs from '../components/UiIconButtonDocs.vue'
import UiIconDocs from '../components/UiIconDocs.vue'
import UiMenuDocs from '../components/UiMenuDocs.vue'
import UiModalDocs from '../components/UiModalDocs.vue'
import UiPopoverDocs from '../components/UiPopoverDocs.vue'
import UiPreloaderDocs from '../components/UiPreloaderDocs.vue'
import UiProgressCircularDocs from '../components/UiProgressCircularDocs.vue'
import UiProgressLinearDocs from '../components/UiProgressLinearDocs.vue'
import UiRadioDocs from '../components/UiRadioDocs.vue'
import UiRatingDocs from '../components/UiRatingDocs.vue'
import UiRippleInkDocs from '../components/UiRippleInkDocs.vue'
import UiSelectDocs from '../components/UiSelectDocs.vue'
import UiSliderDocs from '../components/UiSliderDocs.vue'
import UiSnackbarDocs from '../components/UiSnackbarDocs.vue'
import UiSwitchDocs from '../components/UiSwitchDocs.vue'
import UiTabsDocs from '../components/UiTabsDocs.vue'
import UiTextboxDocs from '../components/UiTextboxDocs.vue'
import UiToolbarDocs from '../components/UiToolbarDocs.vue'
import UiTooltipDocs from '../components/UiTooltipDocs.vue'

import Router from 'vue-router'

Vue.use(Router)

let routes = [
    {
        path: '/alert',
        component: UiAlertDocs,
        meta: 'UiAlert'
    },
    {
        path: '/autocomplete',
        component: UiAutocompleteDocs,
        meta: 'UiAutocomplete'
    },
    {
        path: '/button',
        component: UiButtonDocs,
        meta: 'UiButton'
    },
    {
        path: '/carousel',
        component: UiCarouselDocs,
        meta: 'UiCarousel'
    },
    {
        path: '/checkbox',
        component: UiCheckboxDocs,
        meta: 'UiCheckbox'
    },
    {
        path: '/collapsible',
        component: UiCollapsibleDocs,
        meta: 'UiCollapsiable'
    },
    {
       path: '/confirm',
       component: UiConfirmDocs,
       meta: 'UiConfirm'
    },
    {
       path: '/fab',
       component: UiFabDocs,
       meta: 'UiFab'
    },
    {
       path: '/icon-button',
       component: UiIconButtonDocs,
       meta: 'UiIconButton'
    },
    {
       path: '/icon',
       component: UiIconDocs,
       meta: 'UiIcon'
    },
    {
       path: '/menu',
       component: UiMenuDocs
    },
    {
       path: '/modal',
       component: UiModalDocs,
       meta: 'UiModal'
    },
    {
       path: '/popover',
       component: UiPopoverDocs,
       meta: 'UiPopover'
    },
    {
       path: '/preloader',
       component: UiPreloaderDocs,
       meta: 'UiPreloader'
    },
    {
       path: '/progress-circular',
       component: UiProgressCircularDocs,
       meta: 'UiProgressCircular'
    },
    {
       path: '/progress-linear',
       component: UiProgressLinearDocs,
       meta: 'UiProgressLinear'
    },
    {
       path: '/radio',
       component: UiRadioDocs,
       meta: 'UiRadio'
    },
    {
        path: '/rating',
        component: UiRatingDocs,
        meta: 'UiRating & UiRatingPreview'
    },
    {
       path: '/rippleInk',
       component: UiRippleInkDocs,
       meta: 'UiRippleInk'
    },
    {
       path: '/select',
       component: UiSelectDocs,
       meta: 'UiSelect'
    },
    {
       path: '/slider',
       component: UiSliderDocs,
       meta: 'UiSlider'
    },
    {
        path: '/snackbar',
        component: UiSnackbarDocs,
        meta: 'UiSnackbar & UiSnackbarContainer'
    },
    {
       path: '/switch',
       component: UiSwitchDocs,
       meta: 'UiSwitch'
    },
    {
       path: '/tabs',
       component: UiTabsDocs,
       meta: 'UiTabs'
    },
    {
       path: '/textbox',
       component: UiTextboxDocs,
       meta: 'UiTextbox'
    },
    {
       path: '/toolbar',
       component: UiToolbarDocs,
       meta: 'UiToolbar'
    },
    {
       path: '/tooltip',
       component: UiTooltipDocs
    },
    {
        path: '*',
        redirect: '/alert'
    }
];

export default new Router({
	mode: 'history',
	scrollBehavior: () => ({ y: 0 }),
	routes: routes
})
