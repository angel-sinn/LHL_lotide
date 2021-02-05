// assertEqual function

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Actual function

const findKey = function (object, callback) {
  const keyArray = Object.keys(object);
  for (const key of keyArray) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// Test cases

const data1 = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

const result1 = findKey(data1, (x) => x.stars === 2);
const result2 = findKey(data1, (x) => x.stars > 2);

console.log("result1:", result1);
console.log("result2:", result2);

assertEqual(result1, "noma"); // true
assertEqual(result2, "Blue Hill"); // false
