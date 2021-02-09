const assertArraysEqual = require("../assertArraysEqual");

// Test cases

assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
assertArraysEqual([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
assertArraysEqual([2, 4], [1, 3, 5]);
