const without = require("../without");
const assert = require("chai").assert;

const words = ["hello", "world", "lighthouse"];

describe("#without", () => {
  it(`should return ["hello", "world"], for (words, "lighthouse")`, () => {
    assert.deepEqual(without(words, "lighthouse"), ["hello", "world"]);
  });

  it(`should return [3], for ([1, 2, 3, 2], [1, 2])`, () => {
    assert.deepEqual(without([1, 2, 3, 2], [1, 2]), [3]);
  });
});

// console.log(without([1, 2, 3, 2], [1, 2]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
// console.log(without(["hello", "goodbye"], ["goodbye"]));

// without(words, ["lighthouse"]); // no need to capture return value

// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
