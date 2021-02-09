const map = function (array, callback) {
  //   console.log("array:", array);
  //   console.log("callback:", callback);

  const results = [];

  for (const item of array) {
    // console.log("item BEFORE:", item);
    // console.log("item AFTER:", callback(item));
    // console.log("---");
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
