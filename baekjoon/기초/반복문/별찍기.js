//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let n = input[0].split("").map(Number);
let answer = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    answer += "*";
  }
  if (i === n - 1) break;
  answer += "\n";
}
console.log(answer);
