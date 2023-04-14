//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let T = Number(input[0]);
let data = [];
for (let i = 1; i <= T; i++) {
  data.push(input[i]);
}
let arr = [...new Set(data)];
function compare(a, b) {
  if (a.length != b.length) return a.length - b.length;
  else {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
}
arr.sort(compare);
let answer = "";
for (let i of arr) {
  answer += `${i}\n`;
}
console.log(answer);
