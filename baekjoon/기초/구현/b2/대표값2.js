//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 *
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split("\n");

let arr = input.map(Number);
arr.sort((a, b) => a - b);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let result = [sum / 5, arr[2]];
console.log(result.join("\n"));
