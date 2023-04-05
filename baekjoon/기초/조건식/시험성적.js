const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let score = Number(input[0]);
let answer = [];

if (90 <= score && score <= 100) {
  answer.push("A");
} else if (80 <= score && score <= 89) {
  answer.push("B");
} else if (70 <= score && score <= 79) {
  answer.push("C");
} else if (60 <= score && score <= 69) {
  answer.push("D");
} else {
  answer.push("F");
}
console.log(answer[0]);
