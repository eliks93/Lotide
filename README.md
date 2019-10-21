# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eliks/lotide`

**Require it:**

`const _ = require('@eliks/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters('string')`: counts the letters in a string
* `countOnly(['allItems'], {itemsToCount)`: takes an array of strings and an object containing a string and boolean key value pair. returns the amount of times each specificed string in the key value pair appears in the array of strings.
* `findKey(object, key)`: takes an object and key as input and searches the object to see if that key exists. if it does it returns the value of that key.
* `findKeyByValue(object, value)`: takes an object and value and returns the key that has that value if it exists.
* `tail([array])`: takes an array and returns an array containing the values of indexes after index 0.
* `head([array])`: takes an array and returns the first index in the array.
* `middle([array])`: takes an array and returns the value of the middlde index or indexs of that array.
* `map([array], callback)`: takes an array and a callback value. returns an array that is the original array morphed according to the callback function.
* `letterPositions(sentence)`: takes a setence and returns an object containing key value pairs of each letter in the sentence and what index or indexs it appears at.
* `takeUntil([array], callback)`: takes an array and a callback. Returns a new array containing all values of the original array until the callback value is read.
* `without([array], toRemove)`: takes an array and an input and removes the input from the array. 
* `flatten([array])`: takes an array of nested arrays and returns an array with all the values of the nested arrays.