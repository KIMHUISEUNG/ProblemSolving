function solution(my_string, letter) {
  var answer = [];
  for (let i in my_string) {
    if (my_string[i] !== letter) {
      answer.push(my_string[i]);
    }
  }
  return answer.join("");
}
