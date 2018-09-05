// Return the output array, and ignore all non-op characters
function parse( data )
{

console.log(typeof data)


//creating the array and counter
let finArr = []
let counter = 0
//loop through the string
for(let i = 0; i < data.length; i++){

  console.log(data[i])
  //if else to check different cases, and do specific task for each
  if(data[i] === "i"){
    counter++
  } else if(data[i] === "d"){
    counter--
  } else if(data[i] === "s"){
    counter = counter*counter
  } else if(data[i] === "o"){
    finArr.push(counter)
  }


}

console.log(counter, finArr)

return finArr
  
}


//practice reduce!!


//function parse(data) {
//   let res = [];

//   data.split('').reduce((cur, s) => {
//     if (s === 'i') cur++;
//     if (s === 'd') cur--;
//     if (s === 's') cur = Math.pow(cur, 2);
//     if (s === 'o') res.push(cur);
    
//     return cur;
//   }, 0);
  
//   return res;
// }