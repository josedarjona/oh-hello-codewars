function comp(array1, array2){

  //for the null check
  if( array1 === null || array2 === null ){
      return false;
  }
  //if they both dont have same amount of numbers to check
  if ( array1.length != array2.length ){
      return false;
  }

  // making a new array with each value squared
  arrSquared = array1.map( val => {
    return Math.pow( val, 2 ); 
  });

  // then sort both arrays, so we can compare them
  arrSquared.sort()
  array2.sort()
  
  
  //just checking
  console.log("this is arr squared =>", arrSquared, "-----this is array 2", array2)

  // compare in the loooop
  for ( var i=0 ; i < arrSquared.length ; i+= 1 ){
      if ( arrSquared[i] != array2[i] ) {
          return false;
      }
  }

  return true;
}



//what is .every? learn that maybe
// //
// function comp(array1, array2) {
//   if(array1 == null || array2 == null) return false;
//   array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
//   return array1.map(v => v * v).every((v, i) => v == array2[i]);
// }