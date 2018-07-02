function rowSumOddNumbers(n) {
	// TODO
console.log(n)
  
const tempArr = []

let endValue = (n * (n+1) - 1)

console.log('end value', endValue)

for (i = 0; i < n; i++){
  
 tempArr.push(endValue)
 endValue -= 2
 
}

  console.log("temp arr", tempArr)
  
  return tempArr.reduce((total, currentValue) => total+currentValue, 0)
  
}






// the solution i wish i realized 
// each row is just the number cubed :/
//
// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }