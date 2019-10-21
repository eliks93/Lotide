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

// Test Code 
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// // Test Below here
// string = "Lighthouse Labs";

// result1 = countLetters(string);
// console.log(result1);
// assertEqual(result1["a"], 1);
// assertEqual(result1["l"], 2);
// assertEqual(result1["z"], undefined);
// assertEqual(result1[" "], undefined);
// assertEqual(result1["h"], 2);