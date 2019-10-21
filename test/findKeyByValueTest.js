const assert = require('chai').assert;
const index   = require('../index');

describe("#findKeyByValue", () => {
  it("returns the key associated with the value", () => {
    assert.deepEqual(index.findKeyByValue({
      a: 1,
      b: 2,
      c: 3
    }, 1), "a");
  });
  it("returns undefined if no key is found", () => {
    assert.deepEqual(index.findKeyByValue({
      a: 1,
      b: 2,
      c: 3
    }, 4), undefined);
  });
});