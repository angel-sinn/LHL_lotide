const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

const result1 = letterPositions("hello there");
const result2 = letterPositions("lighthouse labs");

describe("#letterPositions", () => {
  it(`should return [0, 7] for result1['h']`, () => {
    assert.deepEqual(result1["h"], [0, 7]);
  });

  it(`should return [8, 14] for result2['s']`, () => {
    assert.deepEqual(result2["s"], [8, 14]);
  });
});
