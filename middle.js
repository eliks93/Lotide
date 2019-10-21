const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');




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

module.exports = middle;

