<template>
    <component
        class="ui-menu-option"
        role="menu-item"

        :class="classes"
        :href="isAnchor ? (disabled ? null : href) : null"
        :is="isAnchor ? 'a' : 'li'"
        :tabindex="(isDivider || isAnchor || disabled) ? null : '0'"
        :target="isAnchor ? (disabled ? null : target) : null"
    >
        <slot v-if="!isDivider">
            <div class="ui-menu-option__content">
                <ui-icon
                    class="ui-menu-option__icon"

                    :icon-set="iconProps.iconSet"
                    :icon="icon"
                    :remove-text="iconProps.removeText"
                    :use-svg="iconProps.useSvg"

                    v-if="icon"
                ></ui-icon>

                <div class="ui-menu-option__text">{{ label }}</div>

                <div class="ui-menu-option__secondary-text" v-if="secondaryText">
                    {{ secondaryText }}
                </div>
            </div>
        </slot>

        <ui-ripple-ink v-if="!disabled && !isDivider && !disableRipple"></ui-ripple-ink>
    </component>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiRippleInk from './UiRippleInk.vue';

export default {
    name: 'ui-menu-option',

    props: {
        type: String,
        label: String,
        href: String,
        target: String,
        icon: String,
        iconProps: {
            type: Object,
            default() {
                return {};
            }
        },
        secondaryText: String,
        disableRipple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        classes() {
            return {
                'is-divider': this.isDivider,
                'is-disabled': this.disabled,
                'is-anchor': this.isAnchor
            };
        },

        isDivider() {
            return this.type === 'divider';
        },

        isAnchor() {
            return !this.isDivider && this.href !== undefined;
        }
    },

    components: {
        UiIcon,
        UiRippleInk
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-menu-option {
    display: block;
    font-family: $font-stack;
    position: relative;
    user-select: none;
    width: 100%;

    &.is-divider {
        background-color: rgba(black, 0.08);
        display: block;
        height: rem-calc(1px);
        margin: rem-calc(6px 0);
        padding: 0;
    }

    &:not(.is-divider) {
        color: $primary-text-color;
        cursor: pointer;
        font-size: $ui-dropdown-item-font-size;
        font-weight: normal;
        min-height: rem-calc(40px);
        outline: none;
        text-decoration: none;

        &:hover:not(.is-disabled),
        body[modality="keyboard"] &:focus {
            background-color: $ui-menu-item-hover-color;
        }

        &.is-disabled {
            color: $secondary-text-color;
            cursor: default;
            opacity: 0.5;

            .ui-menu-option__secondary-text {
                color: $secondary-text-color;
            }
        }
    }
}

.ui-menu-option__content {
    align-items: center;
    display: flex;
    height: rem-calc(40px);
    padding: rem-calc(0 16px);
}

.ui-menu-option__icon {
    color: $secondary-text-color;
    font-size: rem-calc(18px);
    margin-right: rem-calc(16px);
}

.ui-menu-option__text {
    @include text-truncation;
    flex-grow: 1;
}

.ui-menu-option__secondary-text {
    color: $hint-text-color;
    flex-shrink: 0;
    font-size: rem-calc(13px);
    margin-left: rem-calc(4px);
}
</style>
