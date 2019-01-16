// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.




function findShort(s) {

  let lengthOfWord = 0

  console.log(s)

  console.log(s.split(" "))
  //probably shouldnt name this let split
  let split = s.split(" ")

  console.log(split)

  let goThru = split.map((eachOne) => {

    return eachOne.length
  })
  // console.log("new length", lengthOfWord)
  console.log("gothru", goThru)

  lengthOfWord = Math.min(...goThru)

  console.log("new length", lengthOfWord)

  return lengthOfWord
}