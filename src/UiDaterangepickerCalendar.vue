<template>
  <div class="ui-daterangepicker-calendar" :class="classes">
    <div class="ui-daterangepicker-calendar__header">
      <div
        v-for="(date, index) in headerRange"
        :key="index"
        :class="`ui-daterangepicker-calendar__header-${index === 0 ? 'start' : 'end'}`"
      >
        <div
          class="ui-daterangepicker-calendar__header-year"
          tabindex="0"
          :class="{ 'is-active': showYearPicker }"
          @click="updateCurrentView('year', date, index)"
          @keydown.enter="updateCurrentView('year', date, index)"
        >
          {{ getHeaderYear(date) }}
        </div>

        <div
          class="ui-daterangepicker-calendar__header-date"
          tabindex="0"
          :class="{ 'is-active': !showYearPicker }"
          @click="updateCurrentView('date', date, index)"
          @keydown.enter="updateCurrentView('date', date, index)"
        >
          <span class="ui-daterangepicker-calendar__header-weekday"
            >{{ getHeaderWeekday(date) }},
          </span>
          <span class="ui-daterangepicker-calendar__header-day">{{ getHeaderDay(date) }}</span>
        </div>
      </div>
    </div>

    <ul v-show="showYearPicker" ref="years" class="ui-daterangepicker-calendar__years">
      <li
        v-for="year in yearRangeFiltered"
        :key="year"
        class="ui-daterangepicker-calendar__year"
        tabindex="0"
        :class="getYearClasses(year)"
        :data-year="year"
        @click="selectYear(year)"
        @keydown.enter="selectYear(year)"
      >
        {{ year }}
      </li>
    </ul>
    <div v-show="!showYearPicker" class="ui-daterangepicker-calendar__body">
      <div v-for="(month, index) in calendars" :key="index" class="ui-daterangepicker-calendar__body-part">
        <ui-calendar-controls
          ref="controls"
          :date-in-view="month"
          :lang="lang"
          :max-date="maxDate"
          :min-date="minDate"
          :year-range="yearRange"
          :show-previous="index === 0"
          :show-next="index === calendars.length - 1"
          @go-to-previous="onGoToPrevious"
          @go-to-next="onGoToNext"
        ></ui-calendar-controls>

        <ui-calendar-month
          ref="month"
          square-cells
          :color="color"
          :date-filter="dateFilter"
          :date-in-view="month"
          :lang="lang"
          :max-date="maxDate"
          :min-date="minDate"
          :selected="selected"
          :start-of-week="startOfWeek"
          @change="onMonthChange"
          @date-select="onDateSelect"
        ></ui-calendar-month>
      </div>
    </div>
  </div>
</template>

<script>
import UiCalendarControls from "./UiCalendarControls.vue";
import UiCalendarMonth from "./UiCalendarMonth.vue";

import dateUtils from "./helpers/date";

