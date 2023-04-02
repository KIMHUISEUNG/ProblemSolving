function solution(n, numlist) {
  var answer = [];

  // for(let index=0; index<numlist.length; index++){
  //     if(Number(numlist[index])%n===0){
  //         answer.push(numlist[index]);
  //     }
  // }
  numlist.forEach((item) => {
    if (Number(item) % n === 0) {
      answer.push(item);
    }
  });

  return answer;
}
