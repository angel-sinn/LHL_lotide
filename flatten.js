const flatten = function (array) {
  let flattenedArray = [];
  for (let element of array) {
    if (Array.isArray) {
      flattenedArray = flattenedArray.concat(element);
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

module.exports = flatten;
