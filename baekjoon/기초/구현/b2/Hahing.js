//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 */

const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
const input = fs
  .readFileSync(`${filePath}example.txt`)
  .toString()
  .trim()
  .split("\n");

let l = Number(input[0]);
let string = input[1];

function hashFunc() {
  const M = 1234567891;
  let hash = 0;
  let r = 1;

  for (let i = 0; i < l; i++) {
    // 문자열의 첫번째 부터 탐색하여  charCodeAt()으로 숫자 에 - "a".charCodeAt() 즉 97 임으로
    // a를 만났을 때 0이 되니 +1 을 한것.
    hash += (string[i].charCodeAt() - "a".charCodeAt() + 1) * r;
    //처음 31^0 곱해주고 난 후 31씩 계속 제곱 만들어줘야 하기 때문에 r에 계속 31씩 곱해준다.
    r *= 31;
    //r이 M보다 커지는 것을 막기 위해 r을 곱해준다음 나눈 나머지로 r을 바꿔준다.
    r %= M;
    //문제에 나와있는 해싱함수 식에서 마지막에 시그마 더해준 후 M으로 나눈 나머지를 hash로 둬야 함.
    //hash를 M으로 나눈 나머지를 hash에 저장한다.
    hash %= M;
  }

  return hash;
}

console.log(hashFunc());
