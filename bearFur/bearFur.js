const bearFur = (bears) => {
  // return something

  //give stuff names tfor reading later
 let color1 = bears[0];
 let color2 = bears[1];
 let white = bears.includes("white");
 let black = bears.includes("black");
 let brown = bears.includes("brown");


//TEST FOR situations and if not matching any of them, return as unknown
//, because it is not any of those colors.
  if(color1 === color2){
    return color1;
  } else if(white && black){
    return 'grey';
  } else if(white && brown){
    return 'light brown';
  } else if(black && brown){
    return 'dark brown';
  } else {
    return 'unknown';
  }

};




