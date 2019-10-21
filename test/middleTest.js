const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // should be true
assertArraysEqual(middle([1, 2, 3, 5, 6, 7]), [3, 5]); // should be true
assertArraysEqual(middle([1, 2, 3, 5, 6, 7]), [4]); //should be false
assertArraysEqual(middle([100, 2, 30, 4, 54, 6, 7]), [4]); // should be true