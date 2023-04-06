function solution(n) {
  let cnt = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i * i === n) {
      cnt += 1;
      return 1;
    }
  }
  if (cnt != 1) {
    return 2;
  }
}
