<template>
    <div class="ui-rating-icon">
        <ui-icon
            class="ui-rating-icon-icon" :icon="icon"
            :class="{ 'selected': selected, 'filled' : filled }"
        ></ui-icon>
    </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
    name: 'ui-rating-icon',

    props: {
        type: {
            type: String,
            default: 'star' // 'star' or 'heart'
        },
        selected: {
            type: Boolean,
            required: true
        },
        filled: { // Used when previewing a new value
            type: Boolean,
            default: false
        }
    },

    computed: {
        icon() {
            if (this.filled || this.selected) {
                return this.type === 'star' ? 'star' : 'favorite';
            }

            return this.type === 'star' ? 'star_border' : 'favorite_border';
        }
    },

    components: {
        UiIcon
    }
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-rating-icon {
    cursor: default;

    .ui-icon {
        color: $md-dark-hint;
    }
}
</style>
