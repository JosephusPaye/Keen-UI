<template>
    <div class="ui-calendar-controls" :class="classes">
        <ui-icon-button
            class="ui-calendar-controls__nav-button"
            icon="keyboard_arrow_left"
            type="secondary"

            :color="color === 'default' ? 'default' : 'white'"
            :disabled="previousMonthDisabled"

            @click="goToPreviousMonth"
        >
            <ui-icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"/>
                </svg>
            </ui-icon>
        </ui-icon-button>

        <div class="ui-calendar-controls__month-and-year">{{ monthAndYear }}</div>

        <ui-icon-button
            class="ui-calendar-controls__nav-button"
            icon="keyboard_arrow_right"
            type="secondary"

            :color="color === 'default' ? 'default' : 'white'"
            :disabled="nextMonthDisabled"

            @click="goToNextMonth"
        >
            <ui-icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M8.578 16.36l4.594-4.595L8.578 7.17l1.406-1.405 6 6-6 6z"/>
                </svg>
            </ui-icon>
        </ui-icon-button>
    </div>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiIconButton from './UiIconButton.vue';

import dateUtils from './helpers/date';

export default {
    name: 'ui-calendar-controls',

    props: {
        color: {
            type: String,
            default: 'default' // 'default', 'primary' or 'accent'
        },
        lang: Object,
        dateInView: Date,
        minDate: Date,
        maxDate: Date,
        yearRange: {
            type: Array,
            required: true
        }
    },

    computed: {
        classes() {
            return [
                `ui-calendar-controls--color-${this.color}`
            ];
        },

        monthAndYear() {
            return dateUtils.getMonthFull(this.dateInView, this.lang) + ' ' +
                this.dateInView.getFullYear();
        },

        previousMonthDisabled() {
            const lastDayOfPreviousMonth = dateUtils.clone(this.dateInView);

            // Setting the date to zero goes to the last day in previous month
            lastDayOfPreviousMonth.setDate(0);

            const outsideYearRange = lastDayOfPreviousMonth.getFullYear() < this.yearRange[0];

            if (this.minDate) {
                return outsideYearRange || lastDayOfPreviousMonth.getTime() < this.minDate.getTime();
            }

            return outsideYearRange;
        },

        nextMonthDisabled() {
            const firstDayOfNextMonth = dateUtils.clone(this.dateInView);

            // Set the month to next month, and the day to the first day
            // If the month overflows, it increments the year
            firstDayOfNextMonth.setMonth(this.dateInView.getMonth() + 1, 1);

            const outsideYearRange = firstDayOfNextMonth.getFullYear() > this.yearRange[this.yearRange.length - 1];

            if (this.maxDate) {
                return outsideYearRange || firstDayOfNextMonth.getTime() > this.maxDate.getTime();
            }

            return outsideYearRange;
        }
    },

    methods: {
        goToPreviousMonth() {
            const date = dateUtils.clone(this.dateInView);

            // Set to first of the month, since the current date may not be available in the previous month. See #434.
            date.setDate(1);
            date.setMonth(date.getMonth() - 1);

            this.goToDate(date);
        },

        goToNextMonth() {
            const date = dateUtils.clone(this.dateInView);

            // Set to first of the month, since the current date may not be available in the next month. See #434.
            date.setDate(1);
            date.setMonth(date.getMonth() + 1);

            this.goToDate(date);
        },

        goToDate(date) {
            this.$emit('go-to-date', date);
        }
    },

    components: {
        UiIcon,
        UiIconButton
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-calendar-controls {
    align-items: center;
    display: flex;
    height: $ui-calendar-controls-height;
    justify-content: space-between;
}

.ui-calendar-controls__month-and-year {
    font-size: rem(15px);
    font-weight: 600;
}

// ================================================
// Colors
// ================================================

.ui-calendar-controls--color-default {
    background-color: #EEE;
}

.ui-calendar-controls--color-primary {
    background-color: $brand-primary-color;
    color: white;
}

.ui-calendar-controls--color-accent {
    background-color: $brand-accent-color;
    color: white;
}
</style>
