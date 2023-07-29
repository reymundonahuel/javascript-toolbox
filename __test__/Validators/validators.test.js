const { Validators } = require("../../lib/validators");

describe("Validators", () => {
  // General Validators
  test("isDefined", () => {
    expect(Validators.isDefined("Hello")).toBe(true);
    expect(Validators.isDefined(undefined)).toBe(false);
  });

  test("isNull", () => {
    expect(Validators.isNull(null)).toBe(true);
    expect(Validators.isNull("Hello")).toBe(false);
  });

  test("isUndefined", () => {
    expect(Validators.isUndefined(undefined)).toBe(true);
    expect(Validators.isUndefined("Hello")).toBe(false);
  });

  test("isNullOrUndefined", () => {
    expect(Validators.isNullOrUndefined(null)).toBe(true);
    expect(Validators.isNullOrUndefined(undefined)).toBe(true);
    expect(Validators.isNullOrUndefined("Hello")).toBe(false);
  });

  test("isEmpty", () => {
    expect(Validators.isEmpty(null)).toBe(true);
    expect(Validators.isEmpty(undefined)).toBe(true);
    expect(Validators.isEmpty("")).toBe(true);
    expect(Validators.isEmpty(" ")).toBe(true);
    expect(Validators.isEmpty([])).toBe(true);
    expect(Validators.isEmpty({})).toBe(true);
    expect(Validators.isEmpty([1, 2, 3])).toBe(false);
    expect(Validators.isEmpty("Hello")).toBe(false);
    expect(Validators.isEmpty({ name: "John" })).toBe(false);
  });

  test("isNotEmpty", () => {
    expect(Validators.isNotEmpty("Hello")).toBe(true);
    expect(Validators.isNotEmpty(null)).toBe(false);
  });

  // Type Validators
  test("isString", () => {
    expect(Validators.isString("Hello")).toBe(true);
    expect(Validators.isString(123)).toBe(false);
  });

  test("isNumber", () => {
    expect(Validators.isNumber(123)).toBe(true);
    expect(Validators.isNumber("Hello")).toBe(false);
    expect(Validators.isNumber(NaN)).toBe(false);
  });

  test("isBoolean", () => {
    expect(Validators.isBoolean(true)).toBe(true);
    expect(Validators.isBoolean(false)).toBe(true);
    expect(Validators.isBoolean(1)).toBe(false);
  });

  test("isObject", () => {
    expect(Validators.isObject({ name: "John" })).toBe(true);
    expect(Validators.isObject([1, 2, 3])).toBe(false);
    expect(Validators.isObject(null)).toBe(false);
  });

  test("isArray", () => {
    expect(Validators.isArray([1, 2, 3])).toBe(true);
    expect(Validators.isArray({ name: "John" })).toBe(false);
  });

  test("isFunction", () => {
    expect(Validators.isFunction(() => {})).toBe(true);
    expect(Validators.isFunction("Hello")).toBe(false);
  });

  test("isDate", () => {
    expect(Validators.isDate(new Date())).toBe(true);
    expect(Validators.isDate("2023-07-29")).toBe(false);
  });

  test("isRegExp", () => {
    expect(Validators.isRegExp(/[a-z]/)).toBe(true);
    expect(Validators.isRegExp("Hello")).toBe(false);
  });

  // Numeric Validators
  test("isPositive", () => {
    expect(Validators.isPositive(5)).toBe(true);
    expect(Validators.isPositive(-5)).toBe(false);
    expect(Validators.isPositive("Hello")).toBe(false);
  });

  test("isNegative", () => {
    expect(Validators.isNegative(-5)).toBe(true);
    expect(Validators.isNegative(5)).toBe(false);
    expect(Validators.isNegative("Hello")).toBe(false);
  });

  test("isInteger", () => {
    expect(Validators.isInteger(5)).toBe(true);
    expect(Validators.isInteger(5.5)).toBe(false);
    expect(Validators.isInteger("Hello")).toBe(false);
  });

  test("isFloat", () => {
    expect(Validators.isFloat(5.5)).toBe(true);
    expect(Validators.isFloat(5)).toBe(false);
    expect(Validators.isFloat("Hello")).toBe(false);
  });

  test("isInRange", () => {
    expect(Validators.isInRange(5, 1, 10)).toBe(true);
    expect(Validators.isInRange(15, 1, 10)).toBe(false);
    expect(Validators.isInRange("Hello", 1, 10)).toBe(false);
  });

  // String Validators
  test("isAlpha", () => {
    expect(Validators.isAlpha("Hello")).toBe(true);
    expect(Validators.isAlpha("Hello123")).toBe(false);
    expect(Validators.isAlpha(123)).toBe(false);
  });

  test("isAlphaNumeric", () => {
    expect(Validators.isAlphaNumeric("Hello123")).toBe(true);
    expect(Validators.isAlphaNumeric("Hello")).toBe(false);
    expect(Validators.isAlphaNumeric(123)).toBe(false);
  });

  test("isNumeric", () => {
    expect(Validators.isNumeric("123")).toBe(true);
    expect(Validators.isNumeric("Hello")).toBe(false);
    expect(Validators.isNumeric(123)).toBe(false);
  });

  test("isEmail", () => {
    expect(Validators.isEmail("user@example.com")).toBe(true);
    expect(Validators.isEmail("user@example")).toBe(false);
    expect(Validators.isEmail("Hello")).toBe(false);
  });

  test("isURL", () => {
    expect(Validators.isURL("https://www.example.com")).toBe(true);
    expect(Validators.isURL("example.com")).toBe(false);
    expect(Validators.isURL("Hello")).toBe(false);
  });

  test("isLowerCase", () => {
    expect(Validators.isLowerCase("hello")).toBe(true);
    expect(Validators.isLowerCase("Hello")).toBe(false);
  });

  test("isUpperCase", () => {
    expect(Validators.isUpperCase("HELLO")).toBe(true);
    expect(Validators.isUpperCase("Hello")).toBe(false);
  });

  test("isStartsWith", () => {
    expect(Validators.isStartsWith("Hello, world!", "Hello")).toBe(true);
    expect(Validators.isStartsWith("Hello, world!", "world")).toBe(false);
  });

  test("isEndsWith", () => {
    expect(Validators.isEndsWith("Hello, world!", "world!")).toBe(true);
    expect(Validators.isEndsWith("Hello, world!", "Hello")).toBe(false);
  });

  test("hasSubstring", () => {
    expect(Validators.hasSubstring("Hello, world!", "Hello")).toBe(true);
    expect(Validators.hasSubstring("Hello, world!", "foo")).toBe(false);
  });

  test("hasNoWhitespace", () => {
    expect(Validators.hasNoWhitespace("Hello")).toBe(true);
    expect(Validators.hasNoWhitespace("Hello, world!")).toBe(false);
  });

  // Array Validators
  test("hasElement", () => {
    expect(Validators.hasElement([1, 2, 3], 2)).toBe(true);
    expect(Validators.hasElement([1, 2, 3], 4)).toBe(false);
    expect(Validators.hasElement("Hello", "H")).toBe(false);
  });

  test("isUnique", () => {
    expect(Validators.isUnique([1, 2, 3])).toBe(true);
    expect(Validators.isUnique([1, 2, 2, 3])).toBe(false);
    expect(Validators.isUnique("Hello")).toBe(false);
  });

  test("hasDuplicates", () => {
    expect(Validators.hasDuplicates([1, 2, 3])).toBe(false);
    expect(Validators.hasDuplicates([1, 2, 2, 3])).toBe(true);
    expect(Validators.hasDuplicates("Hello")).toBe(false);
  });

  // Object Validators
  test("hasKey", () => {
    expect(Validators.hasKey({ name: "John" }, "name")).toBe(true);
    expect(Validators.hasKey({ name: "John" }, "age")).toBe(false);
    expect(Validators.hasKey([1, 2, 3], "0")).toBe(false);
  });

  test("hasValue", () => {
    expect(Validators.hasValue({ name: "John" }, "John")).toBe(true);
    expect(Validators.hasValue({ name: "John" }, "Doe")).toBe(false);
    expect(Validators.hasValue([1, 2, 3], 1)).toBe(false);
  });

  test("hasKeys", () => {
    expect(Validators.hasKeys({ name: "John", age: 30 }, ["name", "age"])).toBe(
      true
    );
    expect(
      Validators.hasKeys({ name: "John", age: 30 }, ["name", "gender"])
    ).toBe(false);
    expect(Validators.hasKeys([1, 2, 3], ["0", "1"])).toBe(false);
  });

  test("hasValues", () => {
    expect(Validators.hasValues({ name: "John", age: 30 }, ["John", 30])).toBe(
      true
    );
    expect(Validators.hasValues({ name: "John", age: 30 }, ["John", 40])).toBe(
      false
    );
    expect(Validators.hasValues([1, 2, 3], [1, 4])).toBe(false);
  });

  // Date Validators
  test("isValidDate", () => {
    expect(Validators.isValidDate(new Date())).toBe(true);
    expect(Validators.isValidDate("2023-07-29")).toBe(false);
  });

  test("isFutureDate", () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    expect(Validators.isFutureDate(futureDate)).toBe(true);
    expect(Validators.isFutureDate(new Date())).toBe(false);
  });

  test("isPastDate", () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);
    expect(Validators.isPastDate(pastDate)).toBe(true);
    expect(Validators.isPastDate(new Date())).toBe(false);
  });

  // Custom Validators
  test("custom", () => {
    const isEven = (value) => value % 2 === 0;
    expect(Validators.custom(4, isEven)).toBe(true);
    expect(Validators.custom(5, isEven)).toBe(false);
  });
});
