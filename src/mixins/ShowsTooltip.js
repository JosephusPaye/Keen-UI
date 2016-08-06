import UiTooltip from '../UiTooltip.vue';

export default {
    props: {
        tooltip: String,
        openTooltipOn: String,
        tooltipPosition: String
    },

    components: {
        UiTooltip
    }
};
