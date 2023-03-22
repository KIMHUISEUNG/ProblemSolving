function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    isMixNumber(i) ? count++ : null;
  }
  return count;
}

function isMixNumber(num) {
  let count = 0;
  for (let i = 1; i <= (num / 2) << 0; i++) {
    num % i === 0 ? count++ : null;
  }
  return count >= 2 ? true : false;
  //count가 2개 이상이면 나누어 지는 수가 2개 이상 즉 합성어
}
