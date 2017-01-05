import debounce from 'lodash.debounce';

export default {
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

    beforeDestroy() {
        window.removeEventListener('resize', this.windowResizeListener);
    }
};
