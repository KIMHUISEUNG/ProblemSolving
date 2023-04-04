//입력값 정제 과정

const filePath =
  "/Users/kimhuiseong/Documents/problem/baekjoon/문자열/실버1-5/";
const fs = require("fs");
let [X, Y] = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split(" ");

//문제풀이 과정
function solution(X, Y) {
  let min = Y.length;

  for (let i = 0; i <= Y.length - X.length; i++) {
    let diff = 0;
    for (let j = 0; j < X.length; j++) {
      if (X[j] !== Y[i + j]) {
        diff++;
      }
    }
    min = Math.min(min, diff);
  }

  console.log(min);
}

solution(X, Y);

/**
 * let [X,Y] = require('fs').readFileSync('dev/stdin').toString().trim().split(" ");

  let min = Y.length;

  for (let i = 0; i <= Y.length - X.length; i++) {
    let diff = 0;
    for (let j = 0; j < X.length; j++) {
      if (X[j] !== Y[i+j]) {
        diff++;
      }
    }
    min = Math.min(min, diff);
  }

  console.log(min);
 */
