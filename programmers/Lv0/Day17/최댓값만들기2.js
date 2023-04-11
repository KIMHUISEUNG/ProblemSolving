function solution(numbers) {
  const BruteForce = [];
  // 모든 경우의 수를 구함
  for (let i = 0; i < numbers.length; i++) {
    //효율적인 탐색을 위해(중복x) j = i 부터 탐색
    for (let j = i; j < numbers.length; j++) {
      if (i !== j) {
        BruteForce.push(numbers[i] * numbers[j]);
      }
    }
  }
  console.log("BruteForce", BruteForce);
  //최댓값 출력
  return Math.max(...BruteForce);
}
