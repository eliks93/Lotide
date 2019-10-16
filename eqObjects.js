const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } 
  for(let key1 of array1){
    
    if(object1[key1] !== object2[key1]){
      return false;
    }
    
    }
  return true
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cba = { c: "3", b: "2", a: "1" };
const cd = {c: "1", d: "2"};
const dc = {d: "2", c: "1"};


assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(dc, cd), true);
assertEqual(eqObjects(abc, cba), true);

