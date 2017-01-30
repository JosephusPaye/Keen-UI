<template>
    <div class="ui-tabs" :class="classes">
        <div class="ui-tabs__header">
            <ul class="ui-tabs__header-items" role="tablist" ref="tabsContainer">
                <ui-tab-header-item
                    ref="tabElements"

                    :active="activeTabId === tab.id"
                    :disable-ripple="disableRipple"
                    :disabled="tab.disabled"
                    :icon-props="tab.iconProps"
                    :icon="tab.icon"
                    :id="tab.id"
                    :show="tab.show"
                    :title="tab.title"
                    :type="type"

                    @click.native="selectTab($event, tab)"
                    @keydown.left.native="selectPreviousTab"
                    @keydown.right.native="selectNextTab"

                    v-for="tab in tabs"
                    v-show="tab.show"
                >
                    <render-vnodes
                        slot="icon"
                        :nodes="tab.$slots.icon"
                        v-if="tab.$slots.icon"
                    ></render-vnodes>
                </ui-tab-header-item>
            </ul>

            <div
                class="ui-tabs__active-tab-indicator"
                :style="{ 'left': indicatorLeft, 'right': indicatorRight }"
                v-if="tabContainerWidth != 0"
            ></div>
        </div>

        <div class="ui-tabs__body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import RespondsToWindowResize from './mixins/RespondsToWindowResize.js';
import UiTabHeaderItem from './UiTabHeaderItem.vue';

import config from './config';

