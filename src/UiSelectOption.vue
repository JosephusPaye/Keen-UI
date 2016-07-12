<template>
    <li
        class="ui-select-option" :class="{ highlighted: highlighted, selected: selected }"
    >
        <div class="ui-select-option-content" :class="[partial]">
            <partial :name="partial"></partial>
        </div>

        <ui-icon
            class="ui-select-option-checkbox" :icon="icon" v-if="showCheckbox"
        ></ui-icon>
    </li>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
    name: 'ui-select-option',

    props: {
        option: {
            type: [String, Object],
            required: true
        },
        partial: {
            type: String,
            default: 'ui-select-simple', // 'ui-select-simple', 'ui-select-image'
        },
        showCheckbox: {
            type: Boolean,
            default: false
        },
        highlighted: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Boolean,
            default: false
        },
        keys: {
            type: Object,
            default() {
                return {
                    text: 'text',
                    value: 'value'
                };
            }
        }
    },

    computed: {
        icon() {
            return this.selected ? 'check_box' : 'check_box_outline_blank';
        }
    },

    components: {
        UiIcon
    },

    partials: {
        'ui-select-simple': `
            <li class="ui-select-item-text" v-text="option[keys.text] || option"></li>
        `,

        'ui-select-image': `
            <div
                class="ui-select-item-image"
                :style="{ 'background-image': 'url(' + option.image + ')' }"
            ></div>

            <div class="ui-select-item-text" v-text="option[keys.text]"></div>
        `
    }
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-select-option {
    display: flex;
    align-items: center;
    font-family: $font-stack;
    cursor: pointer;
    overflow: hidden;

    &.selected {
        color: $md-brand-primary;
        font-weight: 500;

        .ui-select-option-checkbox {
            color: $md-brand-primary;
        }
    }

    &.highlighted {
        color: white;
        background-color: $md-brand-primary-lighter;

        .ui-select-option-checkbox {
            color: white;
        }
    }
}

.ui-select-option-content {
    flex-grow: 1;
    display: flex;

    max-height: 42px;
    padding: 6px 12px;
    font-weight: normal;
    font-size: 15px;
}

.ui-select-option-checkbox {
    color: $md-dark-secondary;
    margin-right: 8px;
}

.ui-select-image {
    display: flex;
    align-items: center;
}

.ui-select-item-text {
    @extends $truncate-text;
    width: 0;
    flex-grow: 1;
}

.ui-select-item-image {
    width: 32px;
    height: 32px;
    background-size: cover;
    background-position: 50%;
    margin-right: 12px;
    border-radius: 50%;
}
</style>
