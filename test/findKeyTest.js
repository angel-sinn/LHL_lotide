const findKey = require("../findKey");
const assert = require("chai").assert;

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

describe("#findKey", () => {
  it(`should return "noma" for result1`, () => {
    assert.strictEqual(result1, "noma");
  });

  it(`should return "Akaleri" for result2`, () => {
    assert.strictEqual(result2, "Akaleri");
  });
});
