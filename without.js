const without = function (sourceArray, itemsToRemoveArray) {
  let newArray = [];
  for (const item of sourceArray) {
    if (!itemsToRemoveArray.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = without;
