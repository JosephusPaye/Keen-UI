import disabled from '../directives/disabled';

import ReceivesTargetedEvent from './ReceivesTargetedEvent';

export default {
    props: {
        id: String,
        name: {
            type: String,
            required: true
        },
        placeholder: String,
        value: {
            type: [String, Number],
            default: '',
            twoWay: true
        },
        icon: String,
        iconRight: {
            type: Boolean,
            default: false
        },
        label: String,
        hideLabel: {
            type: Boolean,
            default: false
        },
        helpText: String,
        disabled: {
            type: Boolean,
            default: false
        },
        debounce: {
            type: Number,
            default: false
        }
    },

    data() {
        return {
            active: false,
            initialValue: ''
        };
    },

    computed: {
        showFeedback() {
            var canBeValidated = Boolean(this.validationRules);
            var helpTextAvailable = Boolean(this.helpText);

            return !this.disabled && (canBeValidated || helpTextAvailable);
        }
    },

    created() {
        // Cache value for later reset
        this.initialValue = this.value;
    },

    directives: {
        disabled
    },

    mixins: [
        ReceivesTargetedEvent
    ]
};
