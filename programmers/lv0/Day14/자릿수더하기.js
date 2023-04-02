function solution(n) {
  var answer = 0;
  let myfunc = (item) => Number(item);

  let arr = Array.from(String(n), myfunc);
  arr.forEach((item) => {
    answer += item;
  });

  return answer;
}