export default {
    name: 'ui-tabs',

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
            default: config.data.disableRipple
        }
    },

    data() {
        return {
            tabs: [],
            activeTabId: null,
            activeTabIndex: -1,
            activeTabElement: null,
            activeTabPosition: {
                left: 0,
                width: 0
            },
            tabContainerWidth: 0
        };
    },

    computed: {
        classes() {
            return [
                `ui-tabs--type-${this.type}`,
                `ui-tabs--text-color-${this.textColor}`,
                `ui-tabs--text-color-active-${this.textColorActive}`,
                `ui-tabs--background-color-${this.backgroundColor}`,
                `ui-tabs--indicator-color-${this.textColorActive}`,
                { 'is-raised': this.raised },
                { 'is-fullwidth': this.fullwidth }
            ];
        },

        indicatorLeft() {
            return this.activeTabPosition.left + 'px';
        },

        indicatorRight() {
            return (
                this.tabContainerWidth -
                (this.activeTabPosition.left + this.activeTabPosition.width)
            ) + 'px';
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
        },

        activeTabElement() {
            this.refreshIndicator();
        }
    },

    mounted() {
        // Set the tab container width and the active tab element
        // (to show the active tab indicator)
        this.$nextTick(() => {
            this.tabContainerWidth = this.$refs.tabsContainer.offsetWidth;
            this.activeTabElement = this.$refs.tabsContainer.querySelector('.is-active');
        });

        // Refresh the active tab indication when the window size changes
        this.$on('window-resize', () => {
            this.tabContainerWidth = this.$refs.tabsContainer.offsetWidth;
            this.refreshIndicator();
        });
    },

    methods: {
        // Called externally from UiTab
        registerTab(tab) {
            this.tabs.push(tab);

            // Select the tab if there's no tab selected (i.e. the tab is the only tab)
            // or the tab's selected prop is true
            if (this.activeTabId === null || tab.selected) {
                this.activeTabId = tab.id;
            }
        },

        // Called externally from UiTab
        handleTabShowChange(tab) {
            // Switch to the nearest available tab if the tab being hidden is currently active
            if (this.activeTabId === tab.id && !tab.show) {
                const newTab = this.findNearestAvailableTab({ preferPrevious: true });

                if (newTab) {
                    this.selectTab(newTab.$el, newTab);
                }
            }

            // Refresh the active tab indicator
            this.refreshIndicator();
        },

        // Called externally from UiTab
        handleTabDisableChange(tab) {
            // Switch to the nearest available tab if the tab being disabled is currently active
            if (this.activeTabId === tab.id && tab.disabled) {
                const newTab = this.findNearestAvailableTab({ preferPrevious: true });

                if (newTab) {
                    this.selectTab(newTab.$el, newTab);
                }
            }
        },

        selectTab(e, tab) {
            // e can be Element (if called by selectPrevious or selectNext) or Event
            // (if called by click listener)
            const newTabElement = e.currentTarget ? e.currentTarget : e;

            // Abort if the tab is disabled or already selected
            if (tab.disabled || this.activeTabElement === newTabElement) {
                return;
            }

            this.activeTabElement = newTabElement;
            this.activeTabId = tab.id;

            this.$emit('tab-change', tab.id);
        },

        selectPreviousTab() {
            // Abort if the current tab is the first tab
            if (this.activeTabIndex === 0) {
                return;
            }

            const previousTab = this.findTabByIndex(this.activeTabIndex, { findPrevious: true });

            if (!previousTab) {
                return;
            }

            this.selectTab(previousTab.$el, previousTab);
            this.activeTabElement.focus();
        },

        selectNextTab() {
            // Abort if the current tab is the last tab
            if (this.activeTabIndex === this.$refs.tabElements.length - 1) {
                return;
            }

            const nextTab = this.findTabByIndex(this.activeTabIndex);

            if (!nextTab) {
                return;
            }

            this.selectTab(nextTab.$el, nextTab);
            this.activeTabElement.focus();
        },

        findTabByIndex(currentTabIndex, options = { findPrevious: false }) {
            let tab = null;

            if (options.findPrevious) {
                for (let i = currentTabIndex - 1; i >= 0; i--) {
                    if (!this.$refs.tabElements[i].disabled && this.$refs.tabElements[i].show) {
                        tab = this.$refs.tabElements[i];
                        break;
                    }
                }
            } else {
                for (let i = currentTabIndex + 1; i < this.$refs.tabElements.length; i++) {
                    if (!this.$refs.tabElements[i].disabled && this.$refs.tabElements[i].show) {
                        tab = this.$refs.tabElements[i];
                        break;
                    }
                }
            }

            return tab;
        },

        findTabById(id) {
            let tab = null;
            const numberOfTabs = this.$refs.tabElements.length;

            for (let i = 0; i <= numberOfTabs; i++) {
                if (id === this.$refs.tabElements[i].id) {
                    tab = this.$refs.tabElements[i];
                    break;
                }
            }

            return tab;
        },

        findNearestAvailableTab(options = { preferPrevious: false }) {
            const tab = this.findTabByIndex(this.activeTabIndex, {
                findPrevious: options.preferPrevious
            });

            if (tab) {
                return tab;
            }

            return this.findTabByIndex(this.activeTabIndex, {
                findPrevious: !options.preferPrevious
            });
        },

        // Used externally to programmatically change the active tab
        setActiveTab(tabId) {
            const tab = this.findTabById(tabId);

            if (tab && !tab.disabled) {
                this.selectTab(tab.$el, tab);
            }
        },

        // Used locally and externally to refresh the active tab indicator position
        refreshIndicator() {
            this.activeTabPosition = {
                left: this.activeTabElement ? this.activeTabElement.offsetLeft : 0,
                width: this.activeTabElement ? this.activeTabElement.offsetWidth : 0
            };
        }
    },

    components: {
        UiTabHeaderItem,
        RenderVnodes: {
            name: 'render-vnodes',
            functional: true,
            props: ['nodes'],
            render(createElement, context) {
                return createElement('div', context.props.nodes);
            }
        }
    },

    mixins: [
        RespondsToWindowResize
    ]
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-tabs {
    margin-bottom: rem-calc(24px);
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

.ui-tabs__active-tab-indicator {
    bottom: 0;
    box-shadow: 0 -1px 2px rgba(black, 0.05);
    height: rem-calc(2px);
    position: absolute;
    transition: all 0.2s ease;
}

.ui-tabs__body {
    background-color: white;
    border-radius: 0;
    border: rem-calc(1px) solid $md-grey-200;
    border-top: 0;
    margin: 0;
    padding: rem-calc(16px);
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
        color: rgba(black, 0.54);
    }

    .ui-tab-header-item__icon {
        color: rgba(black, 0.54);
    }
}

.ui-tabs--text-color-white {
    .ui-tab-header-item {
        color: rgba(white, 0.65);
    }

    .ui-tab-header-item__icon {
        color: rgba(white, 0.65);
    }
}

// ================================================
// Active Text Colors
// ================================================

.ui-tabs--text-color-active-white {
    .ui-tab-header-item.is-active {
        color: white;

        .ui-tab-header-item__icon {
            color: white;
        }
    }
}

.ui-tabs--text-color-active-primary {
    .ui-tab-header-item.is-active {
        color: $brand-primary-color;

        .ui-tab-header-item__icon {
            color: $brand-primary-color;
        }
    }
}

.ui-tabs--text-color-active-accent {
    .ui-tab-header-item.is-active {
        color: $brand-accent-color;

        .ui-tab-header-item__icon {
            color: $brand-accent-color;
        }
    }
}

// ================================================
// Indicator Colors
// ================================================

.ui-tabs--indicator-color-primary {
    .ui-tabs__active-tab-indicator {
        background-color: $brand-primary-color;
    }
}

.ui-tabs--indicator-color-accent {
    .ui-tabs__active-tab-indicator {
        background-color: $brand-accent-color;
    }
}

.ui-tabs--indicator-color-white {
    .ui-tabs__active-tab-indicator {
        background-color: white;
    }
}
</style>
