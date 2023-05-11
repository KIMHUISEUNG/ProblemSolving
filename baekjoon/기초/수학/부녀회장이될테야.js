//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의
 * 합 만큼 사람들을 데려와 살아야 한다.
 * k층에 n호에 살고 있는 사람은 (k-1)층의 1~n호 까지의 사람들을 수의 합
 *
 * 1.표형태의 배열을 만든다.
 * 2.이항 정리 패턴을 발견 계산식을 만든다.
 *
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");

let testCase = Number(input.shift());

for (let tc = 1; tc <= testCase; tc++) {
  let k = Number(input.shift());
  let n = Number(input.shift());
  let house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    house[0][i] = i;
  }
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }

  console.log(house[k][n]);
}
