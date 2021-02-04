// Test assertion function

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Actual function

// Returns true if both objects have identical keys with identical values
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
  let object1KeyArray = Object.keys(object1);
  let object2KeyArray = Object.keys(object2);

  if (object1KeyArray.length !== object2KeyArray.length) {
    // Comparing length of object
    return false;
  } else {
    for (let key of object1KeyArray) {
      // Looping through keyArray of object 1
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // Checking if values are arrays
        if (!eqArrays(object1[key], object2[key])) {
          // Compare arrays using eqArrays function
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};

// Test cases

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
