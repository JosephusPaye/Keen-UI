import Validator from 'validatorjs';

export default {
    props: {
        valid: {
            type: Boolean,
            default: true,
            twoWay: true
        },
        dirty: {
            type: Boolean,
            default: false,
            twoWay: true
        },
        hideValidationErrors: {
            type: Boolean,
            default: false
        },
        validationRules: String,
        validationMessages: Object
    },

    data() {
        return {
            validationError: ''
        };
    },

    events: {
        'ui-input::set-validity': function(valid, error, id) {
            // Abort if event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return;
            }

            this.setValidity(valid, error);
        }
    },

    methods: {
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

            this.setValidity(validation.passes(), validation.errors.first('value'));
        },

        setValidity(valid, error) {
            this.valid = valid;

            if (!valid && error && error.length) {
                this.validationError = error;
            }
        }
    }
};
