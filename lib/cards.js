const BankCardUtils = {
  // Validate card number
  isValidCardNumber: (cardNumber) => /^\d{16}$/.test(cardNumber),

  // Get card type
  getCardType: (cardNumber) => {
    if (/^4\d{15}$/.test(cardNumber)) return "Visa";
    if (/^5[1-5]\d{14}$/.test(cardNumber)) return "Mastercard";
    if (/^3[47]\d{13}$/.test(cardNumber)) return "American Express";
    if (/^6(?:011|5\d{2})\d{12}$/.test(cardNumber)) return "Discover";
    if (/^(?:2131|1800|35\d{3})\d{11}$/.test(cardNumber)) return "JCB";
    return "Unknown";
  },

  // Validate expiration date
  isValidExpirationDate: (expirationDate) => {
    const [month, year] = expirationDate.split("/");
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    return (
      /^\d{2}$/.test(month) &&
      /^\d{2}$/.test(year) &&
      +year >= currentYear &&
      (+year > currentYear || +month >= currentMonth)
    );
  },

  // Validate CVV/CVC
  isValidCVV: (cvv) => /^\d{3,4}$/.test(cvv),

  // Mask card number (e.g., "**** **** **** 1234")
  maskCardNumber: (cardNumber) => {
    const last4Digits = cardNumber.slice(-4);
    return "*".repeat(cardNumber.length - 4) + last4Digits;
  },

  // Check if card number starts with a specific prefix (e.g., Visa starts with 4)
  cardNumberStartsWith: (cardNumber, prefix) => cardNumber.startsWith(prefix),

  // Generate a random valid card number for a given card type
  generateRandomCardNumber: (cardType) => {
    let cardNumber;
    switch (cardType.toLowerCase()) {
      case "visa":
        cardNumber =
          "4" +
          Math.floor(Math.random() * 1e15)
            .toString()
            .padStart(15, "0");
        break;
      case "mastercard":
        cardNumber =
          "5" +
          Math.floor(Math.random() * 1e14 + 1e14)
            .toString()
            .padStart(15, "0");
        break;
      case "american express":
        cardNumber =
          "34" +
          Math.floor(Math.random() * 1e13 + 1e13)
            .toString()
            .padStart(13, "0");
        break;
      case "discover":
        cardNumber =
          "6011" +
          Math.floor(Math.random() * 1e12)
            .toString()
            .padStart(12, "0");
        break;
      case "jcb":
        cardNumber =
          "35" +
          Math.floor(Math.random() * 1e13 + 1e13)
            .toString()
            .padStart(14, "0");
        break;
      default:
        throw new Error("Invalid card type");
    }
    return cardNumber;
  },

  // Validate the entire card (number, expiration date, and CVV)
  isValidCard: (cardNumber, expirationDate, cvv) => {
    return (
      BankCardUtils.isValidCardNumber(cardNumber) &&
      BankCardUtils.isValidExpirationDate(expirationDate) &&
      BankCardUtils.isValidCVV(cvv)
    );
  },

  // Generate random expiration date (format: "MM/YY")
  generateRandomExpirationDate: () => {
    const currentYear = new Date().getFullYear() % 100;
    const randomYear =
      currentYear + Math.floor(Math.random() * (15 - currentYear));
    const randomMonth = String(Math.floor(Math.random() * 12) + 1).padStart(
      2,
      "0"
    );
    return `${randomMonth}/${randomYear}`;
  },

  // Generate random CVV (3 or 4 digits)
  generateRandomCVV: () =>
    String(Math.floor(Math.random() * 10000)).padStart(3, "0"),
};
module.exports = { BankCardUtils };
