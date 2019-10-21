const countLetters = function(string) {
  const lowerString = string.toLowerCase().split(" ").join("");
  const results = {};
  for (const letters of lowerString) {
    
      if (results[letters] !== undefined) {
          results[letters] += 1;
        } else {
          results[letters] = 1;
      }

  }
  return results;
};

module.exports = countLetters;