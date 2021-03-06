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


//using object as a cache


// function duplicateEncode(word){
//   const cache = {};
//   let res = '';
  
//   for (let i = 0; i < word.length; i++) {
//     const char = word[i].toLowerCase();
    
//     if (char in cache) {
//       res += ')';
//       continue;
//     }
    
//     cache[char] = true;
    
//     if (word.toLowerCase().indexOf(char, i + 1) !== -1) {
//       res += ')';
//     } else {
//       res += '(';
//     }
//   }
  
//   return res;
// }



// function duplicateEncode(word){
//   // ...
//   console.log(word.split(""))
//   console.log((word.match(/s/gi) || []).length)
  
//   let finArr = []
  
//   for(let i = 0; i < word.length; i++){
//   //create the regex with the appropriate escape
//   RegExp.escape = function(s) {
//   return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
//   }

//   //regex to use
//   let regex = RegExp.escape(word[i])
//   //create new regex
//   let re = new RegExp(regex,"gi")
  
//   console.log(re)
//   //count the amount of times it matches with regex
//   let howMany = (word.match(re) || []).length
  
//   console.log(howMany)
//   //check if more than one
//   if(howMany <= 1){
  
//     finArr.push("(")
  
//   }else finArr.push(")")
  
  
//   }
  
// return finArr.join("")    
  
// }