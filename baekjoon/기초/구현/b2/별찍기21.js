//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * input 값이 출력값의 가로 길이를 결정
 * input * 2 만큼의 세로 길이
 * 짝수 홀수로 구분하여 중첩 반복문을 작성
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split("\n");

let data = Number(input[0]);
let answer = "";
for (let i = 0; i < data * 2; i++) {
  if (i !== 0) {
    answer += "\n";
  }
  if (i % 2 == 0) {
    for (let j = 0; j < data; j++) {
      if (j % 2 === 0) {
        answer += "*";
      } else {
        answer += " ";
      }
    }
  } else {
    for (let j = 0; j < data; j++) {
      if (j % 2 === 0) {
        answer += " ";
      } else {
        answer += "*";
      }
    }
  }
}
console.log(answer);
