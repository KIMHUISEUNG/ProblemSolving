//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let n = Number(input[0]);
let sum = 0;
let cnt = 0;

while (n >= sum) {
  cnt++;
  sum += cnt;
}
console.log(cnt - 1);
