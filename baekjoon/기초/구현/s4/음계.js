//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 *
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().trim();

const result = {
  "1 2 3 4 5 6 7 8": "ascending",
  "8 7 6 5 4 3 2 1": "descending",
}[input];

console.log(result || "mixed");
