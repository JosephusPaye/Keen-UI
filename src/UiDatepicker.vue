<template>
    <div class="ui-datepicker" :class="classes">
        <input
            class="ui-datepicker__hidden-input"
            type="hidden"

            :name="name"
            :value="submittedValue"
        >

        <div class="ui-datepicker__icon-wrapper" v-if="icon || $slots.icon">
            <slot name="icon">
                <ui-icon :icon="icon"></ui-icon>
            </slot>
        </div>

        <div class="ui-datepicker__content">
            <div
                class="ui-datepicker__label"
                ref="label"

                :tabindex="disabled ? null : (tabindex || '0')"

                @focus="onFocus"
                @click="togglePicker({ returnFocus: false })"
                @keydown.enter.prevent="togglePicker({ returnFocus: false })"
                @keydown.space.prevent="togglePicker({ returnFocus: false })"
                @keydown.tab="onTabAway"
            >
                <div
                    class="ui-datepicker__label-text"
                    :class="labelClasses"
                    v-if="label || $slots.default"
                >
                    <slot>{{ label }}</slot>
                </div>

                <div class="ui-datepicker__display">
                    <div
                        class="ui-datepicker__display-value"
                        :class="{ 'is-placeholder': !hasDisplayText }"
                    >
                        {{ hasDisplayText ? displayText : (hasFloatingLabel && isLabelInline) ? null : placeholder }}
                    </div>

                    <ui-icon class="ui-datepicker__dropdown-button" v-if="usesPopover && !disabled">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M6.984 9.984h10.03L12 15z"/>
                        </svg>
                    </ui-icon>
                </div>

                <ui-popover
                    contain-focus
                    open-on="manual"
                    ref="popover"

                    :close-on-scroll="false"
                    :append-to-body="appendDropdownToBody"
                    :z-index="dropdownZIndex"

                    @close="onPickerClose"
                    @open="onPickerOpen"

                    v-if="usesPopover"
                    v-show="!disabled"
                >
                    <ui-datepicker-calendar
                        :color="color"
                        :date-filter="dateFilter"
                        :lang="lang"
                        :max-date="maxDate"
                        :min-date="minDate"
                        :orientation="orientation"
                        :current-view.sync="calendarView"
                        :value="date"
                        :start-of-week="startOfWeek"
                        :year-range="yearRange"
                        @date-select="onDateSelect"
                    ></ui-datepicker-calendar>
                </ui-popover>
            </div>

            <div class="ui-datepicker__feedback" v-if="hasFeedback">
                <div class="ui-datepicker__feedback-text" v-if="showError">
                    <slot name="error">{{ error }}</slot>
                </div>

                <div class="ui-datepicker__feedback-text" v-else-if="showHelp">
                    <slot name="help">{{ help }}</slot>
                </div>
            </div>
        </div>

        <ui-modal
            ref="modal"
            remove-header
            size="auto"

            @hidden="onPickerClose"
            @open="onPickerOpen"

            v-if="usesModal && !disabled"
        >
            <ui-datepicker-calendar
                :color="color"
                :date-filter="dateFilter"
                :lang="lang"
                :max-date="maxDate"
                :min-date="minDate"
                :orientation="orientation"
                :current-view.sync="calendarView"
                :value="date"
                :start-of-week="startOfWeek"
                :year-range="yearRange"
                @date-select="onDateSelect"
            ></ui-datepicker-calendar>
        </ui-modal>
    </div>
</template>

<script>
import UiButton from './UiButton.vue';
import UiDatepickerCalendar from './UiDatepickerCalendar.vue';
import UiIcon from './UiIcon.vue';
import UiModal from './UiModal.vue';
import UiPopover from './UiPopover.vue';

import RespondsToExternalClick from './mixins/RespondsToExternalClick';
import dateUtils from './helpers/date';

