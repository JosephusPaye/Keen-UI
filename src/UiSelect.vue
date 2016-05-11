<template>
    <div
        class="ui-select" :tabindex="disabled ? null : '0'" v-el:select
        :class="{
            'disabled': disabled, 'invalid': !valid, 'dirty': dirty, 'active': active,
            'has-label': !hideLabel, 'icon-right': iconRight
        }"

        @focus="focussed" @keydown.tab="blurred" @keydown.space.prevent="open"
        @keydown.enter.prevent="open"
    >
        <input type="hidden" :value="value" :name="name">

        <div class="ui-select-icon-wrapper" v-if="showIcon">
            <ui-icon :icon="icon" class="ui-select-icon"></ui-icon>
        </div>

        <div class="ui-select-content">
            <label
                class="ui-select-label" v-el:trigger
            >
                <div class="ui-select-label-text" v-text="label" v-if="!hideLabel"></div>

                <div class="ui-select-display">
                    <div
                        class="ui-select-value" :class="{ placeholder: !hasDisplayText }"
                        v-text="hasDisplayText ? displayText : placeholder"
                    ></div>

                    <ui-icon icon="arrow_drop_down" class="ui-select-dropdown-icon"></ui-icon>
                </div>
            </label>

            <ui-popover
                class="ui-select-popover" :trigger="$els.trigger" v-ref:popover
                @opened="opened" @closed="closed"

                @keydown.up.prevent="highlight(highlightedIndex - 1)"
                @keydown.down.prevent="highlight(highlightedIndex + 1)"
                @keydown.enter.prevent="selectHighlighted(highlightedIndex, $event)"
            >
                <div class="ui-select-search" v-if="showSearch">
                    <input
                        type="text" class="ui-select-search-input" v-model="query"
                        v-el:search-input

                        @keydown.up="highlight(highlightedIndex - 1)"
                        @keydown.down="highlight(highlightedIndex + 1)"
                        @keydown.enter="selectHighlighted(highlightedIndex, $event)"
                    >
                </div>

                <ul class="ui-select-options">
                    <ui-select-option
                        :option="option" :partial="partial" @click="select(option, index)"
                        @mouseover.stop="highlight(index)" :highlighted="highlightedIndex === index"
                        :selected="selectedId === option.value"

                        v-for="(index, option) in filteredOptions" v-ref:options
                    ></ui-select-option>

                    <li class="no-results" v-if="!filteredOptions.length">No results found</li>
                </ul>
            </ui-popover>

            <div class="ui-select-feedback" v-if="showFeedback">
                <div
                    class="ui-select-error-text" transition="ui-select-feedback-toggle"
                    v-text="validationError" v-show="!hideValidationErrors && !valid"
                ></div>

                <div
                    class="ui-select-help-text" transition="ui-select-feedback-toggle"
                    v-text="helpText" v-else
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import Validator from 'validatorjs';
import fuzzysearch from 'fuzzysearch';

import UiIcon from './UiIcon.vue';
import UiPopover from './UiPopover.vue';
import UiSelectOption from './UiSelectOption.vue';

import HasTextInput from './mixins/HasTextInput';

