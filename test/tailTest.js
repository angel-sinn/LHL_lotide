const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Test cases

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const words1 = ["Yo Yo"];
console.log(tail(words1));
assertEqual(words1.length, 1);

const words2 = [];
console.log(tail(words2));
assertEqual(words2.length, 0);
