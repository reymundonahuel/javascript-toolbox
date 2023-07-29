const { ArrayUtils } = require("../../lib/arrays");

describe("ArrayUtils - Array Creation and Initialization", () => {
  test("createArray creates an array with the specified length and default value", () => {
    const arr = ArrayUtils.createArray(5, 0);
    expect(arr).toEqual([0, 0, 0, 0, 0]);
  });

  test("initializeArray creates an array with the specified length and initializes each element using the provided initializer", () => {
    const arr = ArrayUtils.initializeArray(5, (index) => index * 2);
    expect(arr).toEqual([0, 2, 4, 6, 8]);
  });
});

describe("ArrayUtils - Element Access", () => {
  test("first returns the first element of the array", () => {
    const arr = [1, 2, 3];
    expect(ArrayUtils.first(arr)).toBe(1);
  });

  test("last returns the last element of the array", () => {
    const arr = [1, 2, 3];
    expect(ArrayUtils.last(arr)).toBe(3);
  });

  test("getElementAt returns the element at the specified index", () => {
    const arr = [1, 2, 3];
    expect(ArrayUtils.getElementAt(arr, 1)).toBe(2);
  });
});

describe("ArrayUtils - Element Search", () => {
  test("indexOf returns the index of the first occurrence of the specified element", () => {
    const arr = [1, 2, 3, 2];
    expect(ArrayUtils.indexOf(arr, 2)).toBe(1);
  });

  test("lastIndexOf returns the index of the last occurrence of the specified element", () => {
    const arr = [1, 2, 3, 2];
    expect(ArrayUtils.lastIndexOf(arr, 2)).toBe(3);
  });

  test("includes returns true if the array includes the specified element", () => {
    const arr = [1, 2, 3];
    expect(ArrayUtils.includes(arr, 2)).toBe(true);
  });

  test("find returns the first element in the array that satisfies the provided callback function", () => {
    const arr = [1, 2, 3, 4];
    const isEven = (num) => num % 2 === 0;
    expect(ArrayUtils.find(arr, isEven)).toBe(2);
  });

  test("findIndex returns the index of the first element in the array that satisfies the provided callback function", () => {
    const arr = [1, 2, 3, 4];
    const isEven = (num) => num % 2 === 0;
    expect(ArrayUtils.findIndex(arr, isEven)).toBe(1);
  });

  test("countOccurrences returns the number of occurrences of the specified element in the array", () => {
    const arr = [1, 2, 2, 3, 2];
    expect(ArrayUtils.countOccurrences(arr, 2)).toBe(3);
  });
});

