import $ from 'dominus';
import Drop from 'tether-drop';

export default {
    props: {
        trigger: Element,
        containFocus: {
            type: Boolean,
            default: true
        },
        dropdownPosition: {
            type: String,
            default: 'bottom left'
        },
        openOn: {
            type: String,
            default: 'click' // 'click', 'hover', 'focus', 'always'
        }
    },

    data() {
        return {
            drop: null,
            lastFocussedElement: null
        };
    },

    ready() {
        if (this.trigger) {
            this.initializeDropdown();
        }
    },

    beforeDestroy() {
        if (this.drop) {
            this.drop.remove();
            this.drop.destroy();
        }
    },

    methods: {
        initializeDropdown() {
            this.drop = new Drop({
                target: this.trigger,
                content: this.$els.dropdown,
                position: this.dropdownPosition,
                constrainToWindow: true,
                openOn: this.openOn
            });

            // TO FIX: Hacky workaround for Tether not positioning
            // correctly for positions other than 'bottom left'
            if (this.dropdownPosition !== 'bottom left') {
                this.drop.open();
                this.drop.close();
                this.drop.open();
                this.drop.close();
            }

            this.drop.on('open', this.dropdownOpened);
            this.drop.on('close', this.dropdownClosed);
        },

        closeDropdown() {
            if (this.drop) {
                this.drop.close();
            }
        },

        dropdownOpened() {
            $(this.trigger).addClass('dropdown-open');

            this.lastFocussedElement = document.activeElement;
            this.$els.dropdown.focus();

            this.$dispatch('dropdown-opened');
        },

        dropdownClosed() {
            $(this.trigger).removeClass('dropdown-open');

            this.lastFocussedElement.focus();

            this.$dispatch('dropdown-closed');
        }
    }
};
