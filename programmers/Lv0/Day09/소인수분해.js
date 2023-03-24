function solution(n) {
  let result = [];
  //소인수분해 기본값
  let divisor = 2;
  //n이 2이상일때만 소인수 분해.
  while (n >= 2) {
    //2부터 나누어 지는지 판단
    if (n % divisor === 0) {
      //나누어지면 result배열에 추가
      result.push(divisor);
      //n/divisor을 하여 실제 나누어진 값 n을 반영
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return [...new Set(result)];
}
