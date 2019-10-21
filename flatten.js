const flatten = function(arrayOfArrays) {
  let flatArray = []
  arrayOfArrays.forEach((value) => {
    if (Array.isArray(value)) {
      flatArray.push(...flatten(value));
    } 
    else {
      flatArray.push(value);
    }
  });
  return flatArray;
}

module.exports = flatten;