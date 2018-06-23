function duplicateCount(text){
  //...
  
  // bring all text to lower case
  text = text.toLowerCase();
  
  //giving a place to store things
  var theChar = []
  
    //loop through the text string
    for (var i = 0; i < text.length; i++) {
        // console logs just to check
       //console.log('thisis text[i] outside if', text[i])
       //    console.log('wuts this',text.indexOf(text[i]))
 
     // if the indexOf the texts current position is the not equal to i  
     if (text.indexOf(text[i])!== i) {                         //v
      //  console.log('just text',text)                           //v
     //console.log('thisis text[i]', text[i])                //v
     // and if the our storage doesnt include the char at  <<<<<
     // the current position, then push that into the storage
     if (!theChar.includes(text[i])) {
       theChar.push(text[i]); 
     } 
   } 
 }
 //andsince we just need to know how many letters repeat we just say the length of whats in the storage
 return theChar.length;

}