const letterPositions = function(sentence) {
  const results = {};
  const string = sentence.toLowerCase().split(" ").join("");
  for (const index in string) {
    if (results[string[index]] !== undefined) {
      results[string[index]].push(parseInt(index));
    } else {
      results[string[index]] = [parseInt(index)];
    }
  }
  return results;
};

module.exports = letterPositions;

console.log(letterPositions("hello brown cow"))