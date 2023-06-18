//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
const input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");

function Rev(n) {
  let revN = String(n).split("").reverse().join("");
  return Number(revN);
}

let [x, y] = input[0].split(" ").map(Number);
let X = Rev(x);
let Y = Rev(y);

let cal = X + Y;
let answer = Rev(cal);
console.log(answer);
