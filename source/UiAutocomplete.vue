<template>
    <div
        class="ui-autocomplete"
        :class="{
            'disabled': disabled, 'invalid': !valid, 'dirty': dirty, 'active': active,
            'has-label': !hideLabel, 'icon-right': iconRight
        }"
    >
        <div class="ui-autocomplete-icon-wrapper" v-if="showIcon">
            <ui-icon :icon="icon" class="ui-autocomplete-icon"></ui-icon>
        </div>

        <div class="ui-autocomplete-content">
            <label class="ui-autocomplete-label" @click="openDropdown">
                <div class="ui-autocomplete-label-text" v-text="label" v-if="!hideLabel"></div>

                <ui-icon
                    class="ui-autocomplete-clear-button" icon="&#xE5CD" title="Clear"
                    @click="clearSearch" v-show="searchQuery.length"
                ></ui-icon>

                <input
                    class="ui-autocomplete-input" :placeholder="placeholder" :name="name" :id="id"
                    autocomplete="off" @focus="focus" @blur="blur" v-model="searchQuery"
                    v-disabled="disabled" v-el:input
                >
            </label>

            <div class="ui-autocomplete-feedback" v-if="showFeedback">
                <div
                    class="ui-autocomplete-error-text" v-text="validationError"
                    transition="ui-autocomplete-feedback-toggle"
                    v-show="!hideValidationErrors && !valid"
                ></div>

                <div
                    class="ui-autocomplete-help-text" transition="ui-autocomplete-feedback-toggle"
                    v-text="helpText" v-else
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import horsey from 'horsey';

import UiIcon from './UiIcon.vue';

import HasTextInput from './mixins/HasTextInput';

export default {
    name: 'ui-autocomplete',

    props: {
        suggestions: {
            type: Array,
            default: []
        },
        openOnClick: {
            type: Boolean,
            default: false
        },
        render: Function,
        limit: {
            type: Number,
            default: 8
        }
    },

    data() {
        return {
            searchQuery: '',
            horsey: null
        };
    },

    computed: {
        showIcon() {
            return Boolean(this.icon);
        }
    },

    ready() {
        // Set the validation error, only shown when this.valid is set to false
        if (this.validationMessages && this.validationMessages.required) {
            this.validationError = this.validationMessages.required;
        } else {
            this.validationError = 'The ' + this.name.replace(/_/g, ' ') + ' field is required.';
        }

        // Instantiate horsey instance if suggestions are available
        if (this.suggestions.length) {
            this.setupDropdown();
        }
    },

    beforeDestroy() {
        if (this.horsey) {
            this.horsey.destroy();
        }
    },

    events: {
        'ui-input::reset'(id) {
            // Abort if reset event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return;
            }

            // Blur input before resetting to avoid "required" errors
            // when input is blurred after reset
            if (document.activeElement === this.$els.input) {
                document.activeElement.blur();
            }

            // Reset state
            this.searchQuery = '';
            this.value = this.initialValue;
            this.dirty = false;
            this.valid = true;
        },

        'ui-dropdown::reposition'(id) {
            // Abort if reset event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return;
            }

            if (this.horsey) {
                if (this.horsey.list) {
                    this.horsey.list.style.width = this.$els.input.offsetWidth + 'px';
                }

                this.horsey.refreshPosition();
            }
        }
    },

    watch: {
        suggestions() {
            // Refresh suggestions if a dropdown instance is already available
            if (this.horsey) {
                this.updateSuggestions();
            } else {
                // Otherwise, initialize now if new suggestions are available
                if (this.suggestions.length) {
                    this.setupDropdown();
                }
            }
        }
    },

    methods: {
        setupDropdown() {
            this.setInitialText();

            this.horsey = horsey(this.$els.input, {
                render: this.render ? this.render : null,
                suggestions: this.suggestions,
                autoHideOnClick: true,
                limit: this.limit,
                set: this.select
            });

            this.horsey.list.style.width = this.$els.input.offsetWidth + 'px';
        },

        updateSuggestions() {
            this.horsey.clear();
            this.suggestions.forEach(this.horsey.add);
        },

        openDropdown() {
            if (this.horsey && this.openOnClick) {
                this.horsey.show();
            }
        },

        setInitialText() {
            if (!this.value || this.value === '') {
                return;
            }

            let initialText = this.findText(this.value);

            if (initialText) {
                this.searchQuery = initialText;
            }
        },

        select(value) {
            this.value = value;

            let text = this.findText(value);

            if (text) {
                this.searchQuery = text;
                this.valid = true;
            }
        },

        focus() {
            this.active = true;
        },

        blur() {
            this.active = false;

            if (!this.dirty) {
                this.dirty = true;
            }

            if (this.validationRules) {
                this.validate();
            }
        },

        clearSearch() {
            this.searchQuery = '';
        },

        validate() {
            if (this.validationRules === 'required') {
                let value = this.findValue(this.searchQuery);

                this.valid = Boolean(value);
            }
        },

        findText(value) {
            // Just return the value if suggestions is an array of strings
            if (this.suggestions[0] && typeof this.suggestions[0] === 'string') {
                return value;
            }

            for (let i = 0; i < this.suggestions.length; i++) {
                if (this.suggestions[i].value == value) {
                    return this.suggestions[i].text;
                }
            }

            return null;
        },

        findValue(text) {
            // Just return the text if suggestions is an array of strings
            if (this.suggestions[0] && typeof this.suggestions[0] === 'string') {
                return text;
            }

            text = text.toLowerCase();

            for (let i = 0; i < this.suggestions.length; i++) {
                if (this.suggestions[i].text.toLowerCase() === text) {
                    return this.suggestions[i].value;
                }
            }

            return null;
        }
    },

    components: {
        UiIcon
    },

    mixins: [
        HasTextInput
    ]
};
</script>

<style lang="stylus">
@import './styles/variables';

.ui-autocomplete {
    display: flex;
    position: relative;
    margin-bottom: 12px;
    align-items: flex-start;

    &:hover:not(.disabled) {
        .ui-autocomplete-label-text {
            color: $input-label-color-hover;
        }

        .ui-autocomplete-input {
            border-bottom-color: $input-border-color-hover;
        }
    }

    &.active:not(.disabled) {
        .ui-autocomplete-label-text,
        .ui-autocomplete-icon {
            color: $input-label-color-active;
        }

        .ui-autocomplete-input {
            border-bottom-width: 2px;
            border-bottom-color: $input-border-color-active;
        }
    }

    &.has-label {
        .ui-autocomplete-icon-wrapper {
            padding-top: 20px;
        }
    }

    &.icon-right {
        .ui-autocomplete-icon-wrapper {
            order: 1;
            margin-left: 8px;
            margin-right: 0;
        }
    }

    &.invalid:not(.disabled) {
        .ui-autocomplete-label-text,
        .ui-autocomplete-icon {
            color: $input-label-color-invalid;
        }

        .ui-autocomplete-input {
            border-bottom-color: $input-border-color-invalid;
        }
    }

     &.disabled {
        .ui-autocomplete-input {
            color: $input-color-disabled;
            border-bottom-style: dashed;
        }

        .ui-autocomplete-icon {
            opacity: 0.6;
        }
    }
}

.ui-autocomplete-label {
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
}

.ui-autocomplete-icon-wrapper {
    height: 24px;
    flex-shrink: 0;
    margin-right: 12px;
    padding-top: 4px;
}

.ui-autocomplete-icon {
    color: $input-label-color;
}

.ui-autocomplete-content {
    flex-grow: 1;
}

.ui-autocomplete-label-text {
    font-size: 14px;
    line-height: 1;
    margin-bottom: 2px;
    color: $input-label-color;
    transition: color 0.1s ease;
}

.ui-autocomplete-input {
    cursor: auto;
    background: none;
    outline: none;
    border: none;
    padding: 0;

    // Hide Edge and IE input clear button
    &::-ms-clear {
        display: none;
    }

    width: 100%;
    height: 32px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: $input-border-color;

    transition: border 0.1s ease;

    color: $input-color;
    font-weight: normal;
    font-size: 16px;
    font-family: $font-stack;
}

.ui-autocomplete-clear-button {
    font-size: 18px;
    position: absolute;
    right: 0;
    top: 0;
    color: $input-clear-button-color;
    cursor: default;

    &:hover {
        color: $input-clear-button-color-hover;
    }
}

.ui-autocomplete-feedback {
    margin: 0;
    height: 20px;
    overflow: hidden;
    position: relative;
    overflow: hidden;
    font-size: 14px;
    padding-top: 4px;
}

.ui-autocomplete-help-text {
    color: $input-help-color;
    line-height: 1;
}

.ui-autocomplete-error-text {
    position: absolute;
    color: $input-error-color;
    line-height: 1;
}

.ui-autocomplete-feedback-toggle-transition {
    transition-property: opacity, margin-top;
    transition-duration: 0.3s;
    opacity: 1;
    margin-top: 0;
}

.ui-autocomplete-feedback-toggle-enter,
.ui-autocomplete-feedback-toggle-leave {
   opacity: 0;
   margin-top: -20px;
}

// Horsey styles
.sey-list {
    display: none;
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

.sey-show {
    display: block;
}

.sey-hide {
    display: none;
}

.sey-item {
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 8px 12px;
    font-weight: normal;
    font-size: 15px;

    &:hover {
        background-color: alpha(black, 0.06);
    }
}

.sey-selected {
    background-color: alpha(black, 0.1);
}
</style>
