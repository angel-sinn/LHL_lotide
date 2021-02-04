// eqArrays function

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

// assertAraysEqual function

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// Actual function

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  //   console.log("array:", array);
  //   console.log("callback:", callback);

  const results = [];

  for (const item of array) {
    // console.log("item BEFORE:", item);
    // console.log("item AFTER:", callback(item));
    // console.log("---");
    results.push(callback(item));
  }
  return results;
};

// Test cases

const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word.toUpperCase());

console.log(results1);
console.log(results2);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); // true
assertArraysEqual(results2, ["ground", "control", "to", "major", "tom"]); // false
