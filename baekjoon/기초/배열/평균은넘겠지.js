//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  let data = input[i].split(" ").map(Number);
  let n = data[0];
  let summary = 0;
  for (let j = 1; j <= n; j++) {
    summary += data[j];
  }
  let average = summary / n;
  let cnt = 0;
  for (let j = 1; j <= n; j++) {
    if (data[j] > average) cnt++;
  }
  console.log(`${((cnt / n) * 100).toFixed(3)}%`);
}
