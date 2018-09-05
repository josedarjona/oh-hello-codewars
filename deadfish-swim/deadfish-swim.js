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