export default {
  name: "UiDaterangepickerCalendar",

  components: {
    UiCalendarControls,
    UiCalendarMonth,
  },

  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    minDate: Date,
    maxDate: Date,
    calendarsNumber: {
      type: Number,
      default: 2,
    },
    startOfWeek: {
      type: Number,
      default: 0,
    },
    currentView: {
      type: String,
      validator: (value) => value === "date" || value === "year",
    },
    lang: {
      type: Object,
      default() {
        return dateUtils.defaultLang;
      },
    },
    yearRange: {
      type: Array,
      default() {
        const thisYear = new Date().getFullYear();

        // Generates a range of 200 years
        // (100 years into the past and 100 years into the future, including the current year)
        return Array.apply(null, Array(200)).map((item, index) => {
          return thisYear - 100 + index;
        });
      },
    },
    dateFilter: Function,
    color: {
      type: String,
      default: "primary", // 'primary' or 'accent'
    },
    orientation: {
      type: String,
      default: "portrait", // 'portrait' or 'landscape'
    },
  },

  emits: ["update:modelValue", "update:currentView", "date-select", "month-change"],

  data() {
    const dateInView = dateUtils.clone(this.end || new Date());
    dateInView.setDate(1);
    const [start, end] = this.modelValue

    return {
      today: new Date(),
      dateInView, // The date of the last calendar in view
      start: start || null,
      end: end || null
    };
  },

  computed: {
    classes() {
      return [
        `ui-daterangepicker-calendar--color-${this.color}`,
        `ui-daterangepicker-calendar--orientation-${this.orientation}`,
      ];
    },

    headerRange() {
      const range = [this.start || this.today];

      if (this.end) {
        range.push(this.end);
      }

      return range;
    },

    showYearPicker() {
      return this.currentView === "year";
    },

    showDatePicker() {
      return this.currentView === "date";
    },

    yearRangeFiltered() {
      return this.yearRange.filter((year) => !this.isYearOutOfRange(year));
    },

    selected() {
      const selected = [];
      if (this.start) {
        selected.push(this.start);
      }

      if (this.end) {
        selected.push(this.end);
      }

      return selected;
    },

    calendars() {
      const current = dateUtils.clone(this.dateInView);
      const calendars = [dateUtils.clone(current)];
      for (let i = this.calendarsNumber - 1; i > 0; i--) {
        current.setMonth(current.getMonth() - 1);
        calendars.unshift(dateUtils.clone(current));
      }

      return calendars;
    },
  },

  watch: {
    end() {
      if (this.end) {
        if (!this.calendars.some((date) => dateUtils.isSameMonth(date, this.end))) {
          const dateInView = dateUtils.clone(this.end);
          dateInView.setDate(1);
          this.dateInView = dateInView;
        }
      }
    },

    start() {
      if (this.start) {
        if (!this.calendars.some((date) => dateUtils.isSameMonth(date, this.start))) {
          const dateInView = dateUtils.clone(this.start);
          dateInView.setDate(1);
          dateInView.setMonth(dateInView.getMonth() + this.calendarsNumber - 1);
          this.dateInView = dateInView;
        }
      }
    },

    modelValue () {
      const [start, end] = this.modelValue

      this.start = start
      this.end = end
    },

    dateInView () {
      if (this.showYearPicker) {
        this.scrollYearIntoView(this.dateInView.getFullYear());
      }
    },

    currentView() {
      if (this.showYearPicker) {
        this.scrollYearIntoView(this.dateInView.getFullYear());
      }
    },
  },

  methods: {
    selectYear(year) {
      const newDate = dateUtils.clone(this.dateInView);
      newDate.setFullYear(year);

      this.dateInView = this.getDateInRange(newDate);
      this.$emit("update:currentView", "date");
    },

    updateCurrentView(view, date, index) {
      this.$emit("update:currentView", view);

      const dateInView = dateUtils.clone(date);
      dateInView.setDate(1);
      dateInView.setMonth(dateInView.getMonth() + (index === 0 ? (this.calendarsNumber - 1) : 0));
      this.dateInView = dateInView;
    },

    scrollYearIntoView(year) {
      this.$nextTick(() => {
        const el = this.$refs.years.querySelector(`[data-year="${year}"]`);

        el.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      });
    },

    getDateInRange(date, fallback) {
      date = date || fallback;

      if (this.minDate && date.getTime() < this.minDate.getTime()) {
        return this.minDate;
      }

      if (this.maxDate && date.getTime() > this.maxDate.getTime()) {
        return this.maxDate;
      }

      return date;
    },

    getYearClasses(year) {
      return {
        "is-current-year": this.isYearCurrent(year),
        "is-selected": this.isYearSelected(year),
      };
    },

    getHeaderYear(date) {
      return date.getFullYear();
    },

    getHeaderWeekday(date) {
      return dateUtils.getDayAbbreviated(date, this.lang);
    },

    getHeaderDay(date) {
      return (
        dateUtils.getMonthAbbreviated(date, this.lang) +
        " " +
        dateUtils.getDayOfMonth(date, this.lang)
      );
    },

    isYearCurrent(year) {
      return year === this.today.getFullYear();
    },

    isYearSelected(year) {
      return (
        (this.start && year === this.start.getFullYear()) ||
        (this.end && year === this.end.getFullYear())
      );
    },

    isYearOutOfRange(year) {
      if (this.minDate && year < this.minDate.getFullYear()) {
        return true;
      }

      if (this.maxDate && year > this.maxDate.getFullYear()) {
        return true;
      }

      if (year < this.yearRange[0]) {
        return true;
      }

      if (year > this.yearRange[this.yearRange.length - 1]) {
        return true;
      }

      return false;
    },

    onDateSelect(date) {
      const { startOfDay, endOfDay } = dateUtils
      if ((this.start && this.end) || (!this.start && !this.end)) {
        this.start = startOfDay(date);
        this.end = null;
      } else if (this.end && date >= this.end) {
        this.start = startOfDay(this.end);
        this.end = endOfDay(date);
      } else if (this.start && date <= this.start) {
        this.end = endOfDay(this.start);
        this.start = startOfDay(date);
      } else if (this.end && date > this.end) {
        this.start = startOfDay(date);
      } else if (this.start && date > this.start) {
        this.end = endOfDay(date);
      }

      if (this.start && this.end) {
        this.$emit("update:modelValue", [this.start, this.end]);
      }

      this.$emit("date-select", date);
    },

    onGoToNext() {
      const dateInView = dateUtils.clone(this.dateInView);
      dateInView.setMonth(this.dateInView.getMonth() + 1);
      this.dateInView = dateInView;
    },

    onGoToPrevious() {
      const dateInView = dateUtils.clone(this.dateInView);
      dateInView.setMonth(this.dateInView.getMonth() - 1);
      this.dateInView = dateInView;
    },

    onMonthChange(newDate) {
      this.dateInView = newDate;
      this.$emit("month-change", newDate);
    },
  },
};
</script>

