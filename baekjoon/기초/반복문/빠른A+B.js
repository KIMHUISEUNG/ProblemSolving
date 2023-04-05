//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let n = Number(input[0]);
let answer = "";
for (let i = 1; i <= n; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  answer += a + b + "\n";
}
console.log(answer);
