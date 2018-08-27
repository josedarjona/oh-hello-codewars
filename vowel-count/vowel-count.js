function getCount(str) {
  var vowelsCount = 0;
  var vowels = 'aeiou'
  
  // enter your majic here
  
  vowelsCount = str.split("").filter((el) => vowels.includes(el)).length
  
  
  return vowelsCount;
}