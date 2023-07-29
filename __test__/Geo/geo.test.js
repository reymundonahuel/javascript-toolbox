const { GeoUtils } = require("./index");

describe("GeoUtils", () => {
  // Distance Calculation
  test("calculateDistance", () => {
    const distance = GeoUtils.calculateDistance(0, 0, 0, 1);

    // Test distance in kilometers
    expect(distance.toKM()).toBeCloseTo(111.32, 2);

    // Test distance in miles
    expect(distance.toMiles()).toBeCloseTo(69.17, 2);
  });

  // Degrees and Radians Conversion
  test("degreesToRadians", () => {
    expect(GeoUtils.degreesToRadians(180)).toBe(Math.PI);
  });

  test("radiansToDegrees", () => {
    expect(GeoUtils.radiansToDegrees(Math.PI)).toBe(180);
  });

  // Geolocation Support
  test("isGeolocationSupported", () => {
    expect(GeoUtils.isGeolocationSupported()).toBe(true); // Assumes geolocation is supported in the test environment
  });

  // Get Current Position (Requires manual testing due to geolocation API)

  // Convert Degrees Minutes Seconds (DMS) to Decimal Degrees
  test("dmsToDecimal", () => {
    expect(GeoUtils.dmsToDecimal(37, 45, 30, "N")).toBeCloseTo(37.7583, 4);
    expect(GeoUtils.dmsToDecimal(122, 25, 5, "W")).toBeCloseTo(-122.4181, 4);
  });

  // Convert Decimal Degrees to Degrees Minutes Seconds (DMS)
  test("decimalToDms", () => {
    const dms1 = GeoUtils.decimalToDms(37.7583);
    expect(dms1.degrees).toBe(37);
    expect(dms1.minutes).toBe(45);
    expect(dms1.seconds).toBe(18);

    const dms2 = GeoUtils.decimalToDms(-122.4181);
    expect(dms2.degrees).toBe(122);
    expect(dms2.minutes).toBe(25);
    expect(dms2.seconds).toBe(5);
  });

  // Geocoding and Reverse Geocoding (Requires manual testing with a valid API key)
  test("geocodeAddress", (done) => {
    GeoUtils.geocodeAddress(
      "San Francisco, CA",
      "YOUR_API_KEY",
      (lat, lng, status) => {
        if (status === "OK") {
          expect(lat).toBeCloseTo(37.7749, 4);
          expect(lng).toBeCloseTo(-122.4194, 4);
          done();
        } else {
          done(new Error("Geocoding failed."));
        }
      }
    );
  });

  test("reverseGeocodeLocation", (done) => {
    GeoUtils.reverseGeocodeLocation(
      37.7749,
      -122.4194,
      "YOUR_API_KEY",
      (address, status) => {
        if (status === "OK") {
          expect(address).toContain("San Francisco");
          done();
        } else {
          done(new Error("Reverse geocoding failed."));
        }
      }
    );
  });
});
