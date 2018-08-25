function descendingOrder(n) {
  //...
  
    
    //just checking
  console.log(n.toString().split("").sort().reverse().join(""))
  
  
  //make sure it stays as an int, turn n to a string, split it into an array,
  //sort it low to high, then reverse it, then join the array back into a string
  let final = parseInt(n
                        .toString()
                        .split("")
                        .sort()
                        .reverse()
                        .join("")
                        )
  
  return final
  
  
}


//with objcts, nice lesson
//var obj = getWordFrequency(words);
//var array = Object.keys(obj).map(function(key){
//     return {word: key, count: obj[key]};
//});
//array.sort(function (a,b){ return b.count - a.count});