export default {
    name: 'ui-datepicker',

    props: {
        name: String,
        value: [Date, String],
        tabindex: [String, Number],
        startOfWeek: {
            type: Number,
            default: 0
        },
        minDate: Date,
        maxDate: Date,
        yearRange: Array,
        lang: {
            type: Object,
            default() {
                return dateUtils.defaultLang;
            }
        },
        customFormatter: Function,
        dateFilter: Function,
        color: {
            type: String,
            default: 'primary' // 'primary' or 'accent'
        },
        orientation: {
            type: String,
            default: 'portrait' // 'portrait' or 'landscape'
        },
        pickerType: {
            type: String,
            default: 'popover' // 'popover' or 'modal'
        },
        defaultView: {
            type: String,
            default: 'date'
        },
        appendDropdownToBody: Boolean,
        dropdownZIndex: Number,
        placeholder: String,
        icon: String,
        iconPosition: {
            type: String,
            default: 'left' // 'left' or 'right'
        },
        label: String,
        floatingLabel: {
            type: Boolean,
            default: false
        },
        invalid: {
            type: Boolean,
            default: false
        },
        help: String,
        error: String,
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            isActive: false,
            isTouched: false,
            initialValue: JSON.stringify(this.value),
            calendarView: this.defaultView
        };
    },

    computed: {
        date() {
            return typeof this.value === 'string' ? new Date(this.value) : this.value;
        },

        classes() {
            return [
                `ui-datepicker--icon-position-${this.iconPosition}`,
                `ui-datepicker--orientation-${this.orientation}`,
                { 'is-active': this.isActive },
                { 'is-invalid': this.invalid },
                { 'is-touched': this.isTouched },
                { 'is-disabled': this.disabled },
                { 'has-label': this.hasLabel },
                { 'has-floating-label': this.hasFloatingLabel }
            ];
        },

        labelClasses() {
            return {
                'is-inline': this.hasFloatingLabel && this.isLabelInline,
                'is-floating': this.hasFloatingLabel && !this.isLabelInline
            };
        },

        hasLabel() {
            return Boolean(this.label) || Boolean(this.$slots.default);
        },

        hasFloatingLabel() {
            return this.hasLabel && this.floatingLabel;
        },

        isLabelInline() {
            return !this.date && !this.isActive;
        },

        hasFeedback() {
            return this.showError || this.showHelp;
        },

        showError() {
            return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
        },

        showHelp() {
            return Boolean(this.help) || Boolean(this.$slots.help);
        },

        displayText() {
            if (!this.date) {
                return '';
            }

            return this.customFormatter ?
                this.customFormatter(this.date, this.lang) :
                dateUtils.humanize(this.date, this.lang);
        },

        hasDisplayText() {
            return Boolean(this.displayText.length);
        },

        submittedValue() {
            return this.date ?
                `${this.date.getFullYear()}-${1 + this.date.getMonth()}-${this.date.getDate()}` :
                '';
        },

        usesPopover() {
            return this.pickerType === 'popover';
        },

        usesModal() {
            return this.pickerType === 'modal';
        }
    },

    watch: {
        isActive(value) {
            if (value) {
                this.addExternalClickListener([this.$el, this.getPicker().$el], this.onExternalClick);
            } else {
                this.removeExternalClickListener();
            }
        }
    },

    methods: {
        onDateSelect(date) {
            this.$emit('input', date);
            this.closePicker();
        },

        isPickerOpen() {
            return this.usesModal ? this.$refs.modal.isOpen : this.$refs.popover.isOpen();
        },

        getPicker() {
            return this.$refs[this.usesModal ? 'modal' : 'popover'];
        },

        openPicker() {
            if (this.disabled) {
                return;
            }

            this.getPicker().open();
        },

        closePicker(options = { returnFocus: true }) {
            this.getPicker().close();

            this.calendarView = this.defaultView;

            if (options.returnFocus) {
                this.$refs.label.focus();
            }
        },

        togglePicker(options = { returnFocus: true }) {
            if (this.isPickerOpen()) {
                this.closePicker(options);
            } else {
                this.openPicker();
            }
        },

        onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },

        onTabAway(e) {
            this.isActive = false;
            this.$emit('blur', e);

            if (this.isPickerOpen()) {
                this.closePicker({ returnFocus: false });
            }
        },

        onPickerOpen() {
            this.$emit('open');
        },

        onPickerClose() {
            this.$emit('close');

            if (!this.isTouched) {
                this.isTouched = true;
                this.$emit('touch');
            }
        },

        onExternalClick() {
            this.isActive = false;
        },

        focus() {
            this.$refs.label.focus();
        },

        clear() {
            this.$emit('input', null);
        },

        reset() {
            this.$emit('input', JSON.parse(this.initialValue));
        },

        resetTouched(options = { touched: false }) {
            this.isTouched = options.touched;
        }
    },

    components: {
        UiButton,
        UiDatepickerCalendar,
        UiIcon,
        UiModal,
        UiPopover
    },

    mixins: [
        RespondsToExternalClick
    ]
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-datepicker {
    align-items: flex-start;
    display: flex;
    font-family: $font-stack;
    margin-bottom: $ui-input-margin-bottom;
    outline: none;
    position: relative;

    &:hover:not(.is-disabled) {
        .ui-datepicker__label-text {
            color: $ui-input-label-color--hover;
        }

        .ui-datepicker__display {
            border-bottom-color: $ui-input-border-color--hover;
        }

        .ui-datepicker__dropdown-button {
            color: $ui-input-button-color--hover;
        }
    }

    &.is-active:not(.is-disabled) {
        .ui-datepicker__label-text,
        .ui-datepicker__icon-wrapper .ui-icon {
            color: $ui-input-label-color--active;
        }

        .ui-datepicker__display {
            border-bottom-color: $ui-input-border-color--active;
            border-bottom-width: $ui-input-border-width--active;
        }
    }

    &.has-floating-label {
        .ui-datepicker__label-text {
            // Behaves like a block, but width is the width of its content.
            // Needed here so label doesn't overflow parent when scaled.
            display: table;

            &.is-inline {
                color: $ui-input-label-color; // So the hover styles don't override it
                cursor: pointer;
                transform: translateY($ui-input-label-top--inline) scale(1.1);
            }

            &.is-floating {
                transform: translateY(0) scale(1);
            }
        }
    }

    &.has-label {
        .ui-datepicker__icon-wrapper {
            padding-top: $ui-input-icon-margin-top--with-label;
        }

        .ui-datepicker__dropdown-button {
            top: $ui-input-button-margin-top--with-label;
        }
    }

    &.is-invalid:not(.is-disabled) {
        .ui-datepicker__label-text,
        .ui-datepicker__icon-wrapper .ui-icon {
            color: $ui-input-label-color--invalid;
        }

        .ui-datepicker__display {
            border-bottom-color: $ui-input-border-color--invalid;
        }

        .ui-datepicker__feedback {
            color: $ui-input-feedback-color--invalid;
        }
    }

    &.is-disabled {
        .ui-datepicker__display {
            border-bottom-style: $ui-input-border-style--disabled;
            border-bottom-width: $ui-input-border-width--active;
            color: $ui-input-text-color--disabled;
            cursor: default;
        }

        .ui-datepicker__dropdown-button,
        .ui-datepicker__display-value.is-placeholder {
            color: $ui-input-text-color--disabled;
            opacity: $ui-input-button-opacity--disabled;
        }

        .ui-datepicker__icon-wrapper .ui-icon {
            opacity: $ui-input-icon-opacity--disabled;
        }

        .ui-datepicker__feedback {
            opacity: $ui-input-feedback-opacity--disabled;
        }
    }

    .ui-modal:not(.has-footer) .ui-modal__body {
        padding: 0;
    }
}

