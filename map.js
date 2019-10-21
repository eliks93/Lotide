// const words = ["ground", "control", "to", "major", "tom"];
// const numbers = [1, 2, 3, 4, 5, 6, 7]


const map = function(array, callback) {
  const results = [];
  for(item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

// const eqArrays = function(array1, array2) {
//   for (let i = 0; i <= array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };


// const assertArraysEqual = function(input1, input2) {
//   let answer = eqArrays(input1, input2)
//   if (answer === true) {
//     console.log(`✅✅✅ Assertion Passed: ${input1} === ${input2}`);
//   } else {
//     console.log(`🚫🚫🚫 Assertion Failed: ${input1} !== ${input2}`);
//   }
// };

// assertArraysEqual(map(words, word => word + 'zip'), ['groundzip', 'controlzip', 'tozip', 'majorzip', 'tomzip' ]);
// assertArraysEqual(map(words, word => word[4]), ["n", "r", undefined, "r", undefined]);
// assertArraysEqual(map(numbers, number => number * 2), [2, 4, 6, 8, 10, 12, 14]);

