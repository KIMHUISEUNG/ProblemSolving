function solution(my_string, n) {
  var answer = [];
  for (let i in my_string) {
    for (let j = 0; j < n; j++) {
      answer.push(my_string[i]);
    }
  }
  return answer.join("");
}
