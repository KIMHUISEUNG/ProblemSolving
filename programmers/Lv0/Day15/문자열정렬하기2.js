function solution(my_string) {
  let mystr = my_string;
  let toLowerStr = mystr.toLowerCase();
  let answer = [];
  for (let key of toLowerStr) {
    answer.push(key);
  }
  answer.sort();
  return answer.join("");
  //return my_string.toLowerCase().split("").sort().join("")
}
