//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 1234567로 나누라는 의미는 "자, 이 문제는 int 자료형이 버티질 못해. 그래서 1234567로 나눠서 문제를 해결해봐!"라는 말이다
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().trim();

let n = Number(input);

function pabo(n) {
  let fNum = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fNum[i] = (fNum[i - 1] + fNum[i - 2]) % 1234567;
  }
  return fNum[n];
}
console.log(pabo(n) % 1234567);
