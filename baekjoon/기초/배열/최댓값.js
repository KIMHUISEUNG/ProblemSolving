//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let arr = [];
for (let i = 0; i < 9; i++) {
  arr.push(input[i]);
}
let minValue = arr.reduce((a, b) => Math.min(a, b));
let maxValue = arr.reduce((a, b) => Math.max(a, b));
console.log(maxValue);
console.log(arr.indexOf(String(maxValue)) + 1);

// -----------
// let mIndex = 0;
// let mValue = 0;
// for (let i = 0; i < 9; i++) {
//   let data = Number(input[i]);
//   if (data > mValue) {
//     mValue = data;
//     mIndex = i;
//   }
// }
// console.log(mValue);
// console.log(mIndex + 1);
