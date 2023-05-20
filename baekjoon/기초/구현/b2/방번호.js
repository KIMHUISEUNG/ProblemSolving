//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 *
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("");

let set = 0;
//0으로 된 배열을 만들어 준다.
let arr = Array.from({ length: 10 }, () => 0);
//방 번호를 돌며 횟수를 체크한다.
for (let i = 0; i < input.length; i++) {
  arr[input[i]]++;
}
//만약 9가 존재한다면 6에 더해준다.
if (arr[9]) {
  arr[6] += arr.pop();
}
//홀수일 경우를 고려해 반올림해주면서 2로 나눠준다.
arr[6] = Math.ceil(arr[6] / 2);

//배열에서 가장 높은 숫자가 set의 개수임으로 최댓값을 찾아준다.
let max = Math.max(...arr);
console.log(max);
