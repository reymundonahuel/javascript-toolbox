const { MathUtils } = require("../../lib/math");

describe("MathUtils", () => {
  // Basic Math Operations
  test("add", () => {
    expect(MathUtils.add(2, 3)).toBe(5);
  });

  test("subtract", () => {
    expect(MathUtils.subtract(5, 2)).toBe(3);
  });

  test("multiply", () => {
    expect(MathUtils.multiply(2, 3)).toBe(6);
  });

  test("divide", () => {
    expect(MathUtils.divide(6, 2)).toBe(3);
    expect(MathUtils.divide(6, 0)).toBe("Cannot divide by zero");
  });

  test("power", () => {
    expect(MathUtils.power(2, 3)).toBe(8);
  });

  // Rounding and Truncating
  test("round", () => {
    expect(MathUtils.round(3.14159)).toBe(3);
    expect(MathUtils.round(3.14159, 2)).toBe(3.14);
  });

  test("floor", () => {
    expect(MathUtils.floor(3.9)).toBe(3);
  });

  test("ceil", () => {
    expect(MathUtils.ceil(3.1)).toBe(4);
  });

  test("truncate", () => {
    expect(MathUtils.truncate(3.9)).toBe(3);
    expect(MathUtils.truncate(-3.9)).toBe(-3);
  });

  // Absolute Value and Sign
  test("abs", () => {
    expect(MathUtils.abs(5)).toBe(5);
    expect(MathUtils.abs(-5)).toBe(5);
  });

  test("sign", () => {
    expect(MathUtils.sign(5)).toBe(1);
    expect(MathUtils.sign(-5)).toBe(-1);
    expect(MathUtils.sign(0)).toBe(0);
  });

  // Square Root and Exponentiation
  test("sqrt", () => {
    expect(MathUtils.sqrt(4)).toBe(2);
  });

  test("exp", () => {
    expect(MathUtils.exp(2)).toBeCloseTo(7.389);
  });

  // Logarithmic Functions
  test("log", () => {
    expect(MathUtils.log(10)).toBeCloseTo(2.302);
  });

  test("log10", () => {
    expect(MathUtils.log10(100)).toBe(2);
  });

  test("log2", () => {
    expect(MathUtils.log2(8)).toBe(3);
  });

  // Trigonometric Functions
  test("sin", () => {
    expect(MathUtils.sin(30)).toBeCloseTo(0.5);
  });

  test("cos", () => {
    expect(MathUtils.cos(60)).toBeCloseTo(0.5);
  });

  test("tan", () => {
    expect(MathUtils.tan(45)).toBeCloseTo(1);
  });

  test("asin", () => {
    expect(MathUtils.asin(0.5)).toBeCloseTo(30);
  });

  test("acos", () => {
    expect(MathUtils.acos(0.5)).toBeCloseTo(60);
  });

  test("atan", () => {
    expect(MathUtils.atan(1)).toBeCloseTo(45);
  });

  test("atan2", () => {
    expect(MathUtils.atan2(1, 1)).toBeCloseTo(45);
  });

  // Radians and Degrees Conversion
  test("degreesToRadians", () => {
    expect(MathUtils.degreesToRadians(180)).toBe(Math.PI);
  });

  test("radiansToDegrees", () => {
    expect(MathUtils.radiansToDegrees(Math.PI)).toBe(180);
  });

  // Random Number Generation
  test("generateRandomInteger", () => {
    const randomInt = MathUtils.generateRandomInteger(1, 10);
    expect(randomInt).toBeGreaterThanOrEqual(1);
    expect(randomInt).toBeLessThanOrEqual(10);
  });

  test("generateRandomFloat", () => {
    const randomFloat = MathUtils.generateRandomFloat(1, 10);
    expect(randomFloat).toBeGreaterThanOrEqual(1);
    expect(randomFloat).toBeLessThan(10);
  });

  test("generateRandomInRange", () => {
    const randomNum = MathUtils.generateRandomInRange(1, 10);
    expect(randomNum).toBeGreaterThanOrEqual(1);
    expect(randomNum).toBeLessThanOrEqual(10);
  });

  // Constants
  test("PI", () => {
    expect(MathUtils.PI).toBe(Math.PI);
  });

  test("E", () => {
    expect(MathUtils.E).toBe(Math.E);
  });

  test("LN2", () => {
    expect(MathUtils.LN2).toBe(Math.LN2);
  });

  test("LN10", () => {
    expect(MathUtils.LN10).toBe(Math.LN10);
  });

  test("LOG2E", () => {
    expect(MathUtils.LOG2E).toBe(Math.LOG2E);
  });

  test("LOG10E", () => {
    expect(MathUtils.LOG10E).toBe(Math.LOG10E);
  });

  test("SQRT2", () => {
    expect(MathUtils.SQRT2).toBe(Math.SQRT2);
  });

  test("SQRT1_2", () => {
    expect(MathUtils.SQRT1_2).toBe(Math.SQRT1_2);
  });

  // Hyperbolic Functions
  test("sinh", () => {
    expect(MathUtils.sinh(0)).toBe(0);
  });

  test("cosh", () => {
    expect(MathUtils.cosh(0)).toBe(1);
  });

  test("tanh", () => {
    expect(MathUtils.tanh(0)).toBe(0);
  });

  test("asinh", () => {
    expect(MathUtils.asinh(0)).toBe(0);
  });

  test("acosh", () => {
    expect(MathUtils.acosh(1)).toBe(0);
  });

  test("atanh", () => {
    expect(MathUtils.atanh(0)).toBe(0);
  });

  // Exponential and Logarithmic Functions
  test("expm1", () => {
    expect(MathUtils.expm1(0)).toBe(0);
  });

  test("log1p", () => {
    expect(MathUtils.log1p(0)).toBe(0);
  });

  // Trigonometric Functions (in Degrees)
  test("degreesSin", () => {
    expect(MathUtils.degreesSin(30)).toBeCloseTo(0.5);
  });

  test("degreesCos", () => {
    expect(MathUtils.degreesCos(60)).toBeCloseTo(0.5);
  });

  test("degreesTan", () => {
    expect(MathUtils.degreesTan(45)).toBeCloseTo(1);
  });

  test("degreesAsin", () => {
    expect(MathUtils.degreesAsin(0.5)).toBeCloseTo(30);
  });

  test("degreesAcos", () => {
    expect(MathUtils.degreesAcos(0.5)).toBeCloseTo(60);
  });

  test("degreesAtan", () => {
    expect(MathUtils.degreesAtan(1)).toBeCloseTo(45);
  });

  test("degreesAtan2", () => {
    expect(MathUtils.degreesAtan2(1, 1)).toBeCloseTo(45);
  });

  // Greatest Common Divisor (GCD) and Least Common Multiple (LCM)
  test("gcd", () => {
    expect(MathUtils.gcd(15, 10)).toBe(5);
  });

  test("lcm", () => {
    expect(MathUtils.lcm(5, 10)).toBe(10);
  });

  // Factorial
  test("factorial", () => {
    expect(MathUtils.factorial(5)).toBe(120);
  });

  // Prime Numbers
  test("isPrime", () => {
    expect(MathUtils.isPrime(7)).toBe(true);
    expect(MathUtils.isPrime(10)).toBe(false);
  });

  // Fibonacci Sequence
  test("fibonacci", () => {
    expect(MathUtils.fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  // Base Conversion
  test("decimalToBinary", () => {
    expect(MathUtils.decimalToBinary(10)).toBe("1010");
  });

  test("decimalToOctal", () => {
    expect(MathUtils.decimalToOctal(10)).toBe("12");
  });

  test("decimalToHexadecimal", () => {
    expect(MathUtils.decimalToHexadecimal(15)).toBe("F");
  });

  test("binaryToDecimal", () => {
    expect(MathUtils.binaryToDecimal("1010")).toBe(10);
  });

  test("octalToDecimal", () => {
    expect(MathUtils.octalToDecimal("12")).toBe(10);
  });

  test("hexadecimalToDecimal", () => {
    expect(MathUtils.hexadecimalToDecimal("F")).toBe(15);
  });

  // Number Validation
  test("isValidNumber", () => {
    expect(MathUtils.isValidNumber(10)).toBe(true);
    expect(MathUtils.isValidNumber("hello")).toBe(false);
    expect(MathUtils.isValidNumber(NaN)).toBe(false);
    expect(MathUtils.isValidNumber(Infinity)).toBe(false);
  });

  // Degrees to Gradians and Radians
  test("degreesToGradians", () => {
    expect(MathUtils.degreesToGradians(180)).toBe(200);
  });

  test("gradiansToDegrees", () => {
    expect(MathUtils.gradiansToDegrees(200)).toBe(180);
  });

  test("gradiansToRadians", () => {
    expect(MathUtils.gradiansToRadians(100)).toBeCloseTo(1.5708);
  });

  test("radiansToGradians", () => {
    expect(MathUtils.radiansToGradians(1.5708)).toBeCloseTo(100);
  });

  // Nth Root
  test("nthRoot", () => {
    expect(MathUtils.nthRoot(8, 3)).toBe(2);
  });

  // Heron's Formula for Triangle Area
  test("triangleArea", () => {
    expect(MathUtils.triangleArea(3, 4, 5)).toBe(6);
  });

  // Euclidean Algorithm for Greatest Common Divisor (GCD)
  test("euclideanGCD", () => {
    expect(MathUtils.euclideanGCD(15, 10)).toBe(5);
  });

  // Golden Ratio
  test("goldenRatio", () => {
    expect(MathUtils.goldenRatio()).toBeCloseTo(1.618);
  });

  // Triangle Inequality Theorem
  test("isTriangleValid", () => {
    expect(MathUtils.isTriangleValid(3, 4, 5)).toBe(true);
    expect(MathUtils.isTriangleValid(1, 1, 10)).toBe(false);
  });

  // Factorial Trailing Zeroes
  test("factorialTrailingZeroes", () => {
    expect(MathUtils.factorialTrailingZeroes(10)).toBe(2);
  });

  // Perfect Square
  test("isPerfectSquare", () => {
    expect(MathUtils.isPerfectSquare(25)).toBe(true);
    expect(MathUtils.isPerfectSquare(26)).toBe(false);
  });

  // Percent
  test("calculatePercent", () => {
    expect(MathUtils.calculatePercent(20, 100)).toBe(20);
  });

  test("calculateValueFromPercent", () => {
    expect(MathUtils.calculateValueFromPercent(20, 100)).toBe(20);
  });

  // Random Integer Array
  test("generateRandomIntegerArray", () => {
    const arr = MathUtils.generateRandomIntegerArray(5, 1, 10);
    expect(arr).toHaveLength(5);
    expect(arr.every((num) => num >= 1 && num <= 10)).toBe(true);
  });
});
