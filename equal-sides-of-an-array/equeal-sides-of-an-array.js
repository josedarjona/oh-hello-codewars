function findEvenIndex(arr)
{
  //Code goes here!
  let theLeft = 0;
  let theRight = 0;
  let final;
  //just checking
  console.log("this is the arr-----" , arr)
  //loop through 1st position, through the position before last 
  //this way we always see a left side, and a right side
  for(let i = 1; i < arr.length - 1; i++){
  //just checking
//     console.log(arr.slice(0,i))
//     console.log(arr.slice(i+1))
 
    console.log("this is i----", i)
       //the left sides total, reduce gets the new sliced array at that postion,
    //and gets the sum of all numbers in sliced array
    theLeft = arr.slice(0, i).reduce((a, b) => a+b)
    console.log("this is the left of i----- " + theLeft)
    //do the same for the right
    theRight = arr.slice(i+1).reduce((a, b) => a+b)
    console.log("this is the right of i---- " + theRight);
  
    //return the index if left and right match, if not dont return anything
    if(theLeft === theRight){
      return final = i
      }
  }
  //was missing this for a while... just have to return -1 if 
  //nothing is returned after looping through the entire array
  return final = -1
}




///findIndex is cool! learn that
//
// function findEvenIndex(arr){
//   const sum = arr => arr.reduce((acc,cur)=> (acc+cur) ,0)
//   return arr.findIndex((val,idx) => sum(arr.slice(0,idx)) === sum(arr.slice(idx+1)))
// }