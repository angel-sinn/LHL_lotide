const flatten = require("../flatten");
const assert = require("chai").assert;

describe("#flatten", () => {
  it(`should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]`, () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it(`should return [1, 2, 3, 4, 5, 6, 10] for [1, 2, [3, 4], 5, [6, 10]]`, () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6, 10]]), [
      1,
      2,
      3,
      4,
      5,
      6,
      10,
    ]);
  });

  it(`should return ["apple", "orange", "watermelon", "grapes", "banana"] for ["apple", "orange", ["watermelon", "grapes"], "banana"]`, () => {
    assert.deepEqual(
      flatten(["apple", "orange", ["watermelon", "grapes"], "banana"]),
      ["apple", "orange", "watermelon", "grapes", "banana"]
    );
  });
});
