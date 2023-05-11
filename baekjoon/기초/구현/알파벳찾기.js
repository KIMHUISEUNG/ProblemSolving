//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * const input = require("fs").readFileSync("/dev/stdin").toString();

const result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");

let str = input[0].split("");
let arr = Array.from({ length: 26 }, (x) => -1);

for (let i = 0; i <= str.length; i++) {
  let ascii = str[i].charCodeAt();
  if (str[i - 1] === str[i]) continue;
  arr[ascii - 97] += i + 1;
}
let answer = arr.join(" ");
console.log(answer);
