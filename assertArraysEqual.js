const eqArrays = require('./eqArrays');

const assertArraysEqual = function(input1, input2) {
  let answer = eqArrays(input1, input2)
  if (answer === true) {
    console.log(`✅✅✅ Assertion Passed: ${input1} === ${input2}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${input1} !== ${input2}`);
  }
};

module.exports = assertArraysEqual;