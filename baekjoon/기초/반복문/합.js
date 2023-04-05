const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let n = input[0].split(" ").map(Number);
let total = 0;

for (let i = 1; i <= n; i++) {
  total += i;
}
console.log(total);
