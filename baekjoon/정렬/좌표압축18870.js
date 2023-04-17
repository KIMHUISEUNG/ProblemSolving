//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let T = Number(input[0]);
let data = input[1].split(" ").map(Number);

//집합으로 변경해 중복 값을 없앤 뒤에 다시 배열로 변환
let arr = [...new Set(data)];
arr.sort((a, b) => a - b);

//0부터 차례대로 매핑 수행
let myMap = new Map();
for (let i = 0; i < arr.length; i++) {
  myMap.set(arr[i], i);
}

let answer = "";
for (x of data) {
  answer += myMap.get(x) + " ";
}
console.log(answer);
