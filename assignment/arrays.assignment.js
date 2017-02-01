/**
Array Review
**/

function createArray() {
  // create an array with 6 elements (numbers and strings only)
  // Write code below

  // return this array
  return myArray;
}

function loopArray(array) {
  // used below
  var conString = '';
  // Write code here: Concatentate all of the values in array together using a loop


  // return concatentated values
  return conString;
}


function arrayReverser(arrayParam) {
  // Copy items from arrayParam to a new array called reversedArray, reversing the order of elements
  // Last element on arrayParam should become the first in reversedArray
  // Do not use Array.reverse()!

  // Write the code here


  // return our reversed array
  return reversedArray;
}

// call and console log the return for loopArray and arrayReverser

// -- DON'T TOUCH CODE BELOW --
module.exports = {
  createArray: createArray,
  loopArray: loopArray,
  arrayReverser: arrayReverser
};
