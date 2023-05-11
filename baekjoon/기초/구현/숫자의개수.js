//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * b2 구현 문제
 */

function palend(n) {
  if (n < 0) return -1;
  else if (n == 0) return 1;
  else return n + palend(n - 1);
}

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");

let answer = "";
let data = String(input[0] * input[1] * input[2]);
let arr = Array.from({ length: 10 }, (v, i) => (i = 0));

let dataArr = String(data).split("").map(Number);
for (let i = 0; i < arr.length; i++) {
  for (let k of dataArr) {
    if (k == i) {
      arr[i]++;
    }
  }
  if (i == 9) {
    answer += `${arr[i]}`;
    break;
  }
  answer += `${arr[i]}\n`;
}
console.log(answer);
