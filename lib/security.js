const SecurityUtils = {
  // Function to escape characters in strings
  escapeHTML: (input) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "/": "&#x2F;",
    };
    return input.replace(/[&<>"'/]/g, (char) => entities[char]);
  },

  // Function to sanitize strings and remove dangerous HTML tags
  sanitizeHTML: (input) => {
    const sanitizedInput = input.replace(/<(?:.|\n)*?>/gm, ""); // Remove HTML tags
    return SecurityUtils.escapeHTML(sanitizedInput);
  },

  // Function to clean strings and allow only alphanumeric characters and some safe symbols
  cleanInput: (input) => {
    return input.replace(/[^\w.,!?@#%^&*()\-+=\[\]{}:;"'<>\s]/g, ""); // Allow only safe characters
  },

  // Function to escape HTML attributes in strings
  escapeAttribute: (input) => {
    return input.replace(
      /[&<>"'\/]/g,
      (char) => `&#x${char.charCodeAt(0).toString(16)};`
    );
  },

  // Function to sanitize URLs and ensure they are safe
  sanitizeURL: (url) => {
    try {
      const urlObject = new URL(url);
      // You can add more validations here if necessary.
      return urlObject.toString();
    } catch (error) {
      return "";
    }
  },

  // Function to validate and sanitize input to prevent SQL injection
  sanitizeSQLInput: (input) => {
    // Implement your SQL input validation and sanitization logic here
    // to prevent SQL injection attacks.
    // Example: return input.replace(/'/g, "''");
    return input;
  },

  // Function to sanitize user input to prevent XSS attacks
  sanitizeUserInput: (input) => {
    // Implement your custom user input sanitization logic here
    // to prevent XSS attacks.
    return SecurityUtils.sanitizeHTML(input);
  },

  // Function to validate and sanitize file names to prevent path traversal attacks
  sanitizeFileName: (fileName) => {
    // Implement your custom file name validation and sanitization logic here
    // to prevent path traversal attacks.
    // Example: return fileName.replace(/\.\./g, '');
    return fileName;
  },

  // Function to validate and sanitize user IDs to prevent NoSQL injection attacks
  sanitizeUserID: (userID) => {
    // Implement your custom user ID validation and sanitization logic here
    // to prevent NoSQL injection attacks.
    return userID;
  },

  // Function to validate and sanitize user input to prevent command injection attacks
  sanitizeCommandInput: (input) => {
    // Implement your custom command input validation and sanitization logic here
    // to prevent command injection attacks.
    return input;
  },

  // Function to validate and sanitize input to prevent LDAP injection attacks
  sanitizeLDAPInput: (input) => {
    // Implement your custom LDAP input validation and sanitization logic here
    // to prevent LDAP injection attacks.
    return input;
  },

  // Function to validate and sanitize user input to prevent XML injection attacks
  sanitizeXMLInput: (input) => {
    // Implement your custom XML input validation and sanitization logic here
    // to prevent XML injection attacks.
    return SecurityUtils.escapeHTML(input);
  },
};
module.exports = { SecurityUtils };
