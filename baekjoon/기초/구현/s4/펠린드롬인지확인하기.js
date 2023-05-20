//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 *
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");

let str = input[0].split("");
let reStr = str.slice().reverse();

if (str.join("") === reStr.join("")) console.log(1);
else console.log(0);
