function solution(numbers, direction) {
  if (direction === "right") {
    let rightMove = numbers.pop();
    numbers.unshift(rightMove);
  }
  if (direction === "left") {
    let leftMove = numbers.shift();
    numbers.push(leftMove);
  }
  const result = numbers;

  return numbers;
}
