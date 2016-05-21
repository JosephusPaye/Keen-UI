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

            this.valid = validation.passes();

            if (!this.valid) {
                this.validationError = validation.errors.first('value');
            }
        }
    }
};
