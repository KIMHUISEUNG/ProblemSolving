//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 3킬로그램 봉지를 최소한으로 옴기는 것이 5킬로그램 봉지를 최대한으로 옴기는 것
 * 주어진 설탕을 3킬로그램씩 지속으로 빼주면서 5킬로그램으로 딱 나누어 지도록 만든다.
 *
 * 최대의 5로 나누워 질 수 있도록 3을 빼면서 맞춤
 * 가장 큰 B를 찾는 것은 가장 작은 A를 찾는 문제로 이해할 수 있다.
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let flag = false;
let cnt = 0;
let data = Number(input[0]);

while (data >= 0) {
  // 더 이상 반복할 수 없을 때까지 반복
  //data이 0이 되었거나, data로 나누어 떨어지는 값인 경우
  if (data == 0 || data % 5 == 0) {
    cnt += parseInt(data / 5); // 5로 나눈 몫을 더하기
    console.log(cnt);
    flag = true;
    break;
  }
  data -= 3;
  cnt += 1;
}
if (!flag) {
  console.log(-1);
}
