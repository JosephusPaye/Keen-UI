<template>
    <tr class="ui-calendar-week" :class="classes">
        <td :key="date.toString()" v-for="date in dates">
            <button
                class="ui-calendar-week__date"

                :class="getDateClasses(date)"
                :disabled="isDateDisabled(date)"

                @click="selectDate(date)"
            >
                <slot :date="date">{{ date.getDate() }}</slot>
            </button>
        </td>
    </tr>
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
        color: {
            type: String,
            default: 'primary'
        },
        squareCells: {
            type: Boolean,
            default: false
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
        },

        classes() {
            return [
                `ui-calendar-week--color-${this.color}`,
                { 'ui-calendar-week--has-square-cells': this.squareCells }
            ];
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
    font-size: rem(14px);
    width: 100%;

    td {
        width: (100% / 7);
        min-width: $ui-calendar-cell-size;
        position: relative;
    }
}

.ui-calendar-week--has-square-cells {
    td {
        // This makes the <td> square, while keeping it responsive
        &::before {
            box-sizing: border-box;
            content:'';
            display: block;
            padding-top: 100%;
            min-height: $ui-calendar-cell-size;
        }
    }

    .ui-calendar-week__date {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        border-radius: 50%;
    }
}

.ui-calendar-week__date {
    align-items: center;
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    outline: none;
    text-align: center;
    appearance: none;
    background-color: transparent;
    border: none;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    line-height: 1;
    margin: 0;
    min-height: $ui-calendar-cell-size;
    padding: 0;

    &:hover,
    body[modality="keyboard"] &:focus {
        background-color: rgba(black, 0.1);
    }

    &.is-in-other-month {
        visibility: hidden;
    }

    &.is-today {
        font-weight: bold;
    }

    &.is-disabled {
        background-color: transparent;
        cursor: default;
        opacity: 0.4;
    }
}

// ================================================
// Colors
// ================================================

.ui-calendar-week--color-primary {
    .ui-calendar-week__date {
        &.is-today {
            color: $brand-primary-color;

            &.is-selected {
                color: white;
            }
        }

        &.is-selected,
        body[modality="keyboard"] &.is-selected {
            background-color: $brand-primary-color;
            color: white;
        }
    }
}

.ui-calendar-week--color-accent {
    .ui-calendar-week__date {
        &.is-today {
            color: $brand-accent-color;

            &.is-selected {
                color: white;
            }
        }

        &.is-selected,
        body[modality="keyboard"] &.is-selected {
            background-color: $brand-accent-color;
            color: white;
        }
    }
}
</style>
