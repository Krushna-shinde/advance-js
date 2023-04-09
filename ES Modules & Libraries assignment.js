// Object Literal
// Easy
// Construct an object and write a javascript program to print out ‘Hello, My name is John Doe’ using literals.

// Example 1:
// Input:
// const object = { starter: 'Hello, My name is', firstName: 'John', lastName: 'Doe', }

// Output:
// Hello, My name is John Doe


const object = { 
    firstName: 'John', 
    lastName: 'Doe', 
}
 console.log(`Hello, My name is ${object.firstName} ${object.lastName}`);

//  Lodash Module
// Medium
// Write a Javascript function that imports the lodash module (using commonjs syntax) and iterates through the given array and prints each letter.

// Example 2:
// Input:
// const letters = ['a', 'b', 'c']

// Output:
// a b c

// Explanation:
// Iterating over the letters array using forEach method and printing every letter.

// Constraints:
// Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.

const _ = require('lodash');

function printArray(letters) {
  _.forEach(letters, (letter) => {
    console.log(letter);
  });
}

const letters = ['a', 'b', 'c'];
printArray(letters); 
