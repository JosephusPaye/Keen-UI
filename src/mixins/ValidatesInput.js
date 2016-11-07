import Validator from 'validatorjs'
import EventBus from '../helpers/event-bus'

export default {
    props: {
        hideValidationErrors: {
            type: Boolean,
            default: false
        },
        validationRules: [String, Array],
        validationMessages: Object
    },

    data() {
        return {
            validationError: '',
            valid: true,
            dirty: false,
            _validationMessages: null,
        }
    },

    created() {
        this._validationMessages = this.validationMessages
    },

    mounted() {
        EventBus.$on('ui-input::set-validity', (valid, error, id) => {
            // Abort if event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return;
            }
            this.setValidity(valid, error)
        })
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

            let validation = new Validator(data, rules, this._validationMessages);

            validation.setAttributeNames({ value: this.name.replace(/_/g, ' ') });

            this.setValidity(validation.passes(), validation.errors.first('value'));
        },

        setValidity(valid, error) {
            this.valid = valid;

            if (!valid && error && error.length) {
                this.validationError = error
                this.$emit('validationError', error)
            } else {
                this.$emit('valid', valid)
            }
        }
    }
};
