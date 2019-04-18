<template>
    <table class="ui-calendar-month">
        <thead class="ui-calendar-month__header">
            <tr>
                <th v-for="day in daysOfWeek">{{ day }}</th>
            </tr>
        </thead>

        <tbody class="ui-calendar-month__body">
            <tr
                is="ui-calendar-week"

                :color="color"
                :date-filter="dateFilter"
                :key="date.toString()"
                :max-date="maxDate"
                :min-date="minDate"
                :month="currentWeekStartDates[1].getMonth()"
                :selected="selected"
                :square-cells="squareCells"
                :week-start="date"

                @date-select="onDateSelect"

                v-for="date in currentWeekStartDates"
            >
                <template slot-scope="props" v-if="$scopedSlots.date">
                    <slot name="date" :date="props.date"></slot>
                </template>
            </tr>
        </tbody>
    </table>
</template>

<script>
import UiCalendarWeek from './UiCalendarWeek.vue';

import dateUtils from './helpers/date';

export default {
    name: 'ui-calendar-month',

    props: {
        lang: Object,
        dateFilter: Function,
        dateInView: Date,
        selected: Date,
        maxDate: Date,
        minDate: Date,
        startOfWeek: {
            type: Number,
            default: 0
        },
        color: {
            type: String,
            default: 'primary' // 'primary' or 'accent'
        },
        squareCells: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        daysOfWeek() {
            // Get the days from the start day to the end of the array
            const days = this.lang.days.initials.slice(this.startOfWeek);

            if (days.length === 7) {
                return days;
            }

            // Add the remaining days from the start of the array
            return days.concat(this.lang.days.initials.slice(0, this.startOfWeek));
        },

        currentWeekStartDates() {
            return this.getWeekStartDates(this.dateInView);
        }
    },

    methods: {
        getWeekStartDates(dateInWeek) {
            let date = dateUtils.clone(dateInWeek);

            date.setDate(1); // Jump to the start of the month
            date = dateUtils.moveToDayOfWeek(date, this.startOfWeek); // Jump to the start of the week

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

        goToDate(date) {
            this.$emit('change', dateUtils.clone(date));
        },

        onDateSelect(date) {
            this.$emit('date-select', date);
        }
    },

    components: {
        UiCalendarWeek
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-calendar-month {
    table-layout: fixed;
    width: 100%;
}

.ui-calendar-month__header {
    width: 100%;

    th {
        color: $secondary-text-color;
        font-size: rem(14px);
        font-weight: 600;
        height: $ui-calendar-month-header-height;
        text-align: center;
        text-transform: uppercase;
        vertical-align: middle;
        width: (100% / 7);
    }
}

.ui-calendar-month__body {
    width: 100%;
}
</style>
