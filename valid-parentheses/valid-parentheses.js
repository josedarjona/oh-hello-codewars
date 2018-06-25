function validParentheses(parens){


  //if the closeArr is ever more than the openArr it returns false, stops map
  //continue checking until this happens, or let it go through and then at end check 
  //if still true or not

var openArr = []
var closeArr = []

parens.split('').map(paren => {

  if(closeArr.length > openArr.length){
      return false;
  }
  
  if(paren === ')'){
    closeArr.push(paren)
  } else {
    openArr.push(paren)
  }
})

return closeArr.length === openArr.length
 
}


///favorite solution from codewars
//readable, no tricks... i thought too much.
// function validParentheses(parens){
//   var n = 0;
//   for (var i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++;
//     if (parens[i] == ')') n--;
//     if (n < 0) return false;
//   }
  
//   return n == 0;
// }