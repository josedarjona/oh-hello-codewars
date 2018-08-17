// recursive fib

function fib(n) {
  if (n < 2){
    return n
  }
  return fib(n - 1) + fib (n - 2)
}



///lat


function fib(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr[n]
}



/// memoization fib

var fibonacci = (function() {
  var memo = {};

  function f(x, n) {
    var value;

    memo[x] = memo[x] || {};

    if (x in memo && n in memo[x]) {
      value = memo[x][n];
    } else {
      if (n === 0 || n === 1)
        value = n;
      else
        value = f(x, n - 1) + f(x, n - 2);

      memo[x][n] = value;
    }

    return value;
  }

  return f;
})();



//compltetly understand fibonaccio and its variations


// // recursive fib

// function fib(n) {
//   if (n < 2){
//     return n
//   }
//   return fib(n - 1) + fib (n - 2)
// }



// ///lat


// function fib(n){
//   let arr = [0, 1];
//   for (let i = 2; i < n + 1; i++){
//     arr.push(arr[i - 2] + arr[i -1])
//   }
//  return arr[n]
// }



// /// memoization fib

// var fibonacci = (function() {
//   var memo = {};

//   function f(x, n) {
//     var value;

//     memo[x] = memo[x] || {};

//     if (x in memo && n in memo[x]) {
//       value = memo[x][n];
//     } else {
//       if (n === 0 || n === 1)
//         value = n;
//       else
//         value = f(x, n - 1) + f(x, n - 2);

//       memo[x][n] = value;
//     }

//     return value;
//   }

//   return f;
// })();
