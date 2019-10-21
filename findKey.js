// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

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

// assertEqual(findKey({ "Blue Hill": { stars: 1 },
// "Akaleri":   { stars: 3 },
// "noma":      { stars: 2 },
// "elBulli":   { stars: 3 },
// "Ora":       { stars: 2 },
// "Akelarre":  { stars: 3 }
// }, 
// x => x.stars === 4), `No key with given value found`);

// assertEqual(findKey({ "Blue Hill": { stars: 1 },
// "Akaleri":   { stars: 3 },
// "noma":      { stars: 2 },
// "elBulli":   { stars: 3 },
// "Ora":       { stars: 2 },
// "Akelarre":  { stars: 3 }
// }, 
// x => x.stars === 2), `noma`);

// assertEqual(findKey({ "Blue Hill": { stars: 1 },
// "Akaleri":   { stars: 3 },
// "noma":      { stars: 2 },
// "elBulli":   { stars: 3 },
// "Ora":       { stars: 2 },
// "Akelarre":  { stars: 3 }
// }, 
// x => x.stars === 3), `Akaleri`);

// assertEqual(findKey({ "Blue Hill": { rainbows: 1 },
// "Akaleri":   { rainbows: 3 },
// "noma":      { rainbows: 2 },
// "elBulli":   { rainbows: 3 },
// "Ora":       { rainbows: 2 },
// "Akelarre":  { rainbows: 3 }
// }, 
// x => x.rainbows === 2), `noma`);