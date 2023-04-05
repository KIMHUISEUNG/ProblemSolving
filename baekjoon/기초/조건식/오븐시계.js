const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let hour = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);
let cook = Number(input[1]);

minute += cook;

while (minute >= 60) {
  hour += 1;
  minute -= 60;
  if (hour > 23) hour = 0;
  if (hour < 0) hour = 23;
}
console.log(hour, minute);

/**
 * 다른 풀이
 * 분으로 전부 바꾼 다음 몫과 나머지로 결과값을 도출
 * let [a,b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

let totalMinute = a * 60 b + c;
totalMinute %= 1440;
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + " " + minute);
 */
