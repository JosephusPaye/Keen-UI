<template>
    <div
        class="ui-textbox"
        :class="{
            'disabled': disabled, 'invalid': !valid, 'dirty': dirty, 'active': active,
            'has-label': !hideLabel, 'is-multi-line': multiLine, 'icon-right': iconRight,
            'has-counter': maxLength
        }"
    >
        <div class="ui-textbox-icon-wrapper" v-if="showIcon">
            <ui-icon :icon="icon" class="ui-textbox-icon"></ui-icon>
        </div>

        <div class="ui-textbox-content">
            <label class="ui-textbox-label">
                <div class="ui-textbox-label-text" v-text="label" v-if="!hideLabel"></div>

                <input
                    class="ui-textbox-input" :type="type" :placeholder="placeholder" :name="name"
                    :id="id" :number="type === 'number' ? true : null" :min="minValue"
                    :max="maxValue" :step="stepValue" :autocomplete="autocomplete"
                    v-autofocus="autofocus"

                    @focus="focussed" @blur="blurred" @change="changed" @keydown="keydown"
                    @keydown.enter="keydownEnter" :debounce="debounce"

                    v-model="value | trim" v-disabled="disabled" v-if="!multiLine"
                >

                <textarea
                    class="ui-textbox-textarea" :placeholder="placeholder" :name="name" :id="id"
                    :rows="rows"

                    @focus="focussed" @blur="blurred" @change="changed" @keydown="keydown"
                    @keydown.enter="keydownEnter" :debounce="debounce"

                    v-model="value | trim" v-disabled="disabled" v-else
                ></textarea>
            </label>

            <div class="ui-textbox-feedback" v-if="showFeedback || maxLength">
                <div
                    class="ui-textbox-error-text" transition="ui-textbox-feedback-toggle"
                    v-text="validationError" v-show="!hideValidationErrors && !valid"
                ></div>

                <div
                    class="ui-textbox-help-text" transition="ui-textbox-feedback-toggle"
                    v-text="helpText" v-else
                ></div>

                <div
                    class="ui-textbox-counter" v-text="value.length + '/' + maxLength"
                    v-if="maxLength"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

import autofocus from './directives/autofocus';
import HasTextInput from './mixins/HasTextInput';
import ValidatesInput from './mixins/ValidatesInput';

