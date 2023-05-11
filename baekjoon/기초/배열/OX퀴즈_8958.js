//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * O하나당 점수 1 점
 * O이 연속되면 연속 되는 횟수마다 점수 +1점 증가
 * 1. X를 기준으로 배열 만들기
 * 2. O의 개수를 분류하도록 2차원 배열 만들어 각 배점 구하기
 */

function palend(n) {
  if (n < 0) return -1;
  else if (n == 0) return 1;
  else return n + palend(n - 1);
}

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");

let testCase = Number(input[0]);
for (let tc = 1; tc <= testCase; tc++) {
  let score = input[tc].split("X");
  let finScore = [];
  let answer = 0;
  for (let i = 0; i < score.length; i++) {
    let pal = palend(score[i].length);
    finScore.push(pal - 1);
  }
  for (let i of finScore) {
    answer += i;
  }
  console.log(answer);
}
