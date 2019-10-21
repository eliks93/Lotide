const assertEqual = require('./assertEqual');


const tail = function(array) {
  let i;
  let newArray = [];
  for (i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return (newArray);
};

module.exports = tail 

