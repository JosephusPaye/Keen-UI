<template>
    <div class="ui-select" :class="classes">
        <input
            class="ui-select__hidden-input"
            type="hidden"

            :name="name"
            :value="submittedValue"

            v-if="name"
        >

        <div class="ui-select__icon-wrapper" v-if="icon || $slots.icon">
            <slot name="icon">
                <ui-icon :icon="icon"></ui-icon>
            </slot>
        </div>

        <div class="ui-select__content">
            <div
                class="ui-select__label"
                ref="label"

                :tabindex="disabled ? null : '0'"

                @click="toggleDropdown"
                @focus="onFocus"
                @keydown.enter.prevent="openDropdown"
                @keydown.space.prevent="openDropdown"
                @keydown.tab="onBlur"
            >
                <div
                    class="ui-select__label-text"
                    :class="labelClasses"
                    v-if="label || $slots.default"
                >
                    <slot>{{ label }}</slot>
                </div>

                <div class="ui-select__display">
                    <div
                        class="ui-select__display-value"
                        :class="{ 'is-placeholder': !hasDisplayText }"
                    >
                        {{ hasDisplayText ? displayText : (hasFloatingLabel && isLabelInline) ? null : placeholder }}
                    </div>

                    <ui-icon class="ui-select__dropdown-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.984 9.984h10.03L12 15z"/></svg>
                    </ui-icon>
                </div>

                <transition name="ui-select--transition-fade">
                    <div
                        class="ui-select__dropdown"
                        ref="dropdown"
                        tabindex="-1"

                        @keydown.down.prevent="highlightOption(highlightedIndex + 1)"
                        @keydown.enter.prevent.stop="selectHighlighted(highlightedIndex, $event)"
                        @keydown.esc.prevent="closeDropdown()"
                        @keydown.tab="onBlur"
                        @keydown.up.prevent="highlightOption(highlightedIndex - 1)"

                        v-show="showDropdown"
                    >
                        <div
                            class="ui-select__search"

                            @click.stop
                            @keydown.space.stop

                            v-if="hasSearch"
                        >
                            <input
                                autocomplete="off"
                                class="ui-select__search-input"
                                ref="searchInput"
                                type="text"

                                :placeholder="searchPlaceholder"

                                v-model="query"
                            >

                            <ui-icon class="ui-select__search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zm6 0l4.97 4.97-1.5 1.5-4.97-4.97v-.797l-.28-.282c-1.126.984-2.626 1.547-4.22 1.547-3.61 0-6.516-2.86-6.516-6.47S5.906 3 9.516 3s6.47 2.906 6.47 6.516c0 1.594-.564 3.094-1.548 4.22l.28.28h.798z"/>
                                </svg>
                            </ui-icon>

                            <ui-progress-circular
                                class="ui-select__search-progress"
                                :size="20"
                                :stroke="4"
                                v-show="loading"
                            ></ui-progress-circular>
                        </div>

                        <ul class="ui-select__options" ref="optionsList">
                            <ui-select-option
                                ref="options"

                                :highlighted="highlightedIndex === index"
                                :keys="keys"
                                :multiple="multiple"
                                :option="option"
                                :selected="isOptionSelected(option)"
                                :type="type"

                                @click.native.stop="selectOption(option, index)"
                                @mouseover.native.stop="highlightOption(index, { autoScroll: false })"

                                v-for="(option, index) in filteredOptions"
                            >
                                <slot
                                    name="option"

                                    :highlighted="highlightedIndex === index"
                                    :index="index"
                                    :option="option"
                                    :selected="isOptionSelected(option)"
                                ></slot>
                            </ui-select-option>

                            <div class="ui-select__no-results" v-show="hasNoResults">
                                <slot name="no-results">No results found</slot>
                            </div>
                        </ul>
                    </div>
                </transition>
            </div>

            <div class="ui-select__feedback" v-if="hasFeedback">
                <div class="ui-select__feedback-text" v-if="showError">
                    <slot name="error">{{ error }}</slot>
                </div>

                <div class="ui-select__feedback-text" v-else-if="showHelp">
                    <slot name="help">{{ help }}</slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiProgressCircular from './UiProgressCircular.vue';
