<template>
    <div class="ui-calendar-week">
        <div
            class="ui-calendar-week__date"

            :class="getDateClasses(date)"
            :key="index"
            :tabindex="(visible && !isDateDisabled(date)) ? 0 : null"

            @click="selectDate(date)"
            @keydown.enter="selectDate(date)"

            v-for="(date, index) in dates"
        >
            {{ getDayOfMonth(date) }}
        </div>
    </div>
</template>

<script>
import dateUtils from './helpers/date';

export default {
    name: 'ui-calendar-week',

    props: {
        month: Number,
        weekStart: Date,
        minDate: Date,
        maxDate: Date,
        selected: Date,
        dateFilter: Function,
        visible: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            today: new Date()
        };
    },

    computed: {
        dates() {
            return this.buildDays(this.weekStart);
        }
    },

    methods: {
        buildDays(weekStart) {
            const days = [dateUtils.clone(weekStart)];
            let day = dateUtils.clone(weekStart);

            for (let i = 1; i <= 6; i++) {
                day = dateUtils.clone(day);
                day.setDate(day.getDate() + 1);

                days.push(day);
            }

            return days;
        },

        getDateClasses(date) {
            return [
                { 'is-today': dateUtils.isSameDay(date, this.today) },
                { 'is-in-other-month': this.isDateInOtherMonth(date) },
                { 'is-selected': this.selected && dateUtils.isSameDay(date, this.selected) },
                { 'is-disabled': this.isDateDisabled(date) }
            ];
        },

        selectDate(date) {
            if (this.isDateDisabled(date)) {
                return;
            }

            this.$emit('date-select', date);
        },

        getDayOfMonth(date) {
            return dateUtils.getDayOfMonth(date);
        },

        isDateInOtherMonth(date) {
            return this.month !== date.getMonth();
        },

        isDateDisabled(date) {
            const isDisabled = (this.minDate && dateUtils.isBefore(date, this.minDate)) ||
                (this.maxDate && dateUtils.isAfter(date, this.maxDate));

            if (isDisabled) {
                return true;
            }

            return this.dateFilter ? !this.dateFilter(date) : false;
        }
    }
};
</script>

<style lang="scss">
@import './styles/imports';

.ui-calendar-week {
    display: flex;
    font-size: rem(14px);
    width: 100%;
}

.ui-calendar-week__date {
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: $ui-calendar-cell-size;
    justify-content: center;
    outline: none;
    text-align: center;
    width: $ui-calendar-cell-size;

    &:hover,
    body[modality="keyboard"] &:focus {
        background-color: rgba(black, 0.1);
    }

    &.is-in-other-month {
        visibility: hidden;
    }

    &.is-today {
        font-weight: bold;
        // color is defined in UiCalendar

        &.is-selected {
            color: white;
        }
    }

    &.is-selected {
        color: white;
        // background color is defined in UiCalendar
    }

    &.is-disabled {
        background-color: transparent;
        cursor: default;
        opacity: 0.4;
    }
}
</style>
