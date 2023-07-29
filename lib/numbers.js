export const NumberUtils = {
  // Basic Math Operations
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => (num2 !== 0 ? num1 / num2 : "Cannot divide by zero"),
  power: (base, exponent) => Math.pow(base, exponent),

  // Rounding and Truncating
  round: (num, decimalPlaces = 0) => +num.toFixed(decimalPlaces),
  floor: (num) => Math.floor(num),
  ceil: (num) => Math.ceil(num),
  truncate: (num) => (num < 0 ? Math.ceil(num) : Math.floor(num)),

  // Number Comparisons
  isEven: (num) => num % 2 === 0,
  isOdd: (num) => num % 2 !== 0,
  isPrime: (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  },
  isPositive: (num) => num > 0,
  isNegative: (num) => num < 0,
  isInteger: (num) => Number.isInteger(num),

  // Number Formatting
  formatAsCurrency: (num, currency = "USD") =>
    new Intl.NumberFormat("en-US", { style: "currency", currency }).format(num),
  formatWithCommas: (num) => new Intl.NumberFormat("en-US").format(num),

  // Number Range Functions
  clamp: (num, min, max) => Math.min(Math.max(num, min), max),
  inRange: (num, start, end) =>
    num >= Math.min(start, end) && num <= Math.max(start, end),

  // Rounding to Nearest
  roundToNearest: (num, multiple) => Math.round(num / multiple) * multiple,
  roundToNearestFraction: (num, fraction) =>
    Math.round(num * fraction) / fraction,

  // Number Conversion
  binaryToDecimal: (binaryStr) => parseInt(binaryStr, 2),
  decimalToBinary: (decimalNum) => decimalNum.toString(2),
  decimalToHexadecimal: (decimalNum) => decimalNum.toString(16).toUpperCase(),
  hexadecimalToDecimal: (hexadecimalStr) => parseInt(hexadecimalStr, 16),

  // Number Validation
  isValidNumber: (num) =>
    typeof num === "number" && !isNaN(num) && isFinite(num),

  // Number Sequences and Summations
  arithmeticSequenceSum: (firstTerm, commonDifference, numTerms) =>
    (numTerms / 2) * (2 * firstTerm + (numTerms - 1) * commonDifference),
  geometricSequenceSum: (firstTerm, commonRatio, numTerms) =>
    (firstTerm * (1 - Math.pow(commonRatio, numTerms))) / (1 - commonRatio),
  factorial: (num) => {
    if (num < 0) return "Cannot calculate factorial of a negative number";
    if (num === 0) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  },

  // Random Number Generation
  generateRandomInteger: (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min,
  generateRandomFloat: (min, max) => Math.random() * (max - min) + min,
  generateRandomInRange: (min, max) => min + Math.random() * (max - min),

  // Trigonometric Functions
  degreesToRadians: (degrees) => (degrees * Math.PI) / 180,
  radiansToDegrees: (radians) => (radians * 180) / Math.PI,
  sine: (degrees) => Math.sin(NumberUtils.degreesToRadians(degrees)),
  cosine: (degrees) => Math.cos(NumberUtils.degreesToRadians(degrees)),
  tangent: (degrees) => Math.tan(NumberUtils.degreesToRadians(degrees)),
};
