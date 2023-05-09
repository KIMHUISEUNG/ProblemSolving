//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let str = input[0].toLowerCase();
const result = new Array(26).fill(0);
let isSame = false;

for (let i = 0; i < str.length; i++) {
  result[str.charCodeAt(i) - 97]++;
}

const max = Math.max(...result);
const index = result.indexOf(max);

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    isSame = true;
    break;
  }
}
console.log(isSame ? "?" : String.fromCharCode(index + 65));
