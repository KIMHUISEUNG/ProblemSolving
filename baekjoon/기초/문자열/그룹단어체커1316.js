//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 그룹단어 인지 판별하기
 * 1. 단어가 연속해서 나타나면 그룹단어 이다.
 * 2. 단어가 떨어져서 나타나면 그룹단어가 아니다.
 * 3. data[i] != data[i+1] 다음 수가 같지않을 때만 확인한다.
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");

function check(data) {
  let setData = new Set(data[0]);
  //h 와 a가 같지 않고 셋에 a가 있지 않다면 fal
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] != data[i + 1]) {
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}

let n = Number(input[0]);
let summary = 0; //그룹단어의 개수
for (let i = 1; i <= n; i++) {
  let data = input[i];
  if (check(data)) summary += 1;
}
console.log(summary);
