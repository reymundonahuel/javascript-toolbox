const { SecurityUtils } = require("../../lib/security");

describe("SecurityUtils", () => {
  // Escape HTML
  test("escapeHTML", () => {
    const input = "<div>Hello, world!</div>";
    const escaped = "&lt;div&gt;Hello, world!&lt;/div&gt;";
    expect(SecurityUtils.escapeHTML(input)).toBe(escaped);
  });

  // Sanitize HTML
  test("sanitizeHTML", () => {
    const input = "<p>Hello, <strong>world</strong>!</p>";
    const sanitized = "Hello, world!";
    expect(SecurityUtils.sanitizeHTML(input)).toBe(sanitized);
  });

  // Clean Input
  test("cleanInput", () => {
    const input = "Hello, world!@#%$^&*()-+=[]{}:;\"'<>   test";
    const cleaned = "Hello, world!@#%$^&*()-+=[]{}:;\"'<>   test";
    expect(SecurityUtils.cleanInput(input)).toBe(cleaned);
  });

  // Escape Attribute
  test("escapeAttribute", () => {
    const input = '<a href="https://www.example.com">Link</a>';
    const escaped =
      "&lt;a href=&quot;https://www.example.com&quot;&gt;Link&lt;/a&gt;";
    expect(SecurityUtils.escapeAttribute(input)).toBe(escaped);
  });

  // Sanitize URL
  test("sanitizeURL", () => {
    const safeURL = "https://www.example.com";
    const unsafeURL = 'javascript:alert("XSS Attack")';
    expect(SecurityUtils.sanitizeURL(safeURL)).toBe(safeURL);
    expect(SecurityUtils.sanitizeURL(unsafeURL)).toBe("");
  });

  // Sanitize SQL Input
  test("sanitizeSQLInput", () => {
    const input = "John's SQL";
    const sanitized = "John's SQL";
    expect(SecurityUtils.sanitizeSQLInput(input)).toBe(sanitized);
  });

  // Sanitize User Input
  test("sanitizeUserInput", () => {
    const userInput = '<script>alert("XSS Attack");</script>';
    const sanitized = '&lt;script&gt;alert("XSS Attack");&lt;/script&gt;';
    expect(SecurityUtils.sanitizeUserInput(userInput)).toBe(sanitized);
  });

  // Sanitize File Name
  test("sanitizeFileName", () => {
    const fileName = "example..txt";
    const sanitized = "example..txt";
    expect(SecurityUtils.sanitizeFileName(fileName)).toBe(sanitized);
  });

  // Sanitize User ID
  test("sanitizeUserID", () => {
    const userID = "user123";
    const sanitized = "user123";
    expect(SecurityUtils.sanitizeUserID(userID)).toBe(sanitized);
  });

  // Sanitize Command Input
  test("sanitizeCommandInput", () => {
    const input = "ls -l";
    const sanitized = "ls -l";
    expect(SecurityUtils.sanitizeCommandInput(input)).toBe(sanitized);
  });

  // Sanitize LDAP Input
  test("sanitizeLDAPInput", () => {
    const input = "(cn=John)";
    const sanitized = "(cn=John)";
    expect(SecurityUtils.sanitizeLDAPInput(input)).toBe(sanitized);
  });

  // Sanitize XML Input
  test("sanitizeXMLInput", () => {
    const input = "<user>Hello, world!</user>";
    const sanitized = "&lt;user&gt;Hello, world!&lt;/user&gt;";
    expect(SecurityUtils.sanitizeXMLInput(input)).toBe(sanitized);
  });
});
