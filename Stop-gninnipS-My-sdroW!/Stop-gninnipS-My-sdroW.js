function spinWords(str){
  //TODO Have fun :)
  //split the string
  const words = str.split(' ');
  
  //for each one longer than 5, split it, reverse its order, and join it.
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      words[i] = words[i].split('').reverse().join('')
     
    }
  }
  //join it all and return 
  return words.join(' ')
  
}



//practice using this ? and :

// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }