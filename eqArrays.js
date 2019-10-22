
const eqArrays = function(array1, array2) {
  const index = require('./index')
  let result = true;
  let arrayFlat1 = index.flatten(array1);
  let arrayFlat2 = index.flatten(array2);
  arrayFlat1.forEach(function(value, index)  {
    if (value !== arrayFlat2[index]) {
      result = false;
    } else {
      result = true;
    }
  });
  return result
};

module.exports = eqArrays;








