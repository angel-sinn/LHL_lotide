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

// Method 1

const without = function (sourceArray, itemsToRemoveArray) {
  let newArray = [];
  for (const item of sourceArray) {
    if (!itemsToRemoveArray.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

// Method 2
/*
const without = function (sourceArray, itemsToRemoveArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    let remove;
    for (let j = 0; j < itemsToRemoveArray.length; j++) {
      if (sourceArray[i] === itemsToRemoveArray[j]) {
        remove = true;
      }
    }
    if (!remove) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};
*/
// Test cases

console.log(without([1, 2, 3, 2], [1, 2]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["hello", "goodbye"], ["goodbye"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
