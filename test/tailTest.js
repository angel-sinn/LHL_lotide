const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it(`should return [2, 3] for [1, 2, 3]`, () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it(`should return ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
});
