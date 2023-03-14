function solution(numbers) {
  const result = numbers.reduce(
    (accumulator, currValue) => accumulator + currValue,
    0
  );

  const answer = result / numbers.length;
  return answer;
}
