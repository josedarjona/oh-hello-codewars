function order(words){
  //   console.log(words)
  //   console.log(words.split(" ").sort((a,b) => a-b))
    let arrWords = words.split(" ")
  
  
    
    let finalArr = [];
    
    for(let i = 1; i <= arrWords.length; i++) {
    //console.log(arrWords[i])
      for(let j = 0; j < arrWords.length; j++){
        if(arrWords[j].includes(`${i}`)){
        finalArr.push(arrWords[j])
        }
      }
      
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