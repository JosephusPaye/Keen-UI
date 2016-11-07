<template>
    <div class="ui-radio-group" :id="id"
        :class="{ 'disabled': disabled, 'active': active, 'vertical': vertical }"
    >
        <div class="ui-radio-group-label" v-text="label" v-if="!hideLabel&&label"></div>
        <div class="ui-radio-group-options-wrapper">
            <template class="ui-radio-group-options-wrapper" v-for="option in options">
                <label
                    class="ui-radio"
                    :class="{ 'disabled': disabled || option.disabled, 'checked': currentValue===option.value, 'label-left': labelLeft }"
                    @focus="focus" @blur="blur"
                >
                    <div class="ui-radio-input-wrapper">
                        <input
                            class="ui-radio-input" type="radio" :name="name" :value="option.value||option"
                            :disabled="disabled || option.disabled" v-model="currentValue"
                        >
                        <span class="ui-radio-border"></span>
                        <span class="ui-radio-inner-dot"></span>
                    </div>

                    <div class="ui-radio-label-text">
                        <span v-text="option.text || option" v-if="!option.hideLabel"></span>
                    </div>
                </label>
            </template>
        </div>
        <div
            class="ui-radio-group-feedback" v-if="showFeedback"
            transition="ui-radio-group-feedback-toggle"
        >
            <div class="ui-radio-group-help-text" v-text="helpText">
                {{currentValue}}
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from './helpers/event-bus'
import ReceivesTargetedEvent from './mixins/ReceivesTargetedEvent'

export default {
    name: 'ui-radio',

    props: {
        id: String,
        name: {
            type: String,
            required: true
        },
        value: String,
        options: [Array, Object],
        helpText: String,
        label: String,
        hideLabel: {
            type: Boolean,
            default: false
        },
        labelLeft: {
            type: Boolean,
            default: false
        },
        vertical: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            active: false,
            currentValue: this.value,
            initialValue: this.value
        };
    },

    computed: {
        showFeedback() {
            return Boolean(this.helpText);
        }
    },

    methods: {
        focus() {
            this.active = true
        },

        blur() {
            this.active = false
        }
    },

    created() {
        this.currentValue = this.value
        this.initialValue = this.value
    },

    mounted() {
        EventBus.$on('ui-input::reset', (id) => {
            if (!this.eventTargetsComponent(id)) {
                return
            }
            this.currentValue = this.initialValue
            this.$emit('input', this.initialValue)
        })
    },

    watch: {
        currentValue(val) {
            this.$emit('input', val)
        }
    },

    mixins: [
        ReceivesTargetedEvent
    ]
};
</script>

<style lang="stylus">
@import './styles/imports';

$size = 20px;
$border-width = 2px;
$transition-duration = 0.3s;

// The radio itself
.ui-radio {
    font-family: $font-stack;
    display: inline-flex;
    align-items: center;
    height: $size;
    font-size: 15px;
    margin: 0;

    &:hover:not(.disabled) {
        .ui-radio-input:not(:checked) {
            & ~ .ui-radio-border {
                border: $border-width solid $md-dark-secondary;
            }
        }
    }

    &.label-left {
        .ui-radio-label-text {
            order: -1;
            margin-right: 16px;
            margin-left: 0;
        }
    }

    &.disabled {
        opacity: 0.5;
    }

    &:not(.disabled) {
        .ui-radio-label-text {
            cursor: pointer;
        }
    }
}

.ui-radio-input-wrapper {
    position: relative;
    width: $size;
    height: $size;
}

.ui-radio-input {
    appearance: none;
    outline: none;
    margin: 0;
    padding: 0;

    position: absolute;
    height: 1px;
    width: 1px;
    left: 0;
    top: 0;

    opacity: 0;

    &:checked {
        & ~ .ui-radio-border {
            border-color: $md-brand-primary;
        }

        & ~ .ui-radio-inner-dot {
            background-color: $md-brand-primary;
            transform: scale(0.5);
            opacity: 1;
            z-index: 0;
        }
    }
}

.ui-radio-border {
    position: absolute;
    top: 0;
    left: 0;

    width: $size;
    height: $size;
    border-radius: 50%;
    border: $border-width solid $md-dark-hint;
    background-color: transparent;

    transition: border-color 0.2s;
}

.ui-radio-inner-dot {
    position: absolute;
    top: 0;
    left: 0;

    width: $size;
    height: $size;
    border-radius: 50%;

    background-color: $md-dark-hint;

    opacity: 0;
    z-index: -1;
    transform: scale(1.2);

    transition-property: transform, opacity, background-color;
    transition-duration: $transition-duration;
}

.ui-radio-label-text {
    margin-left: 16px;
    font-size: 15px;
}

.ui-radio-group {
    font-family: $font-stack;

    &:not(.disabled):hover {
        .ui-radio-group-label {
            color: alpha($md-dark-secondary, 65%);
        }
    }

    &:not(.disabled).active {
        .ui-radio-group-label {
            color: darken($md-brand-primary, 20%);
        }
    }

    &.vertical {
        .ui-radio-group-options-wrapper {
            height: auto;
            margin-top: 8px;
            flex-direction: column;

            .ui-radio {
                width: 100%;
                margin-left: 0;
                margin-bottom: 16px;
            }
        }
    }

    &.disabled {
        .ui-radio-group-feedback {
            opacity: 0.8;
        }
    }

    .ui-radio {
        margin-left: 24px;

        &:first-child {
            margin-left: 0;
        }
    }
}

.ui-radio-group-label {
    font-size: 14px;
    color: $md-dark-secondary;
    transition: color 0.1s ease;
}

.ui-radio-group-options-wrapper {
    display: flex;
    height: 32px;
    align-items: center;
}

.ui-radio-group-feedback {
    height: 20px;
    overflow: hidden;
    padding-top: 4px;
    position: relative;
    font-size: 14px;
}

.ui-radio-group-help-text {
    @extends $disable-user-select;

    color: $md-dark-hint;
    line-height: 1.2;
}
</style>
