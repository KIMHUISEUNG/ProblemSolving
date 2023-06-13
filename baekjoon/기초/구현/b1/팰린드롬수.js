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

for (let i = 0; i < input.length; i++) {
  if (input[i] == 0) break;
  let reverseStr = input[i].split("").reverse().join("");
  let answer = input[i] === reverseStr ? "yes" : "no";

  console.log(answer);
}
