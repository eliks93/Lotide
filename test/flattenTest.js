const assert = require('chai').assert;
const index   = require('../index');

describe("#flatten", () => {
  it("returns [1, 2, 3] for [1, [2], 3]", () => {
    assert.deepEqual(index.flatten([1, [2], 3]), [1, 2, 3]);
  });
  it("returns [1, 2, 3, 4] for [1, [2, 3], 4]", () => {
    assert.deepEqual(index.flatten([1, [2, 3], 4]), [1, 2, 3, 4])
  });
  it("returns [1, 2, 3, 4] for [1, [2, [3], 4]]", () => {
    assert.deepEqual(index.flatten([1, [2, [3], 4]]), [1, 2, 3, 4])
  });
  it("returns [1, 2, 3, 4, 5, 6, 7] for [1, [2, [3], 4], [5, [6, [7]]]]", () => {
    assert.deepEqual(index.flatten([1, [2, [3], 4], [5, [6, [7]]]]), [1, 2, 3, 4, 5, 6, 7])
  });
});