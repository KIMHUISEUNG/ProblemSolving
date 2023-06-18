//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
const input = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function calDivisor(n) {
  divisor = [];
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      divisor.push(i);
    }
  }
  return divisor;
}

let line = 0;
let bool = true;
let answer = "";
while (bool) {
  let divs = calDivisor(input[line]);

  let divsSum = 0;
  for (let i = 0; i < divs.length; i++) {
    divsSum += divs[i];
  }

  if (divsSum == input[line]) {
    answer += `${input[line]} = ` + divs.join(" + ") + "\n";
  } else {
    answer += `${input[line]} is NOT perfect.\n`;
  }

  line++;
  if (input[line] == -1) break;
}
console.log(answer);
