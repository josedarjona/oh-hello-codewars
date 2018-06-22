function isValidWalk(walk) {
  
//used to store how many times went in another direction  
var direction = {
n: 0,
s: 0,
w: 0,
e: 0,


}
//loop through the walk, and add into the object 
for (var i = 0; i < walk.length; i++) {
 if ( walk[i] === 'n' ) {
  direction.n += 1;
 } else if ( walk[i] === 's') {
   direction.s += 1;
 } else if ( walk[i] === 'w') {
   direction.w += 1;
 } else if ( walk[i] === 'e') {
   direction.e += 1;
 }
}

//just checking
console.log(direction)

//checks if either amounts arent equal to each other and sets result as false
if (direction.n != direction.s || direction.e != direction.w) {
  return false;
  //checks if either have the same amount and that length fo walk is 10
  } else if (walk.length === 10 && direction.n === direction.s 
|| walk.length === 10 && direction.e === direction.w){
  return true;
} else {
  return false;
}

  



  
}