<template>
    <div
        class="ui-rating" :class="{ 'disabled': disabled, 'preview': previewing, 'active': active }"

        :tabindex="disabled ? null : 0" role="slider" :aria-valuemin="0" :aria-valuemax="total"
        :aria-valuenow="previewValue"

        @keydown.up.prevent="incrementPreviewValue" @keydown.down.prevent="decrementPreviewValue"
        @keydown.right.prevent="incrementPreviewValue" @keydown.left.prevent="decrementPreviewValue"
        @keydown.enter.prevent="commitValue(previewValue)" @focus="focus" @blur="blur"
    >
        <div class="ui-rating-label" v-text="label" v-if="!hideLabel"></div>

        <div
            class="ui-rating-icons-wrapper" @mouseenter="startPreview" @mouseleave="endPreview"
        >
            <ui-rating-icon
                :type="type" v-for="n in total" :selected="(n + 1) <= value" @mouseover="preview(n)"
                :filled="(n + 1) <= previewValue" @click="commitValue(n + 1)"
            ></ui-rating-icon>
        </div>

        <div
            class="ui-rating-feedback" v-if="showFeedback" transition="ui-rating-feedback-toggle"
        >
            <div class="ui-rating-help-text" v-text="helpText"></div>
        </div>
    </div>
</template>

<script>
import UiRatingIcon from './UiRatingIcon.vue';

import ReceivesTargetedEvent from './mixins/ReceivesTargetedEvent';

export default {
    name: 'ui-rating',

    props: {
        type: {
            type: String,
            default: 'star' // 'star', or 'heart'
        },
        value: {
            type: Number,
            coerce: Number,
            required: true,
            twoWay: true
        },
        total: {
            type: Number,
            coerce: Number,
            required: true
        },
        label: String,
        hideLabel: {
            type: Boolean,
            default: false
        },
        helpText: String,
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            active: false,
            initialValue: 0,
            previewValue: 0,
            previewing: false
        };
    },

    computed: {
        showFeedback() {
            return Boolean(this.helpText);
        }
    },

    watch: {
        value() {
            this.previewValue = this.value;
        },

        previewValue() {
            this.$dispatch('preview-value-changed', this.previewValue);
        }
    },

    created() {
        // Cache initial value for later reset
        this.initialValue = this.value;

        // Initialize preivew value
        this.previewValue = this.value;
    },

    events: {
        'ui-input::reset': function(id) {
            // Abort if reset event isn't meant for this component
            if (!this.eventTargetsComponent(id)) {
                return;
            }

            this.value = this.initialValue;
        }
    },

    methods: {
        startPreview() {
            if (this.disabled) {
                return;
            }

            this.previewing = true;
        },

        endPreview() {
            if (this.disabled) {
                return;
            }

            this.previewing = false;
            this.previewValue = this.value;
        },

        preview(n) {
            if (this.disabled) {
                return;
            }

            this.previewValue = n + 1;
        },

        commitValue(value) {
            if (this.disabled) {
                return;
            }

            if (value > 0 && value <= this.total) {
                this.value = value;
            }
        },

        incrementPreviewValue() {
            if (this.disabled) {
                return;
            }

            var proposedValue = this.previewValue + 1;

            if (proposedValue <= this.total) {
                this.previewValue = proposedValue;
            }
        },

        decrementPreviewValue() {
            if (this.disabled) {
                return;
            }

            var proposedValue = this.previewValue - 1;

            if (proposedValue > 0) {
                this.previewValue = proposedValue;
            }
        },

        focus() {
            this.active = true;
            this.startPreview();
        },

        blur() {
            this.active = false;

            this.commitValue(this.previewValue);
            this.endPreview();
        }
    },

    components: {
        UiRatingIcon
    },

    mixins: [
        ReceivesTargetedEvent
    ]
};
</script>

<style lang="stylus">
@import './styles/imports';

.ui-rating {
    font-family: $font-stack;
    outline: none;
    flex-direction: column;

    &:hover:not(.disabled) {
        .ui-rating-label {
            color: $input-label-color-hover;
        }
    }

    &.active:not(.disabled) {
        .ui-rating-label {
            color: $input-label-color-active;
        }
    }

    body[modality="keyboard"] &:focus {
        .ui-rating-icon-icon {
            color: $md-dark-secondary;

            &.selected  {
                color: $md-dark-secondary;
            }

            &.filled {
                color: darken($md-brand-primary, 20%);
            }
        }
    }

    &.preview {
        .ui-rating-icon-icon {
            cursor: pointer;

            &.selected  {
                color: $md-dark-hint;
            }

            &.filled {
                color: $md-brand-primary;
            }
        }
    }

    &.disabled {
        .ui-rating-icons-wrapper {
            opacity: 0.6;
        }

        .ui-rating-feedback {
            opacity: 0.8;
        }
    }

    .ui-rating-icon-icon {
        &.selected {
            color: $md-brand-primary;
        }
    }
}

.ui-rating-label {
    font-size: 14px;
    margin-bottom: 4px;
    color: $input-label-color;
    transition: color 0.1s ease;
}

.ui-rating-icons-wrapper {
    display: inline-flex;
}

.ui-rating-feedback {
    height: 20px;
    overflow: hidden;
    padding-top: 4px;
    position: relative;
    font-size: 14px;
}

.ui-rating-help-text {
    color: $md-dark-hint;
    line-height: 1;
}

.ui-rating-feedback-toggle-transition {
    transition-property: opacity, margin-top;
    transition-duration: 0.3s;
    margin-top: 0;
    opacity: 1;
}

.ui-rating-feedback-toggle-enter,
.ui-rating-feedback-toggle-leave {
    margin-top: -20px;
    opacity: 0;
}
</style>
