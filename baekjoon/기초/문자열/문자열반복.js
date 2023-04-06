//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * charAt(index)
 * index 번째의 문자를 얻어 올 수 있다.
 * repeat(number)
 * number 번 만큼 곱한 문자열이 만들어 진다.
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let T = Number(input[0]);
let answer = "";
for (let t = 1; t <= T; t++) {
  let repit = input[t].split(" ")[0];
  let str = [...input[t].split(" ")[1]];
  for (let i of str) {
    answer += i.repeat(repit);
  }
  answer += "\n";
}
console.log(answer);
