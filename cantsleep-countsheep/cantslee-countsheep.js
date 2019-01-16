// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur:
//  "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
  //your code here
  console.log(num)
  //initialize the murmur string
  let murmur = ''
  
  for(let i = 0; i < num; i++){
    //for each count up until is finally not less than num, 
    //push this string into the murmur
    murmur += `${i+1} sheep...`
  
  }
  
  return murmur
}


