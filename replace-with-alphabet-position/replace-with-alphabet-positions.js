
function alphabetPosition(text) {

  let alpha = ['a','b','c','d','e',
  'f','g','h','i','j','k',
  'l','m','n','o','p','q',
  'r','s','t','u','v','w',
  'x','y','z']
  
  //to loop through each letter
  let arrText = text.split("");
  //to later set a value to it
  let currLett = ""
  //for final answer
  let finalArr = [] 
  
  //loop through the letters
  for (let i = 0; i < arrText.length; i++){
    
  //   console.log(arrText[i])
  //set value of current letter to lowercase so we can check if its part of alpha
    currLett = arrText[i].toLowerCase();
    
    //if it is part of alpha it should be > -1, -1 means it isnt part of it
    if(alpha.indexOf(currLett) > -1){
      //push that index value into the array +1 to get position of alphabet
      finalArr.push(alpha.indexOf(currLett) + 1)
    }
  
  
  }
  //return array spaced out in a string.
  return finalArr.join(' ')
  
  
  }



//read up on charcodeat
// function alphabetPosition(text) {
//   var result = "";
//   for (var i = 0; i < text.length; i++){
//     var code = text.toUpperCase().charCodeAt(i)
//     if (code > 64 && code < 91) result += (code - 64) + " ";
//   }

//   return result.slice(0, result.length-1);
// }
