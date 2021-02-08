const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

// Test cases

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(["hello", "goodbye", "hi", "bye"]), ["goodbye", "hi"]);
