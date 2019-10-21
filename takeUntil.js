
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

const takeUntil = function(array, callback) {
  const newArray = [];
  for(let item of array) {
      newArray.push(item);
      if(callback(item)) {
        newArray.pop();
        return newArray;
      }
  }
  return newArray;
}

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);