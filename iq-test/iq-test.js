function iqTest(numbers){
  // ...
//just checking
console.log(numbers)
//turning numbers string into an array for use later
var origArray = numbers.split(' ')
//just checking
console.log(origArray)

//making arrays for each odd and even numbers in the numbers string
var evenStr = numbers.split(' ').filter(num => (num % 2) === 0).join(' ')
var oddStr = numbers.split(' ').filter(num => (num % 2) === 1).join(' ')


//just checking
console.log("even:", evenStr, "----- odd:", oddStr)


//setting a 0 value to the spot of the "different" number
var theSpot = 0

//checks which is the array with smaller length (will just be 1)
//finds index of array with just 1 value in the original array
//gives us that position, and we add 1 to it because of this being counted with
//for a real iq test
  if (evenStr.length>oddStr.length) {

    theSpot = origArray.indexOf(oddStr)

    return theSpot + 1;
  
  } else {

    theSpot = origArray.indexOf(evenStr)

    return theSpot + 1;

  }

}


//fav solution
//i must practice using reduce

// function iqTest(numbers){
//   var nums = numbers.split(" ").map(x => x % 2);  
//   var sum = nums.reduce((a,b) => a + b);  
//   var target = sum > 1 ? 0 : 1;
  
//   return nums.indexOf(target) + 1;
// }

