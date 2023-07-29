const { ObjectUtils } = require("../../lib/objects");

describe("ObjectUtils", () => {
  const obj1 = {
    name: "John",
    age: 30,
    city: "New York",
  };

  const obj2 = {
    occupation: "Engineer",
    hobby: "Reading",
  };

  // Object Creation
  test("create", () => {
    const proto = { x: 1 };
    const propertiesObject = { y: { value: 2 } };
    const created = ObjectUtils.create(proto, propertiesObject);
    expect(created.x).toBe(1);
    expect(created.y).toBe(2);
  });

  test("assign", () => {
    const target = {};
    const assigned = ObjectUtils.assign(target, obj1, obj2);
    expect(assigned).toEqual({ ...obj1, ...obj2 });
  });

  test("clone", () => {
    const cloned = ObjectUtils.clone(obj1);
    expect(cloned).toEqual(obj1);
    expect(cloned).not.toBe(obj1); // Should not be the same object reference
  });

  test("deepClone", () => {
    const deepCloned = ObjectUtils.deepClone(obj1);
    expect(deepCloned).toEqual(obj1);
    expect(deepCloned).not.toBe(obj1); // Should not be the same object reference
  });

  // Object Access
  test("getKeys", () => {
    const keys = ObjectUtils.getKeys(obj1);
    expect(keys).toEqual(["name", "age", "city"]);
  });

  test("getValues", () => {
    const values = ObjectUtils.getValues(obj1);
    expect(values).toEqual(["John", 30, "New York"]);
  });

  test("getEntries", () => {
    const entries = ObjectUtils.getEntries(obj1);
    expect(entries).toEqual([
      ["name", "John"],
      ["age", 30],
      ["city", "New York"],
    ]);
  });

  test("hasOwnProperty", () => {
    expect(ObjectUtils.hasOwnProperty(obj1, "name")).toBe(true);
    expect(ObjectUtils.hasOwnProperty(obj1, "gender")).toBe(false);
  });

  test("getProperty", () => {
    expect(ObjectUtils.getProperty(obj1, "age")).toBe(30);
    expect(ObjectUtils.getProperty(obj1, "gender")).toBeUndefined();
  });

  // Object Inspection
  test("isEmpty", () => {
    expect(ObjectUtils.isEmpty({})).toBe(true);
    expect(ObjectUtils.isEmpty(obj1)).toBe(false);
  });

  test("isNotEmpty", () => {
    expect(ObjectUtils.isNotEmpty({})).toBe(false);
    expect(ObjectUtils.isNotEmpty(obj1)).toBe(true);
  });

  test("isObject", () => {
    expect(ObjectUtils.isObject({})).toBe(true);
    expect(ObjectUtils.isObject(obj1)).toBe(true);
    expect(ObjectUtils.isObject([])).toBe(false);
    expect(ObjectUtils.isObject(null)).toBe(false);
  });

  test("isDeepEqual", () => {
    expect(ObjectUtils.isDeepEqual(obj1, { ...obj1 })).toBe(true);
    expect(ObjectUtils.isDeepEqual(obj1, obj2)).toBe(false);
  });

  // Object Manipulation
  test("deleteProperty", () => {
    const modifiedObj = { ...obj1 };
    ObjectUtils.deleteProperty(modifiedObj, "age");
    expect(modifiedObj).toEqual({ name: "John", city: "New York" });
  });

  test("clearObject", () => {
    const modifiedObj = { ...obj1 };
    ObjectUtils.clearObject(modifiedObj);
    expect(modifiedObj).toEqual({});
  });

  // Object Transformation
  test("mapValues", () => {
    const mappedObj = ObjectUtils.mapValues(obj1, (value) =>
      value.toUpperCase()
    );
    expect(mappedObj).toEqual({
      name: "JOHN",
      age: "30",
      city: "NEW YORK",
    });
  });

  // Object Filtering
  test("filterKeys", () => {
    const filteredObj = ObjectUtils.filterKeys(obj1, (key) => key !== "age");
    expect(filteredObj).toEqual({ name: "John", city: "New York" });
  });

  test("filterValues", () => {
    const filteredObj = ObjectUtils.filterValues(
      obj1,
      (value) => typeof value === "string"
    );
    expect(filteredObj).toEqual({ name: "John", city: "New York" });
  });

  test("filterEntries", () => {
    const filteredObj = ObjectUtils.filterEntries(
      obj1,
      ([key, value]) => key === "age" && value > 25
    );
    expect(filteredObj).toEqual({ age: 30 });
  });

  // Object Merging
  test("merge", () => {
    const mergedObj = ObjectUtils.merge(obj1, obj2);
    expect(mergedObj).toEqual({ ...obj1, ...obj2 });
  });

  test("deepMerge", () => {
    const mergedObj = ObjectUtils.deepMerge(obj1, obj2);
    expect(mergedObj).toEqual({ ...obj1, ...obj2 });
  });

  // Object Iteration
  test("forEach", () => {
    const keys = [];
    const values = [];
    ObjectUtils.forEach(obj1, (value, key) => {
      keys.push(key);
      values.push(value);
    });
    expect(keys).toEqual(["name", "age", "city"]);
    expect(values).toEqual(["John", 30, "New York"]);
  });

  // Object Serialization and Deserialization
  test("serialize", () => {
    const serialized = ObjectUtils.serialize(obj1);
    expect(serialized).toBe('{"name":"John","age":30,"city":"New York"}');
  });

  test("deserialize", () => {
    const serialized = '{"name":"John","age":30,"city":"New York"}';
    const deserialized = ObjectUtils.deserialize(serialized);
    expect(deserialized).toEqual(obj1);
  });

  // Object Size
  test("size", () => {
    expect(ObjectUtils.size(obj1)).toBe(3);
    expect(ObjectUtils.size({})).toBe(0);
  });

  // Object Testing
  test("isEqual", () => {
    expect(ObjectUtils.isEqual(obj1, { ...obj1 })).toBe(true);
    expect(ObjectUtils.isEqual(obj1, obj2)).toBe(false);
  });

  test("includesKey", () => {
    expect(ObjectUtils.includesKey(obj1, "name")).toBe(true);
    expect(ObjectUtils.includesKey(obj1, "gender")).toBe(false);
  });

  test("includesValue", () => {
    expect(ObjectUtils.includesValue(obj1, "John")).toBe(true);
    expect(ObjectUtils.includesValue(obj1, "Male")).toBe(false);
  });

  // Object Transformation (key-value swap)
  test("swapKeyValue", () => {
    const swappedObj = ObjectUtils.swapKeyValue(obj1);
    expect(swappedObj).toEqual({
      John: "name",
      30: "age",
      "New York": "city",
    });
  });
});
