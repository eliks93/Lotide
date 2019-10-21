const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(["one", 2, 3], ["one", 2, 3]);
assertArraysEqual(["one", 2, 3], ["one", 2, 3]);
assertArraysEqual(["one", 2, 4], ["one", 2, 4, 5]);
assertArraysEqual(["one", true, 3], ["one", true, 3]);