//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 12 23334 44455555666666
 * 문자열 생성
 * 입력받은 구간 검색
 * 구간의 합 출력
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
const input = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split(" ");

const solution = (arr) => {
  const numArr = [];
  for (let i = 1; i <= 1000; i++) {
    for (let j = 1; j <= i; j++) {
      numArr.push(i);
    }
    if (numArr.length >= arr[1]) break;
  }
  return numArr.slice(arr[0] - 1, arr[1]).reduce((x, y) => x + y, 0);
};

console.log(solution(input));
