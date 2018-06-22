function printerError(s) {
  // your code
 //regex to check if the letter is not a-m
 var regex = /[n-z]/gi 
 //if it matches the regex, places that in newStr
 var newStr = s.match(regex)
 

// console.log(newStr.length, s.length)
//checks if newStr has any value (will be null when no values are m-z)
if(newStr !== null){
//return the string required for tests
return `${newStr.length}/${s.length}`
} else {
//if newStr === null return 0 for errors, but still return length of s
  return `0/${s.length}`
}
  
}