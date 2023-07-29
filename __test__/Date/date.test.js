const { DateUtils } = require("../../lib/date");

describe("DateUtils", () => {
  const date = new Date("2023-07-29T12:34:56");

  test("formatDateInternational should format date in international format", () => {
    expect(DateUtils.formatDateInternational(date)).toBe("07-29-2023");
    expect(DateUtils.formatDateInternational(date, "YYYY/MM/DD")).toBe(
      "2023/07/29"
    );
  });

  test("formatDateSpanish should format date in Spanish format", () => {
    expect(DateUtils.formatDateSpanish(date)).toBe("29-07-2023");
    expect(DateUtils.formatDateSpanish(date, "DD/MM/YYYY")).toBe("29/07/2023");
  });

  test("addDays should correctly add days to a date", () => {
    const newDate = DateUtils.addDays(date, 5);
    expect(newDate.toISOString()).toBe("2023-08-03T12:34:56.000Z");
  });

  test("subtractDays should correctly subtract days from a date", () => {
    const newDate = DateUtils.subtractDays(date, 10);
    expect(newDate.toISOString()).toBe("2023-07-19T12:34:56.000Z");
  });

  test("addMonths should correctly add months to a date", () => {
    const newDate = DateUtils.addMonths(date, 2);
    expect(newDate.toISOString()).toBe("2023-09-29T12:34:56.000Z");
  });

  test("subtractMonths should correctly subtract months from a date", () => {
    const newDate = DateUtils.subtractMonths(date, 3);
    expect(newDate.toISOString()).toBe("2023-04-29T12:34:56.000Z");
  });

  test("addYears should correctly add years to a date", () => {
    const newDate = DateUtils.addYears(date, 5);
    expect(newDate.toISOString()).toBe("2028-07-29T12:34:56.000Z");
  });

  test("subtractYears should correctly subtract years from a date", () => {
    const newDate = DateUtils.subtractYears(date, 10);
    expect(newDate.toISOString()).toBe("2013-07-29T12:34:56.000Z");
  });

  test("areDatesEqual should correctly compare if two dates are equal", () => {
    const date1 = new Date("2023-07-29T12:34:56");
    const date2 = new Date("2023-07-29T12:34:56");
    const date3 = new Date("2023-07-30T00:00:00");
    expect(DateUtils.areDatesEqual(date, date1)).toBe(true);
    expect(DateUtils.areDatesEqual(date, date2)).toBe(true);
    expect(DateUtils.areDatesEqual(date, date3)).toBe(false);
  });

  test("isDateBefore should correctly compare if a date is before another date", () => {
    const date1 = new Date("2023-07-28T12:34:56");
    const date2 = new Date("2023-07-29T00:00:00");
    const date3 = new Date("2023-07-30T00:00:00");
    expect(DateUtils.isDateBefore(date, date1)).toBe(false);
    expect(DateUtils.isDateBefore(date, date2)).toBe(false);
    expect(DateUtils.isDateBefore(date, date3)).toBe(true);
  });

  test("isDateAfter should correctly compare if a date is after another date", () => {
    const date1 = new Date("2023-07-28T12:34:56");
    const date2 = new Date("2023-07-29T00:00:00");
    const date3 = new Date("2023-07-30T00:00:00");
    expect(DateUtils.isDateAfter(date, date1)).toBe(true);
    expect(DateUtils.isDateAfter(date, date2)).toBe(false);
    expect(DateUtils.isDateAfter(date, date3)).toBe(false);
  });

  test("isValidDate should correctly validate if a date is valid", () => {
    const validDate = new Date("2023-07-29T12:34:56");
    const invalidDate = new Date("invalid date");
    expect(DateUtils.isValidDate(date)).toBe(true);
    expect(DateUtils.isValidDate(validDate)).toBe(true);
    expect(DateUtils.isValidDate(invalidDate)).toBe(false);
  });

  test("getDaysDifference should correctly calculate the difference in days between two dates", () => {
    const startDate = new Date("2023-07-25T12:34:56");
    const endDate = new Date("2023-08-02T12:34:56");
    expect(DateUtils.getDaysDifference(startDate, endDate)).toBe(8);
  });

  test("getMonthsDifference should correctly calculate the difference in months between two dates", () => {
    const startDate = new Date("2023-06-29T12:34:56");
    const endDate = new Date("2023-09-02T12:34:56");
    expect(DateUtils.getMonthsDifference(startDate, endDate)).toBe(2);
  });

  test("getYearsDifference should correctly calculate the difference in years between two dates", () => {
    const startDate = new Date("2021-07-29T12:34:56");
    const endDate = new Date("2024-07-29T12:34:56");
    expect(DateUtils.getYearsDifference(startDate, endDate)).toBe(3);
  });

  test("getDayOfWeek should return the day of the week for a given date", () => {
    const dateSunday = new Date("2023-07-30T12:34:56");
    const dateMonday = new Date("2023-07-31T12:34:56");
    const dateTuesday = new Date("2023-08-01T12:34:56");
    const dateWednesday = new Date("2023-08-02T12:34:56");
    const dateThursday = new Date("2023-08-03T12:34:56");
    const dateFriday = new Date("2023-08-04T12:34:56");
    const dateSaturday = new Date("2023-08-05T12:34:56");
    expect(DateUtils.getDayOfWeek(dateSunday)).toBe("Sunday");
    expect(DateUtils.getDayOfWeek(dateMonday)).toBe("Monday");
    expect(DateUtils.getDayOfWeek(dateTuesday)).toBe("Tuesday");
    expect(DateUtils.getDayOfWeek(dateWednesday)).toBe("Wednesday");
    expect(DateUtils.getDayOfWeek(dateThursday)).toBe("Thursday");
    expect(DateUtils.getDayOfWeek(dateFriday)).toBe("Friday");
    expect(DateUtils.getDayOfWeek(dateSaturday)).toBe("Saturday");
  });

  test("isWeekend should check if a date falls on the weekend", () => {
    const dateWeekend1 = new Date("2023-07-29T12:34:56"); // Saturday
    const dateWeekend2 = new Date("2023-07-30T12:34:56"); // Sunday
    const dateWeekday = new Date("2023-07-31T12:34:56"); // Monday
    expect(DateUtils.isWeekend(dateWeekend1)).toBe(true);
    expect(DateUtils.isWeekend(dateWeekend2)).toBe(true);
    expect(DateUtils.isWeekend(dateWeekday)).toBe(false);
  });

  test("isWeekday should check if a date falls on a weekday", () => {
    const dateWeekend = new Date("2023-07-29T12:34:56"); // Saturday
    const dateWeekend2 = new Date("2023-07-30T12:34:56"); // Sunday
    const dateWeekday = new Date("2023-07-31T12:34:56"); // Monday
    expect(DateUtils.isWeekday(dateWeekend)).toBe(false);
    expect(DateUtils.isWeekday(dateWeekend2)).toBe(false);
    expect(DateUtils.isWeekday(dateWeekday)).toBe(true);
  });

  test("isLeapYear should check if a year is a leap year", () => {
    expect(DateUtils.isLeapYear(2020)).toBe(true);
    expect(DateUtils.isLeapYear(2021)).toBe(false);
    expect(DateUtils.isLeapYear(2000)).toBe(true);
    expect(DateUtils.isLeapYear(1900)).toBe(false);
  });
});
