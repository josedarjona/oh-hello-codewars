function maxChars(str){

  const charMap = {};

  for( let char of str ) {

    if(charMap[char]){

      charMap[char]++


    } else {
      
      charMap[char] = 1

    }

  }

  console.log(charMap)

}


///find another way o do this

// function maxChars(str){

//   const charMap = {};

//   for( let char of str ) {

//     if(charMap[char]){

//       charMap[char]++


//     } else {
      
//       charMap[char] = 1

//     }

//   }

//   console.log(charMap)

// }