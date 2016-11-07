<template>
    <div
        class="ui-select" :id="id" :class="{
            'disabled': disabled, 'invalid': !valid, 'dirty': dirty, 'active': active,
            'has-label': !hideLabel, 'icon-right': iconRight
        }"
    >
        <div class="ui-select-icon-wrapper" v-if="showIcon">
            <ui-icon :icon="icon" class="ui-select-icon"></ui-icon>
        </div>

        <div class="ui-select-content">
            <div
                class="ui-select-label" :tabindex="disabled ? null : '0'" ref="label"
                @focus="focus" @keydown.tab="blur" @click="toggle" @keydown.space.prevent="open"
                @keydown.enter.prevent="open"
            >
                <div class="ui-select-label-text" v-text="label" v-if="!hideLabel"></div>

                <div class="ui-select-display">
                    <div
                        class="ui-select-value" :class="{ placeholder: !hasDisplayText }"
                        v-text="hasDisplayText ? displayText : placeholder"
                    ></div>

                    <ui-icon icon="arrow_drop_down" class="ui-select-dropdown-icon"></ui-icon>
                </div>

                <div
                    class="ui-select-dropdown" tabindex="-1" v-show="showDropdown" ref="dropdown"
                    @keydown.esc.prevent="close()" @keydown.tab="close()"
                    @keydown.up.prevent="highlight(highlightedIndex - 1)"
                    @keydown.down.prevent="highlight(highlightedIndex + 1)"
                    @keydown.enter.prevent.stop="selectHighlighted(highlightedIndex, $event)"
                >
                    <div class="ui-select-search" v-if="showSearch" @click.stop @keydown.space.stop>
                        <input
                            class="ui-select-search-input" type="text" ref="searchInput"
                            :placeholder="searchPlaceholder" v-model="query" autocomplete="off"
                        >

                        <ui-progress-circular
                            class="ui-select-search-spinner" :size="24" :stroke="4" :show="loading"
                        ></ui-progress-circular>
                    </div>

                    <ul class="ui-select-options" ref="optionsList">
                        <ui-select-option
                            v-for="(option, index) in filteredOptions" ref="options"
                            :option="option" :type="type" :show-checkbox="multiple"
                            :keys="keys" @click.native.stop.prevent="select(option, index)"
                            @mouseover.native.stop="highlight(index, true)"

                            :highlighted="highlightedIndex === index"
                            :selected="isSelected(option)"
                        ></ui-select-option>

                        <li class="ui-select-no-results" v-if="nothingFound">No results found</li>
                    </ul>
                </div>
            </div>

            <div class="ui-select-feedback" v-if="showFeedback">
                <div
                    class="ui-select-error-text" transition="ui-select-feedback-toggle"
                    v-text="validationError" v-if="!hideValidationErrors && !valid"
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
import merge from 'merge-options'
import fuzzysearch from 'fuzzysearch'

import { scrollIntoView, resetScroll } from './helpers/element-scroll'

import UiIcon from './UiIcon.vue'
import UiSelectOption from './UiSelectOption.vue'
import UiProgressCircular from './UiProgressCircular.vue'
import EventBus from './helpers/event-bus'
import HasTextInput from './mixins/HasTextInput'
import ValidatesInput from './mixins/ValidatesInput'

