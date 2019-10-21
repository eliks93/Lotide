const assert = require('chai').assert;
const index = require('../index');

describe('countOnly' , () => {
  it(`should return an object with the counts of passed in elements in the given array`, () => {
    assert.deepEqual(index.countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ] , {
      "Jason": true,
      "Karima": true,
      "Fang": true
    })
    , {"Jason": 1, "Fang": 2});
  });
  it(`should return an empty object when an empty object is passed as the filter`, () => {
    assert.deepEqual(index.countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ] , {
    
    })
    , {});
  });
  it(`should return an empty object when the object with the items to count has no matching keys`, () => {
    assert.deepEqual(index.countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ] , {
      "Bobby": true,
      "Karima": true,
      "Tacos": true
    })
    , {});
  });
});