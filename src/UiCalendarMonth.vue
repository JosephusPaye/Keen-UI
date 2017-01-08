<template>
    <div class="ui-calendar-month">
        <div class="ui-calendar-month__header">
            <span v-for="day in lang.days.initials">{{ day }}</span>
        </div>

        <div
            class="ui-calendar-month__week is-current"
            ref="current"

            :class="weekClasses"

            @transitionend="onTransitionEnd"
        >
            <ui-calendar-week
                :date-filter="dateFilter"
                :max-date="maxDate"
                :min-date="minDate"
                :month="currentWeekStartDates[1].getMonth()"
                :selected="selected"
                :week-start="date"
                :key="index"

                @date-select="onDateSelect"

                v-for="(date, index) in currentWeekStartDates"
            ></ui-calendar-week>
        </div>

        <div class="ui-calendar-month__week is-other" ref="other" :class="weekClasses">
            <ui-calendar-week
                :max-date="maxDate"
                :min-date="minDate"
                :month="otherWeekStartDates[1].getMonth()"
                :selected="selected"
                :week-start="date"
                :key="index"
                :visible="false"

                @date-select="onDateSelect"

                v-for="(date, index) in otherWeekStartDates"
            ></ui-calendar-week>
        </div>
    </div>
</template>

<script>
import UiCalendarWeek from './UiCalendarWeek.vue';

import dateUtils from 'helpers/date';

export default {
    name: 'ui-calendar-month',

    props: {
        lang: Object,
        dateFilter: Function,
        dateInView: Date,
        selected: Date,
        maxDate: Date,
        minDate: Date
    },

    data() {
        return {
            dateOutOfView: dateUtils.clone(this.dateInView),
            isSliding: false,
            slideDirection: ''
        };
    },

    computed: {
        weekClasses() {
            return [
                this.slideDirection,
                { 'is-sliding': this.isSliding }
            ];
        },

        currentWeekStartDates() {
            return this.getWeekStartDates(this.dateInView);
        },

        otherWeekStartDates() {
            return this.getWeekStartDates(this.dateOutOfView);
        }
    },

    methods: {
        getWeekStartDates(dateInWeek) {
            let date = dateUtils.clone(dateInWeek);

            date.setDate(1); // Jump to the start of the month
            date = dateUtils.moveToDayOfWeek(date, 0); // Jump to the start of the week

            const current = dateUtils.clone(date);
            current.setDate(current.getDate() + 7);

            const starts = [date];
            const month = current.getMonth();

            while (current.getMonth() === month) {
                starts.push(dateUtils.clone(current));
                current.setDate(current.getDate() + 7);
            }

            return starts;
        },

        goToDate(date, options = { isForward: true }) {
            this.isSliding = true;
            this.slideDirection = options.isForward ? 'left' : 'right';
            this.dateOutOfView = dateUtils.clone(date);
        },

        onDateSelect(date) {
            this.$emit('date-select', date);
        },

        onTransitionEnd() {
            this.isSliding = false;
            this.slideDirection = '';

            this.$emit('change', dateUtils.clone(this.dateOutOfView));
            this.$emit('transition-end');
        }
    },

    components: {
        UiCalendarWeek
    }
};
</script>

<style lang="sass">
@import '~styles/imports';

.ui-calendar-month {
    height: ($ui-calendar-cell-size * 6) + $ui-calendar-month-header-height;
    overflow: hidden;
    position: relative;
    width: 100%;
}

.ui-calendar-month__header {
    align-items: center;
    display: flex;
    height: $ui-calendar-month-header-height;
    justify-content: space-around;
    width: 100%;

    span {
        align-items: center;
        color: $secondary-text-color;
        display: flex;
        font-size: 14px;
        height: $ui-calendar-cell-size;
        justify-content: center;
        text-transform: uppercase;
        width: $ui-calendar-cell-size;
    }
}

.ui-calendar-month__week {
    $week-width: $ui-calendar-cell-size * 7;
    position: absolute;
    width: $week-width;

    &.is-current {
        left: 0;
    }

    &.is-other {
        left: $week-width;

        &.right {
            left: -$week-width;
        }
    }

    &.is-sliding {
        transition: transform 250ms ease;

        &.left {
            transform: translate3d(-$week-width, 0, 0);
        }

        &.right {
            transform: translate3d($week-width, 0, 0);
        }
    }
}
</style>s
