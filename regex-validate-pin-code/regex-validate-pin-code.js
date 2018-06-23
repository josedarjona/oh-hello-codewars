function validatePIN (pin) {
  //return true or false
  //check pin length if its 4 and set regex
  if (pin.length === 4) {
  
    var regex = /[\d]{4}/gm
  
  // check pin length if its 6 and set regex
  } else if (pin.length === 6){
    var regex = /[\d]{6}/gm
  }

    //make newpin depending on regex match
    var newPin = pin.match(regex)

    //just checking
    console.log('this is new pin', newPin)
    
    //if newpin is null or if the index === 0 or none, return false - not a valid pin,  else it's true - a valid pin
    if (newPin === null || newPin.index === 0) {
      return false;
    } else {
      return true;
    }

}