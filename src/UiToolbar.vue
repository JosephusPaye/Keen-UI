<template>
    <div class="ui-toolbar" :class="styleClasses">
        <div class="ui-toolbar-left">
            <ui-icon-button
                class="ui-toolbar-nav-icon" type="clear" :color="iconColor" :icon="navIcon"
                @click="navIconClick" v-if="!hideNavIcon"
            ></ui-icon-button>

            <div class="ui-toolbar-brand" v-if="showBrand">
                <slot name="brand">
                    <div class="ui-toolbar-brand-text" v-text="brand"></div>
                </slot>
            </div>
        </div>

        <div class="ui-toolbar-center">
            <div class="ui-toolbar-divider" v-if="brandDividerVisible"></div>

            <slot>
                <div class="ui-toolbar-title" v-text="title"></div>
            </slot>
        </div>

        <div class="ui-toolbar-right">
            <slot name="actions"></slot>
        </div>

        <ui-progress-linear
            :show="loading" class="ui-toolbar-preloader" :class="{ 'position-top' : preloaderTop }"
            :color="preloaderColor"
        ></ui-progress-linear>
    </div>
</template>

<script>
import UiProgressLinear from './UiProgressLinear.vue';
import UiIconButton from './UiIconButton.vue';

export default {
    name: 'ui-toolbar',

    props: {
        type: {
            type: String,
            default: 'default', // 'default' or 'colored' - colored is brand primary color
            coerce(type) {
                return 'ui-toolbar-' + type;
            }
        },
        textColor: {
            type: String,
            default: 'black', // 'black' or 'white'
            coerce(color) {
                return 'text-color-' + color;
            }
        },
        title: String,
        brand: String,
        showBrand: {
            type: Boolean,
            default: false
        },
        showBrandDivider: {
            type: Boolean,
            default: null
        },
        navIcon: {
            type: String,
            default: 'menu'
        },
        hideNavIcon: {
            type: Boolean,
            default: false
        },
        flat: {
            type: Boolean,
            default: false
        },
        preloaderTop: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        styleClasses() {
            var classes = [this.type, this.textColor];

            if (!this.flat) {
                classes.push('ui-toolbar-raised');
            }

            return classes;
        },

        iconColor() {
            if (this.textColor === 'text-color-black') {
                return 'black';
            }

            return 'white';
        },

        preloaderColor() {
            if (this.textColor === 'text-color-black') {
                return 'primary';
            }

            return 'white';
        },

        brandDividerVisible() {
            if (this.showBrandDivider !== null) {
                return this.showBrandDivider;
            }

            if (!this.showBrand) {
                return false;
            }

            return true;
        }
    },

    methods: {
        navIconClick() {
            this.$dispatch('nav-icon-clicked');
        }
    },

    components: {
        UiProgressLinear,
        UiIconButton
    }
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-toolbar {
    font-family: $font-stack;
    display: flex;
    height: 56px;
    align-items: center;
    font-size: 18px;
    position: relative;

    &:not(.ui-toolbar-raised):not(.ui-toolbar-colored) {
        border-bottom: 1px solid $md-dark-divider;
    }

    &.text-color-black {
        color: $md-dark-text;

        .ui-toolbar-divider {
            border-left-color: alpha(black, 0.15);
        }
    }

    &.text-color-white {
        color: white;

        .ui-toolbar-divider {
            border-color: alpha(white, 0.4);
        }
    }

    .ui-icon-button {
        width: 48px;
        height: 48px;
    }

    .ui-toolbar-preloader {
        position: absolute;
        height: 3px;
        right: 0;
        left: 0;
        bottom: 0;

        &.position-top {
            top: 0;
        }
    }
}

.ui-toolbar-raised {
    box-shadow: 0 0 2px alpha(black, 0.12), 0 2px 2px alpha(black, 0.2);
}

.ui-toolbar-clear {
    background-color: transparent;
    box-shadow: none;
    border: none;
}

.ui-toolbar-default {
    background-color: white;
}

.ui-toolbar-colored {
    background-color: $md-brand-primary;
}

.ui-toolbar-left {
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

.ui-toolbar-nav-icon {
    margin-right: 8px;
}

.ui-toolbar-brand-text {
    padding-right: 8px;
}

.ui-toolbar-brand {
    min-width: 160px;
}

.ui-toolbar-brand-text {
    flex-grow: 1;
}

.ui-toolbar-center {
    display: flex;
    flex-grow: 1;
}

.ui-toolbar-divider {
    border-left-width: 1px;
    border-left-style: solid;

    height: 24px;
    margin-right: 24px;
}

.ui-toolbar-right {
    flex-shrink: 0;
    margin-left: auto;

    [slot="actions"] {
        display: flex;
    }
}
</style>
