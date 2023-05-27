//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);

// 길이 N 만큼의 배열을 콜백함수로 v를 매개변수 삼아 인덱스 i를 순차적으로 초기화 0부터 시작하기 때문에 +1을 해주었음.
let baskit = Array.from({ length: N }, (v, i) => i + 1);

for (let tc = 1; tc <= M; tc++) {
  let [x, y] = input[tc].split(" ").map(Number);
  //console.log(x, y);
  //es6 스왑 문법 적용, x,y값은 0부터 시작하는 인덱스의 특성을 고려해 -1 해줌.
  [baskit[x - 1], baskit[y - 1]] = [baskit[y - 1], baskit[x - 1]];
  //console.log(baskit);
}
let result = baskit.join(" ");
console.log(result);
