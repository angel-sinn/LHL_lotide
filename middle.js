// Test assertion functions

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

// Actual function

const middle = function (array) {
  let middleArray = [];
  let middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return middleArray;
  }
  if (array.length > 2) {
    if (array.length % 2 === 1) {
      middleArray.push(array[middleIndex]);
      return middleArray;
    }
    if (array.length % 2 === 0) {
      middleArray.push(array[middleIndex - 1], array[middleIndex]);
      return middleArray;
    }
  }
};

// Test cases

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle(["hello", "goodbye", "hi", "bye"]));

console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(
  assertArraysEqual(middle(["hello", "goodbye", "hi", "bye"]), [
    "goodbye",
    "hi",
  ])
);
