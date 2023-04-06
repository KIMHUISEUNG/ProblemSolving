//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 시작과 끝에 공백이 있을 수 있다했으니 trim()으로 문자열 양끝의 공백을 제거해준다.
 * 공백으로 구분된 문자열의 수를 세면 된다.
 * 공백 뿐이라면 숫자 0을 출력한다.
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let str = input[0].trim().split(" ");
if (str == "") {
  console.log(0);
} else {
  console.log(str.length);
}
