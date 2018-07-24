
// Given a number, return a string with dash'-'marks
//  before and after each odd integer, but do not begin or end 
//  the string with a dash mark.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'



function dashatize(num) {
  //get 'em
   if(isNaN(num)){
   return "NaN";
   }
  let arr = (Math.abs(num) + "").split("");
  //holder
  let result = [];
  if (arr.length === 1) {
    return (Math.abs(num) + "");
  }
  for (let i = 0; i < arr.length; i += 1) {
    // check if first #is odd, or not and push
    if (i === 0 && arr[i] % 2 !== 0) {
      result.push(arr[i], "-");
    }
    // check if previou is not odd or a -, push
    else if (i === arr.length - 1 && arr[i] % 2 !== 0 && result[result.length - 1] !== "-") {
      result.push("-", arr[i]);
    }
    // check if last number is odd or -, push
    else if (i === arr.length - 1 && arr[i] % 2 !== 0 && result[result.length - 1] === "-") {
      result.push(arr[i]);
    }
    // if both, push - num and -
    else if (arr[i] % 2 !== 0 && result[result.length - 1] !== "-") {
      result.push("-", arr[i], "-");
    }
    //just push num and - if not
    else if (arr[i] % 2 !== 0 && result[result.length - 1] === "-") {
      result.push(arr[i], "-");
    } else { //push just the number 
    
      result.push(arr[i]);
    }
  }//bring together
  return result.join("");
}
