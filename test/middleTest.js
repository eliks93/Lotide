const index = require('../index');
const assert = require('chai').assert

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // should be true
// assertArraysEqual(middle([1, 2, 3, 5, 6, 7]), [3, 5]); // should be true
// assertArraysEqual(middle([1, 2, 3, 5, 6, 7]), [4]); //should be false
// assertArraysEqual(middle([100, 2, 30, 4, 54, 6, 7]), [4]); // should be true

describe("#middle", () => {
  it("should return [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(index.middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
  it("returns [3, 5] for [1, 2, 3, 5, 6, 7]", () => {
    assert.deepEqual(index.middle([1, 2, 3, 5, 6, 7]), [3, 5]); 
  });
  it("returns ['Lighthouse' ] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(index.middle(["Hello", "Lighthouse", "Labs"]), ['Lighthouse']);
  })
  it("returns [] for []", () => {
    assert.deepEqual(index.middle([]), []);
  })
});