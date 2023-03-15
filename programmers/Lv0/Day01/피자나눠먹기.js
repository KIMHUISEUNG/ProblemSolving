function solution(n) {
  var answer = n / 7;
  if (answer == 0) answer = 1;
  if (n % 7 != 0) answer = answer + 1;

  return Math.floor(answer);
}
