// complete the function
function solution(string) {
    
  let finalString = []
  
  for (var i = 0; i < string.length; i++) {
  
    if(string[i] === string[i].toUpperCase()) {
      finalString.push(" " + string[i])
    } else finalString.push(string[i])
    
  }
  
  return finalString.join('');

  
}



//clever, practice replace/regex
///
// complete the function
// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));

// }