<template>
    <div class="ui-calendar-controls">
        <ui-icon-button
            class="ui-calendar-controls__nav-button"
            icon="keyboard_arrow_left"
            type="secondary"

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
        lang: Object,
        dateInView: Date,
        minDate: Date,
        maxDate: Date
    },

    computed: {
        monthAndYear() {
            return dateUtils.getMonthFull(this.dateInView, this.lang) + ' ' +
                this.dateInView.getFullYear();
        },

        previousMonthDisabled() {
            if (!this.minDate) {
                return false;
            }

            const lastDayOfPreviousMonth = dateUtils.clone(this.dateInView);

            // Setting the date to zero goes to the last day in previous month
            lastDayOfPreviousMonth.setDate(0);

            return this.minDate.getTime() > lastDayOfPreviousMonth.getTime();
        },

        nextMonthDisabled() {
            if (!this.maxDate) {
                return false;
            }

            const firstDayOfNextMonth = dateUtils.clone(this.dateInView);

            // Set the month ot next month, and the day to the first day
            // If the month overflows, it increments the year
            firstDayOfNextMonth.setMonth(this.dateInView.getMonth() + 1, 1);

            return this.maxDate.getTime() < firstDayOfNextMonth.getTime();
        }
    },

    methods: {
        goToPreviousMonth() {
            const date = dateUtils.clone(this.dateInView);
            date.setMonth(date.getMonth() - 1);

            this.goToDate(date, { isForward: false });
        },

        goToNextMonth() {
            const date = dateUtils.clone(this.dateInView);
            date.setMonth(date.getMonth() + 1);

            this.goToDate(date, { isForward: true });
        },

        goToDate(date, options = { isForward: true }) {
            this.$emit('go-to-date', date, options);
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
}
</style>
