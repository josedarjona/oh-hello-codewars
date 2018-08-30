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