describe("ArrayUtils - Element Manipulation", () => {
  test("push appends elements to the end of the array", () => {
    const arr = [1, 2];
    ArrayUtils.push(arr, 3, 4);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  test("pop removes and returns the last element of the array", () => {
    const arr = [1, 2, 3];
    const popped = ArrayUtils.pop(arr);
    expect(arr).toEqual([1, 2]);
    expect(popped).toBe(3);
  });

  test("shift removes and returns the first element of the array", () => {
    const arr = [1, 2, 3];
    const shifted = ArrayUtils.shift(arr);
    expect(arr).toEqual([2, 3]);
    expect(shifted).toBe(1);
  });

  test("unshift inserts elements at the beginning of the array", () => {
    const arr = [3, 4];
    ArrayUtils.unshift(arr, 1, 2);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  test("splice removes elements from the array and optionally inserts new elements in their place", () => {
    const arr = [1, 2, 3, 4];
    const removed = ArrayUtils.splice(arr, 1, 2, "a", "b");
    expect(arr).toEqual([1, "a", "b", 4]);
    expect(removed).toEqual([2, 3]);
  });

  test("removeElement removes all occurrences of the specified element from the array", () => {
    const arr = [1, 2, 3, 2, 4];
    ArrayUtils.removeElement(arr, 2);
    expect(arr).toEqual([1, 3, 4]);
  });
});

describe("ArrayUtils - Subarrays", () => {
  test("slice returns a shallow copy of a portion of the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const subArray = ArrayUtils.slice(arr, 1, 4);
    expect(subArray).toEqual([2, 3, 4]);
  });

  test("filter returns a new array with all elements that pass the test implemented by the provided function", () => {
    const arr = [1, 2, 3, 4, 5];
    const isEven = (num) => num % 2 === 0;
    const filtered = ArrayUtils.filter(arr, isEven);
    expect(filtered).toEqual([2, 4]);
  });

  test("map returns a new array with the results of calling a provided function on every element in the original array", () => {
    const arr = [1, 2, 3];
    const doubled = ArrayUtils.map(arr, (num) => num * 2);
    expect(doubled).toEqual([2, 4, 6]);
  });

  test("reduce applies a function to reduce the array to a single value", () => {
    const arr = [1, 2, 3, 4];
    const sum = ArrayUtils.reduce(arr, (acc, num) => acc + num, 0);
    expect(sum).toBe(10);
  });
});

describe("ArrayUtils - Array Transformation", () => {
  test("reverse returns a new array with the elements in reverse order", () => {
    const arr = [1, 2, 3];
    const reversed = ArrayUtils.reverse(arr);
    expect(reversed).toEqual([3, 2, 1]);
  });

  test("sort returns a new array with the elements sorted", () => {
    const arr = [3, 1, 2];
    const sorted = ArrayUtils.sort(arr);
    expect(sorted).toEqual([1, 2, 3]);
  });

  test("sort with compareFunction sorts the array based on the provided compare function", () => {
    const arr = [3, 1, 2];
    const compareFunction = (a, b) => b - a;
    const sorted = ArrayUtils.sort(arr, compareFunction);
    expect(sorted).toEqual([3, 2, 1]);
  });
});

describe("ArrayUtils - Array Concatenation", () => {
  test("concat concatenates multiple arrays into a new array", () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const concatenated = ArrayUtils.concat(arr1, arr2);
    expect(concatenated).toEqual([1, 2, 3, 4]);
  });
});

describe("ArrayUtils - Array Flattening", () => {
  test("flatten flattens a nested array by one level", () => {
    const arr = [1, [2, 3], [4, 5]];
    const flattened = ArrayUtils.flatten(arr);
    expect(flattened).toEqual([1, 2, 3, 4, 5]);
  });

  test("deepFlatten recursively flattens a deeply nested array", () => {
    const arr = [1, [2, [3, [4, 5]]]];
    const deepFlattened = ArrayUtils.deepFlatten(arr);
    expect(deepFlattened).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("ArrayUtils - Array Partitioning", () => {
  test("partition partitions the array into two arrays based on the provided callback function", () => {
    const arr = [1, 2, 3, 4, 5];
    const isEven = (num) => num % 2 === 0;
    const [even, odd] = ArrayUtils.partition(arr, isEven);
    expect(even).toEqual([2, 4]);
    expect(odd).toEqual([1, 3, 5]);
  });
});

describe("ArrayUtils - Array Shuffling", () => {
  test("shuffle returns a new array with the elements randomly shuffled", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = ArrayUtils.shuffle(arr);
    expect(arr).not.toEqual(shuffled); // There's a very low chance of getting the same order after shuffling.
  });
});

describe("ArrayUtils - Array Testing", () => {
  test("isEmpty returns true for an empty array", () => {
    const arr = [];
    expect(ArrayUtils.isEmpty(arr)).toBe(true);
  });

  test("isNotEmpty returns true for a non-empty array", () => {
    const arr = [1, 2, 3];
    expect(ArrayUtils.isNotEmpty(arr)).toBe(true);
  });

  test("all returns true if all elements in the array satisfy the provided callback function", () => {
    const arr = [2, 4, 6];
    const isEven = (num) => num % 2 === 0;
    expect(ArrayUtils.all(arr, isEven)).toBe(true);
  });

  test("any returns true if at least one element in the array satisfies the provided callback function", () => {
    const arr = [1, 2, 3];
    const isEven = (num) => num % 2 === 0;
    expect(ArrayUtils.any(arr, isEven)).toBe(true);
  });
});

describe("ArrayUtils - Array Stringification", () => {
  test("join concatenates all elements of the array into a string with the provided separator", () => {
    const arr = [1, 2, 3];
    const joined = ArrayUtils.join(arr, "-");
    expect(joined).toBe("1-2-3");
  });
});

describe("ArrayUtils - Set Operations", () => {
  test("union returns a new array with the unique elements from all the input arrays", () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const arr3 = [2, 5];
    const union = ArrayUtils.union(arr1, arr2, arr3);
    expect(union).toEqual([1, 2, 3, 4, 5]);
  });

  test("intersection returns a new array with the common elements from all the input arrays", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const intersection = ArrayUtils.intersection(arr1, arr2);
    expect(intersection).toEqual([2, 3]);
  });

  test("difference returns a new array with the elements that are in arr1 but not in arr2", () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [2, 3];
    const difference = ArrayUtils.difference(arr1, arr2);
    expect(difference).toEqual([1, 4]);
  });
});

describe("ArrayUtils - Random Element", () => {
  test("getRandomElement returns a random element from the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const randomElement = ArrayUtils.getRandomElement(arr);
    expect(arr).toContain(randomElement);
  });
});
