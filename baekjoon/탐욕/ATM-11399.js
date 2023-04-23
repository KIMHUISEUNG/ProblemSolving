//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
let answer = 0;
let total = 0;
for (let i = 0; i < n; i++) {
  total += arr[i];
  answer += total;
}
console.log(answer);
