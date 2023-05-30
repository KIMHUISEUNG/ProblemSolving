//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split("\n");

let data = input[0].split("-");
let result = [];
for (let i of data) {
  result.push(i[0]);
}
console.log(result.join(""));
// console.log(data);
