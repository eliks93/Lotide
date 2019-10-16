const countLetters = function(string) {
  const lowerString = string.toLowerCase();
  const results = {};
  for(const letters of lowerString) {
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

assertEqual(result1["a"], 1);
assertEqual(result1["l"], 2);
assertEqual(result1["z"], undefined);
assertEqual(result1[" "], undefined);
assertEqual(result1["h"], 2);





















// Test Code 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Test Below here