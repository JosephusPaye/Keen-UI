<template>
    <div
        class="ui-rating-preview" role="slider" :aria-valuemin="0" :aria-valuemax="total"
        :aria-valuenow="value"
    >
        <ui-rating-icon
            :type="type" v-for="n in total" :selected="(n + 1) <= value"
        ></ui-rating-icon>
    </div>
</template>

<script>
import UiRatingIcon from './UiRatingIcon.vue';

export default {
    name: 'ui-rating-preview',

    props: {
        type: {
            type: String,
            default: 'star' // 'star', 'heart'
        },
        value: {
            type: Number,
            coerce: Number,
            required: true
        },
        total: {
            type: Number,
            coerce: Number,
            required: true
        }
    },

    components: {
        UiRatingIcon
    }
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-rating-preview {
    display: inline-flex;
    flex-basis: 0;
    width: auto;

    .ui-rating-icon-icon {
        &.selected {
            color: $md-brand-primary;
        }
    }
}
</style>
