<template>
    <a
        class="ui-menu-option" role="menu-item" :tabindex="(isDivider || disabled) ? null : '0'"
        :class="{ 'divider': isDivider, 'disabled' : disabled }"
    >
        <div class="ui-menu-option-content" :class="[partial]">
            <partial :name="partial"></partial>
        </div>

        <ui-ripple-ink
            :trigger="$el" v-if="!hideRippleInk && !disabled && !isDivider"
        ></ui-ripple-ink>
    </a>
</template>

<script>
import UiIcon from './UiIcon.vue';

import ShowsRippleInk from './mixins/ShowsRippleInk';

export default {
    name: 'ui-menu-option',

    props: {
        type: String,
        text: String,
        icon: String,
        showIcon: {
            type: Boolean,
            default: false
        },
        secondaryText: String,
        showSecondaryText: {
            type: Boolean,
            default: false
        },
        partial: {
            type: String,
            default: 'ui-menu-default',
        },
        disabled: {
            type: Boolean,
            default: false
        },
        option: Object
    },

    computed: {
        isDivider() {
            return this.type === 'divider';
        }
    },

    components: {
        UiIcon
    },

    partials: {
        'ui-menu-default': `
            <ui-icon
                class="ui-menu-option-icon" :icon="icon" v-if="showIcon && !isDivider && icon"
            ></ui-icon>

            <div class="ui-menu-option-text" v-text="text" v-if="!isDivider"></div>

            <div
                class="ui-menu-option-secondary-text" v-text="secondaryText"
                v-if="showSecondaryText && !isDivider && secondaryText"
            ></div>
        `
    },

    mixins: [
        ShowsRippleInk
    ]
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-menu-option {
    @extends $disable-user-select;
    font-family: $font-stack;
    position: relative;
    display: block;
    height: 40px;

    &.divider {
        display: block;
        width: 100%;
        margin: 6px 0;
        padding: 0;
        height: 1px;

        background-color: alpha(black, 0.08);
    }

    &:not(.divider) {
        width: 100%;
        text-decoration: none;
        color: $md-dark-text;
        font-size: 14px;
        font-weight: normal;
        outline: none;

        &:hover:not(.disabled) {
            background-color: alpha(black, 0.06);
        }

        body[modality="keyboard"] &:focus {
            background-color: alpha(black, 0.1);
        }

        &.disabled {
            opacity: 0.5;
            color: $md-dark-secondary;

            .ui-menu-option-secondary-text {
                color: $md-dark-secondary;
            }
        }

        &:not(.disabled) {
            cursor: pointer;
        }
    }
}

.ui-menu-option-content.ui-menu-default {
    display: flex;
    align-items: center;
    padding: 8px 16px;
}

.ui-menu-option-icon {
    margin-right: 16px;
    font-size: 18px;
    color: $md-dark-secondary;
}

.ui-menu-option-text {
    flex-grow: 1;
    @extends $truncate-text;
}

.ui-menu-option-secondary-text {
    flex-shrink: 0;
    margin-left: 4px;
    font-size: 13px;
    color: $md-dark-hint;
}
</style>
