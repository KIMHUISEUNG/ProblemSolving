//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 1. 최댓값 = M 을 고른다.
 * 2. 모든 점수를 '점수/M*100'으로 수정.
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let subject = Number(input[0]);
let data = input[1].split(" ").map(Number);

let M = Math.max(...data);
let summary = [];
for (let i = 0; i < data.length; i++) {
  summary.push((data[i] / M) * 100);
}
console.log(summary.reduce((a, b) => a + b) / subject);
