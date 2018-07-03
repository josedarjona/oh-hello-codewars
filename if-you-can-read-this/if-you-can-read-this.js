function to_nato(words) {
  // Go code
  
  //making the list from nato alph wiki
  let phonAlph = {
    A: "Alfa",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliett",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "Xray",
    Y: "Yankee",
    Z: "Zulu",
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
    "0": "Zero"
  };

  //setting an empty array to push into, and making words loopable, with values we can use
  let finalArr = [];
  wordsArr = words.toUpperCase().split("")

//  console.log("this is wordsArr", wordsArr)
  //loop through the wordsarr, and for each letter, check it matches a value
  //if it does, change it to that, if not a space, but it isnt undefined, push that char into the 
  //the wordsarr (ie: !?,./ etc) had this part failing for a bit
  wordsArr.map(char => {
      if (char !== " ") {
        val = phonAlph[char];
        if (val !== undefined){
          finalArr.push(val)
        } else finalArr.push(char)
      }
    });
    
    //checking final arr
    console.log(finalArr)
  return finalArr.join(" ");
}


//the one liner solution after posting mine that i liked most
//
// function to_nato(words) {
//   return words.split('').filter(c => c !== ' ').map(c => table[c.toUpperCase()] || c).join(' ');
// }
//would probably space it out this way - just to read it better
// function to_nato(words) {
//   return words
//     .split('')
//     .filter(c => c !== ' ')
//     .map(c => table[c.toUpperCase()] || c)
//     .join(' ');
// }