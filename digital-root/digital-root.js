function digital_root(n) {
  // ...
  
  console.log(n.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b), 0))
  
  
  var theN = n.toString().split("")
  console.log(typeof theN)
  console.log(theN.length)
  
  do{
  console.log("hi")
  theN = theN.reduce((a, b) => parseInt(a) + parseInt(b), 0).toString().split("")
  
  } while(theN.length > 1)
  
  
   console.log("final n", parseInt(theN))
   
   return parseInt(theN)
  
}


//with just math 

// function digital_root(n) {
//   return (n - 1) % 9 + 1;
// }


//recursion


// function digital_root(n) {
//   if (n < 10) return n;
  
//   return digital_root(
//     n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
// }