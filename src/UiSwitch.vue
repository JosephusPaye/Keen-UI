<template>
    <label
        class="ui-switch"
        :class="{ 'checked': value, 'disabled': disabled, 'label-left': labelLeft }"
    >
        <div class="ui-switch-container">
            <input
                class="ui-switch-input" type="checkbox" :name="name" :id="id" v-model="value"
                v-disabled="disabled"
            >

            <div class="ui-switch-track"></div>
            <div class="ui-switch-thumb"></div>

            <div class="ui-switch-focus-ring"></div>
        </div>

        <div class="ui-switch-label-text" v-if="!hideLabel">
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
    name: 'ui-switch',

    props: {
        name: String,
        value: {
            type: Boolean,
            required: true,
            twoWay: true
        },
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
            initialValue: false
        };
    },

    created() {
        // Cache initial value for later reset
        this.initialValue = this.value;
    },

    events: {
        'ui-input::reset': function(id) {
            // Abort if reset event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return;
            }

            this.value = this.initialValue;
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

$thumb-size = 20px;
$thumb-bg-color = $md-grey-50;

$track-width = 34px;
$track-height = 14px;

$focus-ring-size = 42px;
$focus-ring-left = -(($focus-ring-size - $thumb-size) / 2);
$focus-ring-top = -(($focus-ring-size - $thumb-size) / 2);

.ui-switch {
    font-family: $font-stack;
    position: relative;
    height: 32px;
    display: flex;
    align-items: center;

    &.checked {
        .ui-switch-track {
            background-color: alpha($md-brand-primary, 0.5);
        }

        .ui-switch-thumb {
            left: 14px;
            background-color: $md-brand-primary;
        }

        .ui-switch-focus-ring {
            left: $focus-ring-left + 14px;
            background-color: alpha($md-brand-primary, 0.12);
        }
    }

    &.label-left {
        .ui-switch-label-text {
            margin-left: 0;
            margin-right: auto;
            order: -1;
        }
    }

    &.disabled {
        .ui-switch-label-text {
            color: $md-dark-disabled;
        }

        .ui-switch-thumb {
            background-color: $md-grey-400;
            box-shadow: 0 1px 3px alpha(black, 0.2);
        }

        .ui-switch-track {
            background-color: alpha(black, 0.12);
        }
    }

    &:not(.disabled) {
        .ui-switch-label-text {
            cursor: pointer;
        }
    }
}

.ui-switch-container {
    position: relative;
    width: $track-width;
    height: $thumb-size;
}

.ui-switch-track {
    position: absolute;
    top: ( ($thumb-size - $track-height) / 2 );

    height: $track-height;
    width: $track-width;

    background-color: alpha(black, 0.26);
    border-radius: 8px;

    transition: background-color 0.1s linear;
}

.ui-switch-thumb {
    position: absolute;
    top: 0;
    left: 0;

    width: $thumb-size;
    height: $thumb-size;

    border-radius: 50%;
    background-color: $thumb-bg-color;

    box-shadow: 0 1px 3px alpha(black, 0.4);

    transition: all 0.2s ease;
}

.ui-switch-focus-ring {
    position: absolute;
    top: $focus-ring-top;
    left: $focus-ring-left;
    z-index: -1;

    border-radius: 50%;
    width: $focus-ring-size;
    height: $focus-ring-size;

    background-color: alpha(black, 0.1);
    transform: scale(0);
    opacity: 0;

    transition: all 0.2s ease;
}

.ui-switch-input {
    position: absolute;
    opacity: 0;

    body[modality="keyboard"] &:focus ~ .ui-switch-focus-ring {
        transform: scale(1);
        opacity: 1;
    }
}

.ui-switch-label-text {
    margin-left: 16px;
    font-size: 15px;
}
</style>
