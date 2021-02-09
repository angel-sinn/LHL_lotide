const findKey = function (object, callback) {
  const keyArray = Object.keys(object);
  for (const key of keyArray) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;
