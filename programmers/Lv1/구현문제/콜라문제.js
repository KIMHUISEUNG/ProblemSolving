//빈병의 개수 / 빈병추가 기준 * 빈병추가 개수
function solution(a, b, n) {
  let have = n;
  let answer = 0;
  while (have >= a) {
    answer += Math.floor(have / a) * b;
    have = Math.floor(have / a) * b + Math.floor(have % a);
  }
  return answer;
}