export default {
    name: 'ui-select',

    props: {
        value: {
            type: [Object, Array, String, Number],
        },
        default: {
            type: [Object, Array, String, Number],
            default: null
        },
        options: {
            type: Array,
            default: []
        },
        type: String,
        showSearch: {
            type: Boolean,
            default: false
        },
        searchPlaceholder: {
            type: String,
            default: 'Search'
        },
        multiple: {
            type: Boolean,
            default: false
        },
        multipleDelimiter: {
            type: String,
            default: ', '
        },
        optionsDynamic: {
            type: Boolean,
            default: false
        },
        optionsLoaded: {
            type: Boolean,
            default: true
        },
        loading: {
            type: Boolean,
            default: false
        },
        keys: {
            type: Object,
            default() {
                return {
                    text: 'text',
                    value: 'value',
                    image: 'image'
                };
            }
        },
        filter: Function
    },

    data() {
        return {
            query: '',
            selectedIndex: -1,
            highlightedIndex: -1,
            showDropdown: false,
            ignoreQueryChange: false,
            previewFilteredOptions: null,
        };
    },

    computed: {
        filteredOptions() {
            if (this.optionsDynamic) {
                return this.options;
            }

            return this.options.filter(this.search);
        },

        displayText() {
            if (this.multiple && this.value.length) {
                let labels = this.value.map((value) => value[this.keys.text] || value);

                return labels.join(this.multipleDelimiter);
            }

            return this.value ? (this.value[this.keys.text] || this.value) : '';
        },

        hasDisplayText() {
            return this.displayText && Boolean(this.displayText.length);
        },

        showIcon() {
            return Boolean(this.icon);
        },

        nothingFound() {
            if (this.optionsDynamic && !this.optionsLoaded) {
                return false;
            }

            if (this.query.length && !this.loading) {
                return ! Boolean(this.filteredOptions.length);
            }

            return false;
        }
    },

    watch: {
        filteredOptions() {
            if (this.previewFilteredOptions.length !== this.filteredOptions.length) {
                this.highlightedIndex = 0;
                resetScroll(this.$refs.optionsList);
                this.previewFilteredOptions = this.filteredOptions
            }
        },

        showDropdown() {
            if (this.showDropdown) {
                this.opened();
                this.$emit('opened');
            } else {
                this.closed();
                this.$emit('closed');
            }
        },

        query() {
            if (!this.ignoreQueryChange) {
                this.$emit('query-changed', this.query);
            }
        }
    },

    created() {
        this.initValue();

        let errorMessages = {
            min: 'You must select at least :min options.',
            max: 'You must select no more than :max options.',
            between: 'You must select at least :min but no more than :max options.'
        };

        if (this.validationRules) {
            if (this.validationMessages) {
                this._validationMessages = merge(errorMessages, this.validationMessages);
            } else {
                this._validationMessages = errorMessages
            }
        }
    },

    mounted() {
        document.addEventListener('click', this.closeOnExternalClick)
        EventBus.$on('ui-select::set-selected', (value, id) => {
            // Abort if event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return;
            }

            this.default = value;
            this.initValue();
        })
        EventBus.$on('ui-input::reset', (id) => {
            // Abort if reset event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return;
            }

            // Reset state
            this.$emit('input', this.initialValue)
            this.dirty = false;
            this.valid = true;

            this.clearQuery();
            this.selectedIndex = -1;
            this.highlightedIndex = -1;
        })
    },

    beforeDestroy() {
        document.removeEventListener('click', this.closeOnExternalClick);
    },

    methods: {
        initValue() {
            this.previewFilteredOptions = this.filteredOptions
            if (this.default) {
                let defaults = Array.isArray(this.default) ? this.default : [this.default];

                if (defaults.length) {
                    this.setDefaultValue(defaults);
                }
            }
        },

        search(option) {
            if (this.filter) {
                return this.filter(option, this.query);
            }

            let query = this.query.toLowerCase();
            let text = option[this.keys.text] || option;

            if (typeof text === 'string') {
                text = text.toLowerCase();
            }

            return fuzzysearch(query, text);
        },

        clearQuery() {
            this.ignoreQueryChange = true;

            this.$nextTick(() => {
                this.query = '';

                this.$nextTick(() => {
                    this.ignoreQueryChange = false;
                });
            });
        },

        select(option, index, close = true) {

            if (this.multiple) {

                if (this.isSelected(option)) {
                    this.deselect(option);
                } else {
                    const arr = this.value.slice(0)
                    arr.push(option)

                    this.$emit('input', arr)
                }
            } else {
                this.$emit('input', option)
                this.selectedIndex = index;
            }

            this.$emit('selected', option);

            this.highlightedIndex = index;
            this.clearQuery();
            this.validate();

            if (!this.multiple && close) {
                this.close();
            }
        },

        deselect(option) {
            const arr = this.value.slice(0)
            arr.splice(this.value.indexOf(option) ,1)
            this.$emit('input', arr)
        },

        isSelected(option) {
            if (this.multiple) {
                return this.value.indexOf(option) > -1;
            }

            return this.value === option;
        },

        selectHighlighted(index, e) {
            if (this.$refs.options.length) {
                e.preventDefault();
                this.select(this.$refs.options[index].option, index);
            }
        },

        highlight(index, preventScroll) {
            if (this.highlightedIndex === index || this.$refs.options.length === 0) {
                return;
            }

            let firstIndex = 0;
            let lastIndex = this.$refs.options.length - 1;

            if (index < firstIndex) {
                index = lastIndex;
            } else if (index > lastIndex) {
                index = firstIndex;
            }

            this.highlightedIndex = index;

            if (!preventScroll) {
                this.scrollOptionIntoView(this.$refs.options[index].$el);
            }
        },

        focus() {
            this.active = true;
        },

        blur() {
            this.active = false;

            if (this.showDropdown) {
                this.close();
            }
        },

        toggle() {
            if (this.showDropdown) {
                this.close();
            } else {
                this.open();
            }
        },

        open() {
            if (this.disabled) {
                return;
            }

            this.showDropdown = true;
        },

        opened() {
            this.$nextTick(() => {
                if (this.showSearch) {
                    this.$refs.searchInput.focus();
                } else {
                    this.$refs.dropdown.focus();
                }

                this.scrollOptionIntoView(this.$refs.optionsList.querySelector('.selected'));
            });
        },

        close(deactivate) {
            this.showDropdown = false;

            if (!this.dirty) {
                this.dirty = true;
            }

            if (deactivate) {
                this.active = false;
            } else {
                this.$refs.label.focus();
            }
        },

        closeOnExternalClick(e) {
            if (! this.$el.contains(e.target) && (this.showDropdown || this.active)) {
                this.close(true);
            }
        },

        closed() {
            this.validate();

            if (this.multiple) {
                this.highlightedIndex = -1;
            } else {
                this.highlightedIndex = this.selectedIndex;
            }
        },

        setDefaultValue(defaults) {
            let optionValue;
            let defaultOptionValue;
            let arr = []

            for (let i = 0; i < defaults.length; i++) {
                defaultOptionValue = defaults[i][this.keys.value] || defaults[i];
                for (let j = 0; j < this.options.length; j++) {
                    optionValue = this.options[j][this.keys.value] || this.options[j];

                    if (optionValue === defaultOptionValue) {
                        arr.push(this.options[j])
                        break;
                    }
                }
            }
            this.$emit('input', arr.length > 1 ? arr : arr[0])
        },

        scrollOptionIntoView(optionEl) {
            scrollIntoView(optionEl, this.$refs.optionsList, 80);
        }
    },

    components: {
        UiIcon,
        UiSelectOption,
        UiProgressCircular
    },

    mixins: [
        HasTextInput,
        ValidatesInput
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
            cursor: default;
            color: $input-color-disabled;
            border-bottom-style: dashed;
        }

        .ui-select-dropdown-icon,
        .ui-select-value.placeholder {
            opacity: 0.6;
            color: $input-color-disabled;
        }

        .ui-select-icon {
            opacity: 0.6;
        }

        .ui-select-feedback {
            opacity: 0.8;
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
    height: 0; // IE
    min-height: 32px;
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

.ui-select-value {
    flex-grow: 1;
    line-height: 1.4;

    &.placeholder {
        color: $md-dark-hint;
    }
}

.ui-select-dropdown-icon {
    margin-left: auto;
    margin-right: -4px;
    color: $input-clear-button-color;
}

.ui-select-dropdown {
    outline: none;
    width: 100%;
    min-width: 180px;
    display: block;
    position: absolute;
    padding: 0;
    margin: 0;
    margin-bottom: 8px;
    list-style-type: none;
    box-shadow: 1px 2px 8px $md-grey-600;
    background-color: white;
    color: $md-dark-text;
    transition: left 0.1s ease-in-out;
    z-index: $z-index-dropdown;
}

.ui-select-search-input {
    margin: 0;
    border: none;
    outline: none;
    background: none;
    padding: 0 12px;
    width: 100%;
    height: 42px;
    font-size: 15px;
    border-bottom: 1px solid $input-border-color;

    // Hide Edge and IE input clear button
    &::-ms-clear {
        display: none;
    }
}

.ui-select-search-spinner {
    position: absolute;
    top: 8px;
    right: 12px;
}

.ui-select-options {
    position: relative;
    display: block;
    min-width: 100%;
    max-height: 256px;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    list-style-type: none;
    background-color: white;
    color: $md-dark-text;
}

.ui-select-no-results {
    padding: 8px 12px;
    font-size: 14px;
    color: $md-dark-secondary;
    width: 100%;
}

.ui-select-feedback {
    margin: 0;
    height: 20px;
    overflow: hidden;
    position: relative;
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
</style>
