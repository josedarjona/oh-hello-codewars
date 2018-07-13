var uniqueInOrder = function(iterable){
  //your code here - remember iterable can be a string or an array
  
 var finalArr = [];  
 var temp = [];
 //just checking
 console.log(iterable)
 //if it is not an array, split it into an array, if it is
 //keep it as an array.
  if (!iterable instanceof Array) {
    temp = iterable.split('');
  } else {
    temp = iterable;
  }
  
  //loop through the length of the temparray
  //if it is equal to temp at the previous position
  //dont push, and move on, if it isnt, push and continue
 for (i = 0; i < temp.length; i++) {
 //just checking
   console.log(temp[i])
   if (temp[i] != temp[i-1]) {
     finalArr.push(temp[i]);
   }
 }
 return finalArr;
 };


// // "hits head on wall" mightve over thought

// function uniqueInOrder(it) {
//   var result = []
//   var last
  
//   for (var i = 0; i < it.length; i++) {
//     if (it[i] !== last) {
//       result.push(last = it[i])
//     }
//   }
  
//   return result
// }