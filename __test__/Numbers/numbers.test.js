const { NumberUtils } = require("../../lib/numbers");

describe("NumberUtils", () => {
  // Basic Math Operations
  test("add", () => {
    expect(NumberUtils.add(2, 3)).toBe(5);
  });

  test("subtract", () => {
    expect(NumberUtils.subtract(5, 2)).toBe(3);
  });

  test("multiply", () => {
    expect(NumberUtils.multiply(2, 3)).toBe(6);
  });

  test("divide", () => {
    expect(NumberUtils.divide(6, 2)).toBe(3);
    expect(NumberUtils.divide(6, 0)).toBe("Cannot divide by zero");
  });

  test("power", () => {
    expect(NumberUtils.power(2, 3)).toBe(8);
  });

  // Rounding and Truncating
  test("round", () => {
    expect(NumberUtils.round(3.14159)).toBe(3);
    expect(NumberUtils.round(3.14159, 2)).toBe(3.14);
  });

  test("floor", () => {
    expect(NumberUtils.floor(3.9)).toBe(3);
  });

  test("ceil", () => {
    expect(NumberUtils.ceil(3.1)).toBe(4);
  });

  test("truncate", () => {
    expect(NumberUtils.truncate(3.9)).toBe(3);
    expect(NumberUtils.truncate(-3.9)).toBe(-3);
  });

  // Number Comparisons
  test("isEven", () => {
    expect(NumberUtils.isEven(4)).toBe(true);
    expect(NumberUtils.isEven(5)).toBe(false);
  });

  test("isOdd", () => {
    expect(NumberUtils.isOdd(4)).toBe(false);
    expect(NumberUtils.isOdd(5)).toBe(true);
  });

  test("isPrime", () => {
    expect(NumberUtils.isPrime(2)).toBe(true);
    expect(NumberUtils.isPrime(7)).toBe(true);
    expect(NumberUtils.isPrime(10)).toBe(false);
  });

  test("isPositive", () => {
    expect(NumberUtils.isPositive(5)).toBe(true);
    expect(NumberUtils.isPositive(-5)).toBe(false);
    expect(NumberUtils.isPositive(0)).toBe(false);
  });

  test("isNegative", () => {
    expect(NumberUtils.isNegative(-5)).toBe(true);
    expect(NumberUtils.isNegative(5)).toBe(false);
    expect(NumberUtils.isNegative(0)).toBe(false);
  });

  test("isInteger", () => {
    expect(NumberUtils.isInteger(5)).toBe(true);
    expect(NumberUtils.isInteger(5.5)).toBe(false);
  });

  // Number Formatting
  test("formatAsCurrency", () => {
    expect(NumberUtils.formatAsCurrency(1234.56)).toBe("$1,234.56");
    expect(NumberUtils.formatAsCurrency(1234.56, "EUR")).toBe("€1,234.56");
  });

  test("formatWithCommas", () => {
    expect(NumberUtils.formatWithCommas(1234567)).toBe("1,234,567");
  });

  // Number Range Functions
  test("clamp", () => {
    expect(NumberUtils.clamp(10, 5, 15)).toBe(10);
    expect(NumberUtils.clamp(2, 5, 15)).toBe(5);
    expect(NumberUtils.clamp(20, 5, 15)).toBe(15);
  });

  test("inRange", () => {
    expect(NumberUtils.inRange(10, 5, 15)).toBe(true);
    expect(NumberUtils.inRange(2, 5, 15)).toBe(false);
    expect(NumberUtils.inRange(20, 5, 15)).toBe(false);
  });

  // Rounding to Nearest
  test("roundToNearest", () => {
    expect(NumberUtils.roundToNearest(10, 5)).toBe(10);
    expect(NumberUtils.roundToNearest(12, 5)).toBe(10);
    expect(NumberUtils.roundToNearest(13, 5)).toBe(15);
  });

  test("roundToNearestFraction", () => {
    expect(NumberUtils.roundToNearestFraction(0.75, 0.25)).toBe(0.75);
    expect(NumberUtils.roundToNearestFraction(0.7, 0.25)).toBe(0.75);
    expect(NumberUtils.roundToNearestFraction(0.6, 0.25)).toBe(0.5);
  });

  // Number Conversion
  test("binaryToDecimal", () => {
    expect(NumberUtils.binaryToDecimal("1101")).toBe(13);
  });

  test("decimalToBinary", () => {
    expect(NumberUtils.decimalToBinary(13)).toBe("1101");
  });

  test("decimalToHexadecimal", () => {
    expect(NumberUtils.decimalToHexadecimal(255)).toBe("FF");
  });

  test("hexadecimalToDecimal", () => {
    expect(NumberUtils.hexadecimalToDecimal("FF")).toBe(255);
  });

  // Number Validation
  test("isValidNumber", () => {
    expect(NumberUtils.isValidNumber(123)).toBe(true);
    expect(NumberUtils.isValidNumber("abc")).toBe(false);
    expect(NumberUtils.isValidNumber(NaN)).toBe(false);
    expect(NumberUtils.isValidNumber(Infinity)).toBe(false);
  });

  // Number Sequences and Summations
  test("arithmeticSequenceSum", () => {
    expect(NumberUtils.arithmeticSequenceSum(1, 2, 5)).toBe(15);
  });

  test("geometricSequenceSum", () => {
    expect(NumberUtils.geometricSequenceSum(2, 3, 4)).toBe(40);
  });

  test("factorial", () => {
    expect(NumberUtils.factorial(5)).toBe(120);
  });

  // Random Number Generation
  test("generateRandomInteger", () => {
    const randomInt = NumberUtils.generateRandomInteger(1, 10);
    expect(randomInt).toBeGreaterThanOrEqual(1);
    expect(randomInt).toBeLessThanOrEqual(10);
  });

  test("generateRandomFloat", () => {
    const randomFloat = NumberUtils.generateRandomFloat(1, 10);
    expect(randomFloat).toBeGreaterThanOrEqual(1);
    expect(randomFloat).toBeLessThan(10);
  });

  test("generateRandomInRange", () => {
    const randomNum = NumberUtils.generateRandomInRange(1, 10);
    expect(randomNum).toBeGreaterThanOrEqual(1);
    expect(randomNum).toBeLessThanOrEqual(10);
  });

  // Trigonometric Functions
  test("degreesToRadians", () => {
    expect(NumberUtils.degreesToRadians(180)).toBe(Math.PI);
  });

  test("radiansToDegrees", () => {
    expect(NumberUtils.radiansToDegrees(Math.PI)).toBe(180);
  });

  test("sine", () => {
    expect(NumberUtils.sine(30)).toBe(0.5);
  });

  test("cosine", () => {
    expect(NumberUtils.cosine(60)).toBe(0.5);
  });

  test("tangent", () => {
    expect(NumberUtils.tangent(45)).toBe(1);
  });
});
