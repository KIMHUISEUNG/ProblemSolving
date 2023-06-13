//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 7로 계속 나누어서 나머지 값에 따라 요일을 부여
 * 31일 과 30일 또 2월의 28일을 예외처리 해야함
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
const input = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split("\n");

let [month, day] = input[0].split(" ").map(Number);

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const result = week[new Date(`2007-${month}-${day}`).getDay()];
console.log(result);
