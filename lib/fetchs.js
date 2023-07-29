export const FetchUtils = {
  // Perform GET request
  get: async (url, headers = {}) => {
    const response = await fetch(url, {
      method: "GET",
      headers: new Headers(headers),
    });
    return FetchUtils.handleResponse(response);
  },

  // Perform POST request
  post: async (url, data, headers = {}) => {
    const response = await fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        ...headers,
      }),
      body: JSON.stringify(data),
    });
    return FetchUtils.handleResponse(response);
  },

  // Perform PUT request
  put: async (url, data, headers = {}) => {
    const response = await fetch(url, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        ...headers,
      }),
      body: JSON.stringify(data),
    });
    return FetchUtils.handleResponse(response);
  },

  // Perform DELETE request
  delete: async (url, headers = {}) => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: new Headers(headers),
    });
    return FetchUtils.handleResponse(response);
  },

  // Handle Fetch Response
  handleResponse: async (response) => {
    if (!response.ok) {
      const errorData = await response.json().catch(() => response.statusText);
      throw new Error(errorData);
    }
    return response.json();
  },

  // Download file from URL
  downloadFile: async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const urlObject = window.URL || window.webkitURL || window;
    const urlBlob = urlObject.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = urlBlob;
    a.download = filename;
    a.click();
    urlObject.revokeObjectURL(urlBlob);
  },
};
