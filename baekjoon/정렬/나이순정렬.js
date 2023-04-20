//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let T = Number(input[0]);
let arr = [];
for (let i = 1; i <= T; i++) {
  let age = input[i].split(" ")[0];
  let name = input[i].split(" ")[1];
  arr.push([Number(age), name]);
}

arr.sort((a, b) => a[0] - b[0]);
let answer = "";

for (let x of arr) answer += `${x[0]} ${x[1]}\n`;
console.log(answer);
