const eqObjects = function(object1, object2) {
  const index = require('./index');
  if ((Object.keys(object1)).length !== (Object.keys(object2)).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (!object2[key]) {
      return false;
    }
    if (Array.isArray(object1[key])) {
      if (!(index.eqArrays(object1[key], object2[key]))) {
        return false;
      }
    } else if (isObject(object1[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }

  }
  return true;
};

const isObject = function(value) {
  if (value === null) {
    return false;
  }
  return ((typeof value === 'function') || (typeof value === 'object'));
};

module.exports = eqObjects;

