//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
const input = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split("\n");

let [data, jinsu] = input[0].split(" ").map(Number);

let answer = parseInt(data, 10).toString(jinsu);
console.log(answer.toUpperCase());
