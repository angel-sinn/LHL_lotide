const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it(`should return 2 for [1, 2, 3]`, () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it(`it should return ['goodbye','hi'] for ['hello', 'goodbye', 'hi', 'bye']`, () => {
    assert.deepEqual(middle(["hello", "goodbye", "hi", "bye"]), [
      "goodbye",
      "hi",
    ]);
  });
});

// // Test cases

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle(["hello", "goodbye", "hi", "bye"]), ["goodbye", "hi"]);
