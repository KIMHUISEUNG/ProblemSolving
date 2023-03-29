//indexOf로 배열의 처음 탐색된 item 위치 값과
//lastIndexOf로 마지막 부터 탐색된 item 위치 값이 같다면, 한 번만 등장한 문자라고 할 수 있다.
function solution(s) {
  let ans = [];

  let sArr = s.split("");

  for (let i = 0; i < sArr.length; i++) {
    if (s.indexOf(sArr[i]) === s.lastIndexOf(sArr[i])) {
      ans.push(sArr[i]);
    }
  }

  //     sArr.forEach((item) => {
  //         if(s.indexOf(item) === s.lastIndexOf(item)){
  //             ans.push(item);
  //         }
  //     })

  return ans.sort().join("");
}
