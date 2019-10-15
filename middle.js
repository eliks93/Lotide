
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



// Here WE GO!
const middle = function(array) {
  let middleArray = [];
  const midIndex = Math.floor(array.length/2);
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 !== 0) {
    
    middleArray.push(array[midIndex]);
  
  } else {
    middleArray.push(array[midIndex - 1], array[midIndex])
  }
  return middleArray;
}

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // should be true
assertArraysEqual(middle([1, 2, 3, 5, 6, 7]), [3, 5]); // should be true
assertArraysEqual(middle([1, 2, 3, 5, 6, 7]), [4]); //should be false
assertArraysEqual(middle([100, 2, 30, 4, 54, 6, 7]), [4]); // should be true