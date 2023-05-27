//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 8진수를 10진수로 바꾼후 2진수로 바꾸는 전략 선택
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split("\n");

let data = input[0].split("").map(Number);
let answer = "";

const bin = {
  0: "000",
  1: "001",
  2: "010",
  3: "011",
  4: "100",
  5: "101",
  6: "110",
  7: "111",
};

const first = {
  0: "0",
  1: "1",
  2: "10",
  3: "11",
  4: "100",
  5: "101",
  6: "110",
  7: "111",
};

while (data.length > 1) {
  answer = bin[data.pop()] + answer;
}
console.log(first[data.pop()] + answer);

/* 형변환을 이용한 풀이
let data = Number(input[0]);
let dec = parseInt(data, 8);
let result = dec.toString(2);
if (result === 0) {
  console.log(0);
} else {
  console.log(result);
}
*/

/** 수학적 풀이
 * // let data = input[0].split("").map(Number);
// let num = 0;

// let line = 0;
// for (let i = data.length - 1; i >= 0; i--) {
//   let jinsu = 8 ** i;
//   num += data[line] * jinsu;
//   line++;
// }


// while (num > 0) {
//   let mok = num / 2;
//   let namoji = num % 2;
//   num = Math.floor(mok);
//   result.push(namoji);
// }
// console.log(result.reverse().join(""));
 */
