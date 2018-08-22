"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
//   return array.flat();
//from stack overflow link
numberSort = function (a,b) {
    return a - b;
};

  //new array built off a concatted array, then sorted with numberSort function
  var x = [].concat(...array).sort(numberSort)
  
  console.log(x)
  
 
  return x
}