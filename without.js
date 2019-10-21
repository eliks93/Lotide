const without = function(array, toRemove) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== toRemove[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

module.exports = without;