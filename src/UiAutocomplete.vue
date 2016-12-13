<template>
    <div
        class="ui-autocomplete" ref="autocomplete"
        :class="{
            'disabled': disabled, 'invalid': !valid, 'dirty': dirty, 'active': active,
            'has-label': !hideLabel, 'icon-right': iconRight
        }"
    >
        <div class="ui-autocomplete-icon-wrapper" v-if="showIcon">
            <ui-icon :icon="icon" class="ui-autocomplete-icon"></ui-icon>
        </div>

        <div class="ui-autocomplete-content">
            <label class="ui-autocomplete-label">
                <div class="ui-autocomplete-label-text" v-text="label" v-if="!hideLabel"></div>

                <ui-icon
                    class="ui-autocomplete-clear-button" :icon="String('\uE5CD')" title="Clear"
                    @click.native="clearSearch" v-show="!disabled && value.length"
                ></ui-icon>

                <input
                    class="ui-autocomplete-input" ref="input"
                    :disabled="disabled" :placeholder="placeholder" :name="name"
                    :id="id" autocomplete="off" :autofocus="autofocus" :debounce="debounce"

                    @focus="focus" @blur="blur" @keydown.up.prevent="highlight(highlightedItem - 1)"
                    @keydown.down.prevent="highlight(highlightedItem + 1)" @keydown.tab="close"
                    @keydown.enter="selectHighlighted(highlightedItem, $event)"
                    :value="value" @input="$emit('input', $event.target.value)"
                >

                <ul class="ui-autocomplete-suggestions" v-show="showDropdown">
                    <ui-autocomplete-suggestion
                        v-for="(item, index) in suggestionsAfterFilter"
                        :highlighted="highlightedItem === index" :item="item" :type="type"
                        :keys="keys"

                        ref="items" @click.native="select(item)"
                    ></ui-autocomplete-suggestion>
                </ul>
            </label>

            <div class="ui-autocomplete-feedback" v-if="showFeedback">
                <transition name="ui-autocomplete-feedback-toggle">
                    <div
                        class="ui-autocomplete-error-text" v-text="validationError"
                        v-show="!hideValidationErrors && !valid"
                    ></div>
                </transition>

                <div
                    class="ui-autocomplete-help-text" transition="ui-autocomplete-feedback-toggle"
                    v-text="helpText" v-show="hideValidationErrors || valid"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import fuzzysearch from 'fuzzysearch'

import UiIcon from './UiIcon.vue'
import UiAutocompleteSuggestion from './UiAutocompleteSuggestion.vue'
import EventBus from './helpers/event-bus'
import HasTextInput from './mixins/HasTextInput'
import ValidatesInput from './mixins/ValidatesInput'

