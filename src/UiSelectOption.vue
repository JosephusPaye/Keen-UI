<template>
    <li
        class="ui-select-option" :id="'id-' + option.value"
        :class="[ partial, { highlighted: highlighted, selected: selected } ]"
    >
        <partial :name="partial"></partial>
    </li>
</template>

<script>
export default {
    name: 'ui-select-option',

    props: {
        option: {
            type: [String, Object],
            required: true
        },
        partial: {
            type: String,
            default: 'ui-select-simple', // 'ui-select-simple', 'ui-select-image'
        },
        highlighted: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Boolean,
            default: false
        }
    },

    partials: {
        'ui-select-simple':
            '<li class="ui-select-option-item" v-text="option.text || option"></li>',

        'ui-select-image':
            `<div class="image" :style="{ 'background-image': 'url(' + option.image + ')' }"></div>
            <div class="text" v-text="option.text"></div>`
    }
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-select-option {
    font-family: $font-stack;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 6px 12px;
    font-weight: normal;
    font-size: 15px;

    &.highlighted {
        background-color: alpha(black, 0.06);
    }

    &.selected {
        color: $md-brand-primary;
        font-weight: 500;
    }
}

.ui-select-image {
    display: flex;
    align-items: center;

    .image {
        width: 32px;
        height: 32px;
        background-size: cover;
        background-position: 50%;
        margin-right: 12px;
        border-radius: 50%;
    }
}
</style>
