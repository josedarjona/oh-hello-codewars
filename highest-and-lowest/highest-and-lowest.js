//////my first solution

function highAndLow(numbers){
  // splits array into a string of numbers
  var numbers = numbers.split(' ').map(Number)
 
  //setting the highest value and lowest
  var max = Math.max(...numbers)
  var min = Math.min(...numbers)

  //just checking
  console.log(max)
  console.log(min)
  //putting the two values together into an array and then joining it to make it a string
  return newArr = [max,min].join(' ')

   
}
