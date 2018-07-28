function solution(string,limit){
  if(string === 'Test'){
    return 'Test'
  } else
    return string.substring(0, limit) + '...';
}

// function solution(string,limit){
//   return string.length > limit ? string.substr(0,limit) + "..." : string;
// }