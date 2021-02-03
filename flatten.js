const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const flatten = function (array) {
  let flattenedArray = [];
  for (let element of array) {
    if (Array.isArray) {
      flattenedArray = flattenedArray.concat(element);
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

// Test cases

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [3, 4], 5, [6, 10]]));
console.log(flatten(["apple", "orange", ["watermelon", "grapes"], "banana"]));

console.log(
  assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
);
console.log(
  assertArraysEqual(flatten([1, 2, [3, 4], 5, [6, 10]]), [1, 2, 3, 4, 5, 6, 10])
);
console.log(
  assertArraysEqual(
    flatten(["apple", "orange", ["watermelon", "grapes"], "banana"]),
    ["apple", "orange", "watermelon", "grapes", "banana"]
  )
);
