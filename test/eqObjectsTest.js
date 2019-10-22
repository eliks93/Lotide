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