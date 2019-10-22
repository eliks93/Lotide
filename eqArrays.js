const eqArrays = function(array1, array2) {
  let result = true; 
  for(let i = 0;i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      return(eqArrays(array1[i], array2[i]))
    } else if (array1[i] === array2[i]) {
        result = true;
    } else {
      result = false
    }
  }
  return result;
};

module.exports = eqArrays;