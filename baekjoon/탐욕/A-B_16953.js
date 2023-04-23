//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let [a, b] = input[0].split(" ").map(Number);
let flag = false;
let result = 1;

while (a <= b) {
  if (a == b) {
    flag = true;
    break;
  }
  //2로 나누어 떨어지는 경우
  if (b % 2 == 0) b = parseInt(b / 2);
  //그렇지 않고, 일의 자릿수가 1인 경우
  else if (b % 10 == 1) b = parseInt(b / 10);
  else break;
  result++;
}

if (flag) console.log(result);
else console.log(-1);
