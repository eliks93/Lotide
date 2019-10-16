const countLetters = function(string) {
  const results = {};
  for(const letters of string) {
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  }
  console.log(results)
  return results;
};


string = "Lighthouse Labs";




result1 = countLetters(string) 





















// Test Code 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Test Below here