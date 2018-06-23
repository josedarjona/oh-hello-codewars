function longestConsec(strarr, k) {
  // your code
var str = ''
//
  //make sure its not empty, that the number of strings to check isnt
  //longer then array, and that the value isnt less than 0, if it is
  //return empty string
 if (strarr.length === 0 || k > strarr.length || k <= 0) {
  return "";
}
  //loop through, and change str only if it is bigger 
  //then last two arrays joined together
  for (var i= 0; i < strarr.length; i++) {
  var currentStr = strarr.slice(i, k+i).join('');
  //just chekcing, actually breaks test
//     console.log(currentStr)
  if (currentStr.length > str.length) {
    str = currentStr;
  }
}
return str;
}
  