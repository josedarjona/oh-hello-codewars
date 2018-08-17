function multiplicationTable(row,col){
  //your code here

  //final answer to be returned
  let finalTable = [];
  
  for (let i = 1; i <= row; i++) {
    let loopTable = []; //reset the table after each loop
    
    for (let t = 1; t <= col; t++) {
    
    
      //push the current i times the current t's so (1*1, 1*2, 1*3 then 2*1, 2*2, 2*3 etc..)
      loopTable.push(t * i); 
      
    }
    //push the array it created into the final loop, then repeat
    console.log("this is loop table", loopTable)
    finalTable.push(loopTable); 
  }
  //after looping through it all return finalTable w/ eveyrthig in it
  return finalTable;
}

// function multiplicationTable(row,col){
//   //your code here

//   //final answer to be returned
//   let finalTable = [];
  
//   for (let i = 1; i <= row; i++) {
//     let loopTable = []; //reset the table after each loop
    
//     for (let t = 1; t <= col; t++) {
    
    
//       //push the current i times the current t's so (1*1, 1*2, 1*3 then 2*1, 2*2, 2*3 etc..)
//       loopTable.push(t * i); 
      
//     }
//     //push the array it created into the final loop, then repeat
//     console.log("this is loop table", loopTable)
//     finalTable.push(loopTable); 
//   }
//   //after looping through it all return finalTable w/ eveyrthig in it
//   return finalTable;
// }




///learn filters, and others


///learn filters, and others