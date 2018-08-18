


function accum(s) {
	// your code
  
//   console.log(typeof s)
  
//   let testArr = s.split("")
  
//   console.log(testArr)
  

//setting an emptyarr
  let emptyArr = []
  //loop through string
  for(let i = 0; i < s.length; i++){
  //set an empty string, make all of them lowercase
    let emptyS = ""
    let curr = s[i].toLowerCase()
    
    //create the string, repeating the correct 
    //amount of times then set the first value to uppercase
    emptyS = curr.repeat(i+1)
    emptyS = emptyS.charAt(0).toUpperCase() + emptyS.slice(1)

//     console.log(emptyS)
    //push into empty arr
    emptyArr.push(emptyS)

  }
  
  console.log(emptyArr)
  //join it into a string dahs seperated
  return emptyArr.join("-")
  
}



//my favorite one line answer and it makes a ton of sense.


//function accum(s) {
//   return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }