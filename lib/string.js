const StringUtils = {
  // Basic String Manipulations
  countCharacters: (str) => str.length,
  removeSpaces: (str) => str.replace(/\s/g, ""),
  toUpperCase: (str) => str.toUpperCase(),
  toLowerCase: (str) => str.toLowerCase(),
  capitalizeFirstLetter: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  replaceSubstring: (str, oldSubstring, newSubstring) =>
    str.split(oldSubstring).join(newSubstring),

  // Palindrome and Anagram Functions
  isPalindrome: (str) => {
    const cleanedStr = str.toLowerCase().replace(/\s/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
  },
  isAnagram: (str1, str2) =>
    str1.split("").sort().join("") === str2.split("").sort().join(""),

  // Acronym and StUdLyCaPs Functions
  toAcronym: (str) =>
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join(""),
  toPascalCase: (str) =>
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(""),
  toStUdLyCaPs: (str) =>
    str
      .split("")
      .map((char, index) =>
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join(""),

  // Encoding and Decoding Functions
  urlEncode: (str) => encodeURIComponent(str),
  urlDecode: (str) => decodeURIComponent(str),
  base64Encode: (str) => btoa(str),
  base64Decode: (encodedStr) => atob(encodedStr),
  htmlEncode: (str) =>
    str.replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char]
    ),
  htmlDecode: (encodedStr) => {
    const element = document.createElement("textarea");
    element.innerHTML = encodedStr;
    return element.value;
  },

  // String Case Functions
  toCamelCase: (str) =>
    str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase()),
  toSnakeCase: (str) =>
    str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => "_" + char),
  toKebabCase: (str) =>
    str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => "-" + char),

  // Character Manipulations
  reverseString: (str) => str.split("").reverse().join(""),
  reverseWords: (str) => str.split(" ").reverse().join(" "),
  countCharacterOccurrences: (str) =>
    str.split("").reduce((charCount, char) => {
      charCount[char] = (charCount[char] || 0) + 1;
      return charCount;
    }, {}),
  removeDuplicateCharacters: (str) =>
    str
      .split("")
      .filter((char, index, arr) => arr.indexOf(char) === index)
      .join(""),
  toLeetSpeak: (str) => {
    const leetChars = {
      A: "4",
      E: "3",
      G: "6",
      I: "1",
      O: "0",
      S: "5",
      T: "7",
    };
    return str.replace(
      /[AEGIOST]/gi,
      (char) => leetChars[char.toUpperCase()] || char
    );
  },
  collapseSpaces: (str) => str.replace(/\s+/g, " ").trim(),
  repeatString: (str, times) => str.repeat(times),

  // Regular Expressions
  isValidURL: (str) => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(str),
  extractNumbers: (str) => str.match(/\d+/g).map(Number),
  removeNonAlphanumeric: (str) => str.replace(/[^a-zA-Z0-9]/g, ""),

  // Padding and Truncating
  padString: (str, length, padChar = " ") =>
    str.padStart((str.length + length) / 2, padChar).padEnd(length, padChar),
  truncateString: (str, maxLength) =>
    str.length <= maxLength ? str : str.slice(0, maxLength) + "...",
  getFirstAndLastNCharacters: (str, n) => str.slice(0, n) + str.slice(-n),

  // Miscellaneous
  shuffleString: (str) =>
    str
      .split("")
      .sort(() => Math.random() - 0.5)
      .join(""),
  toMorseCode: (str) => {
    const morseMap = {
      A: ".-",
      B: "-...",
      C: "-.-.",
      D: "-..",
      E: ".",
      F: "..-.",
      G: "--.",
      H: "....",
      I: "..",
      J: ".---",
      K: "-.-",
      L: ".-..",
      M: "--",
      N: "-.",
      O: "---",
      P: ".--.",
      Q: "--.-",
      R: ".-.",
      S: "...",
      T: "-",
      U: "..-",
      V: "...-",
      W: ".--",
      X: "-..-",
      Y: "-.--",
      Z: "--..",
      1: ".----",
      2: "..---",
      3: "...--",
      4: "....-",
      5: ".....",
      6: "-....",
      7: "--...",
      8: "---..",
      9: "----.",
      0: "-----",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      "'": ".----.",
      "!": "-.-.--",
      "/": "-..-.",
      "(": "-.--.",
      ")": "-.--.-",
      "&": ".-...",
      ":": "---...",
      ";": "-.-.-.",
      "=": "-...-",
      "+": ".-.-.",
      "-": "-....-",
      _: "..--.-",
      '"': ".-..-.",
      $: "...-..-",
      "@": ".--.-.",
    };
    return str
      .toUpperCase()
      .split("")
      .map((char) => morseMap[char] || char)
      .join(" ");
  },

  // Emoji Functions
  toEmoji: (str) => {
    const emojiMap = {
      ":)": "😀",
      ":(": "😞",
      ":D": "😃",
      ":P": "😛",
    };
    return str.replace(/:\)|:\(|:D|:P/g, (emoji) => emojiMap[emoji] || emoji);
  },

  // URL Query Parameters
  parseQueryString: (queryString) => {
    const params = {};
    const pairs = queryString.slice(1).split("&");
    for (const pair of pairs) {
      const [key, value] = pair.split("=");
      params[decodeURIComponent(key)] = decodeURIComponent(value);
    }
    return params;
  },
  buildQueryString: (params) =>
    Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&"),

  // String Split and Join
  splitStringByLength: (str, length) => {
    const result = [];
    for (let i = 0; i < str.length; i += length) {
      result.push(str.substr(i, length));
    }
    return result;
  },
  joinStrings: (strArray, separator = "") => strArray.join(separator),

  // Trim and Strip Functions
  trimString: (str) => str.trim(),
  stripHTMLTags: (str) => str.replace(/<[^>]*>/g, ""),
  stripLeadingZeros: (str) => str.replace(/^0+/, ""),

  // Validation Functions
  isValidEmail: (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str),
  isValidPhoneNumber: (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/.test(str),
  isValidCreditCardNumber: (str) => /^[0-9]{13,19}$/.test(str),

  // Random Strings and Characters
  generateRandomString: (length) =>
    Math.random()
      .toString(36)
      .substring(2, 2 + length),
  generateRandomNumber: (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min,
  getRandomCharacter: (str) =>
    str.charAt(Math.floor(Math.random() * str.length)),

  // User Input Sanitization
  sanitizeUserInput: (str) =>
    str.replace(
      /[<>&]/g,
      (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[char]
    ),
};
module.exports = { StringUtils };
