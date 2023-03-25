function solution(s) {
  var answer = 0;
  //공백을 기준으로 배열 재구분
  let arr = s.split(" ");

  //배열 탐색
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Z") {
      answer -= Number(arr[i - 1]);
    } else {
      answer += Number(arr[i]);
    }
  }
  return answer;
}
