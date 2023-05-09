//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * d(75) = 75+7+5 = 87
 *
 * 셀프넘버를 찾기
 * n + (n/10) +(n%10)
 *
 * 생성자가 없는 셀프넘버 찾기
 * n - (n/10) - (n%10) = NaN
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");

function d(n) {
  let number = n;
  75;
  let result = 0;

  for (let i = 0; i < String(n).length; i++) {
    result += number % 10;
    number = Math.floor(number / 10);
  }
  return n + result;
}

const range = 10000;
let selfNumbers = Array(range + 1).fill(true);
for (let i = 0; i <= range; i++) {
  selfNumbers[d(i)] = false;
}

for (let i = 0; i < range; i++) {
  //selfNumbers true 인 것만 출력
  if (selfNumbers[i]) {
    console.log(i);
  }
}
