function solution(my_str, n) {
  var answer = [];
  let myStr = [];
  for (let index = 0; index < my_str.length; index++) {
    myStr.push(my_str[index]);
  }

  while (myStr.length > 0) {
    answer.push(myStr.splice(0, n).join(""));
  }

  return answer;
}
