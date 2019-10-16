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

// test code below
const eqArrays = function(array1, array2) {
  let string1 = "";
  let string2 = "";
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    string1 += array1[i];
    string2 += array2[i];
    if (typeof array1[i] !== typeof array2[i]) {
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
  let answer = eqArrays(input1, input2);
  if (answer === true) {
    console.log(`✅✅✅ Assertion Passed: ${input1} === ${input2}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${input1} !== ${input2}`);
  }
};
// test scenarios below

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("Lighthouse Labs").l, [0, 10]);