.ui-datepicker__label {
    display: block;
    margin: 0;
    outline: none;
    padding: 0;
    position: relative;
    width: 100%;
}

.ui-datepicker__icon-wrapper {
    flex-shrink: 0;
    margin-right: $ui-input-icon-margin-right;
    padding-top: $ui-input-icon-margin-top;

    .ui-icon {
        color: $ui-input-icon-color;
    }
}

.ui-datepicker__content {
    flex-grow: 1;
}

.ui-datepicker__label-text {
    color: $ui-input-label-color;
    cursor: default;
    font-size: $ui-input-label-font-size;
    line-height: $ui-input-label-line-height;
    margin-bottom: $ui-input-label-margin-bottom;
    transform-origin: left;
    transition: color 0.1s ease, transform 0.2s ease;
}

.ui-datepicker__display {
    align-items: center;
    border: none;
    border-bottom-color: $ui-input-border-color;
    border-bottom-style: solid;
    border-bottom-width: $ui-input-border-width;
    color: $ui-input-text-color;
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: $ui-input-text-font-size;
    font-weight: normal;
    height: $ui-input-height;
    line-height: 1;
    padding: 0;
    transition: border 0.1s ease;
    user-select: none;
    width: 100%;
}

.ui-datepicker__display-value {
    flex-grow: 1;

    &.is-placeholder {
        color: $hint-text-color;
    }
}

.ui-datepicker__dropdown-button {
    color: $ui-input-button-color;
    font-size: $ui-input-button-size;
    margin-left: auto;
    margin-right: rem(-4px);
}

.ui-datepicker__feedback {
    color: $ui-input-feedback-color;
    font-size: $ui-input-feedback-font-size;
    line-height: $ui-input-feedback-line-height;
    margin: 0;
    padding-top: $ui-input-feedback-padding-top;
    position: relative;
}

// ================================================
// Icon Positions
// ================================================

.ui-datepicker--icon-position-right {
    .ui-datepicker__icon-wrapper {
        margin-left: rem(8px);
        margin-right: 0;
        order: 1;
    }
}
</style>
