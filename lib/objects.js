const ObjectUtils = {
  // Object Creation
  create: (proto, propertiesObject) => Object.create(proto, propertiesObject),
  assign: (target, ...sources) => Object.assign(target, ...sources),
  clone: (obj) => Object.assign({}, obj),
  deepClone: (obj) => JSON.parse(JSON.stringify(obj)),

  // Object Access
  getKeys: (obj) => Object.keys(obj),
  getValues: (obj) => Object.values(obj),
  getEntries: (obj) => Object.entries(obj),
  hasOwnProperty: (obj, prop) => obj.hasOwnProperty(prop),
  getProperty: (obj, prop) => obj[prop],

  // Object Inspection
  isEmpty: (obj) => Object.keys(obj).length === 0,
  isNotEmpty: (obj) => Object.keys(obj).length > 0,
  isObject: (obj) =>
    typeof obj === "object" && obj !== null && !Array.isArray(obj),
  isDeepEqual: (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2),

  // Object Manipulation
  deleteProperty: (obj, prop) => delete obj[prop],
  clearObject: (obj) => Object.keys(obj).forEach((key) => delete obj[key]),

  // Object Transformation
  mapValues: (obj, callback) =>
    Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, callback(value, key)])
    ),

  // Object Filtering
  filterKeys: (obj, callback) =>
    Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => callback(key, value))
    ),
  filterValues: (obj, callback) =>
    Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => callback(value, key))
    ),
  filterEntries: (obj, callback) =>
    Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => callback(key, value))
    ),

  // Object Merging
  merge: (...objs) => Object.assign({}, ...objs),
  deepMerge: (...objs) =>
    JSON.parse(JSON.stringify(Object.assign({}, ...objs))),

  // Object Iteration
  forEach: (obj, callback) =>
    Object.keys(obj).forEach((key) => callback(obj[key], key)),

  // Object Serialization and Deserialization
  serialize: (obj) => JSON.stringify(obj),
  deserialize: (json) => JSON.parse(json),

  // Object Size
  size: (obj) => Object.keys(obj).length,

  // Object Testing
  isEqual: (obj1, obj2) => ObjectUtils.isDeepEqual(obj1, obj2),
  includesKey: (obj, key) => key in obj,
  includesValue: (obj, value) => Object.values(obj).includes(value),

  // Object Transformation (key-value swap)
  swapKeyValue: (obj) =>
    Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key])),
};
module.exports = { ObjectUtils };
