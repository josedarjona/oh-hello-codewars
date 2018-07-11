function prefill(n, v) {

  //just checking
  console.log(n)
  console.log('this is', v)
  
  
//inputs validations
  //do the checks here for everything
  if(Number.isNaN(parseInt(n)) || parseInt(n) < 0 ||  n % 1 !== 0 ) {
    throw new TypeError(n + " is invalid")
  }
  
  //if n is 0 return an empty array, 
  if(parseInt(n) === 0) {
  return [];
  }
  
  //use n value as an int to set length of array and fill each spot with v 
  //and return that new array
  return new Array(parseInt(n)).fill(v)

}