export const ArrayUtils = {
  // Array Creation and Initialization
  createArray: (length, defaultValue = undefined) =>
    Array.from({ length }, () => defaultValue),
  initializeArray: (length, initializer) =>
    Array.from({ length }, (_, index) => initializer(index)),

  // Element Access
  first: (arr) => arr[0],
  last: (arr) => arr[arr.length - 1],
  getElementAt: (arr, index) => arr[index],

  // Element Search
  indexOf: (arr, element) => arr.indexOf(element),
  lastIndexOf: (arr, element) => arr.lastIndexOf(element),
  includes: (arr, element) => arr.includes(element),
  find: (arr, callback) => arr.find(callback),
  findIndex: (arr, callback) => arr.findIndex(callback),
  countOccurrences: (arr, element) =>
    arr.reduce((count, current) => count + (current === element ? 1 : 0), 0),

  // Element Manipulation
  push: (arr, ...elements) => arr.push(...elements),
  pop: (arr) => arr.pop(),
  shift: (arr) => arr.shift(),
  unshift: (arr, ...elements) => arr.unshift(...elements),
  splice: (arr, start, deleteCount, ...items) =>
    arr.splice(start, deleteCount, ...items),
  removeElement: (arr, element) => arr.filter((item) => item !== element),

  // Subarrays
  slice: (arr, start, end) => arr.slice(start, end),
  filter: (arr, callback) => arr.filter(callback),
  map: (arr, callback) => arr.map(callback),
  reduce: (arr, callback, initialValue) => arr.reduce(callback, initialValue),

  // Array Transformation
  reverse: (arr) => arr.slice().reverse(),
  sort: (arr, compareFunction) => arr.slice().sort(compareFunction),

  // Array Concatenation
  concat: (...arrays) => arrays.reduce((result, arr) => result.concat(arr), []),

  // Array Flattening
  flatten: (arr) => arr.flat(),
  deepFlatten: (arr) => arr.flat(Infinity),

  // Array Partitioning
  partition: (arr, callback) =>
    arr.reduce(
      ([pass, fail], item) =>
        callback(item) ? [[...pass, item], fail] : [pass, [...fail, item]],
      [[], []],
    ),

  // Array Shuffling
  shuffle: (arr) => arr.sort(() => Math.random() - 0.5),

  // Array Testing
  isEmpty: (arr) => arr.length === 0,
  isNotEmpty: (arr) => arr.length > 0,
  all: (arr, callback) => arr.every(callback),
  any: (arr, callback) => arr.some(callback),

  // Array Stringification
  join: (arr, separator = ",") => arr.join(separator),

  // Set Operations
  union: (...arrays) => Array.from(new Set(ArrayUtils.concat(...arrays))),
  intersection: (...arrays) =>
    arrays.reduce((a, b) => a.filter((c) => b.includes(c))),
  difference: (arr1, arr2) => arr1.filter((item) => !arr2.includes(item)),

  // Random Element
  getRandomElement: (arr) => arr[Math.floor(Math.random() * arr.length)],
};
