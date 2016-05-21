export default {
    props: {
        openDropdownOn: String,
        dropdownPosition: String,
        hasPopover: {
            type: Boolean,
            default: false
        },
        hasDropdownMenu: {
            type: Boolean,
            default: false
        },
        menuOptions: {
            type: Array,
            default() {
                return [];
            }
        },
        showMenuIcons: {
            type: Boolean,
            default: false
        },
        showMenuSecondaryText: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        menuOptionSelect(option) {
            this.$dispatch('menu-option-selected', option);
        }
    }
};
