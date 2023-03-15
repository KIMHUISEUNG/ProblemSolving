function solution(money) {
  const coffe = 5500;
  const num1 = Math.floor(money / coffe);
  const num2 = Math.floor(money % coffe);

  var answer = [num1, num2];

  return answer;
}
