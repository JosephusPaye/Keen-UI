<template>
    <li
        class="ui-autocomplete-suggestion" :class="['ui-autocomplete-'+type, { 'highlighted': highlighted }]"
        :id="id"
    >
        <template v-if="type==='image'">
            <div
                class="image" :style="{ 'background-image': 'url(' + item[keys.image] + ')' }"
            ></div>
            <div class="text" v-text="item[keys.text]"></div>
        </template>
        <template v-else>
            <li class="ui-autocomplete-suggestion-item" v-text="item[keys.text] || item"></li>
        </template>
    </li>
</template>

<script>
import UUID from './helpers/uuid';

export default {
    name: 'ui-autocomplete-suggestion',

    props: {
        id: {
            type: String,
            default() {
                return UUID.short();
            }
        },
        item: {
            type: [String, Object],
            required: true
        },
        type: {
            type: String,
            default: 'simple', // 'simple', 'image'
        },
        highlighted: {
            type: Boolean,
            default: false
        },
        keys: {
            type: Object,
            default() {
                return {
                    text: 'text',
                    value: 'value',
                    image: 'image'
                };
            }
        }
    },

    partials: {
        'ui-autocomplete-simple': `
            <li class="ui-autocomplete-suggestion-item" v-text="item[keys.text] || item"></li>
        `,

        'ui-autocomplete-image': `
            <div
                class="image" :style="{ 'background-image': 'url(' + item[keys.image] + ')' }"
            ></div>
            <div class="text" v-text="item[keys.text]"></div>
        `
    }
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-autocomplete-suggestion {
    font-family: $font-stack;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 8px 12px;
    font-weight: normal;
    font-size: 15px;

    &:hover {
        background-color: alpha(black, 0.06);
    }

    &.highlighted {
        background-color: alpha(black, 0.1);
    }
}

.ui-autocomplete-image {
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
