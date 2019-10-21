const flatten = function(arrayOfArrays) {
  let flatArray = []
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (Array.isArray(arrayOfArrays[i]) === true) {
      for (let j = 0; j < arrayOfArrays[i].length; j++) {
        flatArray.push(arrayOfArrays[i][j])
      }
    } else {
      flatArray.push(arrayOfArrays[i]);
    }
  }
  return flatArray;
}

module.exports = flatten;