export default {
    name: 'ui-autocomplete',

    props: {
        suggestions: {
            type: Array,
            default: []
        },
        limit: {
            type: Number,
            default: 8
        },
        type: String,
        append: {
            type: Boolean,
            default: false
        },
        appendDelimiter: {
            type: String,
            default: ', '
        },
        minChars: {
            type: Number,
            default: 2
        },
        showOnUpDown: {
            type: Boolean,
            default: true
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        filter: Function,
        autoHighlightFirstMatch: {
            type: Boolean,
            default: true
        },
        cycleHighlight: {
            type: Boolean,
            default: true
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

    data() {
        return {
            showDropdown: false,
            highlightedItem: -1,
            ignoreValueChange: false
        };
    },

    computed: {
        suggestionsAfterFilter() {
            return this.suggestions.filter((item, index) => {
                return (this.search(item) && (index < this.limit))
            })
        },
        showIcon() {
            return Boolean(this.icon)
        }
    },

    watch: {
        value() {
            if (!this.ignoreValueChange && this.value.length >= this.minChars) {
                this.open();
            }

            this.highlightedItem = this.autoHighlightFirstMatch ? 0 : -1;
        }
    },

    mounted() {
        document.addEventListener('click', this.closeOnExternalClick)
        EventBus.$on('ui-input::reset', (id) => {
            // Abort if reset event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return
            }

            // Blur input before resetting to avoid "required" errors
            // when input is blurred after reset
            if (document.activeElement === this.$refs.input) {
                document.activeElement.blur()
            }

            // Reset state
            this.$emit('input', this.initialValue)
            this.dirty = false
            this.valid = true
        })
    },

    beforeDestroy() {
        document.removeEventListener('click', this.closeOnExternalClick);
    },

    methods: {
        search(item) {
            if (this.filter) {
                return this.filter(item, this.value);
            }

            let text = item[this.keys.text] || item;
            let query = this.value;

            if (typeof query === 'string') {
                query = query.toLowerCase();
            }

            return fuzzysearch(query, text.toLowerCase());
        },

        select(item) {
            if (this.append) {
                this.$emit('input', this.value + this.appendDelimiter + (item[this.keys.value] || item))
            } else {
                this.$emit('input', item[this.keys.value] || item)
            }

            this.$emit('selected', item)

            this.validate()

            this.$nextTick(() => {
                this.close()
                this.$refs.input.focus()
            })
        },

        highlight(index) {
            let firstIndex = 0;
            let lastIndex = this.$refs.items.length - 1;

            if (index === -2) { // Allows for cycling from first to last when cycling is disabled
                index = lastIndex;
            } else if (index < firstIndex) {
                index = this.cycleHighlight ? lastIndex : index;
            } else if (index > lastIndex) {
                index = this.cycleHighlight ? firstIndex : -1;
            }

            this.highlightedItem = index;

            if (this.showOnUpDown) {
                this.open();
            }

            if (index < firstIndex || index > lastIndex) {
                this.$emit('highlight-overflow', index);
            } else {
                this.$emit('highlighted', this.$refs.items[index].item, index);
            }
        },

        selectHighlighted(index, e) {
            if (this.showDropdown && this.$refs.items.length) {
                e.preventDefault();
                this.select(this.$refs.items[index].item);
            }
        },

        clearSearch() {
            this.$emit('input', '')
            this.open()
        },

        open() {
            if (!this.showDropdown) {
                this.showDropdown = true;
                this.$emit('opened')
            }
        },

        close() {
            if (this.showDropdown) {
                this.showDropdown = false;
                this.highlightedItem = -1;

                this.$emit('closed')
                this.validate();
            }
        },

        closeOnExternalClick(e) {
            if (! this.$refs.autocomplete.contains(e.target) && this.showDropdown) {
                this.close();
            }
        },

        focus() {
            this.active = true;
        },

        blur() {
            this.active = false;

            if (!this.dirty) {
                this.dirty = true;
            }
        }
    },

    components: {
        UiIcon,
        UiAutocompleteSuggestion
    },

    mixins: [
        HasTextInput,
        ValidatesInput
    ]
};
</script>

<style lang="stylus">
@import './styles/imports'

.ui-autocomplete
    font-family $font-stack
    display flex
    position relative
    margin-bottom 12px
    align-items flex-start

    &:hover:not(.disabled)
        .ui-autocomplete-label-text
            color $input-label-color-hover

        .ui-autocomplete-input
            border-bottom-color $input-border-color-hover

    &.active:not(.disabled)
        .ui-autocomplete-label-text,
        .ui-autocomplete-icon
            color $input-label-color-active

        .ui-autocomplete-input
            border-bottom-width 2px
            border-bottom-color $input-border-color-active

    &.has-label
        .ui-autocomplete-icon-wrapper
            padding-top 20px

        .ui-autocomplete-clear-button
            top 22px

    &.icon-right
        .ui-autocomplete-icon-wrapper
            order 1
            margin-left 8px
            margin-right 0

    &.invalid:not(.disabled)
        .ui-autocomplete-label-text,
        .ui-autocomplete-icon
            color $input-label-color-invalid

        .ui-autocomplete-input
            border-bottom-color $input-border-color-invalid

     &.disabled
        .ui-autocomplete-input
            color $input-color-disabled
            border-bottom-style dashed

        .ui-autocomplete-icon
            opacity 0.6

        .ui-autocomplete-feedback
            opacity 0.8

.ui-autocomplete-label
    display block
    position relative
    width 100%
    margin 0
    padding 0

.ui-autocomplete-icon-wrapper
    height 24px
    flex-shrink 0
    margin-right 12px
    padding-top 4px

.ui-autocomplete-icon
    color $input-label-color

.ui-autocomplete-content
    flex-grow 1

.ui-autocomplete-label-text
    font-size 14px
    line-height 1
    margin-bottom 2px
    color $input-label-color
    transition color 0.1s ease

.ui-autocomplete-input
    cursor auto
    background none
    outline none
    border none
    padding 0

    // Hide Edge and IE input clear button
    &::-ms-clear
        display none


    width 100%
    height 32px
    border-bottom-width 1px
    border-bottom-style solid
    border-bottom-color $input-border-color

    transition border 0.1s ease

    color $input-color
    font-weight normal
    font-size 16px
    font-family $font-stack

.ui-autocomplete-clear-button
    font-size 18px
    position absolute
    right 0
    top 6px
    color $input-clear-button-color
    cursor pointer

    &:hover
        color $input-clear-button-color-hover

.ui-autocomplete-feedback
    margin 0
    height 20px
    overflow hidden
    position relative
    font-size 14px
    padding-top 4px

.ui-autocomplete-help-text
    color $input-help-color
    line-height 1

.ui-autocomplete-error-text
    position absolute
    color $input-error-color
    line-height 1
    opacity 1
    margin-top 0

.ui-autocomplete-feedback-toggle-enter-active,
.ui-autocomplete-feedback-toggle-leave-active
    transition all .3s ease

.ui-autocomplete-feedback-toggle-enter,
.ui-autocomplete-feedback-toggle-leave-active
   opacity 0
   margin-top -20px

.ui-autocomplete-suggestions
    min-width 100%
    display block
    position absolute
    padding 0
    margin 0
    margin-bottom 8px
    list-style-type none
    box-shadow 1px 2px 8px $md-grey-600
    background-color white
    color $md-dark-text
    transition left 0.1s ease-in-out
    z-index $z-index-dropdown
</style>
