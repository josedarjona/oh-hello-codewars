function powerSumDigTerm(n) {
  // your code
  
  
  
  //this will create some results, to use 
  let res = [];
  for (let i = 2; i <= 100; i++)
  {
      for (let j = 2; j <= 9; j++)
      {
          let s = Math.pow(i, j).toString();
          let sum = 0;
          for (let k = 0; k < s.length; k++)
              sum += parseInt(s[k], 10);
          if (sum == i)
              res.push(parseInt(s,10));
      }
  }
  res = res.sort((a,b)=>a-b);

  // will return the result needed for kata
  return res[n-1];
  
  
  
}