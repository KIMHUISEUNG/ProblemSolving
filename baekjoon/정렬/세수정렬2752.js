//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
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
let data = input[0].split(" ").map(Number);
// data.sort((a, b) => a - b);
selectionSort(data);

let answer = "";
for (let i = 0; i < data.length; i++) {
  answer += data[i] + " ";
}
console.log(answer);
