//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 아스키 코드값에 13을 더하고 해당 문자를 반환한다.
 * 숫자는 무시한다.
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
const input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");

let words = input[0];
let answer = "";

for (let i = 0; i < words.length; i++) {
  if ("A" <= words[i] && words[i] <= "Z") {
    let nums = String(words).charCodeAt(i) + 13;
    if (nums > 90) {
      nums -= 26;
    }
    answer += String.fromCharCode(nums);
  } else if ("a" <= words[i] && words[i] <= "z") {
    let nums = String(words).charCodeAt(i) + 13;
    if (nums > 122) {
      nums -= 26;
    }
    answer += String.fromCharCode(nums);
  } else {
    answer += words[i];
  }
}
console.log(answer);
