//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 수정렬하기와 같은 문제이지만 병합정렬이나 sort() 함수 가 아닌 정렬로 풀수없는 범위
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let T = Number(input[0]);
let arr = [];
for (let t = 1; t <= T; t++) {
  arr.push(Number(input[t]));
}
arr.sort((a, b) => a - b);
let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}
console.log(answer);
