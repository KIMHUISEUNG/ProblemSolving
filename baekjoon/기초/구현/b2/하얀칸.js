//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 0 1 0 1 0 1 0 1  홀수가 하얗
 * 1 0 1 0 1 0 1 0  짝수가 하얗
 *
 * 홀수의 홀수번째 칸에 말이 있는지 찾는다.
 * 짝수의 짝수번째 칸에 말이 있는지 찾는다.
 * 찾은 모든 말의 수를 출력한다.
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split("\n");

let count = 0;

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split("");
  if (i % 2 == 0) {
    for (let j = 0; j < arr.length; j++) {
      if (j % 2 === 0 && arr[j] === "F") {
        count++;
      }
    }
  } else if (i % 2 == 1) {
    for (let j = 0; j < arr.length; j++) {
      if (j % 2 === 1 && arr[j] === "F") {
        count++;
      }
    }
  }
}

console.log(count);
