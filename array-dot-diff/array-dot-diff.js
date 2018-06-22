function array_diff(a, b) {

  //just checking
  console.log('a--', a)
  console.log('b--', b)
  
  //setting ans to a because later it will want this to be answer if b is empty array?w
  var ans = a;
  
  //map through b to see the value of b at each index
  b.map((bNum) => {
      
      //filter the value if it doesnt match with b and make it any number not equal to bnumber
      console.log("bNum",bNum)
      ans = a.filter((aNum) => aNum !== bNum)
    
  })
  
  //just checking
  console.log('this is ans', ans)
  return ans;
  
}