export default {
    name: 'ui-textbox',

    props: {
        type: {
            type: String,
            default: 'text'
        },
        multiLine: {
            type: Boolean,
            default: false
        },
        rows: {
            type: Number,
            default: 2
        },
        maxLength: Number,
        trimValue: {
            type: Boolean,
            default: true
        },
        validateOnBlur: {
            type: Boolean,
            default: false
        },
        autocomplete: {
            type: String,
            default: 'on'
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        min: Number,
        max: Number,
        step: {
            type: String,
            default: 'any',
            coerce: String
        }
    },

    watch: {
        value() {
            if (this.ignoreValueChange) {
                return;
            }

            if (!this.dirty) {
                this.dirty = true;
            }

            if (!this.validateOnBlur) {
                this.validate();
            }
        }
    },

    data() {
        return {
            ignoreValueChange: false
        };
    },

    computed: {
        showIcon() {
            return Boolean(this.icon);
        },

        minValue() {
            if (this.type !== 'number') {
                return null;
            }

            if (this.min || this.min === 0) {
                return this.min;
            }

            return null;
        },

        maxValue() {
            if (this.type !== 'number') {
                return null;
            }

            if (this.max || this.max === 0) {
                return this.max;
            }

            return null;
        },

        stepValue() {
            if (this.type === 'number') {
                return this.step;
            }

            return null;
        }
    },

    events: {
        'ui-input::reset': function(id) {
            // Abort if reset event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return;
            }

            // Temporarily disable watcher
            this.ignoreValueChange = true;

            // Blur the input if it's focussed to prevent required errors
            // when it's value is reset
            if (
                document.activeElement === this.$el.querySelector('input') ||
                document.activeElement === this.$el.querySelector('textarea')
            ) {
                document.activeElement.blur();
            }

            // Reset state
            this.validationError = '';
            this.value = this.initialValue;
            this.valid = true;
            this.dirty = false;

            // Re-enable watcher
            this.$nextTick(() => {
                this.ignoreValueChange = false;
            });
        }
    },

    methods: {
        focussed() {
            this.active = true;
            this.$dispatch('focussed');
        },

        blurred() {
            this.active = false;

            if (!this.dirty) {
                this.dirty = true;
            }

            this.$dispatch('blurred');
            this.validate();
        },

        changed() {
            this.$dispatch('changed');
        },

        keydown(e) {
            this.$dispatch('keydown', e);
        },

        keydownEnter(e) {
            this.$dispatch('keydown-enter', e);
        }
    },

    filters: {
        trim: {
            // Trim the value when it's written to the model
            write(value) {
                if (this.type !== 'number' && this.trimValue) {
                    return value.trim();
                }

                return value;
            }
        }
    },

    components: {
        UiIcon
    },

    directives: {
        autofocus
    },

    mixins: [
        HasTextInput,
        ValidatesInput
    ]
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-textbox {
    font-family: $font-stack;
    display: flex;
    align-items: flex-start;
    margin-bottom: 12px;

    &:hover:not(.disabled):not(.invalid) {
        .ui-textbox-label-text {
            color: $input-label-color-hover;
        }

        .ui-textbox-input,
        .ui-textbox-textarea {
            border-bottom-color: $input-border-color-hover;
        }
    }

    &.active:not(.disabled) {
        .ui-textbox-input,
        .ui-textbox-textarea {
            border-bottom-width: 2px;
        }

        &:not(.invalid) {
            .ui-textbox-label-text,
            .ui-textbox-icon {
                color: $input-label-color-active;
            }

            .ui-textbox-input,
            .ui-textbox-textarea {
                border-bottom-color: $input-border-color-active;
            }
        }
    }

    &.has-label {
        .ui-textbox-icon-wrapper {
            padding-top: 20px;
        }
    }

    &.icon-right {
        .ui-textbox-icon-wrapper {
            order: 1;
            margin-left: 8px;
            margin-right: 0;
        }
    }

    &.is-multi-line {
        .ui-textbox-label-text {
            margin-bottom: 8px;
        }
    }

    &.has-counter {
        .ui-textbox-feedback {
            padding-right: 48px;
        }
    }

    &.invalid {
        .ui-textbox-label-text,
        .ui-textbox-icon,
        .ui-textbox-counter {
            color: $input-label-color-invalid;
        }

        .ui-textbox-input,
        .ui-textbox-textarea {
            border-bottom-color: $input-border-color-invalid;
        }
    }

    &.disabled {
        .ui-textbox-input,
        .ui-textbox-textarea {
            color: $input-color-disabled;
            border-bottom-style: dotted;
            border-bottom-width: 2px;
        }

        .ui-textbox-icon {
            opacity: 0.6;
        }

        .ui-textbox-feedback {
            opacity: 0.8;
        }
    }
}

.ui-textbox-label {
    width: 100%;
    margin: 0;
    padding: 0;
}

.ui-textbox-icon-wrapper {
    height: 24px;
    flex-shrink: 0;
    margin-right: 12px;
    padding-top: 4px;
}

.ui-textbox-icon {
    color: $input-label-color;
}

.ui-textbox-content {
    flex-grow: 1;
}

.ui-textbox-label-text {
    font-size: 14px;
    line-height: 1;
    margin-bottom: 2px;
    color: $input-label-color;
    transition: color 0.1s ease;
}

.ui-textbox-input,
.ui-textbox-textarea {
    cursor: auto;
    background: none;
    outline: none;
    border: none;
    padding: 0;
    display: block;

    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: $input-border-color;

    transition: border 0.1s ease;

    color: $input-color;
    font-weight: normal;
    font-size: 16px;
    font-family: $font-stack;
}

.ui-textbox-input {
    height: 32px;
}

.ui-textbox-textarea {
    resize: vertical;
    overflow-x: hidden;
    padding-bottom: 8px;
}

.ui-textbox-feedback {
    margin: 0;
    min-height: 20px;
    overflow: hidden;
    position: relative;
    font-size: 14px;
    padding-top: 2px;
}

.ui-textbox-help-text,
.ui-textbox-counter {
    color: $input-help-color;
    line-height: 1.2;
}

.ui-textbox-error-text {
    position: absolute;
    color: $input-error-color;
    line-height: 1.2;
}

.ui-textbox-counter {
    position: absolute;
    right: 0;
    top: 2px;
}

.ui-textbox-feedback-toggle-transition {
    transition-property: opacity, margin-top;
    transition-duration: 0.3s;
    margin-top: 0;
    opacity: 1;
}

.ui-textbox-feedback-toggle-enter,
.ui-textbox-feedback-toggle-leave {
    margin-top: -20px;
    opacity: 0;
}
</style>
