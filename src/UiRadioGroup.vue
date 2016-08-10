<template>
    <div
        class="ui-radio-group" :id="id"
        :class="{ 'disabled': disabled, 'active': active, 'vertical': vertical }"
    >
        <div class="ui-radio-group-label" v-text="label" v-if="!hideLabel"></div>

        <div class="ui-radio-group-options-wrapper">
            <ui-radio
                class="ui-radio-group-radio" v-for="option in options" :model.sync="value"
                :name="name" :label="option.text || option" :value="option.value || option"
                :disabled="disabled || option.disabled" @focussed="focus" @blurred="blur"
            ></ui-radio>
        </div>

        <div
            class="ui-radio-group-feedback" v-if="showFeedback"
            transition="ui-radio-group-feedback-toggle"
        >
            <div class="ui-radio-group-help-text" v-text="helpText"></div>
        </div>
    </div>
</template>

<script>
import disabled from './directives/disabled';

import UiRadio from './UiRadio.vue';

import ReceivesTargetedEvent from './mixins/ReceivesTargetedEvent';

export default {
    name: 'ui-radio-group',

    props: {
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            default: '',
            twoWay: true
        },
        options: {
            type: Array,
            required: true
        },
        label: String,
        hideLabel: {
            type: Boolean,
            default: false
        },
        helpText: String,
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
            initialValue: ''
        };
    },

    created() {
        // Cache initial value for later reset
        this.initialValue = this.value;
    },

    computed: {
        showFeedback() {
            return Boolean(this.helpText);
        }
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

    methods: {
        focus() {
            this.active = true;
        },

        blur() {
            this.active = false;
        }
    },

    components: {
        UiRadio
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
