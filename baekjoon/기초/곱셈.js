const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");

let a = input[0];
let b = input[1];

x_1 = b[2]; //일의자리
x_2 = b[1]; //십의자리
x_3 = b[0]; //백의자리

console.log(Number(a) * Number(x_1));
console.log(Number(a) * Number(x_2));
console.log(Number(a) * Number(x_3));
console.log(Number(a) * Number(b));
