function solution(numbers) {
  const length = numbers.length;
  numbers.sort((a, b) => a - b);

  return numbers[length - 2] * numbers[length - 1];
}
