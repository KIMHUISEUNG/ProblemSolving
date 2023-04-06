//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");

let [a, b] = input[0].split(" ");
let sangsuA = [...a].reverse().join("");
let sangsuB = [...b].reverse().join("");

console.log(Math.max(sangsuA, sangsuB));
