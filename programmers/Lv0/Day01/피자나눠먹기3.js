function solution(slice, n) {
  const answer = Math.floor((n - 1) / slice) + 1;
  return answer;
}
