//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");

let n = Number(input[0]);
let km = input[1].split(" ").map(Number);
let cost = input[2].split(" ").map(Number);

//비오름차순이 되도록 정렬
let minCost = cost[0];
for (let i = 0; i < n; i++) {
  minCost = Math.min(minCost, cost[i]);
  cost[i] = minCost;
}

let answer = BigInt(0);
for (let i = 0; i < n - 1; i++) {
  answer += BigInt(km[i]) * BigInt(cost[i]);
}
console.log(String(answer));
