<template>
    <div class="ui-tabs" :class="classes">
        <div class="ui-tabs__header">
            <ul class="ui-tabs__header-items" role="tablist">
                <ui-tab-header-item
                    ref="tabHeaders"

                    :active="activeTabId === tab.id"
                    :disable-ripple="disableRipple"
                    :disabled="tab.disabled"
                    :id="tab.id"
                    :key="tab.id"
                    :title="tab.title"
                    :type="type"

                    @click.native="selectTab(tab)"
                    @keydown.left.native="selectPreviousTab"
                    @keydown.right.native="selectNextTab"

                    v-for="tab in tabs"
                >
                    <render :nodes="tab.$slots.header" v-if="tab.$slots.header"></render>

                    <render
                        slot="icon"
                        :nodes="tab.$slots.icon"
                        v-else-if="hasIcon && Boolean(tab.$slots.icon)"
                    ></render>
                </ui-tab-header-item>
            </ul>
        </div>

        <div class="ui-tabs__body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Render from './render';
import UiTabHeaderItem from './UiTabHeaderItem.vue';

export default {
    name: 'ui-tabs',

    components: {
        Render,
        UiTabHeaderItem
    },

    props: {
        type: {
            type: String,
            default: 'text' // 'icon', text', or 'icon-and-text'
        },
        backgroundColor: {
            type: String,
            default: 'default' // 'default', 'primary', 'accent', or 'clear'
        },
        textColor: {
            type: String,
            default: 'black' // 'black', or 'white'
        },
        textColorActive: {
            type: String,
            default: 'primary' // 'primary', 'accent', or 'white'
        },
        indicatorColor: {
            type: String,
            default: 'primary' // 'primary', 'accent', or 'white'
        },
        fullwidth: {
            type: Boolean,
            default: false
        },
        raised: {
            type: Boolean,
            default: false
        },
        disableRipple: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            tabs: [],
            activeTabId: null,
            activeTabIndex: -1
        };
    },

    computed: {
        classes() {
            return [
                `ui-tabs--type-${this.type}`,
                `ui-tabs--text-color-${this.textColor}`,
                `ui-tabs--text-color-active-${this.textColorActive}`,
                `ui-tabs--background-color-${this.backgroundColor}`,
                `ui-tabs--indicator-color-${this.indicatorColor}`,
                { 'is-raised': this.raised },
                { 'is-fullwidth': this.fullwidth }
            ];
        },

        hasIcon() {
            return this.type === 'icon' || this.type === 'icon-and-text';
        }
    },

    watch: {
        activeTabId() {
            this.tabs.forEach((tab, index) => {
                if (this.activeTabId === tab.id) {
                    tab.activate();
                    this.activeTabIndex = index;
                } else if (tab.isActive) {
                    tab.deactivate();
                }
            });
        }
    },

    methods: {
        addTab(tab) {
            this.tabs.push(tab);

            // Select the tab if there's no tab selected (i.e. the tab is the only tab)
            // or the tab's selected prop is true
            if (this.activeTabId === null || tab.selected) {
                this.activeTabId = tab.id;
            }
        },

        removeTab(tab) {
            const index = this.tabs.indexOf(tab);

            if (index > -1) {
                this.tabs.splice(index, 1);

                // Switch to the nearest available tab if the tab being
                // removed is the one currently active
                if (tab.id === this.activeTabId) {
                    this.selectTab(this.findNearestTab());
                }
            }
        },

        onTabDisabledChange(tab) {
            // Switch to the nearest available tab if the tab being disabled is currently active
            if (tab.disabled && this.activeTabId === tab.id) {
                this.selectTab(this.findNearestTab());
            }
        },

        selectTab(tab) {
            // Abort if the tab is disabled or already selected
            if (tab === null || tab.disabled || tab.id === this.activeTabId) {
                return;
            }

            this.activeTabId = tab.id;
            this.$emit('tab-change', tab.id);
        },

        selectNextTab() {
            const nextTab = this.findNextTab();

            if (nextTab) {
                this.selectTab(nextTab);
                nextTab.$el.focus();
            }
        },

        selectPreviousTab() {
            const previousTab = this.findPreviousTab();

            if (previousTab) {
                this.selectTab(previousTab);
                previousTab.$el.focus();
            }
        },

        findNextTab() {
            let tab = null;

            for (let i = this.activeTabIndex + 1; i < this.$refs.tabHeaders.length; i++) {
                if (this.$refs.tabHeaders[i] && !this.$refs.tabHeaders[i].disabled) {
                    tab = this.$refs.tabHeaders[i];
                    break;
                }
            }

            return tab;
        },

        findPreviousTab() {
            let tab = null;

            for (let i = this.activeTabIndex - 1; i >= 0; i--) {
                if (this.$refs.tabHeaders[i] && !this.$refs.tabHeaders[i].disabled) {
                    tab = this.$refs.tabHeaders[i];
                    break;
                }
            }

            return tab;
        },

        findNearestTab() {
            return this.findPreviousTab() || this.findNextTab();
        },

        findTabById(id) {
            for (let i = 0; i < this.$refs.tabHeaders.length; i++) {
                if (id === this.$refs.tabHeaders[i].id) {
                    return this.$refs.tabHeaders[i];
                }
            }

            return null;
        },

        setActiveTab(tabId) {
            const tab = this.findTabById(tabId);

            if (tab && !tab.disabled) {
                this.selectTab(tab);
            }
        }
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-tabs {
    margin-bottom: rem(24px);
    width: 100%;

    &.is-fullwidth {
        .ui-tab-header-item {
            flex-grow: 1;
        }
    }

    &.is-raised {
        border: none;
        box-shadow: 0 0 2px rgba(black, 0.12), 0 2px 2px rgba(black, 0.2);

        .ui-tabs__body {
            border: none;
        }
    }
}

.ui-tabs__header {
    position: relative;
    width: 100%;
}

.ui-tabs__header-items {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
}

.ui-tabs__body {
    background-color: white;
    border-radius: 0;
    border: rem(1px) solid $md-grey-200;
    border-top: 0;
    margin: 0;
    padding: rem(16px);
}

// ================================================
// Background Colors
// ================================================

.ui-tabs--background-color-default {
    .ui-tabs__header {
        background-color: $md-grey-200;
    }

    .ui-tab-header-item {
        body[modality="keyboard"] &:focus {
            outline: 1px solid $brand-primary-color;
        }
    }
}

.ui-tabs--background-color-primary,
.ui-tabs--background-color-accent,
.ui-tabs--background-color-clear {
    .ui-tab-header-item {
        body[modality="keyboard"] &:focus {
            outline: 1px solid white;
        }
    }

    .ui-ripple-ink__ink.is-held {
        opacity: 0.7;
    }
}

.ui-tabs--background-color-primary {
    .ui-tabs__header {
        background-color: $brand-primary-color;
    }
}

.ui-tabs--background-color-accent {
    .ui-tabs__header {
        background-color: $brand-accent-color;
    }
}

.ui-tabs--background-color-clear {
    .ui-tabs__header {
        background-color: transparent;

        & + .ui-tabs__body {
            border-top: 1px solid $divider-color;
        }
    }
}

// ================================================
// Text Colors
// ================================================

.ui-tabs--text-color-black {
    .ui-tab-header-item {
        color: $secondary-text-color;

        &:hover:not(.is-disabled):not(.is-active) {
            color: $primary-text-color;
        }
    }
}

.ui-tabs--text-color-white {
    .ui-tab-header-item {
        color: rgba(white, 0.65);

        &:hover:not(.is-disabled):not(.is-active) {
            color: white;
        }
    }
}

// ================================================
// Active Text Colors
// ================================================

.ui-tabs--text-color-active-white {
    .ui-tab-header-item.is-active {
        color: white;
    }
}

.ui-tabs--text-color-active-primary {
    .ui-tab-header-item.is-active {
        color: $brand-primary-color;
    }
}

.ui-tabs--text-color-active-accent {
    .ui-tab-header-item.is-active {
        color: $brand-accent-color;
    }
}
</style>
