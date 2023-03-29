function solution(numbers) {
  let numberArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  if (numbers.length <= 50) {
    for (let i = 0; i < numberArr.length; i++) {
      //join(i)가 0,1,2,3,4... 로 배열의 문자열과 매핑되는 상황
      numbers = numbers.split(numberArr[i]).join(i);
    }
  }
  return Number(numbers);
}
