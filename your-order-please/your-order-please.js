function order(words){
  //   console.log(words)
  //   console.log(words.split(" ").sort((a,b) => a-b))
    let arrWords = words.split(" ")
  
  
    //set an empty array to push into
    let finalArr = [];
    //loop through the array 
    for(let i = 1; i <= arrWords.length; i++) {
    //console.log(arrWords[i])
      //loop through each value in the array
      for(let j = 0; j < arrWords.length; j++){
        //if it includes the current positions value, push it, if not try next one
        if(arrWords[j].includes(`${i}`)){
        finalArr.push(arrWords[j])
        }
      }
    //just checking
    console.log(finalArr)
    
    }
    
    return finalArr.join(" ")
    
    
  }

  //fav solution, using regex match - cleaner and still simple

//   function order(words){
//   
//       return words.split(' ').sort(function(a, b){
//           return a.match(/\d/) - b.match(/\d/);
//        }).join(' ');
//     }