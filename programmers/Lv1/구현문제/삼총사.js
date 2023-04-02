function solution(number) {
  //3개의 정수 선택 (배열 탐색)
  //3개의 정수의 합이 0 이면 '삼총사' 라고함.
  //'삼총사'조건에 부합하면 count 1증가.
  const arrLength = number.length;
  let count = 0;

  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      for (let k = j + 1; k < arrLength; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          count++;
        }
      }
    }
  }
  return count;
}
