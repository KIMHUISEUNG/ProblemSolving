//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 1 2 3 4 5 6 7 8 9 A  B C D E F
 * 1 2 3 4 5 6 7 8 9 10
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split("\n");

let n = input[0];
let result = parseInt(n, 16);
console.log(result);
