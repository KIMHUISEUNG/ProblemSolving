//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let n = input[0].split("").map(Number);

for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
