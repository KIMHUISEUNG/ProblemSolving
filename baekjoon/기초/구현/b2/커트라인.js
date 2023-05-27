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

let [N, k] = input[0].split(" ").map(Number);
let scores = input[1].split(" ");

scores.sort((a, b) => b - a);

let result = scores[k - 1];
console.log(result);
