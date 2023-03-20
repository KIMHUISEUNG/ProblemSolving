function solution(balls, share) {
  let answer = facto(balls) / (facto(balls - share) * facto(share));
  return answer;
}
function facto(num) {
  let result = BigInt(1);
  for (let i = 2; i <= num; i++) {
    result *= BigInt(i);
  }
  return result;
}

//factorial 계산 시 number로 계산을 하면 큰 수로 연산을 하게 될 경우 정확한 값이 출력되지 않는 현상이 발생한다.
