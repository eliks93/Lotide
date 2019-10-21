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