<style lang="scss">
@import "./styles/imports";

$ui-daterangepicker-calendar-padding: rem(8px) !default;
$ui-daterangepicker-calendars-gap: rem(8px) !default;

.ui-daterangepicker-calendar {
  color: $primary-text-color;
  font-family: $font-stack;
}

.ui-daterangepicker-calendar__header {
  color: white;
  line-height: 1;
  padding: rem(16px);
  display: flex;
  justify-content: space-between;
}

.ui-daterangepicker-calendar__header-year,
.ui-daterangepicker-calendar__header-date {
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.2s ease;

  &:hover,
  body[modality="keyboard"] &:focus,
  &.is-active {
    opacity: 1;
  }

  body[modality="keyboard"] &:focus {
    outline: 1px dotted white;
    outline-offset: 1px;
  }
}

.ui-daterangepicker-calendar__header-year {
  font-size: rem(15px);
  font-weight: $font-weight--semibold;
  margin-bottom: rem(8px);
}

.ui-daterangepicker-calendar__header-date {
  font-size: rem(22px);
}

.ui-daterangepicker-calendar__body {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: $ui-daterangepicker-calendars-gap;

  .ui-calendar-controls {
    background-color: transparent;
  }
}

.ui-daterangepicker-calendar__body-part,
.ui-daterangepicker-calendar__years {
  height: (
    ($ui-daterangepicker-calendar-padding * 2) + $ui-calendar-controls-height +
      $ui-calendar-month-header-height + ($ui-calendar-cell-size * 6)
  ); // Force height to prevent reflow when switching months
  padding: $ui-daterangepicker-calendar-padding;
  width: ($ui-calendar-cell-size * 7) + ($ui-daterangepicker-calendar-padding * 2);
}

.ui-daterangepicker-calendar__years {
  list-style: none;
  overflow-y: auto;
  margin: 0;
  $gaps-number: v-bind('calendarsNumber - 1');
  $calendar-part-width: ($ui-calendar-cell-size * 7) + ($ui-daterangepicker-calendar-padding * 2);
  width: calc($calendar-part-width * v-bind(calendarsNumber) + ($ui-daterangepicker-calendars-gap * $gaps-number));
}

.ui-daterangepicker-calendar__year {
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: rem(16px);
  height: rem(36px);
  justify-content: center;
  outline: none;

  &.is-selected {
    font-size: rem(24px);
    font-weight: $font-weight--semibold;
    height: rem(40px);
  }
}

// ================================================
// Orientations
// ================================================

.ui-daterangepicker-calendar--orientation-landscape {
  display: flex;

  .ui-daterangepicker-calendar__header {
    min-width: rem(128px);
    flex-direction: column;
  }

  .ui-daterangepicker-calendar__header-day {
    margin-bottom: rem(12px);
    display: block;
    padding-top: rem(4px);
  }
}

.ui-daterangepicker-calendar--orientation-portrait {
  .ui-daterangepicker-calendar__header-end {
    text-align: right;
  }
}

// ================================================
// Colors
// ================================================

.ui-daterangepicker-calendar--color-primary {
  .ui-daterangepicker-calendar__header {
    background-color: $brand-primary-color;
  }

  .ui-daterangepicker-calendar__year {
    &:hover,
    body[modality="keyboard"] &:focus {
      color: $brand-primary-color;
    }

    &.is-selected {
      color: $brand-primary-color;
    }
  }

  .ui-daterangepicker-calendar-week__date {
    &.is-today {
      color: $brand-primary-color;
    }

    &.is-selected,
    body[modality="keyboard"] &.is-selected {
      background-color: $brand-primary-color;
    }
  }
}

.ui-daterangepicker-calendar--color-accent {
  .ui-daterangepicker-calendar__header {
    background-color: $brand-accent-color;
  }

  .ui-daterangepicker-calendar__year {
    &:hover,
    body[modality="keyboard"] &:focus {
      color: $brand-accent-color;
    }

    &.is-selected {
      color: $brand-accent-color;
    }
  }

  .ui-daterangepicker-calendar-week__date {
    &.is-today {
      color: $brand-accent-color;
    }

    &.is-selected,
    body[modality="keyboard"] &.is-selected {
      background-color: $brand-accent-color;
    }
  }
}
</style>
