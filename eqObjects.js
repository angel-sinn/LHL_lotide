const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  let object1KeyArray = Object.keys(object1);
  let object2KeyArray = Object.keys(object2);

  if (object1KeyArray.length !== object2KeyArray.length) {
    // Comparing length of object
    return false;
  } else {
    for (let key of object1KeyArray) {
      // Looping through keyArray of object 1
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // Checking if values are arrays
        if (!eqArrays(object1[key], object2[key])) {
          // Compare arrays using eqArrays function
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};

module.exports = eqObjects;
