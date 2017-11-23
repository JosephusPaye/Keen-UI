export default {
    beforeDestroy() {
        if (typeof this.externalClickListener === 'function') {
            this.removeExternalClickListener();
        }
    },

    methods: {
        addExternalClickListener(element = this.$el, callback = null) {
            this.externalClickListener = e => {
                if (!element.contains(e.target)) {
                    if (typeof callback === 'function') {
                        callback(e);
                    } else {
                        this.$emit('external-click', e);
                    }
                }
            };

            document.addEventListener('click', this.externalClickListener);
        },

        removeExternalClickListener() {
            document.removeEventListener('click', this.externalClickListener);
            this.externalClickListener = null;
        }
    }
};
