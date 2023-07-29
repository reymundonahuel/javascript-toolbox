const BrowserUtils = {
  // Get the size of the browser window
  getWindowSize: () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  // Get the position of the mouse cursor
  getMouseCursorPosition: (event) => {
    return {
      x: event.clientX,
      y: event.clientY,
    };
  },

  // Detect the type of device (mobile, tablet, desktop)
  detectDeviceType: () => {
    const userAgent = navigator.userAgent;
    if (/Mobi|Android/i.test(userAgent)) {
      return "Mobile";
    } else if (/iPad|Tablet/i.test(userAgent)) {
      return "Tablet";
    } else {
      return "Desktop";
    }
  },

  // Create a cookie with a given name, value, and expiration date
  createCookie: (name, value, expirationDays) => {
    const date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  },

  // Read the value of a cookie with a given name
  readCookie: (name) => {
    const cookieName = name + "=";
    const cookieArray = document.cookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  },

  // Delete a cookie with a given name
  deleteCookie: (name) => {
    document.cookie =
      name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  },

  // Get the user's IP address using a public API
  getIPAddress: async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Error fetching IP address:", error);
      return null;
    }
  },

  // Detect if the browser has a touch screen
  hasTouchScreen: () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  },

  // Redirect the browser to a new URL
  redirectToURL: (url) => {
    window.location.href = url;
  },

  // Reload the current page
  reloadPage: () => {
    window.location.reload();
  },

  // Open a new browser window with a given URL and window features
  openWindow: (url, name, features) => {
    window.open(url, name, features);
  },

  // Close the current browser window
  closeWindow: () => {
    window.close();
  },

  // Scroll the browser window to a specific position
  scrollToPosition: (x, y) => {
    window.scrollTo(x, y);
  },

  // Check if the browser supports a specific feature (e.g., localStorage)
  isFeatureSupported: (feature) => {
    return feature in window;
  },

  // Enable or disable browser caching
  setBrowserCache: (isEnabled) => {
    if (isEnabled) {
      // Enable caching
      delete headers["cache-control"];
      delete headers["pragma"];
    } else {
      // Disable caching
      headers["cache-control"] = "no-cache, no-store, must-revalidate";
      headers["pragma"] = "no-cache";
    }
  },

  // Check if the browser is online (connected to the internet)
  isOnline: () => {
    return navigator.onLine;
  },

  // Add an event listener to the browser window
  addWindowEventListener: (event, listener) => {
    window.addEventListener(event, listener);
  },

  // Remove an event listener from the browser window
  removeWindowEventListener: (event, listener) => {
    window.removeEventListener(event, listener);
  },

  // Show an alert dialog with a message
  showAlert: (message) => {
    window.alert(message);
  },

  // Show a confirmation dialog with a message and get user's response
  showConfirmDialog: (message) => {
    return window.confirm(message);
  },

  // Show a prompt dialog with a message and get user's input
  showPromptDialog: (message, defaultValue) => {
    return window.prompt(message, defaultValue);
  },

  // Open the default email client with a pre-filled email message
  openDefaultEmailClient: (to, subject, body) => {
    const mailtoURL = `mailto:${encodeURIComponent(
      to
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoURL;
  },

  // Open the default phone dialer with a pre-filled phone number
  openDefaultPhoneDialer: (phoneNumber) => {
    const telURL = `tel:${encodeURIComponent(phoneNumber)}`;
    window.location.href = telURL;
  },

  // Open the default SMS app with a pre-filled phone number and message
  openDefaultSMSApp: (phoneNumber, message) => {
    const smsURL = `sms:${encodeURIComponent(
      phoneNumber
    )}?body=${encodeURIComponent(message)}`;
    window.location.href = smsURL;
  },

  // Open the default map app with a specific location (latitude and longitude)
  openDefaultMapApp: (latitude, longitude) => {
    const mapURL = `https://maps.google.com/maps?q=${latitude},${longitude}`;
    window.location.href = mapURL;
  },

  // Enable fullscreen mode for the browser window
  enableFullscreenMode: () => {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }
  },

  // Disable fullscreen mode for the browser window
  disableFullscreenMode: () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  },

  // Get the current URL of the browser window
  getCurrentURL: () => {
    return window.location.href;
  },

  // Get the domain name of the current URL
  getDomainName: () => {
    return window.location.hostname;
  },

  // Get the protocol (http or https) of the current URL
  getProtocol: () => {
    return window.location.protocol;
  },

  // Get the path of the current URL
  getPath: () => {
    return window.location.pathname;
  },

  // Get the query parameters of the current URL as an object
  getQueryParameters: () => {
    const searchParams = new URLSearchParams(window.location.search);
    const params = {};
    for (const [key, value] of searchParams) {
      params[key] = value;
    }
    return params;
  },

  // Reload the current page after a specified delay (in milliseconds)
  reloadPageAfterDelay: (delay) => {
    setTimeout(() => {
      window.location.reload();
    }, delay);
  },

  // Redirect the browser to a new URL after a specified delay (in milliseconds)
  redirectToURLAfterDelay: (url, delay) => {
    setTimeout(() => {
      window.location.href = url;
    }, delay);
  },

  // Open a new browser window with a given URL after a specified delay (in milliseconds)
  openWindowAfterDelay: (url, name, features, delay) => {
    setTimeout(() => {
      window.open(url, name, features);
    }, delay);
  },

  // Check if a specific key is currently pressed
  isKeyPressed: (key) => {
    const pressedKeys = BrowserUtils.getPressedKeys();
    return pressedKeys.includes(key);
  },

  // Get the list of currently pressed keys
  getPressedKeys: () => {
    const keys = [];
    for (const key in keysMap) {
      if (keysMap[key]) {
        keys.push(key);
      }
    }
    return keys;
  },

  // Enable or disable the back/forward cache
  setBackForwardCache: (isEnabled) => {
    if (isEnabled) {
      // Enable back/forward cache
      if ("sessionStorage" in window) {
        sessionStorage.setItem("bfcache", "1");
      }
    } else {
      // Disable back/forward cache
      if ("sessionStorage" in window) {
        sessionStorage.removeItem("bfcache");
      }
    }
  },

  // Clear the back/forward cache
  clearBackForwardCache: () => {
    if ("sessionStorage" in window) {
      sessionStorage.removeItem("bfcache");
    }
  },

  // Check if the back/forward cache is enabled
  isBackForwardCacheEnabled: () => {
    return (
      "sessionStorage" in window && sessionStorage.getItem("bfcache") === "1"
    );
  },

  // Show a notification message to the user
  showNotification: (title, options) => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        }
      });
    }
  },

  // Get the user's preferred language
  getPreferredLanguage: () => {
    return (navigator.language || navigator.userLanguage).split("-")[0];
  },

  // Check if the browser is in dark mode
  isDarkMode: () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return true;
    } else {
      return false;
    }
  },

  // Enable or disable dark mode for the browser
  setDarkMode: (isEnabled) => {
    if (isEnabled) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  },

  // Get the browser's timezone offset in minutes
  getTimezoneOffset: () => {
    return new Date().getTimezoneOffset();
  },

  // Get the current UNIX timestamp (milliseconds since January 1, 1970)
  getCurrentTimestamp: () => {
    return new Date().getTime();
  },

  // Get the current date in ISO 8601 format (YYYY-MM-DD)
  getCurrentDate: () => {
    return new Date().toISOString().split("T")[0];
  },

  // Get the current time in ISO 8601 format (HH:MM:SS)
  getCurrentTime: () => {
    return new Date().toISOString().split("T")[1].split(".")[0];
  },

  // Get the current date and time in ISO 8601 format (YYYY-MM-DDTHH:MM:SS)
  getCurrentDateTime: () => {
    return new Date().toISOString().split(".")[0];
  },

  // Convert a date string to a Date object
  parseDate: (dateString) => {
    return new Date(dateString);
  },

  // Format a date object to a specific string format (e.g., "YYYY-MM-DD", "MM/DD/YYYY")
  formatDate: (date, format) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return format
      .replace("YYYY", year)
      .replace("MM", month)
      .replace("DD", day)
      .replace("HH", hours)
      .replace("MM", minutes)
      .replace("SS", seconds);
  },

  // Get the difference in days between two dates
  getDaysDifference: (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffInDays;
  },

  // Get the difference in hours between two dates
  getHoursDifference: (date1, date2) => {
    const oneHour = 60 * 60 * 1000;
    const diffInHours = Math.round(Math.abs((date1 - date2) / oneHour));
    return diffInHours;
  },

  // Get the difference in minutes between two dates
  getMinutesDifference: (date1, date2) => {
    const oneMinute = 60 * 1000;
    const diffInMinutes = Math.round(Math.abs((date1 - date2) / oneMinute));
    return diffInMinutes;
  },

  // Get the difference in seconds between two dates
  getSecondsDifference: (date1, date2) => {
    const oneSecond = 1000;
    const diffInSeconds = Math.round(Math.abs((date1 - date2) / oneSecond));
    return diffInSeconds;
  },

  // Get the number of days in a month (0-based index)
  getDaysInMonth: (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  },

  // Get the name of the month (0-based index)
  getMonthName: (month) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month];
  },

  // Check if a year is a leap year
  isLeapYear: (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  },

  // Check if a date is today
  isToday: (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  },

  // Check if a date is tomorrow
  isTomorrow: (date) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return (
      date.getDate() === tomorrow.getDate() &&
      date.getMonth() === tomorrow.getMonth() &&
      date.getFullYear() === tomorrow.getFullYear()
    );
  },

  // Check if a date is in the past
  isPastDate: (date) => {
    return date < new Date();
  },

  // Check if a date is in the future
  isFutureDate: (date) => {
    return date > new Date();
  },

  // Get the current local time in a specific timezone
  getCurrentTimeInTimezone: (timezone) => {
    const date = new Date();
    const options = { timeZone: timezone, hour12: false };
    return date.toLocaleTimeString([], options);
  },

  // Get the current date and time in a specific timezone
  getCurrentDateTimeInTimezone: (timezone) => {
    const date = new Date();
    const options = {
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    return date.toLocaleString([], options);
  },

  // Convert a date and time from one timezone to another
  convertTimezone: (datetime, fromTimezone, toTimezone) => {
    const date = new Date(datetime);
    const options = { timeZone: toTimezone };
    return date.toLocaleString([], options);
  },

  // Get the user's current location using the browser's geolocation API
  getCurrentLocation: async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    } catch (error) {
      console.error("Error getting current location:", error);
      return null;
    }
  },

  // Calculate the distance (in kilometers) between two points on Earth using the Haversine formula
  calculateDistance: (lat1, lon1, lat2, lon2) => {
    const earthRadius = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance;
  },

  // Convert the distance from kilometers to miles
  toMiles: (distanceInKilometers) => {
    const milesInOneKilometer = 0.621371;
    return distanceInKilometers * milesInOneKilometer;
  },

  // Convert the distance from kilometers to nautical miles
  toNauticalMiles: (distanceInKilometers) => {
    const nauticalMilesInOneKilometer = 0.539957;
    return distanceInKilometers * nauticalMilesInOneKilometer;
  },

  // Get the browser's user agent string
  getUserAgent: () => {
    return navigator.userAgent;
  },

  // Check if the browser is running on a specific platform (e.g., Windows, macOS, Linux, Android, iOS)
  isPlatform: (platform) => {
    const userAgent = BrowserUtils.getUserAgent();
    return userAgent.includes(platform);
  },

  // Check if the browser supports a specific CSS property
  isCSSPropertySupported: (property) => {
    return property in document.documentElement.style;
  },

  // Check if the browser supports a specific HTML element
  isHTMLElementSupported: (element) => {
    return element in document.createElement;
  },

  // Get the list of supported HTML elements in the browser
  getSupportedHTMLElements: () => {
    const supportedElements = [];
    const testElement = document.createElement("div");
    const allHTMLTags = [
      "div",
      "span",
      "a",
      "p",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "img",
      "input",
      "button",
      "form",
      "table",
      "tr",
      "td",
      "th",
      "canvas",
      "video",
      "audio",
      "iframe",
      "nav",
      "header",
      "footer",
      "section",
      "article",
      "aside",
      "main",
      "figure",
      "figcaption",
      "details",
      "summary",
      "mark",
      "time",
      "meter",
      "progress",
      "output",
      "ruby",
      "rt",
      "rp",
      "wbr",
      "datalist",
      "fieldset",
      "legend",
      "menu",
      "menuitem",
      "optgroup",
      "option",
      "details",
      "summary",
      "keygen",
      "dialog",
      "script",
      "style",
      "noscript",
      "template",
    ];
    for (const tag of allHTMLTags) {
      testElement.innerHTML = `<${tag}></${tag}>`;
      if (
        testElement.firstChild &&
        testElement.firstChild.nodeName === tag.toUpperCase()
      ) {
        supportedElements.push(tag);
      }
    }
    return supportedElements;
  },

  // Check if the browser supports a specific JavaScript feature (e.g., Promises, Async/Await, Arrow Functions)
  isJSFeatureSupported: (feature) => {
    try {
      eval(feature);
      return true;
    } catch (error) {
      return false;
    }
  },

  // Get the list of supported JavaScript features in the browser
  getSupportedJSFeatures: () => {
    return {
      Promises: typeof Promise !== "undefined",
      AsyncAwait: typeof eval("(async () => {})") === "function",
      ArrowFunctions: typeof eval("(() => {})") === "function",
      Classes: typeof eval("class {}") === "function",
      Modules: typeof eval('import("")') === "object",
      SpreadOperator: typeof eval("({...{}})") === "object",
      Destructuring: typeof eval("let {x} = {}") === "object",
      TemplateLiterals: typeof eval("``") === "string",
      DefaultParameters: typeof eval("function f(x = 0) {}") === "function",
      RestParameters: typeof eval("function f(...args) {}") === "function",
      ObjectMethods: typeof eval("({m() {}})") === "object",
      ArrayMethods: typeof eval("[].map(x => x)") === "object",
      Map: typeof Map !== "undefined",
      Set: typeof Set !== "undefined",
      Symbol: typeof Symbol !== "undefined",
      Proxy: typeof Proxy !== "undefined",
      Reflect: typeof Reflect !== "undefined",
      BigInt: typeof BigInt !== "undefined",
      WeakMap: typeof WeakMap !== "undefined",
      WeakSet: typeof WeakSet !== "undefined",
      ArrayBuffer: typeof ArrayBuffer !== "undefined",
      DataView: typeof DataView !== "undefined",
      SharedArrayBuffer: typeof SharedArrayBuffer !== "undefined",
      Atomics: typeof Atomics !== "undefined",
      WebWorkers: typeof Worker !== "undefined",
      WebAssembly: typeof WebAssembly !== "undefined",
    };
  },

  // Check if the browser supports a specific Web API (e.g., Fetch, WebSockets, WebRTC)
  isWebAPISupported: (api) => {
    return api in window;
  },
};
module.exports = { BrowserUtils };
