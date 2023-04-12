export const defaultLang = {
    months: {
        full: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],

        abbreviated: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ]
    },

    days: {
        full: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],

        abbreviated: [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ],

        initials: [
            'S',
            'M',
            'T',
            'W',
            'T',
            'F',
            'S'
        ]
    }
};

function pad(value, length) {
    while (value.length < length) {
        value = '0' + value;
    }

    return value;
}

export function getDayFull(date, lang = defaultLang) {
    return lang.days.full[date.getDay()];
}

export function getDayInitial(date, lang = defaultLang) {
    return lang.days.initials[date.getDay()];
}

export function getDayAbbreviated(date, lang = defaultLang) {
    return lang.days.abbreviated[date.getDay()];
}

export function getMonthFull(date, lang = defaultLang) {
    return lang.months.full[date.getMonth()];
}

export function getMonthAbbreviated(date, lang = defaultLang) {
    return lang.months.abbreviated[date.getMonth()];
}

export function getDayOfMonth(date, options = { pad: true }) {
    const day = date.getDate().toString();
    return options.pad ? pad(day) : day;
}

export function humanize(date, lang = defaultLang) {
    const days = lang.days.abbreviated;
    const months = lang.months.full;

    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' +
        date.getFullYear();
}

export function clone(date) {
    return new Date(date.getTime());
}

export function moveToDayOfWeek(date, dayOfWeek) {
    while (date.getDay() !== dayOfWeek) {
        date.setDate(date.getDate() - 1);
    }

    return date;
}

export function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}

export function isSameMonth(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth();
}

export function isBefore(date1, date2) {
    return date1.getTime() < date2.getTime();
}

export function isAfter(date1, date2) {
    return date1.getTime() > date2.getTime();
}

export function endOfDay (date) {
  date = clone(date);
  date.setHours(23);
  date.setMinutes(59);
  date.setSeconds(59);

  return date;
};

export function startOfDay (date) {
  date = clone(date);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);

  return date;
};

export default {
    defaultLang,
    getDayFull,
    getDayInitial,
    getDayAbbreviated,
    getMonthFull,
    getMonthAbbreviated,
    getDayOfMonth,
    humanize,
    clone,
    moveToDayOfWeek,
    isSameDay,
    isSameMonth,
    startOfDay,
    endOfDay,
    isBefore,
    isAfter
};
