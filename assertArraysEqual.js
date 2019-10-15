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

const assertArraysEqual = function(input1, input2) {
  let answer = eqArrays(input1, input2)
  if (answer === true) {
    console.log(`✅✅✅ Assertion Passed: ${input1} === ${input2}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${input1} !== ${input2}`);
  }
};

assertArraysEqual(["one", 2, 3], ["one", 2, 3]);