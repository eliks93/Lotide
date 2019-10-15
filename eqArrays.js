const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let string1 = "";
  let string2 = "";
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++){
    string1 += array1[i];
    string2 += array2[i];
    if (typeof array1[i] !== typeof array2[i]){
      return false;
    }
  }
  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
};




assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false) // => false