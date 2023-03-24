function solution(my_string) {
  //데이터를 담을 배열 선언.
  let arr = [];
  //정규 표현식으로 원하는 데이터 선언.
  let regex = /[0-9]+/;

  for (let i = 0; i < my_string.length; i++) {
    //test로 정규 표현식에 해당하는 데이터 찾음.
    if (regex.test(my_string[i])) {
      arr.push(Number(my_string[i]));
    }
  }
  //색출된 데이터 배열을 덧셈 함수에 넘겨 값을 계산.
  return sumNumber(arr);
}

function sumNumber(numArr) {
  let result = 0;
  for (let i = 0; i < numArr.length; i++) {
    result += numArr[i];
  }
  return result;
}
