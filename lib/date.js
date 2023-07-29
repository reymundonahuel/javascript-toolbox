export const DateUtils = {
  // Basic Date Formatting
  formatDateInternational: (date, format = "MM-DD-YYYY") => {
    const map = {
      YYYY: date.getFullYear(),
      MM: String(date.getMonth() + 1).padStart(2, "0"),
      DD: String(date.getDate()).padStart(2, "0"),
      hh: String(date.getHours()).padStart(2, "0"),
      mm: String(date.getMinutes()).padStart(2, "0"),
      ss: String(date.getSeconds()).padStart(2, "0"),
    };
    return format.replace(/MM|DD|YYYY|hh|mm|ss/g, (matched) => map[matched]);
  },
  formatDateSpanish: (date, format = "DD-MM-YYYY") => {
    const map = {
      YYYY: date.getFullYear(),
      MM: String(date.getMonth() + 1).padStart(2, "0"),
      DD: String(date.getDate()).padStart(2, "0"),
      hh: String(date.getHours()).padStart(2, "0"),
      mm: String(date.getMinutes()).padStart(2, "0"),
      ss: String(date.getSeconds()).padStart(2, "0"),
    };
    return format.replace(/DD|MM|YYYY|hh|mm|ss/g, (matched) => map[matched]);
  },

  // Date Manipulation
  addDays: (date, days) =>
    new Date(date.getTime() + days * 24 * 60 * 60 * 1000),
  subtractDays: (date, days) =>
    new Date(date.getTime() - days * 24 * 60 * 60 * 1000),
  addMonths: (date, months) =>
    new Date(date.getFullYear(), date.getMonth() + months, date.getDate()),
  subtractMonths: (date, months) =>
    new Date(date.getFullYear(), date.getMonth() - months, date.getDate()),
  addYears: (date, years) =>
    new Date(date.getFullYear() + years, date.getMonth(), date.getDate()),
  subtractYears: (date, years) =>
    new Date(date.getFullYear() - years, date.getMonth(), date.getDate()),

  // Date Comparison
  areDatesEqual: (date1, date2) => date1.getTime() === date2.getTime(),
  isDateBefore: (date1, date2) => date1.getTime() < date2.getTime(),
  isDateAfter: (date1, date2) => date1.getTime() > date2.getTime(),

  // Date Validation
  isValidDate: (date) => !isNaN(date.getTime()),

  // Date Difference
  getDaysDifference: (startDate, endDate) =>
    Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)),
  getMonthsDifference: (startDate, endDate) =>
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear()),
  getYearsDifference: (startDate, endDate) =>
    endDate.getFullYear() - startDate.getFullYear(),

  // Day of Week
  getDayOfWeek: (date) =>
    [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][date.getDay()],
  isWeekend: (date) => date.getDay() === 0 || date.getDay() === 6,
  isWeekday: (date) => !DateUtils.isWeekend(date),

  // Leap Year
  isLeapYear: (year) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0,
};
