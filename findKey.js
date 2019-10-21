const findKey = function(object, callback) {
  const errorMessage = `No key with given value found`
  for(let key in object) {
    if(callback(object[key])) {
      return key;
    }
  }
  return errorMessage;
}

module.exports = findKey;