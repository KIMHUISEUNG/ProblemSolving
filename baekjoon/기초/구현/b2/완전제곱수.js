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

let start = Number(input[0]);
let end = Number(input[1]);

let i = 1;
let result = [];

while (true) {
  if (i ** 2 >= start && i ** 2 <= end) {
    result.push(i ** 2);
  } else if (i ** 2 > end) {
    break;
  }
  i++;
}
result.sort((a, b) => a - b);

if (result.length === 0) {
  console.log("-1");
} else {
  console.log(result.reduce((acc, cur) => acc + cur, 0));
  console.log(result[0]);
}
