<template>
    <label
        class="ui-checkbox"
        :class="{
            'disabled': disabled, 'checked': isChecked, 'active': active, 'label-left': labelLeft
        }"
    >
        <input
            class="ui-checkbox-input" type="checkbox" :name="name" @focus="focus" @blur="blur"
            :value="value ? value : null" v-model="model" v-disabled="disabled"
        >

        <div class="ui-checkbox-checkmark">
            <div class="ui-checkbox-focus-ring"></div>
        </div>

        <div class="ui-checkbox-label-text" v-if="!hideLabel">
            <slot>
                <span v-text="label"></span>
            </slot>
        </div>
    </label>
</template>

<script>
import disabled from './directives/disabled';

import ReceivesTargetedEvent from './mixins/ReceivesTargetedEvent';

export default {
    name: 'ui-checkbox',

    props: {
        name: String,
        model: {
            type: [Array, String, Boolean],
            required: true,
            twoWay: true
        },
        value: String,
        label: String,
        hideLabel: {
            type: Boolean,
            default: false
        },
        labelLeft: {
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
            initialValue: false
        };
    },

    computed: {
        isChecked() {
            if (this.value) {
                return this.model.indexOf(this.value) > -1;
            }

            return this.model;
        }
    },

    created() {
        // Cache initial value for later reset
        this.initialValue = this.model;
    },

    events: {
        'ui-input::reset': function(id) {
            // Abort if reset event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return;
            }

            this.model = this.initialValue;
        }
    },

    methods: {
        focus() {
            this.active = true;
        },

        blur() {
            this.active = false;
        }
    },

    directives: {
        disabled
    },

    mixins: [
        ReceivesTargetedEvent
    ]
};
</script>

<style lang="stylus">
@import './styles/imports';

$border-width = 2px;
$checkmark-width = 2px;
$focus-ring-transition-duration = 0.2s;

.ui-checkbox {
    font-family: $font-stack;
    font-weight: normal;
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: 12px;
    cursor: default;
    position: relative;

    &:not(.disabled):not(.checked):hover,
    &:not(.disabled):not(.checked).active {
        .ui-checkbox-checkmark:before {
            border-color: $md-dark-secondary;
        }
    }

    &:not(.disabled).checked:hover,
    &:not(.disabled).checked.active {
        .ui-checkbox-checkmark:before {
            background-color: darken($md-brand-primary, 15%);
            border-color: darken($md-brand-primary, 15%);
        }
    }

    &.checked {
        .ui-checkbox-checkmark {
            &:before {
                background: $md-brand-primary;
                border-color: $md-brand-primary;
            }

            &:after {
                border-right: $checkmark-width solid white;
                border-bottom: $checkmark-width solid white;
                opacity: 1;
            }
        }

        .ui-checkbox-focus-ring {
            background-color: alpha($md-brand-primary, 0.12);
        }
    }

    &.label-left {
        .ui-checkbox-label-text {
            margin-left: 0;
            margin-right: auto;
            order: -1;
        }
    }

    &.disabled {
        .ui-checkbox-label-text {
            color: $md-dark-disabled;
        }

        .ui-checkbox-checkmark:before {
            border-color: alpha(black, 0.26);
        }

        &.checked {
            .ui-checkbox-checkmark:before {
                border: none;
                background: alpha(black, 0.26);
            }
        }
    }

    &:not(.disabled) {
        .ui-checkbox-label-text {
            cursor: pointer;
        }
    }
}

.ui-checkbox-label-text {
    margin-left: 8px;
    font-size: 15px;
}

.ui-checkbox-checkmark {
    position: relative;
    height: 20px;
    width: 20px;
    background: white;

    // Background
    &:before {
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: block;
        content: "";
        border-radius: 2px;
        border: $border-width solid $md-dark-hint;
        transition: all 0.3s ease;
    }

    // Checkmark
    &:after {
        box-sizing: border-box;
        position: absolute;
        left: 7px;
        bottom: 5px;
        display: block;
        content: "";
        width: 6px;
        height: 13px;
        transform: rotate(45deg);
        opacity: 0;
        transition: opacity 0.3s ease;
        transition-delay: 0.1s;
        box-sizing: border-box;
    }
}

.ui-checkbox-input {
    position: absolute;
    opacity: 0;

    body[modality="keyboard"] &:focus + .ui-checkbox-checkmark {
        .ui-checkbox-focus-ring {
            opacity: 1;
            transform: scale(1);
        }
    }
}

.ui-checkbox-focus-ring {
    position: absolute;
    width: 48px;
    height: 48px;
    background-color: alpha(black, 0.1);
    margin-left: -14px;
    margin-top: -14px;
    border-radius: 50%;
    transition-property: opacity, transform;
    transition-duration: $focus-ring-transition-duration;
    transition-timing-function: ease;

    transform: scale(0);
    opacity: 0;
}
</style>
