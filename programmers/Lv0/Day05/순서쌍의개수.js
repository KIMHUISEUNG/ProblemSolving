function solution(n) {
  // 20 :
  // 1 20
  // 2 10
  // 4 5
  let num1 = n;
  let answer = 0;

  for (let i = 1; i <= num1; i++) {
    if (num1 % i == 0) {
      answer += 1;
    }
  }

  return answer;
}
