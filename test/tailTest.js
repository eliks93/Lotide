// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const index   = require('../index');

describe("#tail", () => {
  it("should return [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(index.tail([1, 2, 3]), [2, 3]);
  });
  it("returns ['5'] for ['1', 5']", () => {
    assert.deepEqual(index.tail(['1', '5']), ['5']); 
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(index.tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  })
  it("returns [] for []", () => {
    assert.deepEqual(index.tail([]), []);
  })
});