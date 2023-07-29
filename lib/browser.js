export const BrowserUtils = {
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
      to,
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
      phoneNumber,
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

  // Get the list of supported Web APIs in the browser
  getSupportedWebAPIs: () => {
    return {
      Fetch: "fetch" in window,
      XMLHttpRequest: "XMLHttpRequest" in window,
      WebSockets: "WebSocket" in window,
      WebRTC: "RTCPeerConnection" in window || "RTCDataChannel" in window,
      Geolocation: "geolocation" in navigator,
      FileAPI:
        "File" in window &&
        "FileReader" in window &&
        "FileList" in window &&
        "Blob" in window,
      HistoryAPI:
        "history" in window &&
        "pushState" in history &&
        "replaceState" in history,
      WebStorage: "localStorage" in window && "sessionStorage" in window,
      ServiceWorkers: "serviceWorker" in navigator,
      PaymentRequestAPI: "PaymentRequest" in window,
      VibrationAPI: "vibrate" in navigator,
      FullscreenAPI: "fullscreenEnabled" in document,
      ClipboardAPI: "clipboard" in navigator,
      BatteryAPI: "getBattery" in navigator,
      MediaDevicesAPI: "mediaDevices" in navigator,
      PermissionsAPI: "permissions" in navigator,
      NetworkInformationAPI:
        "connection" in navigator ||
        "mozConnection" in navigator ||
        "webkitConnection" in navigator ||
        "msConnection" in navigator,
      BeaconAPI: "sendBeacon" in navigator,
      WebShareAPI: "share" in navigator,
      IdleDetectionAPI: "requestIdleCallback" in window,
      WakeLockAPI: "wakeLock" in navigator,
      NativeFileSystemAPI:
        "showOpenFilePicker" in window &&
        "showSaveFilePicker" in window &&
        "showDirectoryPicker" in window,
      ContactPickerAPI: "contacts" in navigator,
      CredentialsAPI: "credentials" in navigator,
      GamepadAPI: "getGamepads" in navigator,
      PresentationAPI: "presentation" in navigator,
      SpeechRecognitionAPI:
        "SpeechRecognition" in window || "webkitSpeechRecognition" in window,
      SpeechSynthesisAPI: "speechSynthesis" in window,
      PerformanceAPI: "performance" in window,
      DeviceOrientationAPI: "DeviceOrientationEvent" in window,
      DeviceMotionAPI: "DeviceMotionEvent" in window,
      WebAnimationsAPI:
        "Animation" in window &&
        "KeyframeEffect" in window &&
        "AnimationTimeline" in window,
      IntersectionObserverAPI: "IntersectionObserver" in window,
      ResizeObserverAPI: "ResizeObserver" in window,
      ResizeObserverSizeAPI: "ResizeObserverSize" in window,
      BatteryStatusAPI:
        "onchargingchange" in navigator ||
        "onchargingtimechange" in navigator ||
        "ondischargingtimechange" in navigator ||
        "onlevelchange" in navigator,
      AmbientLightSensorAPI: "AmbientLightSensor" in window,
      AccelerometerAPI: "Accelerometer" in window,
      GyroscopeAPI: "Gyroscope" in window,
      MagnetometerAPI: "Magnetometer" in window,
      EMEAPI: "requestMediaKeySystemAccess" in navigator,
      WebVRAPI: "getVRDisplays" in navigator,
      WebXRAPI: "xr" in navigator,
      AsyncClipboardAPI:
        "writeText" in navigator.clipboard ||
        "readText" in navigator.clipboard ||
        "write" in navigator.clipboard ||
        "read" in navigator.clipboard,
      WebHIDAPI: "hid" in navigator,
      SerialAPI: "serial" in navigator,
      PaymentHandlerAPI: "PaymentHandler" in window,
      ContactlessPaymentAPI: "contactless" in navigator,
      NFCAPI: "nfc" in navigator,
      WebUSBAPI: "usb" in navigator,
      MediaCapabilitiesAPI: "mediaCapabilities" in navigator,
      MediaSessionAPI: "mediaSession" in navigator,
      BackgroundSyncAPI: "sync" in navigator,
      BroadcastChannelAPI: "BroadcastChannel" in window,
      ChannelMessagingAPI: "MessageChannel" in window,
      BackgroundFetchAPI: "backgroundFetch" in navigator,
      PeriodicBackgroundSyncAPI: "periodicSync" in navigator,
      StorageEstimationAPI: "storage" in navigator,
      PictureInPictureAPI:
        "pictureInPictureElement" in document ||
        "pictureInPictureEnabled" in document,
      PresentationReceiverAPI: "PresentationReceiver" in window,
      PresentationConnectionAPI: "PresentationConnection" in window,
      MediaStreamAPI: "MediaStream" in window,
      MediaSourceAPI: "MediaSource" in window,
      MediaRecorderAPI: "MediaRecorder" in window,
      NetworkInformationDownlinkAPI:
        "downlink" in navigator || "downlinkMax" in navigator,
      NetworkInformationEffectiveTypeAPI: "effectiveType" in navigator,
      NetworkInformationRTTAPI: "rtt" in navigator,
      NetworkInformationSaveDataAPI: "saveData" in navigator,
      NetworkInformationTypeAPI: "type" in navigator,
      PeriodicBackgroundSyncNetworkTypeAPI:
        "periodicSync" in navigator &&
        "register" in PeriodicSyncManager &&
        "unregister" in PeriodicSyncManager,
      IdleDetectionAPIIdleStateAPI:
        "requestIdleCallback" in window && "cancelIdleCallback" in window,
      PaymentInstrumentsAPI: "paymentInstruments" in navigator,
      WakeLockScreenAPI: "wakeLock" in navigator,
      WakeLockDisplayAPI: "wakeLock" in navigator,
      ScreenOrientationAPI: "orientation" in screen,
      BeforeInstallPromptAPI: "beforeinstallprompt" in window,
      WebOTPAPI: "OTPCredential" in window,
      TrustTokenAPI: "trustToken" in window,
      StorageAccessAPI: "storageAccess" in navigator,
      InstalledAppAPI: "getInstalledRelatedApps" in navigator,
      DeclarativeNetRequestAPI: "chrome" in window && "webRequest" in chrome,
      WebRequestBlockingAPI: "chrome" in window && "webRequest" in chrome,
      ShareTargetAPI: "share" in navigator,
      ContentIndexingAPI: "contentIndex" in navigator,
      ContentIndexingOptOutAPI: "contentIndex" in navigator,
      PeriodicBackgroundSyncOptOutAPI: "periodicSync" in navigator,
      WakeLockAPIOptOutAPI: "wakeLock" in navigator,
      StorageManagerAPI: "storage" in navigator,
      InteractionMediaFeatureAPI: "interactionMediaFeature" in navigator,
      UserVerifiableMediaAPI: "userVerifiableMedia" in navigator,
      MediaCapabilitiesDecodingInfoAPI: "mediaCapabilities" in navigator,
      MediaCapabilitiesEncodingInfoAPI: "mediaCapabilities" in navigator,
      WebXRDOMOverlayAPI: "xr" in navigator,
      MediaMetadataAPI: "mediaMetadata" in navigator,
      CSSOMScrollSnapPointsAPI:
        "scrollSnapPointsX" in document.documentElement.style ||
        "scrollSnapPointsY" in document.documentElement.style,
      ServiceWorkerRegistrationNavigationPreloadAPI:
        "navigationPreload" in navigator.serviceWorker.getRegistration(),
      PictureInPictureAPIEvents:
        "onenterpictureinpicture" in document ||
        "onleavepictureinpicture" in document,
      ShareAPIShareEventAPI: "ShareEvent" in window,
      PaymentResponseAPIShippingTypeAPI:
        "shippingAddress" in PaymentResponse ||
        "shippingOption" in PaymentResponse,
      PaymentResponseAPIShippingAddressAPI:
        "shippingAddress" in PaymentResponse,
      PaymentResponseAPIShippingOptionAPI: "shippingOption" in PaymentResponse,
      PaymentResponseAPIPayerNameAPI: "payerName" in PaymentResponse,
      PaymentResponseAPIPayerEmailAPI: "payerEmail" in PaymentResponse,
      PaymentResponseAPIPayerPhoneAPI: "payerPhone" in PaymentResponse,
      PaymentResponseAPICheckoutIDAPI: "checkoutId" in PaymentResponse,
      PaymentResponseAPIInstrumentIDAPI: "instrumentId" in PaymentResponse,
      PaymentRequestAPICanMakePaymentAPI: "canMakePayment" in PaymentRequest,
      PaymentRequestAPICanMakePaymentWithDetailsAPI:
        "canMakePayment" in PaymentRequest,
      PaymentRequestAPIContactlessCardEventsAPI: "contactless" in navigator,
      PaymentRequestAPIAcceptEventAPI: "PaymentRequestUpdateEvent" in window,
      PaymentRequestAPIShowEventAPI: "PaymentRequestUpdateEvent" in window,
      BackgroundSyncAPISyncEventAPI: "SyncEvent" in window,
      BackgroundFetchAPIBackgroundFetchEventAPI:
        "backgroundfetchsuccess" in window ||
        "backgroundfetchfail" in window ||
        "backgroundfetchabort" in window,
      PeriodicBackgroundSyncAPIPeriodicSyncEventAPI:
        "periodicsync" in navigator &&
        "periodicsync" in ServiceWorkerRegistration.prototype,
      PeriodicBackgroundSyncAPIPeriodicSyncEventLastChanceAPI:
        "periodicsync" in navigator &&
        "periodicsynclastchance" in ServiceWorkerRegistration.prototype,
      IdleDetectionAPIIdleEventAPI: "requestIdleCallback" in window,
      IdleDetectionAPIIdleDeadlineAPI: "requestIdleCallback" in window,
      PaymentHandlerAPIPaymentMethodChangeEventAPI:
        "paymentmethodchange" in PaymentHandler.prototype,
      PaymentHandlerAPIPaymentRequestEventAPI:
        "paymentrequest" in PaymentHandler.prototype,
      ContactlessPaymentAPIPaymentRequestEventAPI:
        "paymentrequest" in navigator && "contactless" in navigator,
      ContactlessPaymentAPIContactlessReadEventAPI:
        "contactlessread" in navigator,
      NFCAPINFCAReaderEventAPI: "NDEFReader" in window,
      NFCAPINFCAReadingEventAPI: "NFCTag" in window,
      NFCAPINFCAReadingErrorEventAPI: "NFCError" in window,
      WebUSBAPIConnectEventAPI: "connect" in navigator.usb,
      WebUSBAPIConnectEventDeviceAPI:
        "connect" in navigator.usb && "device" in navigator.usb,
      WebUSBAPIDisconnectEventAPI: "disconnect" in navigator.usb,
      WebUSBAPIDisconnectEventDeviceAPI:
        "disconnect" in navigator.usb && "device" in navigator.usb,
      MediaCapabilitiesDecodingInfoAPICapabilityInfoAPI:
        "mediaCapabilities" in navigator &&
        "decodingInfo" in MediaCapabilitiesInfo,
      MediaCapabilitiesDecodingInfoAPIPlatformCapabilityAPI:
        "mediaCapabilities" in navigator &&
        "platformCapabilities" in MediaCapabilitiesInfo,
      MediaCapabilitiesDecodingInfoAPIKeySystemAPI:
        "mediaCapabilities" in navigator &&
        "keySystem" in MediaCapabilitiesInfo,
      MediaCapabilitiesEncodingInfoAPICapabilityInfoAPI:
        "mediaCapabilities" in navigator &&
        "encodingInfo" in MediaCapabilitiesInfo,
      MediaCapabilitiesEncodingInfoAPIPlatformCapabilityAPI:
        "mediaCapabilities" in navigator &&
        "platformCapabilities" in MediaCapabilitiesInfo,
      MediaCapabilitiesEncodingInfoAPIKeySystemAPI:
        "mediaCapabilities" in navigator &&
        "keySystem" in MediaCapabilitiesInfo,
      BroadcastChannelAPIBroadcastMessageAPI:
        "onmessage" in BroadcastChannel.prototype,
      ChannelMessagingAPIMessageEventAPI: "MessageChannel" in window,
      BackgroundFetchAPIBackgroundFetchSuccessEventAPI:
        "backgroundfetchsuccess" in window,
      BackgroundFetchAPIBackgroundFetchFailEventAPI:
        "backgroundfetchfail" in window,
      BackgroundFetchAPIBackgroundFetchAbortEventAPI:
        "backgroundfetchabort" in window,
      BackgroundFetchAPIBackgroundFetchClickEventAPI:
        "backgroundfetchclick" in window,
      PeriodicBackgroundSyncAPIPeriodicSyncEventAPI:
        "periodicsync" in navigator,
      PeriodicBackgroundSyncAPIPeriodicSyncEventLastChanceAPI:
        "periodicsynclastchance" in navigator,
      WakeLockAPIWakeLockSentinelAPI:
        "wakeLock" in navigator && "wakeLock" in WakeLock,
      WakeLockAPIWakeLockTypeAPI: "wakeLock" in navigator && "type" in WakeLock,
      WakeLockAPIWakeLockAcquireEventAPI:
        "wakeLock" in navigator && "acquire" in WakeLock,
      WakeLockAPIWakeLockReleaseEventAPI:
        "wakeLock" in navigator && "release" in WakeLock,
      WebAnimationsAPITimingPropertiesAPI: "timing" in Animation.prototype,
      WebAnimationsAPITimingPropertiesFillAPI:
        "timing" in Animation.prototype && "fill" in AnimationTiming,
      WebAnimationsAPITimingPropertiesEasingAPI:
        "timing" in Animation.prototype && "easing" in AnimationTiming,
      WebAnimationsAPITimingPropertiesDirectionAPI:
        "timing" in Animation.prototype && "direction" in AnimationTiming,
      WebAnimationsAPITimingPropertiesIterationsAPI:
        "timing" in Animation.prototype && "iterations" in AnimationTiming,
      WebAnimationsAPITimingPropertiesIterationStartAPI:
        "timing" in Animation.prototype && "iterationStart" in AnimationTiming,
      WebAnimationsAPITimingPropertiesDurationAPI:
        "timing" in Animation.prototype && "duration" in AnimationTiming,
      WebAnimationsAPITimingPropertiesDelayAPI:
        "timing" in Animation.prototype && "delay" in AnimationTiming,
      WebAnimationsAPITimingPropertiesEndDelayAPI:
        "timing" in Animation.prototype && "endDelay" in AnimationTiming,
      WebAnimationsAPITimingPropertiesEndDelayAutofillAPI:
        "timing" in Animation.prototype && "endDelay" in AnimationTiming,
      WebAnimationsAPITimingPropertiesEndDelayNoneAPI:
        "timing" in Animation.prototype && "endDelay" in AnimationTiming,
      WebAnimationsAPITimingPropertiesEndDelayInfiniteAPI:
        "timing" in Animation.prototype && "endDelay" in AnimationTiming,
      WebAnimationsAPITimingPropertiesEndDelayAutofillInfiniteAPI:
        "timing" in Animation.prototype && "endDelay" in AnimationTiming,
      WebAnimationsAPITimingPropertiesEndDelayNoneInfiniteAPI:
        "timing" in Animation.prototype && "endDelay" in AnimationTiming,
      WebAnimationsAPIPropertyKeyAPI: "key" in Animation.prototype,
      WebAnimationsAPIPropertyKeyDistributedAPI:
        "key" in Animation.prototype && "composite" in Keyframe,
      WebAnimationsAPIPropertyKeyValueAPI:
        "key" in Animation.prototype && "keyValue" in Keyframe,
      WebAnimationsAPIPropertyKeyEasingAPI:
        "key" in Animation.prototype && "easing" in Keyframe,
      WebAnimationsAPIPropertyKeyOffsetAPI:
        "key" in Animation.prototype && "offset" in Keyframe,
      WebAnimationsAPIPropertyKeyCompositeAPI:
        "key" in Animation.prototype && "composite" in Keyframe,
      WebAnimationsAPIPropertyKeyTimingAPI:
        "key" in Animation.prototype && "timing" in Keyframe,
      WebAnimationsAPIPropertyKeyFillAPI:
        "key" in Animation.prototype && "fill" in Keyframe,
      WebAnimationsAPIPropertyKeyIterationsAPI:
        "key" in Animation.prototype && "iterations" in Keyframe,
      WebAnimationsAPIPropertyKeyIterationStartAPI:
        "key" in Animation.prototype && "iterationStart" in Keyframe,
      WebAnimationsAPIPropertyKeyDurationAPI:
        "key" in Animation.prototype && "duration" in Keyframe,
      WebAnimationsAPIPropertyKeyDelayAPI:
        "key" in Animation.prototype && "delay" in Keyframe,
      WebAnimationsAPIPropertyKeyEndDelayAPI:
        "key" in Animation.prototype && "endDelay" in Keyframe,
      WebAnimationsAPICSSPropertyAPI: "property" in Keyframe,
      WebAnimationsAPICSSPropertyOptionalAPI: "property" in Keyframe,
      WebAnimationsAPICSSPropertyInitialAPI: "property" in Keyframe,
      WebAnimationsAPICSSPropertyValueAPI: "value" in Keyframe,
      WebAnimationsAPICSSPropertyValueOptionalAPI: "value" in Keyframe,
      WebAnimationsAPICSSPropertyValueInitialAPI: "value" in Keyframe,
      WebAnimationsAPICSSPropertyValueImportantAPI: "value" in Keyframe,
      WebAnimationsAPICSSPropertyValueUnsetAPI: "value" in Keyframe,
      WebAnimationsAPICSSPropertyValueInheritAPI: "value" in Keyframe,
      WebAnimationsAPICSSPropertyValueRevertAPI: "value" in Keyframe,
      WebAnimationsAPIKeyframeAnimationEventAPI: "AnimationEvent" in window,
      WebAnimationsAPIAnimationPlaybackEventAPI: "AnimationEvent" in window,
      IntersectionObserverAPIIntersectionObserverEntryAPI:
        "IntersectionObserverEntry" in window,
      ResizeObserverAPIResizeObserverEntryAPI: "ResizeObserverEntry" in window,
      ResizeObserverSizeAPIInlineSizeAPI: "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeOptionalAPI: "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeInitialAPI: "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeInheritAPI: "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeRevertAPI: "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeUnsetAPI: "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeAutoAPI: "inlineSize" in window,
      ResizeObserverSizeAPIBlockSizeAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeOptionalAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeInitialAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeInheritAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeRevertAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeUnsetAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeAutoAPI: "blockSize" in window,
      ResizeObserverSizeAPIOptionalAPI: "optional" in window,
      ResizeObserverSizeAPIOptionalInlineSizeAPI:
        "optional" in window && "inlineSize" in window,
      ResizeObserverSizeAPIOptionalBlockSizeAPI:
        "optional" in window && "blockSize" in window,
      WakeLockAPIOwnershipAPI: "wakeLock" in navigator,
      MediaMetadataAPITitleAPI: "title" in MediaMetadata.prototype,
      MediaMetadataAPIArtistAPI: "artist" in MediaMetadata.prototype,
      MediaMetadataAPIAlbumAPI: "album" in MediaMetadata.prototype,
      MediaMetadataAPIArtworkAPI: "artwork" in MediaMetadata.prototype,
      MediaMetadataAPIArtworkURLAPI:
        "artwork" in MediaMetadata.prototype && "url" in MediaImage,
      MediaMetadataAPIArtworkSizesAPI:
        "artwork" in MediaMetadata.prototype && "sizes" in MediaImage,
      MediaMetadataAPIArtworkTypeAPI:
        "artwork" in MediaMetadata.prototype && "type" in MediaImage,
      CSSOMScrollSnapPointsAPIInlineSnapAPI:
        "scrollSnapPointsX" in document.documentElement.style &&
        "scrollSnapPointsY" in document.documentElement.style,
      CSSOMScrollSnapPointsAPIInlineSnapOptionalAPI:
        "scrollSnapPointsX" in document.documentElement.style &&
        "scrollSnapPointsY" in document.documentElement.style,
      CSSOMScrollSnapPointsAPIInlineSnapMandatoryAPI:
        "scrollSnapPointsX" in document.documentElement.style &&
        "scrollSnapPointsY" in document.documentElement.style,
      CSSOMScrollSnapPointsAPIBlockSnapAPI:
        "scrollSnapPointsX" in document.documentElement.style &&
        "scrollSnapPointsY" in document.documentElement.style,
      CSSOMScrollSnapPointsAPIBlockSnapOptionalAPI:
        "scrollSnapPointsX" in document.documentElement.style &&
        "scrollSnapPointsY" in document.documentElement.style,
      CSSOMScrollSnapPointsAPIBlockSnapMandatoryAPI:
        "scrollSnapPointsX" in document.documentElement.style &&
        "scrollSnapPointsY" in document.documentElement.style,
      CSSOMScrollSnapPointsAPIOptionalAPI:
        "scrollSnapPointsX" in document.documentElement.style &&
        "scrollSnapPointsY" in document.documentElement.style,
      CSSOMScrollSnapPointsAPIMandatoryAPI:
        "scrollSnapPointsX" in document.documentElement.style &&
        "scrollSnapPointsY" in document.documentElement.style,
      ServiceWorkerRegistrationNavigationPreloadAPIEnabledAPI:
        "navigationPreload" in navigator.serviceWorker.getRegistration() &&
        "enabled" in NavigationPreloadManager,
      PeriodicBackgroundSyncOptOutAPISupportedAPI:
        "periodicSync" in navigator && "supported" in PeriodicSyncManager,
      IdleDetectionAPISupportedAPI:
        "requestIdleCallback" in window && "supported" in IdleDetector,
      PaymentHandlerAPIPaymentMethodChangeEventMethodNameAPI:
        "methodDetails" in PaymentMethodChangeEvent.prototype &&
        "methodName" in PaymentMethodChangeEventInit,
      PaymentHandlerAPIPaymentMethodChangeEventDetailsAPI:
        "methodDetails" in PaymentMethodChangeEvent.prototype &&
        "details" in PaymentMethodChangeEventInit,
      PaymentHandlerAPIPaymentMethodChangeEventSupportedAPI:
        "methodDetails" in PaymentMethodChangeEvent.prototype &&
        "supported" in PaymentMethodChangeEventInit,
      PaymentHandlerAPIPaymentMethodChangeEventMethodDetailsAPI:
        "methodDetails" in PaymentMethodChangeEvent.prototype &&
        "methodDetails" in PaymentMethodChangeEventInit,
      PaymentHandlerAPIPaymentMethodChangeEventModifierAPI:
        "methodDetails" in PaymentMethodChangeEvent.prototype &&
        "modifier" in PaymentMethodChangeEventInit,
      PaymentHandlerAPIPaymentMethodChangeEventMethodNameModifierAPI:
        "methodDetails" in PaymentMethodChangeEvent.prototype &&
        "methodName" in PaymentMethodChangeEventInit &&
        "modifier" in PaymentMethodChangeEventInit,
      PaymentHandlerAPIPaymentMethodChangeEventDetailsModifierAPI:
        "methodDetails" in PaymentMethodChangeEvent.prototype &&
        "details" in PaymentMethodChangeEventInit &&
        "modifier" in PaymentMethodChangeEventInit,
      PaymentHandlerAPIPaymentMethodChangeEventSupportedModifierAPI:
        "methodDetails" in PaymentMethodChangeEvent.prototype &&
        "supported" in PaymentMethodChangeEventInit &&
        "modifier" in PaymentMethodChangeEventInit,
      PaymentHandlerAPIPaymentMethodChangeEventMethodDetailsModifierAPI:
        "methodDetails" in PaymentMethodChangeEvent.prototype &&
        "methodDetails" in PaymentMethodChangeEventInit &&
        "modifier" in PaymentMethodChangeEventInit,
      PaymentRequestAPICanMakePaymentAPISupportedAPI:
        "canMakePayment" in PaymentRequest && "supported" in PaymentRequest,
      PaymentRequestAPICanMakePaymentWithDetailsAPISupportedAPI:
        "canMakePayment" in PaymentRequest && "supported" in PaymentRequest,
      PaymentRequestAPIShowAPISupportedAPI:
        "show" in PaymentRequest && "supported" in PaymentRequest,
      PaymentRequestAPICompleteAPISupportedAPI:
        "complete" in PaymentRequest && "supported" in PaymentRequest,
      PaymentRequestAPIAbortAPISupportedAPI:
        "abort" in PaymentRequest && "supported" in PaymentRequest,
      PaymentRequestAPIShowWithDetailsAPISupportedAPI:
        "show" in PaymentRequest && "supported" in PaymentRequest,
      PaymentRequestAPICompleteWithDetailsAPISupportedAPI:
        "complete" in PaymentRequest && "supported" in PaymentRequest,
      PaymentRequestAPIAbortWithDetailsAPISupportedAPI:
        "abort" in PaymentRequest && "supported" in PaymentRequest,
      ContactlessPaymentAPIPaymentRequestEventSupportedAPI:
        "paymentrequest" in navigator && "supported" in navigator,
      ContactlessPaymentAPIContactlessReadEventSupportedAPI:
        "contactless" in navigator && "supported" in navigator,
      ContactlessPaymentAPIContactlessReadEventReadAPI:
        "contactless" in navigator && "read" in NFCTag,
      ContactlessPaymentAPIContactlessReadEventReadWithoutAuthenticationAPI:
        "contactless" in navigator && "readWithoutAuthentication" in NFCTag,
      ContactlessPaymentAPIContactlessReadEventReadWithAuthenticationAPI:
        "contactless" in navigator && "readWithAuthentication" in NFCTag,
      ContactlessPaymentAPIContactlessReadEventAuthenticateAPI:
        "contactless" in navigator && "authenticate" in NFCTag,
      ContactlessPaymentAPIContactlessReadEventWriteAPI:
        "contactless" in navigator && "write" in NFCTag,
      ContactlessPaymentAPIContactlessReadEventWriteWithoutAuthenticationAPI:
        "contactless" in navigator && "writeWithoutAuthentication" in NFCTag,
      ContactlessPaymentAPIContactlessReadEventWriteWithAuthenticationAPI:
        "contactless" in navigator && "writeWithAuthentication" in NFCTag,
      ContactlessPaymentAPIContactlessReadEventGetReaderAPI:
        "contactless" in navigator && "getReader" in navigator,
      ContactlessPaymentAPIContactlessReadEventGetReaderWithQueryAPI:
        "contactless" in navigator && "getReader" in navigator,
      NFCAPINFCAReaderEventReadAPISupportedAPI:
        "NDEFReader" in window && "read" in NFCTag,
      NFCAPINFCAReaderEventReadWithoutAuthenticationAPISupportedAPI:
        "NDEFReader" in window && "readWithoutAuthentication" in NFCTag,
      NFCAPINFCAReaderEventReadWithAuthenticationAPISupportedAPI:
        "NDEFReader" in window && "readWithAuthentication" in NFCTag,
      NFCAPINFCAReaderEventAuthenticateAPISupportedAPI:
        "NDEFReader" in window && "authenticate" in NFCTag,
      NFCAPINFCAReaderEventWriteAPISupportedAPI:
        "NDEFReader" in window && "write" in NFCTag,
      NFCAPINFCAReaderEventWriteWithoutAuthenticationAPISupportedAPI:
        "NDEFReader" in window && "writeWithoutAuthentication" in NFCTag,
      NFCAPINFCAReaderEventWriteWithAuthenticationAPISupportedAPI:
        "NDEFReader" in window && "writeWithAuthentication" in NFCTag,
      NFCAPINFCAReaderEventGetReaderAPISupportedAPI:
        "NDEFReader" in window && "getReader" in navigator,
      NFCAPINFCAReaderEventGetReaderWithQueryAPISupportedAPI:
        "NDEFReader" in window && "getReader" in navigator,
      WebUSBAPIConnectEventDeviceAPISupportedAPI:
        "connect" in navigator.usb && "device" in navigator.usb,
      WebUSBAPIConnectEventDeviceOpenAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "open" in USBDevice,
      WebUSBAPIConnectEventDeviceCloseAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "close" in USBDevice,
      WebUSBAPIConnectEventDeviceSelectConfigurationAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "selectConfiguration" in USBDevice,
      WebUSBAPIConnectEventDeviceClaimInterfaceAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "claimInterface" in USBDevice,
      WebUSBAPIConnectEventDeviceReleaseInterfaceAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "releaseInterface" in USBDevice,
      WebUSBAPIConnectEventDeviceSelectAlternateConfigurationAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "selectAlternateConfiguration" in USBDevice,
      WebUSBAPIConnectEventDeviceControlTransferInAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "controlTransferIn" in USBDevice,
      WebUSBAPIConnectEventDeviceControlTransferOutAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "controlTransferOut" in USBDevice,
      WebUSBAPIConnectEventDeviceClearHaltAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "clearHalt" in USBDevice,
      WebUSBAPIConnectEventDeviceTransferInAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "transferIn" in USBDevice,
      WebUSBAPIConnectEventDeviceTransferOutAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "transferOut" in USBDevice,
      WebUSBAPIConnectEventDeviceIsochronousTransferInAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "isochronousTransferIn" in USBDevice,
      WebUSBAPIConnectEventDeviceIsochronousTransferOutAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "isochronousTransferOut" in USBDevice,
      WebUSBAPIConnectEventDeviceResetAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "reset" in USBDevice,
      WebUSBAPIConnectEventDeviceEventAPISupportedAPI:
        "connect" in navigator.usb &&
        "device" in navigator.usb &&
        "onconnect" in navigator.usb &&
        "ondisconnect" in navigator.usb,
      WebUSBAPIDisconnectEventDeviceAPISupportedAPI:
        "disconnect" in navigator.usb && "device" in navigator.usb,
      WebUSBAPIDisconnectEventDeviceCloseAPISupportedAPI:
        "disconnect" in navigator.usb &&
        "device" in navigator.usb &&
        "close" in USBDevice,
      WebUSBAPIDisconnectEventDeviceEventAPISupportedAPI:
        "disconnect" in navigator.usb &&
        "device" in navigator.usb &&
        "onconnect" in navigator.usb &&
        "ondisconnect" in navigator.usb,
      MediaCapabilitiesDecodingInfoAPISupportedAPI:
        "mediaCapabilities" in navigator &&
        "decodingInfo" in MediaCapabilitiesInfo,
      MediaCapabilitiesDecodingInfoAPIKeySystemAPISupportedAPI:
        "mediaCapabilities" in navigator &&
        "keySystem" in MediaCapabilitiesInfo,
      MediaCapabilitiesEncodingInfoAPISupportedAPI:
        "mediaCapabilities" in navigator &&
        "encodingInfo" in MediaCapabilitiesInfo,
      MediaCapabilitiesEncodingInfoAPIKeySystemAPISupportedAPI:
        "mediaCapabilities" in navigator &&
        "keySystem" in MediaCapabilitiesInfo,
      MediaSessionAPIPlayAPI:
        "mediaSession" in navigator && "play" in MediaSession,
      MediaSessionAPISkipAdAPI:
        "mediaSession" in navigator && "skipAd" in MediaSession,
      MediaSessionAPINextTrackAPI:
        "mediaSession" in navigator && "nextTrack" in MediaSession,
      MediaSessionAPIPrevTrackAPI:
        "mediaSession" in navigator && "prevTrack" in MediaSession,
      MediaSessionAPISetActionHandlerAPI:
        "mediaSession" in navigator && "setActionHandler" in MediaSession,
      MediaSessionAPIActionHandlerAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      MediaSessionAPIActionHandlerPlayAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      MediaSessionAPIActionHandlerPauseAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      MediaSessionAPIActionHandlerSeekToAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      MediaSessionAPIActionHandlerSeekBackwardAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      MediaSessionAPIActionHandlerSeekForwardAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      MediaSessionAPIActionHandlerPrevTrackAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      MediaSessionAPIActionHandlerNextTrackAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      MediaSessionAPIActionHandlerSkipAdAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      MediaSessionAPIActionHandlerSeekToSupportedAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      MediaSessionAPIActionHandlerSeekBackwardSupportedAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      MediaSessionAPIActionHandlerSeekForwardSupportedAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      MediaSessionAPIActionHandlerPrevTrackSupportedAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      MediaSessionAPIActionHandlerNextTrackSupportedAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      MediaSessionAPIActionHandlerSkipAdSupportedAPI:
        "mediaSession" in navigator && "actionHandler" in MediaSession,
      CSSOMScrollSnapPointsAPIBlockSnapMandatoryAPI:
        "scrollSnapPointsY" in document.documentElement.style,
      ServiceWorkerRegistrationNavigationPreloadAPISupportedAPI:
        "navigationPreload" in navigator.serviceWorker.getRegistration() &&
        "supported" in NavigationPreloadManager,
      BroadcastChannelAPIBroadcastMessageAPISupportedAPI:
        "onmessage" in BroadcastChannel.prototype,
      PeriodicBackgroundSyncAPIPeriodicSyncEventSupportedAPI:
        "periodicsync" in navigator &&
        "periodicsync" in ServiceWorkerRegistration.prototype,
      WakeLockAPIOwnershipAPISupportedAPI:
        "wakeLock" in navigator && "supported" in WakeLock,
      WakeLockAPIOwnershipSupportsAPISupportedAPI:
        "wakeLock" in navigator && "supported" in WakeLock,
      MediaMetadataAPITitleAPISupportedAPI: "title" in MediaMetadata.prototype,
      MediaMetadataAPIArtistAPISupportedAPI:
        "artist" in MediaMetadata.prototype,
      MediaMetadataAPIAlbumAPISupportedAPI: "album" in MediaMetadata.prototype,
      MediaMetadataAPIArtworkAPISupportedAPI:
        "artwork" in MediaMetadata.prototype,
      MediaMetadataAPIArtworkURLAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "url" in MediaImage,
      MediaMetadataAPIArtworkSizesAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "sizes" in MediaImage,
      MediaMetadataAPIArtworkTypeAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "type" in MediaImage,
      CSSOMScrollSnapPointsAPIInlineSnapMandatoryAPI:
        "scrollSnapPointsX" in document.documentElement.style,
      WebAnimationsAPIKeyframeAnimationEventAPISupportedAPI:
        "AnimationEvent" in window,
      WebAnimationsAPIAnimationPlaybackEventAPISupportedAPI:
        "AnimationEvent" in window,
      IntersectionObserverAPIIntersectionObserverEntryAPISupportedAPI:
        "IntersectionObserverEntry" in window,
      ResizeObserverAPIResizeObserverEntryAPISupportedAPI:
        "ResizeObserverEntry" in window,
      ResizeObserverSizeAPIInlineSizeAPISupportedAPI: "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeOptionalAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeInitialAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeInheritAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeRevertAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeUnsetAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeAutoAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIBlockSizeAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeOptionalAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeInitialAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeInheritAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeRevertAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeUnsetAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeAutoAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIOptionalAPISupportedAPI: "optional" in window,
      ResizeObserverSizeAPIOptionalInlineSizeAPISupportedAPI:
        "optional" in window && "inlineSize" in window,
      ResizeObserverSizeAPIOptionalBlockSizeAPISupportedAPI:
        "optional" in window && "blockSize" in window,
      WakeLockAPIOwnershipAPISupportedAPI: "wakeLock" in navigator,
      MediaMetadataAPITitleAPISupportedAPI: "title" in MediaMetadata.prototype,
      MediaMetadataAPIArtistAPISupportedAPI:
        "artist" in MediaMetadata.prototype,
      MediaMetadataAPIAlbumAPISupportedAPI: "album" in MediaMetadata.prototype,
      MediaMetadataAPIArtworkAPISupportedAPI:
        "artwork" in MediaMetadata.prototype,
      MediaMetadataAPIArtworkURLAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "url" in MediaImage,
      MediaMetadataAPIArtworkSizesAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "sizes" in MediaImage,
      MediaMetadataAPIArtworkTypeAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "type" in MediaImage,
      CSSOMScrollSnapPointsAPIInlineSnapMandatoryAPISupportedAPI:
        "scrollSnapPointsX" in document.documentElement.style,
      WebAnimationsAPIKeyframeAnimationEventAPISupportedAPI:
        "AnimationEvent" in window,
      WebAnimationsAPIAnimationPlaybackEventAPISupportedAPI:
        "AnimationEvent" in window,
      IntersectionObserverAPIIntersectionObserverEntryAPISupportedAPI:
        "IntersectionObserverEntry" in window,
      ResizeObserverAPIResizeObserverEntryAPISupportedAPI:
        "ResizeObserverEntry" in window,
      ResizeObserverSizeAPIInlineSizeAPISupportedAPI: "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeOptionalAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeInitialAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeInheritAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeRevertAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeUnsetAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeAutoAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIBlockSizeAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeOptionalAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeInitialAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeInheritAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeRevertAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeUnsetAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeAutoAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIOptionalAPISupportedAPI: "optional" in window,
      ResizeObserverSizeAPIOptionalInlineSizeAPISupportedAPI:
        "optional" in window && "inlineSize" in window,
      ResizeObserverSizeAPIOptionalBlockSizeAPISupportedAPI:
        "optional" in window && "blockSize" in window,
      WakeLockAPIOwnershipAPISupportedAPI: "wakeLock" in navigator,
      MediaMetadataAPITitleAPISupportedAPI: "title" in MediaMetadata.prototype,
      MediaMetadataAPIArtistAPISupportedAPI:
        "artist" in MediaMetadata.prototype,
      MediaMetadataAPIAlbumAPISupportedAPI: "album" in MediaMetadata.prototype,
      MediaMetadataAPIArtworkAPISupportedAPI:
        "artwork" in MediaMetadata.prototype,
      MediaMetadataAPIArtworkURLAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "url" in MediaImage,
      MediaMetadataAPIArtworkSizesAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "sizes" in MediaImage,
      MediaMetadataAPIArtworkTypeAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "type" in MediaImage,
      CSSOMScrollSnapPointsAPIInlineSnapMandatoryAPISupportedAPI:
        "scrollSnapPointsX" in document.documentElement.style,
      WebAnimationsAPIKeyframeAnimationEventAPISupportedAPI:
        "AnimationEvent" in window,
      WebAnimationsAPIAnimationPlaybackEventAPISupportedAPI:
        "AnimationEvent" in window,
      IntersectionObserverAPIIntersectionObserverEntryAPISupportedAPI:
        "IntersectionObserverEntry" in window,
      ResizeObserverAPIResizeObserverEntryAPISupportedAPI:
        "ResizeObserverEntry" in window,
      ResizeObserverSizeAPIInlineSizeAPISupportedAPI: "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeOptionalAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeInitialAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeInheritAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeRevertAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeUnsetAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeAutoAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIBlockSizeAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeOptionalAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeInitialAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeInheritAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeRevertAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeUnsetAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeAutoAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIOptionalAPISupportedAPI: "optional" in window,
      ResizeObserverSizeAPIOptionalInlineSizeAPISupportedAPI:
        "optional" in window && "inlineSize" in window,
      ResizeObserverSizeAPIOptionalBlockSizeAPISupportedAPI:
        "optional" in window && "blockSize" in window,
      WakeLockAPIOwnershipAPISupportedAPI: "wakeLock" in navigator,
      MediaMetadataAPITitleAPISupportedAPI: "title" in MediaMetadata.prototype,
      MediaMetadataAPIArtistAPISupportedAPI:
        "artist" in MediaMetadata.prototype,
      MediaMetadataAPIAlbumAPISupportedAPI: "album" in MediaMetadata.prototype,
      MediaMetadataAPIArtworkAPISupportedAPI:
        "artwork" in MediaMetadata.prototype,
      MediaMetadataAPIArtworkURLAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "url" in MediaImage,
      MediaMetadataAPIArtworkSizesAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "sizes" in MediaImage,
      MediaMetadataAPIArtworkTypeAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "type" in MediaImage,
      CSSOMScrollSnapPointsAPIInlineSnapMandatoryAPISupportedAPI:
        "scrollSnapPointsX" in document.documentElement.style,
      WebAnimationsAPIKeyframeAnimationEventAPISupportedAPI:
        "AnimationEvent" in window,
      WebAnimationsAPIAnimationPlaybackEventAPISupportedAPI:
        "AnimationEvent" in window,
      IntersectionObserverAPIIntersectionObserverEntryAPISupportedAPI:
        "IntersectionObserverEntry" in window,
      ResizeObserverAPIResizeObserverEntryAPISupportedAPI:
        "ResizeObserverEntry" in window,
      ResizeObserverSizeAPIInlineSizeAPISupportedAPI: "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeOptionalAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeInitialAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeInheritAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeRevertAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeUnsetAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeAutoAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIBlockSizeAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeOptionalAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeInitialAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeInheritAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeRevertAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeUnsetAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeAutoAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIOptionalAPISupportedAPI: "optional" in window,
      ResizeObserverSizeAPIOptionalInlineSizeAPISupportedAPI:
        "optional" in window && "inlineSize" in window,
      ResizeObserverSizeAPIOptionalBlockSizeAPISupportedAPI:
        "optional" in window && "blockSize" in window,
      WakeLockAPIOwnershipAPISupportedAPI: "wakeLock" in navigator,
      MediaMetadataAPITitleAPISupportedAPI: "title" in MediaMetadata.prototype,
      MediaMetadataAPIArtistAPISupportedAPI:
        "artist" in MediaMetadata.prototype,
      MediaMetadataAPIAlbumAPISupportedAPI: "album" in MediaMetadata.prototype,
      MediaMetadataAPIArtworkAPISupportedAPI:
        "artwork" in MediaMetadata.prototype,
      MediaMetadataAPIArtworkURLAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "url" in MediaImage,
      MediaMetadataAPIArtworkSizesAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "sizes" in MediaImage,
      MediaMetadataAPIArtworkTypeAPISupportedAPI:
        "artwork" in MediaMetadata.prototype && "type" in MediaImage,
      CSSOMScrollSnapPointsAPIInlineSnapMandatoryAPISupportedAPI:
        "scrollSnapPointsX" in document.documentElement.style,
      WebAnimationsAPIKeyframeAnimationEventAPISupportedAPI:
        "AnimationEvent" in window,
      WebAnimationsAPIAnimationPlaybackEventAPISupportedAPI:
        "AnimationEvent" in window,
      IntersectionObserverAPIIntersectionObserverEntryAPISupportedAPI:
        "IntersectionObserverEntry" in window,
      ResizeObserverAPIResizeObserverEntryAPISupportedAPI:
        "ResizeObserverEntry" in window,
      ResizeObserverSizeAPIInlineSizeAPISupportedAPI: "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeOptionalAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeInitialAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeInheritAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeRevertAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeUnsetAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIInlineSizeAutoAPISupportedAPI:
        "inlineSize" in window,
      ResizeObserverSizeAPIBlockSizeAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeOptionalAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeInitialAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeInheritAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeRevertAPISupportedAPI:
        "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeUnsetAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIBlockSizeAutoAPISupportedAPI: "blockSize" in window,
      ResizeObserverSizeAPIOptionalAPISupportedAPI: "optional" in window,
      ResizeObserverSizeAPIOptionalInlineSizeAPISupportedAPI:
        "optional" in window && "inlineSize" in window,
    };
  },
};
