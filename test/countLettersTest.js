const countLetters = require("../countLetters");
const assert = require("chai").assert;

const result1 = countLetters("angel");
const result2 = countLetters("lighthouse in the house");

describe("#countLetters", () => {
  it(`should return 1 for result1['a']`, () => {
    assert.strictEqual(result1["a"], 1);
  });

  it(`should return 1 for result2['h']`, () => {
    assert.strictEqual(result2["h"], 4);
  });
});
