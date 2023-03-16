function solution(num_list) {
  let answer = [];
  let even = 0;
  let odd = 0;
  for (let i in num_list) {
    if (num_list[i] % 2 == 0) {
      even = even + 1;
    } else {
      odd = odd + 1;
    }
  }

  answer.push(even, odd);
  return answer;
}
