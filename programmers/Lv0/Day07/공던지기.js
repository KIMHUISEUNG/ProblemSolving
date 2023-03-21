function solution(numbers, k) {
  // numbers는 친구들
  // k는 공을 던지는 횟수

  const length = numbers.length;
  return numbers[(2 * (k - 1)) % length];
}
