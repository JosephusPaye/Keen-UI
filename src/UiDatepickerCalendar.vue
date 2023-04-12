<template>
  <div class="ui-datepicker-calendar" :class="classes">
    <div class="ui-datepicker-calendar__header">
      <div
        class="ui-datepicker-calendar__header-year"
        tabindex="0"
        :class="{ 'is-active': showYearPicker }"
        @click="$emit('update:currentView', 'year')"
        @keydown.enter="$emit('update:currentView', 'year')"
      >
        {{ headerYear }}
      </div>

      <div
        class="ui-datepicker-calendar__header-date"
        tabindex="0"
        :class="{ 'is-active': !showYearPicker }"
        @click="$emit('update:currentView', 'date')"
        @keydown.enter="$emit('update:currentView', 'date')"
      >
        <span class="ui-datepicker-calendar__header-weekday">{{ headerWeekday }}, </span>
        <span class="ui-datepicker-calendar__header-day">{{ headerDay }}</span>
      </div>
    </div>

    <ul v-show="showYearPicker" ref="years" class="ui-datepicker-calendar__years">
      <li
        v-for="year in yearRangeFiltered"
        :key="year"
        class="ui-datepicker-calendar__year"
        tabindex="0"
        :data-year="year"
        :class="getYearClasses(year)"
        @click="selectYear(year)"
        @keydown.enter="selectYear(year)"
      >
        {{ year }}
      </li>
    </ul>

    <div v-show="!showYearPicker" class="ui-datepicker-calendar__body">
      <ui-calendar-controls
        ref="controls"
        :date-in-view="dateInView"
        :lang="lang"
        :max-date="maxDate"
        :min-date="minDate"
        :year-range="yearRange"
        @go-to-date="onGoToDate"
      ></ui-calendar-controls>

      <ui-calendar-month
        ref="month"
        square-cells
        :color="color"
        :date-filter="dateFilter"
        :date-in-view="dateInView"
        :lang="lang"
        :max-date="maxDate"
        :min-date="minDate"
        :selected="modelValue"
        :start-of-week="startOfWeek"
        @change="onMonthChange"
        @date-select="onDateSelect"
      ></ui-calendar-month>
    </div>
  </div>
</template>

<script>
import UiCalendarControls from "./UiCalendarControls.vue";
import UiCalendarMonth from "./UiCalendarMonth.vue";

import dateUtils from "./helpers/date";

export default {
  name: "UiDatepickerCalendar",

  components: {
    UiCalendarControls,
    UiCalendarMonth,
  },

  props: {
    modelValue: Date,
    minDate: Date,
    maxDate: Date,
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
    return {
      today: new Date(),
      dateInView: this.getDateInRange(this.modelValue, new Date()),
    };
  },

  computed: {
    classes() {
      return [
        `ui-datepicker-calendar--color-${this.color}`,
        `ui-datepicker-calendar--orientation-${this.orientation}`,
      ];
    },

    headerYear() {
      return this.modelValue ? this.modelValue.getFullYear() : this.today.getFullYear();
    },

    headerWeekday() {
      return this.modelValue
        ? dateUtils.getDayAbbreviated(this.modelValue, this.lang)
        : dateUtils.getDayAbbreviated(this.today, this.lang);
    },

    headerDay() {
      const date = this.modelValue ? this.modelValue : this.today;

      return (
        dateUtils.getMonthAbbreviated(date, this.lang) +
        " " +
        dateUtils.getDayOfMonth(date, this.lang)
      );
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
  },

  watch: {
    modelValue() {
      if (this.modelValue) {
        this.dateInView = dateUtils.clone(this.modelValue);
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

    isYearCurrent(year) {
      return year === this.today.getFullYear();
    },

    isYearSelected(year) {
      return this.modelValue && year === this.modelValue.getFullYear();
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
      this.$emit("update:modelValue", date);
      this.$emit("date-select", date);
    },

    onGoToDate(date) {
      this.dateInView = date;
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

$ui-datepicker-calendar-padding: rem(8px) !default;

.ui-datepicker-calendar {
  color: $primary-text-color;
  font-family: $font-stack;
}

.ui-datepicker-calendar__header {
  color: white;
  line-height: 1;
  padding: rem(16px);
}

.ui-datepicker-calendar__header-year,
.ui-datepicker-calendar__header-date {
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

.ui-datepicker-calendar__header-year {
  font-size: rem(15px);
  font-weight: $font-weight--semibold;
  margin-bottom: rem(8px);
}

.ui-datepicker-calendar__header-date {
  font-size: rem(22px);
}

.ui-datepicker-calendar__body {
  box-sizing: border-box;

  .ui-calendar-controls {
    background-color: transparent;
  }
}

.ui-datepicker-calendar__body,
.ui-datepicker-calendar__years {
  height: (
    ($ui-datepicker-calendar-padding * 2) + $ui-calendar-controls-height +
      $ui-calendar-month-header-height + ($ui-calendar-cell-size * 6)
  ); // Force height to prevent reflow when switching months
  padding: $ui-datepicker-calendar-padding;
  width: ($ui-calendar-cell-size * 7) + ($ui-datepicker-calendar-padding * 2);
}

.ui-datepicker-calendar__years {
  list-style: none;
  overflow-y: auto;
  margin: 0;
}

.ui-datepicker-calendar__year {
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

.ui-datepicker-calendar--orientation-landscape {
  display: flex;

  .ui-datepicker-calendar__header {
    min-width: rem(128px);
  }

  .ui-datepicker-calendar__header-day {
    margin-bottom: rem(12px);
    display: block;
    padding-top: rem(4px);
  }
}

// ================================================
// Colors
// ================================================

.ui-datepicker-calendar--color-primary {
  .ui-datepicker-calendar__header {
    background-color: $brand-primary-color;
  }

  .ui-datepicker-calendar__year {
    &:hover,
    body[modality="keyboard"] &:focus {
      color: $brand-primary-color;
    }

    &.is-selected {
      color: $brand-primary-color;
    }
  }

  .ui-datepicker-calendar-week__date {
    &.is-today {
      color: $brand-primary-color;
    }

    &.is-selected,
    body[modality="keyboard"] &.is-selected {
      background-color: $brand-primary-color;
    }
  }
}

.ui-datepicker-calendar--color-accent {
  .ui-datepicker-calendar__header {
    background-color: $brand-accent-color;
  }

  .ui-datepicker-calendar__year {
    &:hover,
    body[modality="keyboard"] &:focus {
      color: $brand-accent-color;
    }

    &.is-selected {
      color: $brand-accent-color;
    }
  }

  .ui-datepicker-calendar-week__date {
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
