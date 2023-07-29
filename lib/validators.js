export const Validators = {
  // General Validators
  isDefined: (value) => value !== undefined,
  isNull: (value) => value === null,
  isUndefined: (value) => value === undefined,
  isNullOrUndefined: (value) => value === null || value === undefined,
  isEmpty: (value) => {
    if (Validators.isNullOrUndefined(value)) return true;
    if (typeof value === "string" && value.trim() === "") return true;
    if (Array.isArray(value) && value.length === 0) return true;
    if (typeof value === "object" && Object.keys(value).length === 0)
      return true;
    return false;
  },
  isNotEmpty: (value) => !Validators.isEmpty(value),

  // Type Validators
  isString: (value) => typeof value === "string",
  isNumber: (value) => typeof value === "number" && !isNaN(value),
  isBoolean: (value) => typeof value === "boolean",
  isObject: (value) =>
    typeof value === "object" && value !== null && !Array.isArray(value),
  isArray: (value) => Array.isArray(value),
  isFunction: (value) => typeof value === "function",
  isDate: (value) => value instanceof Date,
  isRegExp: (value) => value instanceof RegExp,

  // Numeric Validators
  isPositive: (value) => Validators.isNumber(value) && value > 0,
  isNegative: (value) => Validators.isNumber(value) && value < 0,
  isInteger: (value) => Validators.isNumber(value) && Number.isInteger(value),
  isFloat: (value) => Validators.isNumber(value) && !Number.isInteger(value),
  isInRange: (value, min, max) =>
    Validators.isNumber(value) && value >= min && value <= max,

  // String Validators
  isAlpha: (value) => Validators.isString(value) && /^[A-Z]+$/i.test(value),
  isAlphaNumeric: (value) =>
    Validators.isString(value) && /^[A-Z0-9]+$/i.test(value),
  isNumeric: (value) => Validators.isString(value) && /^[0-9]+$/i.test(value),
  isEmail: (value) =>
    Validators.isString(value) &&
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
  isURL: (value) =>
    Validators.isString(value) &&
    /^(https?:\/\/)?[A-Z0-9.-]+\.[A-Z]{2,}(\/.*)?$/i.test(value),
  isLowerCase: (value) =>
    Validators.isString(value) && value === value.toLowerCase(),
  isUpperCase: (value) =>
    Validators.isString(value) && value === value.toUpperCase(),
  isStartsWith: (value, prefix) =>
    Validators.isString(value) && value.startsWith(prefix),
  isEndsWith: (value, suffix) =>
    Validators.isString(value) && value.endsWith(suffix),
  hasSubstring: (value, substring) =>
    Validators.isString(value) && value.includes(substring),
  hasNoWhitespace: (value) => Validators.isString(value) && !/\s/.test(value),

  // Array Validators
  hasElement: (array, element) =>
    Validators.isArray(array) && array.includes(element),
  isUnique: (array) => {
    if (!Validators.isArray(array)) return false;
    const uniqueSet = new Set(array);
    return array.length === uniqueSet.size;
  },
  hasDuplicates: (array) => {
    if (!Validators.isArray(array)) return false;
    const uniqueSet = new Set(array);
    return array.length !== uniqueSet.size;
  },

  // Object Validators
  hasKey: (obj, key) => Validators.isObject(obj) && key in obj,
  hasValue: (obj, value) =>
    Validators.isObject(obj) && Object.values(obj).includes(value),
  hasKeys: (obj, keys) => {
    if (!Validators.isObject(obj) || !Validators.isArray(keys)) return false;
    return keys.every((key) => key in obj);
  },
  hasValues: (obj, values) => {
    if (!Validators.isObject(obj) || !Validators.isArray(values)) return false;
    return Object.values(obj).some((value) => values.includes(value));
  },

  // Date Validators
  isValidDate: (date) => Validators.isDate(date) && !isNaN(date.getTime()),
  isFutureDate: (date) =>
    Validators.isDate(date) && date.getTime() > Date.now(),
  isPastDate: (date) => Validators.isDate(date) && date.getTime() < Date.now(),

  // Custom Validators
  custom: (value, callback) => callback(value),
};
