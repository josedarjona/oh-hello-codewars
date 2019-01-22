// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The 
// string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false



function XO(str) {
  //code here
  
  console.log(str)
  
  let newStr = str.toLowerCase()
  
  console.log(newStr)
  
  let countX = 0
  let countO = 0
  
  for ( let i = 0; i < newStr.length; i++ ) {

    if ( newStr[i] === 'x' ) {
      countX++
    } else if ( newStr[i] === 'o' ) {
      countO++
    }

  }
  
  console.log("this is count x>>>", countX)
  console.log("this is count o>>>", countO)
  
  return (countX === countO) ? true : false
}