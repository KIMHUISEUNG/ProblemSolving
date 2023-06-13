//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 *
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
const input = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split("\n");

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const solution = (arr) => {
  let n = Number(arr[0]);
  let answer = "";
  for (let i = 1; i <= n; i++) {
    answer += `${reverseString(arr[i]).split(" ").reverse().join(" ")}\n`;
  }
  return answer;
};

console.log(solution(input));
