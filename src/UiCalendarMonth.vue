<template>
  <table class="ui-calendar-month">
    <thead class="ui-calendar-month__header">
      <tr>
        <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
      </tr>
    </thead>

    <tbody class="ui-calendar-month__body">
      <ui-calendar-week
        v-for="date in currentWeekStartDates"
        :key="date.toString()"
        :color="color"
        :date-filter="dateFilter"
        :max-date="maxDate"
        :min-date="minDate"
        :month="currentWeekStartDates[1].getMonth()"
        :selected="selected"
        :square-cells="squareCells"
        :week-start="date"
        @date-select="onDateSelect"
      >
        <template v-if="$slots.date" #default="props">
          <slot name="date" :date="props.date"></slot>
        </template>
      </ui-calendar-week>
    </tbody>
  </table>
</template>

<script>
import UiCalendarWeek from "./UiCalendarWeek.vue";

import dateUtils from "./helpers/date";

export default {
  name: "UiCalendarMonth",

  components: {
    UiCalendarWeek,
  },

  props: {
    lang: Object,
    dateFilter: Function,
    dateInView: Date,
    selected: [Date, Array],
    maxDate: Date,
    minDate: Date,
    startOfWeek: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: "primary", // 'primary' or 'accent'
    },
    squareCells: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["date-select"],

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
    },
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

    onDateSelect(date) {
      this.$emit("date-select", date);
    },
  },
};
</script>

<style lang="scss">
@use "sass:math";
@import "./styles/imports";

.ui-calendar-month {
  border-collapse: collapse;
  border-spacing: 0;
  background-color: transparent;
  table-layout: fixed;
  width: 100%;
}

.ui-calendar-month__header {
  width: 100%;

  th {
    color: $secondary-text-color;
    font-size: rem(14px);
    font-weight: $font-weight--semibold;
    height: $ui-calendar-month-header-height;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    width: math.div(100%, 7);
  }
}

.ui-calendar-month__body {
  width: 100%;
}
</style>
