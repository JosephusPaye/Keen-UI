import debounce from 'lodash.debounce';

export default {
    emits: ['window-resize'],

    data() {
        return {
            windowResizeListener: null
        };
    },

    mounted() {
        this.windowResizeListener = debounce(() => {
            this.$emit('window-resize');
        }, 200);

        window.addEventListener('resize', this.windowResizeListener);
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.windowResizeListener);
    }
};
