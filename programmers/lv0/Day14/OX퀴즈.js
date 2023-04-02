function solution(quiz) {
  var answer = [];
  let arr = [];
  let num = [];
  for (let index = 0; index < quiz.length; index++) {
    arr.push(quiz[index].split(" "));

    for (let j = 0; j < arr[index].length; j++) {
      if (arr[index][j] === "+") {
        num.push(Number(arr[index][j - 1]) + Number(arr[index][j + 1]));
      } else if (arr[index][j] === "-") {
        num.push(Number(arr[index][j - 1]) - Number(arr[index][j + 1]));
      }
    }

    if (Number(arr[index][4]) === Number(num[index])) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  }

  return answer;
}
