// Test assertion function

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Actual function

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// Method 1

const countOnly = function (allItems, itemsToCount) {
  let results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// Method 2

/*
const countOnly = function (allItems, itemsToCount) {
  let results = {};

  for (const item of allItems) {
    if (!itemsToCount[item]) {
      // if not in itemsToCount, don't count this item
      continue;
    }

    if (!results[item]) {
      results[item] = 0;
    }
    results[item]++;
  }

  return results;
};
*/

// Test cases

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
