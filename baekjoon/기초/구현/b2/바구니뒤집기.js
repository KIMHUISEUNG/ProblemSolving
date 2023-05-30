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

const [N, M] = input[0].split(" ").map(Number);

let basket = Array.from({ length: N }, (v, i) => i + 1);

for (let i = 1; i <= M; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  let temp = [];

  for (let j = a - 1; j < b; j++) {
    temp.push(basket[j]);
  }
  temp.reverse();
  basket.splice(a - 1, b - a + 1, ...temp);
}
console.log(basket.join(" "));
