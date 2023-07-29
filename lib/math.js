const MathUtils = {
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

  // Absolute Value and Sign
  abs: (num) => Math.abs(num),
  sign: (num) => Math.sign(num),

  // Square Root and Exponentiation
  sqrt: (num) => Math.sqrt(num),
  exp: (num) => Math.exp(num),

  // Logarithmic Functions
  log: (num) => Math.log(num),
  log10: (num) => Math.log10(num),
  log2: (num) => Math.log2(num),

  // Trigonometric Functions
  sin: (angle) => Math.sin(angle),
  cos: (angle) => Math.cos(angle),
  tan: (angle) => Math.tan(angle),
  asin: (value) => Math.asin(value),
  acos: (value) => Math.acos(value),
  atan: (value) => Math.atan(value),
  atan2: (y, x) => Math.atan2(y, x),

  // Radians and Degrees Conversion
  degreesToRadians: (degrees) => (degrees * Math.PI) / 180,
  radiansToDegrees: (radians) => (radians * 180) / Math.PI,

  // Random Number Generation
  generateRandomInteger: (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min,
  generateRandomFloat: (min, max) => Math.random() * (max - min) + min,
  generateRandomInRange: (min, max) => min + Math.random() * (max - min),

  // Constants
  PI: Math.PI,
  E: Math.E,
  LN2: Math.LN2,
  LN10: Math.LN10,
  LOG2E: Math.LOG2E,
  LOG10E: Math.LOG10E,
  SQRT2: Math.SQRT2,
  SQRT1_2: Math.SQRT1_2,

  // Hyperbolic Functions
  sinh: (x) => Math.sinh(x),
  cosh: (x) => Math.cosh(x),
  tanh: (x) => Math.tanh(x),
  asinh: (x) => Math.asinh(x),
  acosh: (x) => Math.acosh(x),
  atanh: (x) => Math.atanh(x),

  // Exponential and Logarithmic Functions
  expm1: (x) => Math.expm1(x),
  log1p: (x) => Math.log1p(x),

  // Trigonometric Functions (in Degrees)
  degreesSin: (angle) => Math.sin(MathUtils.degreesToRadians(angle)),
  degreesCos: (angle) => Math.cos(MathUtils.degreesToRadians(angle)),
  degreesTan: (angle) => Math.tan(MathUtils.degreesToRadians(angle)),
  degreesAsin: (value) => MathUtils.radiansToDegrees(Math.asin(value)),
  degreesAcos: (value) => MathUtils.radiansToDegrees(Math.acos(value)),
  degreesAtan: (value) => MathUtils.radiansToDegrees(Math.atan(value)),
  degreesAtan2: (y, x) => MathUtils.radiansToDegrees(Math.atan2(y, x)),

  // Greatest Common Divisor (GCD) and Least Common Multiple (LCM)
  gcd: (a, b) => (b === 0 ? a : MathUtils.gcd(b, a % b)),
  lcm: (a, b) => (a * b) / MathUtils.gcd(a, b),

  // Factorial
  factorial: (n) => {
    if (n < 0) return "Cannot calculate factorial of a negative number";
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  },

  // Prime Numbers
  isPrime: (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  },

  // Fibonacci Sequence
  fibonacci: (n) => {
    if (n <= 0) return "Invalid input";
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  },

  // Base Conversion
  decimalToBinary: (decimalNum) => decimalNum.toString(2),
  decimalToOctal: (decimalNum) => decimalNum.toString(8),
  decimalToHexadecimal: (decimalNum) => decimalNum.toString(16).toUpperCase(),
  binaryToDecimal: (binaryStr) => parseInt(binaryStr, 2),
  octalToDecimal: (octalStr) => parseInt(octalStr, 8),
  hexadecimalToDecimal: (hexadecimalStr) => parseInt(hexadecimalStr, 16),

  // Number Validation
  isValidNumber: (num) =>
    typeof num === "number" && !isNaN(num) && isFinite(num),

  // Degrees to Gradians and Radians
  degreesToGradians: (degrees) => (degrees * 10) / 9,
  gradiansToDegrees: (gradians) => (gradians * 9) / 10,
  gradiansToRadians: (gradians) => (gradians * Math.PI) / 200,
  radiansToGradians: (radians) => (radians * 200) / Math.PI,

  // Nth Root
  nthRoot: (number, n) => number ** (1 / n),

  // Heron's Formula for Triangle Area
  triangleArea: (a, b, c) => {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  },

  // Euclidean Algorithm for Greatest Common Divisor (GCD)
  euclideanGCD: (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  },

  // Golden Ratio
  goldenRatio: () => (1 + Math.sqrt(5)) / 2,

  // Triangle Inequality Theorem
  isTriangleValid: (a, b, c) => a + b > c && a + c > b && b + c > a,

  // Factorial Trailing Zeroes
  factorialTrailingZeroes: (n) => {
    if (n < 0) return "Invalid input";
    let count = 0;
    for (let i = 5; n / i >= 1; i *= 5) {
      count += Math.floor(n / i);
    }
    return count;
  },

  // Perfect Square
  isPerfectSquare: (num) => Math.sqrt(num) % 1 === 0,

  // Percent
  calculatePercent: (value, total) => (value / total) * 100,
  calculateValueFromPercent: (percent, total) => (percent / 100) * total,

  // Random Integer Array
  generateRandomIntegerArray: (size, min, max) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(MathUtils.generateRandomInteger(min, max));
    }
    return arr;
  },
};
module.exports = { MathUtils };
