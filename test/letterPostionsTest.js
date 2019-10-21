const assert = require('chai').assert;
const index = require('../index');

describe("#letterPositions", () => {
  it("returns an object with the key being the letter and the value being an array that contains the index at which it appears", () => {
    assert.deepEqual(index.letterPositions("hello brown cow"), { 
      h: [ 0 ],
      e: [ 1 ],
      l: [ 2, 3 ],
      o: [ 4, 7, 11 ],
      b: [ 5 ],
      r: [ 6 ],
      w: [ 8, 12 ],
      n: [ 9 ],
      c: [ 10 ] 
    });
  });
  it("returns an empty object when passed an empty string", () => {
    assert.deepEqual(index.letterPositions(""), {});
  });
});
