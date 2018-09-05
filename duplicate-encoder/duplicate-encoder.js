function duplicateEncode(word){
  // ...
  console.log(word.split(""))
  console.log((word.match(/s/gi) || []).length)
  
  let finArr = []
  
  for(let i = 0; i < word.length; i++){
  //create the regex with the appropriate escape
  RegExp.escape = function(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  //regex to use
  let regex = RegExp.escape(word[i])
  //create new regex
  let re = new RegExp(regex,"gi")
  
  console.log(re)
  //count the amount of times it matches with regex
  let howMany = (word.match(re) || []).length
  
  console.log(howMany)
  //check if more than one
  if(howMany <= 1){
  
    finArr.push("(")
  
  }else finArr.push(")")
  
  
  }
  
return finArr.join("")    
  
}


//smart use of split

// function duplicateEncode(word){
//   var newString = [];
//   var downCaseWord = word.toLowerCase();
//   for (var i = 0; i < downCaseWord.length; i++) {
//     if (downCaseWord.split(downCaseWord[i]).length > 2) {
//       newString += ")";
//     } else {
//       newString += "(";
//     }
//   }
//   return newString;
// }