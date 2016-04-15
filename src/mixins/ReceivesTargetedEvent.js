export default {
    props: {
        id: String
    },

    methods: {
        eventTargetsComponent(eventTarget) {
            if (eventTarget === undefined || this.id === eventTarget) {
                return true;
            }

            return false;
        }
    }
};
