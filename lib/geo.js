export const GeoUtils = {
  // Distance Calculation
  // Distance Calculation
  calculateDistance: (lat1, lon1, lat2, lon2) => {
    const earthRadiusKm = 6371;
    const dLat = GeoUtils.degreesToRadians(lat2 - lat1);
    const dLon = GeoUtils.degreesToRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(GeoUtils.degreesToRadians(lat1)) *
        Math.cos(GeoUtils.degreesToRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceInKm = earthRadiusKm * c;

    return {
      toKM: () => distanceInKm,
      toMiles: () => distanceInKm / 1.60934, // 1 mile = 1.60934 kilometers
    };
  },

  // Degrees and Radians Conversion
  degreesToRadians: (degrees) => (degrees * Math.PI) / 180,
  radiansToDegrees: (radians) => (radians * 180) / Math.PI,

  // Geolocation Support
  isGeolocationSupported: () => "geolocation" in navigator,

  // Get Current Position
  getCurrentPosition: (onSuccess, onError) => {
    if (GeoUtils.isGeolocationSupported()) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onSuccess(latitude, longitude);
        },
        (error) => {
          onError(error.message);
        },
      );
    } else {
      onError("Geolocation is not supported in this browser.");
    }
  },

  // Convert Degrees Minutes Seconds (DMS) to Decimal Degrees
  dmsToDecimal: (degrees, minutes, seconds, direction) => {
    const decimal = degrees + minutes / 60 + seconds / 3600;
    return direction === "S" || direction === "W" ? -decimal : decimal;
  },

  // Convert Decimal Degrees to Degrees Minutes Seconds (DMS)
  decimalToDms: (decimal) => {
    const degrees = Math.trunc(decimal);
    const minutesDecimal = (decimal - degrees) * 60;
    const minutes = Math.trunc(minutesDecimal);
    const seconds = Math.round((minutesDecimal - minutes) * 60);
    return { degrees, minutes, seconds };
  },

  // Geocoding and Reverse Geocoding
  geocodeAddress: (address, apiKey, callback) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address,
    )}&key=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK" && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          callback(lat, lng);
        } else {
          callback(null, null, data.status);
        }
      })
      .catch((error) => {
        callback(null, null, error.message);
      });
  },

  reverseGeocodeLocation: (latitude, longitude, apiKey, callback) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK" && data.results.length > 0) {
          const address = data.results[0].formatted_address;
          callback(address);
        } else {
          callback(null, data.status);
        }
      })
      .catch((error) => {
        callback(null, error.message);
      });
  },
};
