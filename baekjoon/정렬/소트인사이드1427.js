//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 다른 풀이
 * let n = input[0];
let count = Array(10).fill(0);

for(let x of n){
  cnt[Number(x)]++;
}

let answer="";
for(let i = 9; i>=0;i--){
  for(let j=0; j<cnt[i]; j++){
    answer += i + "";
  }
}
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let data = input[0].split("").map(Number);
let answer = "";

data.sort((a, b) => b - a);
answer += data.join("");
console.log(answer);
