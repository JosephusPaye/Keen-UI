<script>
import UiButton from '../source/UiButton.vue';
import UiToolbar from '../source/UiToolbar.vue';

import UiAlertDocs from './components/UiAlertDocs.vue';
import UiAutocompleteDocs from './components/UiAutocompleteDocs.vue';
import UiButtonDocs from './components/UiButtonDocs.vue';
import UiCheckboxDocs from './components/UiCheckboxDocs.vue';
import UiCollapsibleDocs from './components/UiCollapsibleDocs.vue';
import UiConfirmDocs from './components/UiConfirmDocs.vue';
import UiFabDocs from './components/UiFabDocs.vue';
import UiIconButtonDocs from './components/UiIconButtonDocs.vue';
import UiIconDocs from './components/UiIconDocs.vue';
import UiMenuDocs from './components/UiMenuDocs.vue';
import UiModalDocs from './components/UiModalDocs.vue';
import UiPopoverDocs from './components/UiPopoverDocs.vue';
import UiPreloaderDocs from './components/UiPreloaderDocs.vue';
import UiProgressCircularDocs from './components/UiProgressCircularDocs.vue';
import UiProgressLinearDocs from './components/UiProgressLinearDocs.vue';
import UiRadioDocs from './components/UiRadioDocs.vue';
import UiRadioGroupDocs from './components/UiRadioGroupDocs.vue';
import UiRatingDocs from './components/UiRatingDocs.vue';
import UiRippleInkDocs from './components/UiRippleInkDocs.vue';
import UiSnackbarDocs from './components/UiSnackbarDocs.vue';
import UiSwitchDocs from './components/UiSwitchDocs.vue';
import UiTabsDocs from './components/UiTabsDocs.vue';
import UiTextboxDocs from './components/UiTextboxDocs.vue';
import UiToolbarDocs from './components/UiToolbarDocs.vue';

let menu = [
    {
        id: 'ui-alert-docs',
        text: 'UiAlert'
    }, {
        id: 'ui-autocomplete-docs',
        text: 'UiAutocomplete'
    },  {
        id: 'ui-button-docs',
        text: 'UiButton'
    }, {
        id: 'ui-checkbox-docs',
        text: 'UiCheckbox'
    }, {
        id: 'ui-collapsible-docs',
        text: 'UiCollapsible'
    }, {
        id: 'ui-confirm-docs',
        text: 'UiConfirm'
    }, {
        id: 'ui-fab-docs',
        text: 'UiFab'
    }, {
        id: 'ui-icon-button-docs',
        text: 'UiIconButton'
    }, {
        id: 'ui-icon-docs',
        text: 'UiIcon'
    }, {
        id: 'ui-menu-docs',
        text: 'UiMenu'
    }, {
        id: 'ui-modal-docs',
        text: 'UiModal'
    }, {
        id: 'ui-popover-docs',
        text: 'UiPopover'
    }, {
        id: 'ui-preloader-docs',
        text: 'UiPreloader'
    }, {
        id: 'ui-progress-circular-docs',
        text: 'UiProgressCircular'
    }, {
        id: 'ui-progress-linear-docs',
        text: 'UiProgressLinear'
    }, {
        id: 'ui-radio-docs',
        text: 'UiRadio'
    }, {
        id: 'ui-radio-group-docs',
        text: 'UiRadioGroup'
    }, {
        id: 'ui-rating-docs',
        text: 'UiRating & UiRatingPreview'
    }, {
        id: 'ui-ripple-ink-docs',
        text: 'UiRippleInk'
    }, {
        id: 'ui-snackbar-docs',
        text: 'UiSnackbar & UiSnackbarContainer'
    }, {
        id: 'ui-switch-docs',
        text: 'UiSwitch'
    }, {
        id: 'ui-tabs-docs',
        text: 'UiTabs'
    }, {
        id: 'ui-textbox-docs',
        text: 'UiTextbox'
    }, {
        id: 'ui-toolbar-docs',
        text: 'UiToolbar'
    }
];

export default {
    data() {
        return {
            showSidebar: false,
            currentComponent: menu[0],
            menu
        };
    },

    ready() {
        this.navigate(true);

        window.addEventListener('hashchange', () => {
            this.navigate();
        });
    },

    methods: {
        navigate(onPageLoad) {
            let component = location.hash.length ? location.hash.substring(2) : null;

            if (component) {
                this.currentComponent = this.findComponentById(component);

                // Reset the document scroll position
                document.body.scrollTop = 0;

                // Scroll the active menu item into view
                if (onPageLoad) {
                    this.$nextTick(() => {
                        document.querySelector('.menu a.active').scrollIntoView();
                    });
                }
            }

            if (this.showSidebar) {
                this.toggleSidebar();
            }
        },

        findComponentById(id) {
            for (var i = 0; i < this.menu.length; i++) {
                if (this.menu[i].id === id) {
                    return this.menu[i];
                }
            }

            // Fallback to first item
            return this.menu[0];
        },

        openGithub() {
            window.open('https://github.com/JosephusPaye/keen-ui', '_blank');
        },

        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        }
    },

    components: {
        UiToolbar,
        UiButton,

        UiAlertDocs,
        UiAutocompleteDocs,
        UiButtonDocs,
        UiCheckboxDocs,
        UiCollapsibleDocs,
        UiConfirmDocs,
        UiFabDocs,
        UiIconButtonDocs,
        UiIconDocs,
        UiMenuDocs,
        UiModalDocs,
        UiPopoverDocs,
        UiPreloaderDocs,
        UiProgressCircularDocs,
        UiProgressLinearDocs,
        UiRadioDocs,
        UiRadioGroupDocs,
        UiRatingDocs,
        UiRippleInkDocs,
        UiSnackbarDocs,
        UiSwitchDocs,
        UiTabsDocs,
        UiTextboxDocs,
        UiToolbarDocs
    }
};
</script>

<style lang="stylus">
@import './styles/app';
</style>
