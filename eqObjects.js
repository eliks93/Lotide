const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cba = { c: "3", b: "2", a: "1" };


assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(abc, cba), true);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 4], c: "1" };
assertEqual(eqObjects(cd, dc), false);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);


