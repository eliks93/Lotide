const eqArrays = function(array1, array2) {
  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key1 of array1) {
    if (Array.isArray(object1[key1]) !== Array.isArray(object2[key1])) {
      return eqArrays(array1, array2);
    } 
    else if (object1[key1] !== object2[key1]) {
        return false;
      }
    }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(input1, input2) {
  const inspect = require('util').inspect;
  let answer = eqObjects(input1, input2)
  if (answer === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(input1)} === ${inspect(input2)}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${inspect(input1)} !== ${inspect(input2)}`);
  }
};

const ab = { a: "1", b: "2" };
const aObjectB = { a:"1" }
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cba = { c: "3", b: "2", a: "1" };

assertObjectsEqual(ab, ba,);
assertObjectsEqual(cba, ba);

