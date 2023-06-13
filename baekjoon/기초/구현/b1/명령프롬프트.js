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

let n = Number(input[0]);
const inputFileName = [];

if (n === 1) {
  console.log(input[1]);
}

for (let i = 1; i <= n; i++) {
  inputFileName.push(input[i]);
}

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr[0].length; i++) {
    let temp = arr[0][i];
    let num = 0;
    for (let j = 0; j < arr.length; j++) {
      if (temp !== arr[j][i]) {
        answer.push("?");
        break;
      } else {
        num++;
      }
      if (num === arr.length) answer.push(temp);
    }
  }
  console.log(answer.join(""));
}

solution(inputFileName);
