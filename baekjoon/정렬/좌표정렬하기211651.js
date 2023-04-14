//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let T = Number(input[0]);
let data = [];
for (let i = 1; i <= T; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  data.push([x, y]);
}
function compare(a, b) {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
}
data.sort(compare);
let answer = "";
for (let i of data) {
  answer += `${i[0]} ${i[1]}\n`;
}
console.log(answer);
