const { BankCardUtils } = require("../../lib/cards");

describe("BankCardUtils", () => {
  test("isValidCardNumber should validate card numbers", () => {
    expect(BankCardUtils.isValidCardNumber("1234567890123456")).toBe(true);
    expect(BankCardUtils.isValidCardNumber("123456789012345")).toBe(false);
    expect(BankCardUtils.isValidCardNumber("abcde")).toBe(false);
  });

  test("getCardType should return the correct card type", () => {
    expect(BankCardUtils.getCardType("4123456789012345")).toBe("Visa");
    expect(BankCardUtils.getCardType("5123456789012345")).toBe("Mastercard");
    expect(BankCardUtils.getCardType("371234567890123")).toBe(
      "American Express"
    );
    expect(BankCardUtils.getCardType("6011123456789012")).toBe("Discover");
    expect(BankCardUtils.getCardType("3521234567890123")).toBe("JCB");
    expect(BankCardUtils.getCardType("9999123456789012")).toBe("Unknown");
  });

  test("isValidExpirationDate should validate expiration dates", () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    const validDate1 = `${String(currentMonth).padStart(2, "0")}/${String(
      currentYear + 1
    ).padStart(2, "0")}`;
    const validDate2 = `${String(currentMonth).padStart(2, "0")}/${String(
      currentYear
    ).padStart(2, "0")}`;
    const invalidDate1 = "13/25";
    const invalidDate2 = "01/00";
    const invalidDate3 = "01/100";
    const invalidDate4 = "01/1";
    expect(BankCardUtils.isValidExpirationDate(validDate1)).toBe(true);
    expect(BankCardUtils.isValidExpirationDate(validDate2)).toBe(true);
    expect(BankCardUtils.isValidExpirationDate(invalidDate1)).toBe(false);
    expect(BankCardUtils.isValidExpirationDate(invalidDate2)).toBe(false);
    expect(BankCardUtils.isValidExpirationDate(invalidDate3)).toBe(false);
    expect(BankCardUtils.isValidExpirationDate(invalidDate4)).toBe(false);
  });

  test("isValidCVV should validate CVV/CVC", () => {
    expect(BankCardUtils.isValidCVV("123")).toBe(true);
    expect(BankCardUtils.isValidCVV("1234")).toBe(true);
    expect(BankCardUtils.isValidCVV("12")).toBe(false);
    expect(BankCardUtils.isValidCVV("abcd")).toBe(false);
  });

  test("maskCardNumber should mask the card number", () => {
    expect(BankCardUtils.maskCardNumber("1234567890123456")).toBe(
      "************3456"
    );
    expect(BankCardUtils.maskCardNumber("4123456789012345")).toBe(
      "************2345"
    );
  });

  test("cardNumberStartsWith should check if card number starts with a specific prefix", () => {
    expect(BankCardUtils.cardNumberStartsWith("4123456789012345", "4")).toBe(
      true
    );
    expect(BankCardUtils.cardNumberStartsWith("5123456789012345", "5")).toBe(
      true
    );
    expect(BankCardUtils.cardNumberStartsWith("4123456789012345", "5")).toBe(
      false
    );
  });

  test("generateRandomCardNumber should generate a random valid card number", () => {
    const visaCardNumber = BankCardUtils.generateRandomCardNumber("Visa");
    const mastercardCardNumber =
      BankCardUtils.generateRandomCardNumber("Mastercard");
    const amexCardNumber =
      BankCardUtils.generateRandomCardNumber("American Express");
    const discoverCardNumber =
      BankCardUtils.generateRandomCardNumber("Discover");
    const jcbCardNumber = BankCardUtils.generateRandomCardNumber("JCB");
    expect(BankCardUtils.isValidCardNumber(visaCardNumber)).toBe(true);
    expect(BankCardUtils.isValidCardNumber(mastercardCardNumber)).toBe(true);
    expect(BankCardUtils.isValidCardNumber(amexCardNumber)).toBe(true);
    expect(BankCardUtils.isValidCardNumber(discoverCardNumber)).toBe(true);
    expect(BankCardUtils.isValidCardNumber(jcbCardNumber)).toBe(true);
  });

  test("isValidCard should validate the entire card", () => {
    const validCard = {
      cardNumber: "4123456789012345",
      expirationDate: "12/25",
      cvv: "123",
    };
    const invalidCard = {
      cardNumber: "123456789012345",
      expirationDate: "13/25",
      cvv: "12",
    };
    expect(
      BankCardUtils.isValidCard(
        validCard.cardNumber,
        validCard.expirationDate,
        validCard.cvv
      )
    ).toBe(true);
    expect(
      BankCardUtils.isValidCard(
        invalidCard.cardNumber,
        invalidCard.expirationDate,
        invalidCard.cvv
      )
    ).toBe(false);
  });

  test("generateRandomExpirationDate should generate a random expiration date", () => {
    const expirationDate = BankCardUtils.generateRandomExpirationDate();
    expect(BankCardUtils.isValidExpirationDate(expirationDate)).toBe(true);
  });

  test("generateRandomCVV should generate a random CVV", () => {
    const cvv = BankCardUtils.generateRandomCVV();
    expect(BankCardUtils.isValidCVV(cvv)).toBe(true);
  });
});
