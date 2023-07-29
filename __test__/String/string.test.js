const StringUtils = require("../../core");

describe("StringUtils", () => {
  // Basic String Manipulations
  describe("countCharacters", () => {
    test("should return the correct number of characters", () => {
      expect(StringUtils.StringUtils.countCharacters("Hello, world!")).toBe(13);
      expect(StringUtils.StringUtils.countCharacters("")).toBe(0);
      expect(StringUtils.StringUtils.countCharacters("  Spaces  ")).toBe(10);
    });
  });

  describe("removeSpaces", () => {
    test("should remove all spaces from the string", () => {
      expect(StringUtils.StringUtils.removeSpaces("Hello, world!")).toBe(
        "Hello,world!"
      );
      expect(StringUtils.StringUtils.removeSpaces("")).toBe("");
      expect(StringUtils.StringUtils.removeSpaces("  Spaces  ")).toBe("Spaces");
    });
  });

  describe("toUpperCase", () => {
    test("should convert the string to uppercase", () => {
      expect(StringUtils.StringUtils.toUpperCase("hello")).toBe("HELLO");
      expect(StringUtils.StringUtils.toUpperCase("")).toBe("");
      expect(StringUtils.StringUtils.toUpperCase("TeStInG")).toBe("TESTING");
    });
  });

  describe("toLowerCase", () => {
    test("should convert the string to lowercase", () => {
      expect(StringUtils.StringUtils.toLowerCase("Hello")).toBe("hello");
      expect(StringUtils.StringUtils.toLowerCase("")).toBe("");
      expect(StringUtils.StringUtils.toLowerCase("TeStInG")).toBe("testing");
    });
  });

  describe("capitalizeFirstLetter", () => {
    test("should capitalize the first letter of the string", () => {
      expect(StringUtils.StringUtils.capitalizeFirstLetter("hello")).toBe(
        "Hello"
      );
      expect(StringUtils.StringUtils.capitalizeFirstLetter("")).toBe("");
      expect(StringUtils.StringUtils.capitalizeFirstLetter("testing")).toBe(
        "Testing"
      );
    });
  });

  describe("replaceSubstring", () => {
    test("should replace all occurrences of the oldSubstring with the newSubstring", () => {
      expect(
        StringUtils.StringUtils.replaceSubstring("Hello, world!", "o", "X")
      ).toBe("HellX, wXrld!");
      expect(
        StringUtils.StringUtils.replaceSubstring(
          "Lorem ipsum dolor sit sit amet",
          "sit",
          "XXXX"
        )
      ).toBe("Lorem ipsum dolor XXXX amet");
    });
  });

  // Palindrome and Anagram Functions
  describe("isPalindrome", () => {
    test("should return true if the string is a palindrome, false otherwise", () => {
      expect(StringUtils.StringUtils.isPalindrome("racecar")).toBe(true);
      expect(StringUtils.StringUtils.isPalindrome("hello")).toBe(false);
      expect(
        StringUtils.StringUtils.isPalindrome("A man, a plan, a canal, Panama")
      ).toBe(true);
    });
  });

  describe("isAnagram", () => {
    test("should return true if the two strings are anagrams, false otherwise", () => {
      expect(StringUtils.StringUtils.isAnagram("listen", "silent")).toBe(true);
      expect(StringUtils.StringUtils.isAnagram("hello", "world")).toBe(false);
      expect(
        StringUtils.StringUtils.isAnagram("rail safety", "fairy tales")
      ).toBe(true);
    });
  });

  // Acronym and StUdLyCaPs Functions
  describe("toAcronym", () => {
    test("should convert the string to its acronym", () => {
      expect(
        StringUtils.StringUtils.toAcronym("HyperText Markup Language")
      ).toBe("HTML");
      expect(StringUtils.StringUtils.toAcronym("World Wide Web")).toBe("WWW");
      expect(
        StringUtils.StringUtils.toAcronym("Application Programming Interface")
      ).toBe("API");
    });
  });

  describe("toPascalCase", () => {
    test("should convert the string to PascalCase", () => {
      expect(StringUtils.StringUtils.toPascalCase("hello world")).toBe(
        "HelloWorld"
      );
      expect(StringUtils.StringUtils.toPascalCase("foo bar baz")).toBe(
        "FooBarBaz"
      );
      expect(StringUtils.StringUtils.toPascalCase("a simple test")).toBe(
        "ASimpleTest"
      );
    });
  });

  describe("toStUdLyCaPs", () => {
    test("should convert the string to StUdLyCaPs", () => {
      expect(StringUtils.StringUtils.toStUdLyCaPs("Hello, world!")).toBe(
        "HeLlO, WoRlD!"
      );
      expect(StringUtils.StringUtils.toStUdLyCaPs("Testing StUdLyCaPs")).toBe(
        "TeStInG StUdLyCaPs"
      );
      expect(StringUtils.StringUtils.toStUdLyCaPs("A Simple Test")).toBe(
        "A SiMpLe tEsT"
      );
    });
  });

  // Encoding and Decoding Functions
  describe("urlEncode", () => {
    test("should encode the string to a URL-safe format", () => {
      expect(StringUtils.StringUtils.urlEncode("hello, world!")).toBe(
        "hello%2C%20world%21"
      );
      expect(StringUtils.StringUtils.urlEncode("test&encode")).toBe(
        "test%26encode"
      );
    });
  });

  describe("urlDecode", () => {
    test("should decode the URL-encoded string", () => {
      expect(StringUtils.StringUtils.urlDecode("hello%2C%20world%21")).toBe(
        "hello, world!"
      );
      expect(StringUtils.StringUtils.urlDecode("test%26encode")).toBe(
        "test&encode"
      );
    });
  });

  describe("base64Encode", () => {
    test("should encode the string to Base64", () => {
      expect(StringUtils.StringUtils.base64Encode("hello, world!")).toBe(
        "aGVsbG8sIHdvcmxkIQ=="
      );
      expect(StringUtils.StringUtils.base64Encode("testing encoding")).toBe(
        "dGVzdGluZyBlbmNvZGluZw=="
      );
    });
  });

  describe("base64Decode", () => {
    test("should decode the Base64 encoded string", () => {
      expect(StringUtils.StringUtils.base64Decode("aGVsbG8sIHdvcmxkIQ==")).toBe(
        "hello, world!"
      );
      expect(
        StringUtils.StringUtils.base64Decode("dGVzdGluZyBlbmNvZGluZw==")
      ).toBe("testing encoding");
    });
  });

  describe("htmlEncode", () => {
    test("should encode the string to HTML entities", () => {
      expect(
        StringUtils.StringUtils.htmlEncode("<div>Hello, world!</div>")
      ).toBe("&lt;div&gt;Hello, world!&lt;/div&gt;");
      expect(StringUtils.StringUtils.htmlEncode('"Testing" & <Encoding>')).toBe(
        "&quot;Testing&quot; &amp; &lt;Encoding&gt;"
      );
    });
  });

  describe("htmlDecode", () => {
    test("should decode the HTML-encoded string", () => {
      expect(
        StringUtils.StringUtils.htmlDecode(
          "&lt;div&gt;Hello, world!&lt;/div&gt;"
        )
      ).toBe("<div>Hello, world!</div>");
      expect(
        StringUtils.StringUtils.htmlDecode(
          "&quot;Testing&quot; &amp; &lt;Encoding&gt;"
        )
      ).toBe('"Testing" & <Encoding>');
    });
  });

  // String Case Functions
  describe("toCamelCase", () => {
    test("should convert the string to camelCase", () => {
      expect(StringUtils.StringUtils.toCamelCase("hello world")).toBe(
        "helloWorld"
      );
      expect(StringUtils.StringUtils.toCamelCase("foo bar baz")).toBe(
        "fooBarBaz"
      );
      expect(StringUtils.StringUtils.toCamelCase("a simple test")).toBe(
        "aSimpleTest"
      );
    });
  });

  describe("toSnakeCase", () => {
    test("should convert the string to snake_case", () => {
      expect(StringUtils.StringUtils.toSnakeCase("hello world")).toBe(
        "hello_world"
      );
      expect(StringUtils.StringUtils.toSnakeCase("foo bar baz")).toBe(
        "foo_bar_baz"
      );
      expect(StringUtils.StringUtils.toSnakeCase("a simple test")).toBe(
        "a_simple_test"
      );
    });
  });

  describe("toKebabCase", () => {
    test("should convert the string to kebab-case", () => {
      expect(StringUtils.StringUtils.toKebabCase("hello world")).toBe(
        "hello-world"
      );
      expect(StringUtils.StringUtils.toKebabCase("foo bar baz")).toBe(
        "foo-bar-baz"
      );
      expect(StringUtils.StringUtils.toKebabCase("a simple test")).toBe(
        "a-simple-test"
      );
    });
  });

  // Character Manipulations
  describe("reverseString", () => {
    test("should reverse the characters in the string", () => {
      expect(StringUtils.StringUtils.reverseString("hello")).toBe("olleh");
      expect(StringUtils.StringUtils.reverseString("12345")).toBe("54321");
    });
  });

  describe("reverseWords", () => {
    test("should reverse the order of words in the string", () => {
      expect(StringUtils.StringUtils.reverseWords("Hello, world!")).toBe(
        "world! Hello,"
      );
      expect(
        StringUtils.StringUtils.reverseWords("Lorem ipsum dolor sit amet")
      ).toBe("amet sit dolor ipsum Lorem");
    });
  });

  describe("countCharacterOccurrences", () => {
    test("should return an object with character occurrences", () => {
      expect(
        StringUtils.StringUtils.countCharacterOccurrences("hello")
      ).toEqual({
        h: 1,
        e: 1,
        l: 2,
        o: 1,
      });
      expect(
        StringUtils.StringUtils.countCharacterOccurrences("testing")
      ).toEqual({
        t: 2,
        e: 1,
        s: 1,
        i: 1,
        n: 1,
        g: 1,
      });
    });
  });

  describe("removeDuplicateCharacters", () => {
    test("should remove duplicate characters from the string", () => {
      expect(StringUtils.StringUtils.removeDuplicateCharacters("hello")).toBe(
        "helo"
      );
      expect(
        StringUtils.StringUtils.removeDuplicateCharacters("hello world")
      ).toBe("helo wrd");
    });
  });

  describe("toLeetSpeak", () => {
    test("should convert the string to LeetSpeak", () => {
      expect(StringUtils.StringUtils.toLeetSpeak("hello world")).toBe(
        "h3110 w0rld"
      );
      expect(StringUtils.StringUtils.toLeetSpeak("testing leetspeak")).toBe(
        "73$71n6 l337$p34k"
      );
    });
  });

  describe("collapseSpaces", () => {
    test("should collapse consecutive spaces into a single space", () => {
      expect(
        StringUtils.StringUtils.collapseSpaces("  Hello,   world!  ")
      ).toBe(" Hello, world! ");
      expect(
        StringUtils.StringUtils.collapseSpaces(
          "  Testing     collapse    spaces  "
        )
      ).toBe(" Testing collapse spaces ");
    });
  });

  describe("repeatString", () => {
    test("should repeat the string the specified number of times", () => {
      expect(StringUtils.StringUtils.repeatString("hello", 3)).toBe(
        "hellohellohello"
      );
      expect(StringUtils.StringUtils.repeatString("test", 0)).toBe("");
      expect(StringUtils.StringUtils.repeatString("repeat", 5)).toBe(
        "repeatrepeatrepeatrepeatrepeat"
      );
    });
  });

  // Regular Expressions
  describe("isValidURL", () => {
    test("should return true for valid URLs, false otherwise", () => {
      expect(
        StringUtils.StringUtils.isValidURL("https://www.example.com")
      ).toBe(true);
      expect(
        StringUtils.StringUtils.isValidURL("ftp://example.com/file.txt")
      ).toBe(true);
      expect(StringUtils.StringUtils.isValidURL("invalid-url")).toBe(false);
    });
  });

  describe("extractNumbers", () => {
    test("should extract all numbers from the string", () => {
      expect(
        StringUtils.StringUtils.extractNumbers("Hello123World456")
      ).toEqual([123, 456]);
      expect(StringUtils.StringUtils.extractNumbers("Testing 1, 2, 3")).toEqual(
        [1, 2, 3]
      );
    });
  });

  describe("removeNonAlphanumeric", () => {
    test("should remove all non-alphanumeric characters from the string", () => {
      expect(
        StringUtils.StringUtils.removeNonAlphanumeric("Hello, world!")
      ).toBe("Helloworld");
      expect(StringUtils.StringUtils.removeNonAlphanumeric("123abc!?")).toBe(
        "123abc"
      );
    });
  });

  // Padding and Truncating
  describe("padString", () => {
    test("should pad the string with padChar to the specified length", () => {
      expect(StringUtils.StringUtils.padString("hello", 10, "-")).toBe(
        "--hello---"
      );
      expect(StringUtils.StringUtils.padString("test", 8, "+")).toBe(
        "+++test+"
      );
    });
  });

  describe("truncateString", () => {
    test("should truncate the string if it exceeds the maxLength", () => {
      expect(StringUtils.StringUtils.truncateString("hello, world!", 5)).toBe(
        "hello..."
      );
      expect(
        StringUtils.StringUtils.truncateString("testing truncation", 15)
      ).toBe("testing trunca...");
      expect(StringUtils.StringUtils.truncateString("short", 10)).toBe("short");
    });
  });

  describe("getFirstAndLastNCharacters", () => {
    test("should return the first and last N characters of the string", () => {
      expect(
        StringUtils.StringUtils.getFirstAndLastNCharacters("hello, world!", 5)
      ).toBe("hello!");
      expect(
        StringUtils.StringUtils.getFirstAndLastNCharacters(
          "testing function",
          10
        )
      ).toBe("testingion");
    });
  });

  // Miscellaneous
  describe("shuffleString", () => {
    test("should shuffle the characters in the string", () => {
      const original = "hello";
      const shuffled = StringUtils.StringUtils.shuffleString(original);
      expect(shuffled.length).toBe(original.length);
      expect(shuffled.split("").sort().join("")).toBe(
        original.split("").sort().join("")
      );
    });
  });

  describe("toMorseCode", () => {
    test("should convert the string to Morse code", () => {
      expect(StringUtils.StringUtils.toMorseCode("HELLO")).toBe(
        ".... . .-.. .-.. ---"
      );
      expect(StringUtils.StringUtils.toMorseCode("SOS")).toBe("... --- ...");
      expect(StringUtils.StringUtils.toMorseCode("Testing 1, 2, 3")).toBe(
        "- . ... - .. -. --.  .---- ..--- ...--"
      );
    });
  });

  describe("toEmoji", () => {
    test("should replace emoticon strings with corresponding emojis", () => {
      expect(StringUtils.StringUtils.toEmoji(":) :D")).toBe("😀 😃");
      expect(StringUtils.StringUtils.toEmoji(":P :(")).toBe("😛 😞");
    });
  });

  // URL Query Parameters
  describe("parseQueryString", () => {
    test("should parse a query string into an object", () => {
      expect(
        StringUtils.StringUtils.parseQueryString("name=John&age=30")
      ).toEqual({
        name: "John",
        age: "30",
      });
      expect(
        StringUtils.StringUtils.parseQueryString("color=blue&size=large&qty=2")
      ).toEqual({ color: "blue", size: "large", qty: "2" });
    });
  });

  describe("buildQueryString", () => {
    test("should build a query string from an object", () => {
      expect(
        StringUtils.StringUtils.buildQueryString({ name: "John", age: "30" })
      ).toBe("name=John&age=30");
      expect(
        StringUtils.StringUtils.buildQueryString({
          color: "blue",
          size: "large",
          qty: "2",
        })
      ).toBe("color=blue&size=large&qty=2");
    });
  });

  // String Split and Join
  describe("splitStringByLength", () => {
    test("should split the string into chunks of the specified length", () => {
      expect(
        StringUtils.StringUtils.splitStringByLength("Hello, world!", 3)
      ).toEqual(["Hel", "lo,", " wo", "rld", "!"]);
      expect(
        StringUtils.StringUtils.splitStringByLength("Testing the function", 5)
      ).toEqual(["Testi", "ng th", "e fun", "ctio", "n"]);
    });
  });

  describe("joinStrings", () => {
    test("should join an array of strings with the specified separator", () => {
      expect(StringUtils.StringUtils.joinStrings(["Hello", "world"], " ")).toBe(
        "Hello world"
      );
      expect(StringUtils.StringUtils.joinStrings(["a", "b", "c"], "-")).toBe(
        "a-b-c"
      );
    });
  });

  // Trim and Strip Functions
  describe("trimString", () => {
    test("should remove leading and trailing whitespaces from the string", () => {
      expect(StringUtils.StringUtils.trimString("  Hello, world!  ")).toBe(
        "Hello, world!"
      );
      expect(
        StringUtils.StringUtils.trimString("\t\tTesting the trim\t\t")
      ).toBe("Testing the trim");
    });
  });

  describe("stripHTMLTags", () => {
    test("should remove all HTML tags from the string", () => {
      expect(
        StringUtils.StringUtils.stripHTMLTags("<div>Hello, world!</div>")
      ).toBe("Hello, world!");
      expect(
        StringUtils.StringUtils.stripHTMLTags(
          "<p>Testing</p> <b>strip</b> <i>HTML</i>"
        )
      ).toBe("Testing strip HTML");
    });
  });

  describe("stripLeadingZeros", () => {
    test("should remove leading zeros from the string", () => {
      expect(StringUtils.StringUtils.stripLeadingZeros("000123")).toBe("123");
      expect(StringUtils.StringUtils.stripLeadingZeros("001234")).toBe("1234");
      expect(StringUtils.StringUtils.stripLeadingZeros("0")).toBe("0");
    });
  });

  // Validation Functions
  describe("isValidEmail", () => {
    test("should return true for valid email addresses, false otherwise", () => {
      expect(StringUtils.StringUtils.isValidEmail("user@example.com")).toBe(
        true
      );
      expect(StringUtils.StringUtils.isValidEmail("invalid-email")).toBe(false);
      expect(StringUtils.StringUtils.isValidEmail("hello@world")).toBe(false);
    });
  });

  describe("isValidPhoneNumber", () => {
    test("should return true for valid phone numbers, false otherwise", () => {
      expect(
        StringUtils.StringUtils.isValidPhoneNumber("+1 (123) 456-7890")
      ).toBe(true);
      expect(StringUtils.StringUtils.isValidPhoneNumber("123-456-7890")).toBe(
        true
      );
      expect(StringUtils.StringUtils.isValidPhoneNumber("invalid-phone")).toBe(
        false
      );
    });
  });

  describe("isValidCreditCardNumber", () => {
    test("should return true for valid credit card numbers, false otherwise", () => {
      expect(
        StringUtils.StringUtils.isValidCreditCardNumber("4111111111111111")
      ).toBe(true);
      expect(
        StringUtils.StringUtils.isValidCreditCardNumber("1234567890123")
      ).toBe(true);
      expect(
        StringUtils.StringUtils.isValidCreditCardNumber("invalid-card")
      ).toBe(false);
    });
  });

  // Random Strings and Characters
  describe("generateRandomString", () => {
    test("should generate a random string of the specified length", () => {
      const randomString = StringUtils.StringUtils.generateRandomString(10);
      expect(randomString.length).toBe(10);
    });
  });

  describe("generateRandomNumber", () => {
    test("should generate a random number within the specified range", () => {
      const randomNumber = StringUtils.StringUtils.generateRandomNumber(1, 100);
      expect(randomNumber).toBeGreaterThanOrEqual(1);
      expect(randomNumber).toBeLessThanOrEqual(100);
    });
  });

  describe("getRandomCharacter", () => {
    test("should return a random character from the input string", () => {
      const randomChar = StringUtils.StringUtils.getRandomCharacter("abcdefg");
      expect("abcdefg").toContain(randomChar);
    });
  });

  // User Input Sanitization
  describe("sanitizeUserInput", () => {
    test("should replace <, >, and & with HTML entities", () => {
      expect(
        StringUtils.StringUtils.sanitizeUserInput(
          '<script>alert("Hacked!")</script>'
        )
      ).toBe('&lt;script&gt;alert("Hacked!")&lt;/script&gt;');
      expect(StringUtils.StringUtils.sanitizeUserInput("Test & Testing")).toBe(
        "Test &amp; Testing"
      );
    });
  });
});
