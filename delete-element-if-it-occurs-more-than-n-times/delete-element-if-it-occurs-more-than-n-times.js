function deleteNth(arr,n){
  // ...
  //storage to hold values, and theAns array is to display final answer
  var storage = {}
  var theAns = []
  //just checking
  console.log('this is the array',arr)
  
  //loop through the array, add it to storage if it doesnt yet exist with a value of 1, 
  // if it exists in storage, add 1 to it
  arr.map(theTest => {
  
    if(storage[theTest]){
      storage[theTest] += 1
    } else {
      storage[theTest] = 1
    }
  //look for the current value in storage(after it was created or we added 1 to its value)
  //then see if that value is less than or equal to the 'n' being passed
  //if it is, push it into the answer array, if it isn't do nothing, because final array
  //cant have more than the 'n' value.
    if(storage[theTest] <= n){
      theAns.push(theTest)
    }
    //just checking
    console.log('this is storage', storage)
    console.log('this is theAns arr', theAns)
  
  })
    return theAns;
}


//2 favorite solutions
//use of filter for both, just written differently
// function deleteNth(arr,x){

//   const count = {};
  
//   return arr.filter(function(n){
  
//     if(count[n])
//       count[n] += 1
//     else
//       count[n] = 1;
      
//     if(count[n] <= x)
//       return true;
//     else 
//       return false;
//   });
// }

//other one:
//
// function deleteNth(arr,x) {
//   var cache = {};
//   return arr.filter(function(n) {
//     cache[n] = (cache[n]||0) + 1;
//     return cache[n] <= x;
//   });
// }