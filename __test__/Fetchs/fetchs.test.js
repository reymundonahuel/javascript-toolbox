const { FetchUtils } = require("../../lib/fetchs");

describe("FetchUtils", () => {
  // Mocking fetch function for testing purposes
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ success: true }),
      blob: () =>
        Promise.resolve(
          new Blob(["Test file content"], { type: "text/plain" })
        ),
    })
  );

  beforeEach(() => {
    global.fetch.mockClear();
  });

  // Perform GET request
  test("get", async () => {
    const url = "https://example.com/data";
    const headers = { Authorization: "Bearer token" };
    const response = await FetchUtils.get(url, headers);
    expect(global.fetch).toHaveBeenCalledWith(url, {
      method: "GET",
      headers: new Headers(headers),
    });
    expect(response).toEqual({ success: true });
  });

  // Perform POST request
  test("post", async () => {
    const url = "https://example.com/data";
    const data = { key: "value" };
    const headers = { Authorization: "Bearer token" };
    const response = await FetchUtils.post(url, data, headers);
    expect(global.fetch).toHaveBeenCalledWith(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        ...headers,
      }),
      body: JSON.stringify(data),
    });
    expect(response).toEqual({ success: true });
  });

  // Perform PUT request
  test("put", async () => {
    const url = "https://example.com/data";
    const data = { key: "value" };
    const headers = { Authorization: "Bearer token" };
    const response = await FetchUtils.put(url, data, headers);
    expect(global.fetch).toHaveBeenCalledWith(url, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        ...headers,
      }),
      body: JSON.stringify(data),
    });
    expect(response).toEqual({ success: true });
  });

  // Perform DELETE request
  test("delete", async () => {
    const url = "https://example.com/data";
    const headers = { Authorization: "Bearer token" };
    const response = await FetchUtils.delete(url, headers);
    expect(global.fetch).toHaveBeenCalledWith(url, {
      method: "DELETE",
      headers: new Headers(headers),
    });
    expect(response).toEqual({ success: true });
  });

  // Handle Fetch Response
  test("handleResponse - successful response", async () => {
    const response = await FetchUtils.handleResponse({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    });
    expect(response).toEqual({ success: true });
  });

  test("handleResponse - error response", async () => {
    const errorData = { message: "Error message" };
    const response = await FetchUtils.handleResponse({
      ok: false,
      json: () => Promise.resolve(errorData),
      statusText: "Not Found",
    });
    expect(response).toBeInstanceOf(Error);
    expect(response.message).toEqual(errorData);
  });

  // Download file from URL
  test("downloadFile", async () => {
    const url = "https://example.com/file";
    const filename = "test.txt";

    const aElement = document.createElement("a");
    aElement.href = "blob:test";
    aElement.download = filename;
    const mockClick = jest.spyOn(aElement, "click");
    const mockRevoke = jest.spyOn(window.URL, "revokeObjectURL");

    document.createElement = jest.fn(() => aElement);

    await FetchUtils.downloadFile(url, filename);

    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(mockClick).toHaveBeenCalled();
    expect(mockRevoke).toHaveBeenCalled();
  });
});
