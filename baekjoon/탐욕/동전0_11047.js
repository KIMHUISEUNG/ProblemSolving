//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * let [n, k] = input[0].split(" ").map(Number);
let coin = [];
let cnt = 0;
for (let i = 1; i <= n; i++) {
  coin.push(Number(input[i]));
}

for (let i = n - 1; i >= 0; i--) {
  cnt += parseInt(k / coin[i]);
  k %= coin[i];
}
console.log(cnt);

 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let [n, k] = input[0].split(" ").map(Number);
let coin = [];
let cnt = 0;
for (let i = 1; i <= n; i++) {
  coin.push(Number(input[i]));
}

for (let i = n - 1; i >= 0; i--) {
  cnt += parseInt(k / coin[i]);
  k %= coin[i];
}
console.log(cnt);
