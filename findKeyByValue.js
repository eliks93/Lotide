const findKeyByValue = function(object, value) {
  for (let property in object) {
    if(value === object[property]) {
      return(property);
    }
  }
}

module.exports = findKeyByValue;