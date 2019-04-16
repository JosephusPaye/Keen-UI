import events from '../helpers/events';

export default {
    beforeDestroy() {
        if (typeof this.destroyExternalClickListener === 'function') {
            this.removeExternalClickListener();
        }
    },

    methods: {
        addExternalClickListener(elements = [this.$el], callback = null, options = { passive: true }) {
            elements = Array.isArray(elements) ? elements : [elements];

            this.destroyExternalClickListener = events.on('click', document, e => {
                let clickWasInternal = false;

                for (let i = 0; i < elements.length; i++) {
                    if (elements[i].contains(e.target)) {
                        clickWasInternal = true;
                        break;
                    }
                }

                if (clickWasInternal) {
                    return;
                }

                if (typeof callback === 'function') {
                    callback(e);
                } else {
                    this.$emit('external-click', e);
                }
            }, options);
        },

        removeExternalClickListener() {
            if (this.destroyExternalClickListener) {
                this.destroyExternalClickListener();
                this.destroyExternalClickListener = null;
            }
        }
    }
};