import UiSelectOption from './UiSelectOption.vue';

import config from './config';
import fuzzysearch from 'fuzzysearch';
import { looseIndexOf, looseEqual } from './helpers/util';
import { scrollIntoView, resetScroll } from './helpers/element-scroll';

export default {
    name: 'ui-select',

    props: {
        name: String,
        value: {
            type: [String, Number, Object, Array],
            required: true
        },
        options: {
            type: Array,
            default() {
                return [];
            }
        },
        placeholder: String,
        icon: String,
        iconPosition: {
            type: String,
            default: 'left' // 'left' or 'right'
        },
        label: String,
        floatingLabel: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'basic' // 'basic' or 'image'
        },
        multiple: {
            type: Boolean,
            default: false
        },
        multipleDelimiter: {
            type: String,
            default: ', '
        },
        hasSearch: {
            type: Boolean,
            default: false
        },
        searchPlaceholder: {
            type: String,
            default: 'Search'
        },
        filter: Function,
        disableFilter: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        noResults: {
            type: Boolean,
            default: false
        },
        keys: {
            type: Object,
            default() {
                return config.data.UiSelect.keys;
            }
        },
        invalid: {
            type: Boolean,
            default: false
        },
        help: String,
        error: String,
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            query: '',
            isActive: false,
            isTouched: false,
            selectedIndex: -1,
            highlightedIndex: -1,
            showDropdown: false,
            initialValue: JSON.stringify(this.value)
        };
    },

    computed: {
        classes() {
            return [
                `ui-select--type-${this.type}`,
                `ui-select--icon-position-${this.iconPosition}`,
                { 'is-active': this.isActive },
                { 'is-invalid': this.invalid },
                { 'is-touched': this.isTouched },
                { 'is-disabled': this.disabled },
                { 'is-multiple': this.multiple },
                { 'has-label': this.hasLabel },
                { 'has-floating-label': this.hasFloatingLabel }
            ];
        },

        labelClasses() {
            return {
                'is-inline': this.hasFloatingLabel && this.isLabelInline,
                'is-floating': this.hasFloatingLabel && !this.isLabelInline
            };
        },

        hasLabel() {
            return Boolean(this.label) || Boolean(this.$slots.default);
        },

        hasFloatingLabel() {
            return this.hasLabel && this.floatingLabel;
        },

        isLabelInline() {
            return this.value.length === 0 && !this.isActive;
        },

        hasFeedback() {
            return Boolean(this.help) || Boolean(this.error);
        },

        showError() {
            return this.invalid && Boolean(this.error);
        },

        showHelp() {
            return !this.showError && Boolean(this.help);
        },

        filteredOptions() {
            if (this.disableFilter) {
                return this.options;
            }

            return this.options.filter((option, index) => {
                if (this.filter) {
                    return this.filter(option, this.query);
                }

                return this.defaultFilter(option, index);
            });
        },

        displayText() {
            if (this.multiple) {
                if (this.value.length > 0) {
                    return this.value
                            .map(value => value[this.keys.label] || value)
                            .join(this.multipleDelimiter);
                }

                return '';
            }

            return this.value ? (this.value[this.keys.label] || this.value) : '';
        },

        hasDisplayText() {
            return Boolean(this.displayText.length);
        },

        hasNoResults() {
            if (this.loading || this.query.length === 0) {
                return false;
            }

            return this.disableFilter ? this.noResults : this.filteredOptions.length === 0;
        },

        submittedValue() {
            // Assuming that if there is no name, then there's no
            // need to computed the submittedValue
            if (!this.name || !this.value) {
                return;
            }

            if (Array.isArray(this.value)) {
                return this.value
                    .map(option => option[this.keys.value] || option)
                    .join(',');
            }

            return this.value[this.keys.value] || this.value;
        }
    },

    watch: {
        filteredOptions() {
            this.highlightedIndex = 0;
            resetScroll(this.$refs.optionsList);
        },

        showDropdown() {
            if (this.showDropdown) {
                this.onOpen();
                this.$emit('dropdown-open');
            } else {
                this.onClose();
                this.$emit('dropdown-close');
            }
        },

        query() {
            this.$emit('query-change', this.query);
        }
    },

    created() {
        if (!this.value || this.value === '') {
            this.setValue(null);
        }
    },

    mounted() {
        document.addEventListener('click', this.onExternalClick);
    },

    beforeDestroy() {
        document.removeEventListener('click', this.onExternalClick);
    },

    methods: {
        setValue(value) {
            value = value ? value : this.multiple ? [] : '';

            this.$emit('input', value);
            this.$emit('change', value);
        },

        highlightOption(index, options = { autoScroll: true }) {
            if (this.highlightedIndex === index || this.$refs.options.length === 0) {
                return;
            }

            const firstIndex = 0;
            const lastIndex = this.$refs.options.length - 1;

            if (index < firstIndex) {
                index = lastIndex;
            } else if (index > lastIndex) {
                index = firstIndex;
            }

            this.highlightedIndex = index;

            if (options.autoScroll) {
                this.scrollOptionIntoView(this.$refs.options[index].$el);
            }
        },

        selectHighlighted(index, e) {
            if (this.$refs.options.length > 0) {
                e.preventDefault();
                this.selectOption(this.$refs.options[index].option, index);
            }
        },

        selectOption(option, index, options = { autoClose: true }) {
            const shouldSelect = this.multiple && !this.isOptionSelected(option);

            if (this.multiple) {
                this.updateOption(option, { select: shouldSelect });
            } else {
                this.setValue(option);
                this.selectedIndex = index;
            }

            this.$emit('select', option, {
                selected: this.multiple ? shouldSelect : true
            });

            this.highlightedIndex = index;
            this.clearQuery();

            if (!this.multiple && options.autoClose) {
                this.closeDropdown();
            }
        },

        isOptionSelected(option) {
            if (this.multiple) {
                return looseIndexOf(this.value, option) > -1;
            }

            return looseEqual(this.value, option);
        },

        updateOption(option, options = { select: true }) {
            let value = [];
            let updated = false;
            const i = looseIndexOf(this.value, option);

            if (options.select && i < 0) {
                value = this.value.concat(option);
                updated = true;
            }

            if (!options.select && i > -1) {
                value = this.value.slice(0, i).concat(this.value.slice(i + 1));
                updated = true;
            }

            if (updated) {
                this.setValue(value);
            }
        },

        defaultFilter(option) {
            const query = this.query.toLowerCase();
            let text = option[this.keys.label] || option;

            if (typeof text === 'string') {
                text = text.toLowerCase();
            }

            return fuzzysearch(query, text);
        },

        clearQuery() {
            this.query = '';
        },

        toggleDropdown() {
            this[this.showDropdown ? 'closeDropdown' : 'openDropdown']();
        },

        openDropdown() {
            if (this.disabled) {
                return;
            }

            this.showDropdown = true;

            // IE: clicking label doesn't focus the select element
            // to set isActive to true
            if (!this.isActive) {
                this.isActive = true;
            }
        },

        closeDropdown(options = { autoBlur: false }) {
            this.showDropdown = false;

            if (!this.isTouched) {
                this.isTouched = true;
                this.$emit('touch');
            }

            if (options.autoBlur) {
                this.isActive = false;
            } else {
                this.$refs.label.focus();
            }
        },

        onFocus(e) {
            if (this.isActive) {
                return;
            }

            this.isActive = true;
            this.$emit('focus', e);
        },

        onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);

            if (this.showDropdown) {
                this.closeDropdown({ autoBlur: true });
            }
        },

        onOpen() {
            this.$nextTick(() => {
                this.$refs[this.hasSearch ? 'searchInput' : 'dropdown'].focus();
                this.scrollOptionIntoView(this.$refs.optionsList.querySelector('.is-selected'));
            });
        },

        onClose() {
            this.highlightedIndex = this.multiple ? -1 : this.selectedIndex;
        },

        onExternalClick(e) {
            if (!this.$el.contains(e.target)) {
                if (this.showDropdown) {
                    this.closeDropdown({ autoBlur: true });
                } else if (this.isActive) {
                    this.isActive = false;
                }
            }
        },

        scrollOptionIntoView(optionEl) {
            scrollIntoView(optionEl, {
                container: this.$refs.optionsList,
                marginTop: 180
            });
        },

        reset() {
            this.setValue(JSON.parse(this.initialValue));
            this.clearQuery();
            this.resetTouched();

            this.selectedIndex = -1;
            this.highlightedIndex = -1;
        },

        resetTouched(options = { touched: false }) {
            this.isTouched = options.touched;
        }
    },

    components: {
        UiIcon,
        UiProgressCircular,
        UiSelectOption
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-select {
    align-items: flex-start;
    display: flex;
    font-family: $font-stack;
    margin-bottom: $ui-input-margin-bottom;
    outline: none;
    position: relative;

    &:hover:not(.is-disabled) {
        .ui-select__label-text {
            color: $ui-input-label-color--hover;
        }

        .ui-select__display {
            border-bottom-color: $ui-input-border-color--hover;
        }

        .ui-select__dropdown-button {
            color: $ui-input-button-color--hover;
        }
    }

    &.is-active:not(.is-disabled) {
        .ui-select__label-text,
        .ui-select__icon-wrapper .ui-icon {
            color: $ui-input-label-color--active;
        }

        .ui-select__display {
            border-bottom-color: $ui-input-border-color--active;
            border-bottom-width: $ui-input-border-width--active;
        }
    }

    &.has-floating-label {
        .ui-select__label-text {
            // Behaves like a block, but width is the width of its content.
            // Needed here so label doesn't overflow parent when scaled.
            display: table;

            &.is-inline {
                color: $ui-input-label-color; // So the hover styles don't override it
                cursor: pointer;
                transform: translateY($ui-input-label-top--inline) scale(1.1);
            }

            &.is-floating {
                transform: translateY(0) scale(1);
            }
        }
    }

    &.has-label {
        .ui-select__icon-wrapper {
            padding-top: $ui-input-icon-margin-top--with-label;
        }

        .ui-select__dropdown-button {
            top: $ui-input-button-margin-top--with-label;
        }
    }

    &:not(.is-multiple) {
        .ui-select__display {
            height: $ui-input-height;
            line-height: 1;
        }
    }

    &.is-multiple {
        .ui-select__display {
            line-height: 1.4;
            padding-bottom: rem-calc(4px);
            padding-top: rem-calc(4px);
        }
    }

    &.is-invalid:not(.is-disabled) {
        .ui-select__label-text,
        .ui-select__icon-wrapper .ui-icon {
            color: $ui-input-label-color--invalid;
        }

        .ui-select__display {
            border-bottom-color: $ui-input-border-color--invalid;
        }

        .ui-select__feedback {
            color: $ui-input-feedback-color--invalid;
        }
    }

    &.is-disabled {
        .ui-select__display {
            border-bottom-style: $ui-input-border-style--disabled;
            border-bottom-width: $ui-input-border-width--active;
            color: $ui-input-text-color--disabled;
            cursor: default;
        }

        .ui-select__dropdown-button,
        .ui-select__display-value.is-placeholder {
            color: $ui-input-text-color--disabled;
            opacity: $ui-input-button-opacity--disabled;
        }

        .ui-select__icon-wrapper .ui-icon {
            opacity: $ui-input-icon-opacity--disabled;
        }

        .ui-select__feedback {
            opacity: $ui-input-feedback-opacity--disabled;
        }
    }
}

.ui-select__label {
    display: block;
    margin: 0;
    outline: none;
    padding: 0;
    position: relative;
    width: 100%;
}

.ui-select__icon-wrapper {
    flex-shrink: 0;
    margin-right: $ui-input-icon-margin-right;
    padding-top: $ui-input-icon-margin-top;

    .ui-icon {
        color: $ui-input-icon-color;
    }
}

.ui-select__content {
    flex-grow: 1;
}

.ui-select__label-text {
    color: $ui-input-label-color;
    font-size: $ui-input-label-font-size;
    line-height: $ui-input-label-line-height;
    margin-bottom: $ui-input-label-margin-bottom;
    transform-origin: left;
    transition: color 0.1s ease, transform 0.2s ease;
}

.ui-select__display {
    align-items: center;
    border: none;
    border-bottom-color: $ui-input-border-color;
    border-bottom-style: solid;
    border-bottom-width: $ui-input-border-width;
    color: $ui-input-text-color;
    cursor: pointer;
    display: flex;
    font-family: $font-stack;
    font-size: $ui-input-text-font-size;
    font-weight: normal;
    padding: 0;
    transition: border 0.1s ease;
    user-select: none;
    width: 100%;
}

.ui-select__display-value {
    flex-grow: 1;

    &.is-placeholder {
        color: $hint-text-color;
    }
}

.ui-select__dropdown-button {
    color: $ui-input-button-color;
    font-size: $ui-input-button-size;
    margin-left: auto;
    margin-right: rem-calc(-4px);
}

.ui-select__dropdown {
    background-color: white;
    box-shadow: 1px 2px 8px $md-grey-600;
    color: $primary-text-color;
    display: block;
    list-style-type: none;
    margin: 0;
    margin-bottom: rem-calc(8px);
    min-width: rem-calc(180px);
    outline: none;
    padding: 0;
    position: absolute;
    width: 100%;
    z-index: $z-index-dropdown;
}

.ui-select__search-input {
    background: none;
    border: none;
    border-bottom-color: $ui-input-border-color;
    border-bottom-style: solid;
    border-bottom-width: $ui-input-border-width;
    border-radius: 0;
    color: $ui-input-text-color;
    cursor: auto;
    font-family: $font-stack;
    font-size: $ui-input-text-font-size - rem-calc(1px);
    font-weight: normal;
    height: $ui-input-height + rem-calc(4px);
    outline: none;
    padding: rem-calc(0 12px);
    padding-left: rem-calc(40px);
    transition: border 0.1s ease;
    width: 100%;

    // Hide Edge and IE input clear button
    &::-ms-clear {
        display: none;
    }

    &:focus + .ui-select__search-icon {
        color: $ui-input-label-color--active;
    }
}

.ui-select__search-icon,
.ui-select__search-progress {
    position: absolute;
    top: rem-calc(8px);
}

.ui-select__search-icon {
    color: $ui-input-icon-color;
    font-size: rem-calc(20px);
    left: rem-calc(12px);
}

.ui-select__search-progress {
    right: rem-calc(12px);
}

.ui-select__options {
    background-color: white;
    color: $primary-text-color;
    display: block;
    list-style-type: none;
    margin: 0;
    max-height: rem-calc(256px);
    min-width: 100%;
    overflow-y: auto;
    padding: 0;
    position: relative;
}

.ui-select__no-results {
    color: $secondary-text-color;
    font-size: rem-calc(14px);
    padding: rem-calc(8px 12px);
    width: 100%;
}

.ui-select__feedback {
    color: $ui-input-feedback-color;
    font-size: $ui-input-feedback-font-size;
    line-height: $ui-input-feedback-line-height;
    margin: 0;
    padding-top: $ui-input-feedback-padding-top;
    position: relative;
}

// ================================================
// Icon Positions
// ================================================

.ui-select--icon-position-right {
    .ui-select__icon-wrapper {
        margin-left: rem-calc(8px);
        margin-right: 0;
        order: 1;
    }
}

// ================================================
// Transitions
// ================================================

.ui-select--transition-fade-enter-active,
.ui-select--transition-fade-leave-active {
    transition: opacity 0.2s ease;
}

.ui-select--transition-fade-enter,
.ui-select--transition-fade-leave-active {
    opacity: 0;
}
</style>
