function solution(rsp) {
  var answer = [];
  for (let i in rsp) {
    if (rsp[i] === "2") {
      answer.push(0);
    } else if (rsp[i] === "0") {
      answer.push(5);
    } else if (rsp[i] === "5") {
      answer.push(2);
    }
  }
  return answer.join("");
}
//가위 2
//바위 0
//보 5
