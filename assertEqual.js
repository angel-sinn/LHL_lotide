// Function implementation

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test cases

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello", "hello");
assertEqual(1, 1.1);
