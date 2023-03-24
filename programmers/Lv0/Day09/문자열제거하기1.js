function solution(my_string) {
  //찾고자 하는 데이터 정규 표현식으로 선언.
  const regex = /^[0-9]+$/;

  let ans = [];

  //my_string배열 전체 순회.
  for (let i = 0; i < my_string.length; i++) {
    //문자열이 정규 표현식에 맞는지 test로 확인해서 true, false를 반환.
    if (regex.test(my_string[i])) {
      //정규 표현식에 맞는 [0-9]의 숫자이면 ans[]에 push함.
      ans.push(Number(my_string[i]));
    }
  }
  //오름차순으로 정령하여 반환
  return ans.sort((a, b) => a - b);
}
