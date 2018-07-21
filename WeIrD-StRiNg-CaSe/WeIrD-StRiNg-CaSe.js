// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
// and returns the same string with all even indexed characters in each word 
// upper cased, and all odd indexed characters in each word lower cased. 
// The indexing just explained is zero based, so the zero-ith index is even, 
// therefore that character should be upper cased.

// // The passed in string will only consist of alphabetical characters and 
// spaces(' '). Spaces will only be present if there are multiple words. 
// Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"


function toWeirdCase(string) {
  //TODO
  //splitting the string into an array
  var strArr = string.split(' ')
  //setting a temp array
  var newArr = []
  //setting a temp string
  var temp = ''

  //var final = ''


  //mapping through the array
  strArr.map(eachone => {
    //at each index for the length of eachone
    for (var i = 0; i < eachone.length; i++) {

      //check if that index is odd or even
      if ((i % 2) == 1) {
        //bring to lowercase if odd
        temp += eachone[i].toLowerCase()


      } else {
        //bring to uppercase if even
        temp += eachone[i].toUpperCase()

      }

    }
    //push temp into array
    newArr.push(temp)
    //clear temp and start over for next one
    temp = ''
    //just checking

    //         console.log(newArr)
  })

  //join the array with a space, and return a string of the array

  //all together
  console.log(newArr.join(' '))
  return newArr.join(' ')


}