//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 문제 범위가 선택정렬 사용 가능 범위
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; //ES6+ 스왑
  }
}
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
