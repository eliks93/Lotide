const assert = require('chai').assert;
const index = require('../index');


describe("#eqObjects", () => {
  it("returns true when the objects are equal", () => {
    assert.deepEqual(index.eqObjects({
      a: 1,
      b: 2,
      c: 3
    },
    {
      a: 1,
      b: 2,
      c: 3
    }), true);
  });
  it("returns false when the objects are not equal", () => {
    assert.deepEqual(index.eqObjects({
      a: 1,
      b: 4,
      c: 3
    },
    {
      a: 1,
      b: 2,
      c: 3
    }), false);
  });
  it("returns true when the objects are equal with nested objects", () => {
    assert.deepEqual(index.eqObjects({
      a: 1,
      b: {
        c: {
          e: 4
        }},
      d: 3
    },
    {
      a: 1,
      b: {
        c: {
          e: 4
        }},
      d: 3
    }), true);
  });
  it("returns false when the objects are not equal (length)", () => {
    assert.deepEqual(index.eqObjects({
      a: 1,
      b: 2,
      c: 3,
      d: 4
    },
    {
      a: 1,
      b: 2,
      c: 3
    }), false);
  });
  it("returns true when the objects are equal and have arrays as values", () => {
    assert.deepEqual(index.eqObjects({
      a: 1,
      b: [3, 4],
      c: 3,
    },
    {
      a: 1,
      b: [3, 4],
      c: 3
    }), true);
  });
}); 

//   it('returns true when given two empty arrays', () => {
//     assert.deepEqual(index.eqObjects([], []), true);
//   });
//   it('returns false when given two different arrays', () => {
//     assert.deepEqual(index.eqObjects([1, 2], [3, 4]), false);
//   });
//   it('returns false when given two non matching arrays', () => {
//     assert.deepEqual(index.eqObjects([1, 2, "three"], [1, 2, 3]), false);
//   });
//   it('returns true when given two matching nested arrays', () => {
//     assert.deepEqual(index.eqObjects([1, [2, 3, [4]], 6], [1, [2, 3, [4]], 6]), true);
//   });
// });