const countLetters = function (string) {
  let result = {};

  for (let letter of string) {
    if (letter !== " ") {
      // leave out spaces
      if (result[letter]) {
        // if letter is in result object already, add 1
        result[letter] += 1;
      } else {
        // create key for letter if it does not yet exist in object and assign value of 1
        result[letter] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;
