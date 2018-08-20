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


///