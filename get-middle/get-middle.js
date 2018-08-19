function getMiddle(s)
{
  //Code goes here!
  
  console.log(s)
  
  let ans = ""

  if((s.length % 2) === 0){
  
  ans = s.charAt((s.length / 2)-1) + s.charAt(s.length/2)
  
  } else ans = s.charAt((s.length / 2))
  
  return ans
}