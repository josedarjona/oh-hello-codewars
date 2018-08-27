function getCount(str) {
  var vowelsCount = 0;
  var vowels = 'aeiou'
  
  // enter your majic here
  
  vowelsCount = str.split("").filter((el) => vowels.includes(el)).length
  
  
  return vowelsCount;
}


//one line regex

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }



// //for loop, readability
// function getCount(str) {
//   var vowelsCount = 0;
//   var vowels = ["a","e","i","o","u"];
//   for(var i = 0;i < str.length;i++){
//     for(var j=0;j<vowels.length;j++){
//       if(str[i] === vowels[j]){
//         vowelsCount++;
//       }
//     }
//   }
  
//   return vowelsCount;
// }