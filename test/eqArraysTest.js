const assert = require('chai').assert;
const index = require('../index');


describe("#eqArrays", () => {
  it("returns true when the arrays are equal", () => {
    assert.deepEqual(index.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('returns true when given two empty arrays', () => {
    assert.deepEqual(index.eqArrays([], []), true);
  });
  it('returns false when given two different arrays', () => {
    assert.deepEqual(index.eqArrays([1, 2], [3, 4]), false);
  });
  it('returns false when given two non matching arrays', () => {
    assert.deepEqual(index.eqArrays([1, 2, "three"], [1, 2, 3]), false);
  });
  it('returns true when given two matching nested arrays', () => {
    assert.deepEqual(index.eqArrays([1, [2, 3, [4]], 6], [1, [2, 3, [4]], 6]), true);
  });
});


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
// assertEqual(eqArrays([false, "2", "3"], [false, "2"]), false) // => false
// assertEqual(eqArrays([false, "2", "3"], [false, "2", "3"]), true) // => true
