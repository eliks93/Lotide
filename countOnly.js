// Let's work together to implement countOnly.
// This function should take in a collection of items and return counts for a specific subset of those items.
// It won't count everything. In order to decide what to count,
// it will also be given an idea of which items we care about and it will only count those,
// ignoring the others.

// Items in our case will be limited to Strings.


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// Testing Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "yolo",
  "yolo",
  "yolo",
  "Salima",
  "Fang",
  "Joe"
];

// Tests Below Here

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Kavith"], undefined);
assertEqual(result1["yolo"], undefined);