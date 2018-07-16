function likes(names) {
  // TODO
  //for the length of it return whats asked, 
  //but by default return the final one so it passes tests when longer than 3(4 and higher)
  switch(names.length){
    case 0:
      return 'no one likes this';
    case 1:
      return names[0] + ' likes this';
    case 2:
      return names[0] + ' and ' + names[1] + ' like this';
    case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    default:
      return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }

}




///this one was just cute
// //  return {
//   0: 'no one likes this',
//   1: `${names[0]} likes this`, 
//   2: `${names[0]} and ${names[1]} like this`, 
//   3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
//   4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
// }[Math.min(4, names.length)]
// }