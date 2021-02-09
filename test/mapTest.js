const map = require("../map");
const assert = require("chai").assert;

const words = ["ground", "control", "to", "major", "tom"];

const result1 = map(words, (word) => word[0]);
const result2 = map(words, (word) => word.toUpperCase());

describe("#map", () => {
  it(`should return ['g', 'c', 't', 'm', 't'] for result1`, () => {
    assert.deepEqual(result1, ["g", "c", "t", "m", "t"]);
  });

  it(`should return ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM'] for result2`, () => {
    assert.deepEqual(result2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
  });
});
