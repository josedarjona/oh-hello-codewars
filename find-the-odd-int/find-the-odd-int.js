function findOdd(A) {
  //happy coding!
console.log(A)
  
let testObj = {}

  for(let i = 0; i < A.length; i++){
    if(testObj[A[i]] >= 1){
      testObj[A[i]]++
    } else testObj[A[i]] = 1
  }
let ans = parseInt(Object.keys(testObj).find(key => (testObj[key] % 2) != 0))

return ans
  

}


///the one liner i understood the most, and was very simple

// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }