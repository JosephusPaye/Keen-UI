<template>
    <div
        class="ui-slider" :id="id"
        :class="{
            min: value === 0, max: value === 100, dragging: dragging, disabled: disabled,
            active: active, 'has-label': hasLabel
        }"

        :tabindex="disabled ? null : 0" role="slider" :aria-valuemin="0" :aria-valuemax="100"
        :aria-valuenow="value"

        @keydown.left.prevent="decrement" @keydown.right.prevent="increment"
        @keydown.down.prevent="decrement" @keydown.up.prevent="increment"
        @focus="focus" @blur="blur"
    >
        <input type="hidden" :value="value" :name="name">

        <div class="ui-slider-icon-wrapper" v-if="showIcon">
            <ui-icon :icon="icon" class="ui-slider-icon"></ui-icon>
        </div>

        <div class="ui-slider-content">
            <div class="ui-slider-label" v-text="label" v-if="!hideLabel"></div>

            <div class="ui-slider-wrapper" v-el:slider @mousedown="sliderClick">
                <div class="ui-slider-containment" v-el:containment></div>

                <div class="ui-slider-track">
                    <div class="ui-slider-track-fill" :style="{ width: value + '%'}"></div>
                </div>

                <div class="ui-slider-thumb-container" v-el:thumb>
                    <div class="ui-slider-focus-ring"></div>
                    <div class="ui-slider-thumb"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Draggabilly from 'draggabilly';

import UiIcon from './UiIcon.vue';
import ReceivesTargetedEvent from './mixins/ReceivesTargetedEvent';

export default {
    name: 'ui-slider',

    props: {
        name: String,
        value: {
            type: Number,
            required: true,
            twoWay: true
        },
        step: {
            type: Number,
            default: 5
        },
        icon: String,
        label: String,
        hideLabel: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            active: false,
            initialValue: 0,
            dragging: false,
            draggable: null
        };
    },

    computed: {
        showIcon() {
            return Boolean(this.icon);
        },

        hasLabel() {
            if (this.hideLabel) {
                return true;
            }

            return Boolean(this.label);
        }
    },

    watch: {
        value() {
            if (!this.dragging) {
                this.$els.thumb.style.left = this.value + '%';
            }
        },

        disabled() {
            if (this.disabled) {
                this.draggable.disable();
            } else {
                this.draggable.enable();
            }
        }
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

    ready() {
        // Cache initial value for later reset
        this.initialValue = this.value;

        // Set initial position
        this.$els.thumb.style.left = this.value + '%';

        // Initialize Draggabilly
        this.draggable = new Draggabilly(this.$els.thumb, {
            containment: this.$els.containment,
            axis: 'x'
        });

        // Setup drag events
        this.draggable.on('dragStart', this.dragStart);
        this.draggable.on('dragMove', this.dragMove);
        this.draggable.on('dragEnd', this.dragEnd);

        if (this.disabled) {
            this.draggable.disable();
        }
    },

    beforeDestroy() {
        if (this.draggable) {
            this.draggable.destroy();
        }
    },

    methods: {
        focus() {
            this.active = true;
        },

        blur() {
            this.active = false;
        },

        sliderClick(e) {
            if (this.disabled) {
                return;
            }

            let sliderPosition = this.$els.slider.getBoundingClientRect();

            let newValue = ((e.clientX - sliderPosition.left) / sliderPosition.width) * 100;

            this.setValue(newValue);

            // Allow for click and drag on the track
            if (e.target !== this.$els.thumb) {
                this.draggable._pointerDown(e, e);
            }

            this.$el.focus();
        },

        dragStart() {
            this.dragging = true;
            this.$el.focus();
        },

        dragMove() {
            let x = this.draggable.position.x;
            let newValue = (x / this.$els.slider.getBoundingClientRect().width) * 100;

            this.setValue(newValue);
        },

        dragEnd() {
            this.dragging = false;
        },

        increment() {
            if (this.value === 100) {
                return;
            }

            this.setValue(this.value + this.step);
        },

        decrement() {
            if (this.value === 0) {
                return;
            }

            this.setValue(this.value - this.step);
        },

        setValue(value) {
            if (value === this.value) {
                return;
            }

            // Round the value
            var moderatedValue = Math.round(value);

            // Check for max
            if (moderatedValue >= 100) {
                moderatedValue = 100;
            }

            // Check for min
            if (moderatedValue <= 0) {
                moderatedValue = 0;
            }

            this.value = moderatedValue;
        }
    },

    components: {
        UiIcon
    },

    mixins: [
        ReceivesTargetedEvent
    ]
};
</script>

<style lang="stylus">
@import './styles/imports';

// Track line
$track-height = 3px;
$track-fill-color = $md-brand-primary;
$track-background-color = alpha(black, 0.12);

// Thumb
$thumb-size = 16px;
$thumb-scale-active = 1.1;
$thumb-container-size = 38px;
$thumb-transition-duration = 0.2s;
$thumb-fill-color = $md-brand-primary;

// Slider container
.ui-slider {
    display: flex;
    position: relative;
    outline: none;
    width: 100%;

    &:hover:not(.disabled) {
        .ui-slider-thumb {
            transform: scale($thumb-scale-active);
        }

        .ui-slider-label {
            color: $input-label-color-hover;
        }
    }

    &:focus:not(.disabled),
    &.dragging:not(.disabled) {
        .ui-slider-thumb {
            transform: scale($thumb-scale-active);
        }

        .ui-slider-focus-ring {
            transform: scale(1);
        }
    }

    &.active:not(.disabled) {
        .ui-slider-label,
        .ui-slider-icon {
            color: $input-label-color-active;
        }
    }

    &.has-label {
        .ui-slider-icon-wrapper {
            padding-top: 34px;
        }
    }

    &.disabled {
        .ui-slider-track-fill {
            background-color: transparent;
        }

        .ui-slider-thumb {
            border: 2px solid white;
            background-color: #DDD;
        }

        .ui-slider-icon {
            opacity: 0.6;
        }
    }

    &:not(.disabled) {
        .ui-slider-wrapper {
            cursor: pointer;
        }
    }
}

.ui-slider-wrapper {
    display: flex;
    align-items: center;

    position: relative;
    width: 100%;
    height: $thumb-container-size;
}

.ui-slider-icon-wrapper {
    height: 24px;
    flex-shrink: 0;
    margin-right: 12px;
    padding-top: 7px;
}

.ui-slider-icon {
    color: $input-label-color;
}

.ui-slider-content {
    display: flex;
    flex-direction: column;
    position: relative;
    flex-grow: 1;
}

.ui-slider-label {
    font-size: 14px;
    color: $input-label-color;
    transition: color 0.1s ease;
}

.ui-slider-containment {
    position: absolute;
    left: 0;
    right: 0;

    margin-left: -($thumb-container-size / 2) - ($track-height / 2);
    margin-right: -($thumb-container-size / 2) - ($track-height / 2);
}

.ui-slider-track {
    width: 100%;
    position: relative;
    height: $track-height;
    background-color: $track-background-color;
}

.ui-slider-track-fill {
    position: absolute;
    top: 0;
    height: $track-height;
    background-color: $track-fill-color;
}

.ui-slider-thumb-container {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;

    margin-left: -($thumb-container-size / 2) - ($track-height / 2);

    width: $thumb-container-size;
    height: $thumb-container-size;
}

.ui-slider-thumb {
    display: flex;
    align-items: center;
    justify-content: center;

    width: $thumb-size;
    height: $thumb-size;

    border-radius: 50%;
    background-color: $thumb-fill-color;

    transition: transform $thumb-transition-duration linear;
    transform: scale(1);
}

.ui-slider-focus-ring {
    position: absolute;
    top: 0;
    left: 0;

    width: $thumb-container-size;
    height: $thumb-container-size;

    border-radius: 50%;
    background-color: alpha($thumb-fill-color, 0.38);

    transition: transform $thumb-transition-duration ease;
    transform: scale(0);
}
</style>
