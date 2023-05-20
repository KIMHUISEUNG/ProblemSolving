//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 *
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split("\n");

let testCase = input.shift();

const result = input.map((v) => {
  let [a, b] = v.split(" ");
  let data = 1;
  for (let i = 0; i < b; i++) {
    data = (data * a) % 10;
  }
  return data === 0 ? 10 : data;
});

console.log(result.join("\n"));