export default {
    name: 'ui-select',

    props: {
        options: {
            type: Array,
            default: []
        },
        partial: String,
        showSearch: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            query: '',
            selectedId: -1,
            displayText: '',
            selectedIndex: -1,
            highlightedIndex: -1,
            ignoreQueryChange: false
        };
    },

    computed: {
        showIcon() {
            return Boolean(this.icon);
        },

        hasDisplayText() {
            return Boolean(this.displayText.length);
        },

        filteredOptions() {
            return this.options.filter(this.search);
        }
    },

    events: {
        'ui-input::reset'(id) {
            // Abort if reset event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return;
            }

            // Reset state
            this.value = this.initialValue;
            this.displayText = '';
            this.dirty = false;
            this.valid = true;
        }
    },

    watch: {
        query() {
            if (!this.ignoreQueryChange) {
                this.highlightedIndex = 0;
            }
        }
    },

    methods: {
        search(option) {
            let text = option.text.toLowerCase();
            let query = this.query.toLowerCase();

            return fuzzysearch(query, text);
        },

        select(option, index) {
            this.value = option.value;
            this.selectedId = option.value;
            this.displayText = option.text;

            if (this.validationRules) {
                this.validate();
            }

            this.clearQuery();

            this.selectedIndex = index;
            this.highlightedIndex = index;

            this.close();
        },

        clearQuery() {
            this.ignoreQueryChange = true;

            this.query = '';

            this.$nextTick(() => {
                this.ignoreQueryChange = false;
            });
        },

        highlight(index) {
            if (this.highlightedIndex === index) {
                return;
            }

            if (index < 0) {
                index = this.$refs.options.length - 1;
            } else if (index >= this.$refs.options.length) {
                index = 0;
            }

            this.highlightedIndex = index;
        },

        selectHighlighted(index, e) {
            if (this.$refs.options.length) {
                e.preventDefault();
                this.select(this.$refs.options[index].option, index);
            }
        },

        open() {
            this.$refs.popover.drop.open();
        },

        close() {
            this.$refs.popover.drop.close();
            this.validate();
        },

        focussed() {
            this.active = true;
        },

        blurred() {
            this.active = false;

            if (!this.dirty) {
                this.dirty = true;
            }
        },

        opened() {
            if (this.showSearch) {
                this.$els.searchInput.focus();
            }
        },

        closed() {
            this.highlightedIndex = this.selectedIndex;
            this.active = false;
        },

        validate() {
            if (!this.validationRules || !this.dirty) {
                return;
            }

            let data = {
                value: this.value
            };

            let rules = {
                value: this.validationRules
            };

            let validation = new Validator(data, rules, this.validationMessages);
            validation.setAttributeNames({ value: this.name.replace(/_/g, ' ') });

            this.valid = validation.passes();

            if (!this.valid) {
                this.validationError = validation.errors.first('value');
            }
        }
    },

    components: {
        UiIcon,
        UiPopover,
        UiSelectOption
    },

    mixins: [
        HasTextInput
    ]
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-select {
    font-family: $font-stack;
    display: flex;
    position: relative;
    margin-bottom: 12px;
    align-items: flex-start;
    outline: none;

    &:hover:not(.disabled) {
        .ui-select-label-text {
            color: $input-label-color-hover;
        }

        .ui-select-display {
            border-bottom-color: $input-border-color-hover;
        }

        .ui-select-dropdown-icon {
            color: $input-clear-button-color-hover;
        }
    }

    &.active:not(.disabled) {
        .ui-select-label-text,
        .ui-select-icon {
            color: $input-label-color-active;
        }

        .ui-select-display {
            border-bottom-width: 2px;
            border-bottom-color: $input-border-color-active;
        }
    }

    &.has-label {
        .ui-select-icon-wrapper {
            padding-top: 20px;
        }

        .ui-select-dropdown-icon {
            top: 20px;
        }
    }

    &.icon-right {
        .ui-select-icon-wrapper {
            order: 1;
            margin-left: 8px;
            margin-right: 0;
        }
    }

    &.invalid:not(.disabled) {
        .ui-select-label-text,
        .ui-select-icon {
            color: $input-label-color-invalid;
        }

        .ui-select-display {
            border-bottom-color: $input-border-color-invalid;
        }
    }

     &.disabled {
        .ui-select-display {
            color: $input-color-disabled;
            border-bottom-style: dashed;
        }

        .ui-select-icon {
            opacity: 0.6;
        }
    }
}

.ui-select-icon-wrapper {
    height: 24px;
    flex-shrink: 0;
    margin-right: 12px;
    padding-top: 4px;
}

.ui-select-icon {
    color: $input-label-color;
}

.ui-select-content {
    flex-grow: 1;
}

.ui-select-label {
    outline: none;
    display: block;
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
}

.ui-select-label-text {
    font-size: 14px;
    line-height: 1;
    margin-bottom: 2px;
    color: $input-label-color;
    transition: color 0.1s ease;
}

.ui-select-display {
    cursor: pointer;
    outline: none;
    border: none;
    padding: 0;

    display: flex;
    align-items: center;

    width: 100%;
    height: 32px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: $input-border-color;

    transition: border 0.1s ease;

    line-height: 1;
    color: $input-color;
    font-weight: normal;
    font-size: 16px;
    font-family: $font-stack;
}

.ui-select-value.placeholder {
    color: $md-dark-hint;
}

.ui-select-dropdown-icon {
    position: absolute;
    right: -7px;
    top: 4px;
    color: $input-clear-button-color;
}

.ui-select-feedback {
    margin: 0;
    height: 20px;
    overflow: hidden;
    position: relative;
    overflow: hidden;
    font-size: 14px;
    padding-top: 4px;
}

.ui-select-help-text {
    color: $input-help-color;
    line-height: 1;
}

.ui-select-error-text {
    position: absolute;
    color: $input-error-color;
    line-height: 1;
}

.ui-select-feedback-toggle-transition {
    transition-property: opacity, margin-top;
    transition-duration: 0.3s;
    opacity: 1;
    margin-top: 0;
}

.ui-select-feedback-toggle-enter,
.ui-select-feedback-toggle-leave {
   opacity: 0;
   margin-top: -20px;
}

.ui-select-popover {
    padding: 0;
    min-width: 200px;
}

.ui-select-search-input {
    margin: 0;
    border: none;
    outline: none;
    padding: 0 12px;
    height: 42px;
    font-size: 15px;
    border-bottom: 1px solid $input-border-color;

    &:hover {
        border-bottom: 1px solid $input-border-color-hover;
    }
}

.ui-select-options {
    min-width: 100%;
    display: block;
    padding: 0;
    margin: 0;
    list-style-type: none;
    background-color: white;
    color: $md-dark-text;

    .no-results {
        padding: 8px 12px;
        font-size: 14px;
        color: $md-dark-secondary;
    }
}

.ui-select-option {
    max-height: 42px;
}
</style>
