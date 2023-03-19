function solution(n) {
  let arr = [];
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  for (let i in arr) {
    if (arr[i] % 2 == 0) {
      answer += arr[i];
    }
  }

  return answer;
}
