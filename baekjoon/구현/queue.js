//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 시작과 끝에 공백이 있을 수 있다했으니 trim()으로 문자열 양끝의 공백을 제거해준다.
 * 공백으로 구분된 문자열의 수를 세면 된다.
 * 공백 뿐이라면 숫자 0을 출력한다.
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");

queue = new Queue();

queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);
queue.dequeue();

while (queue.getLength() != 0) {
  console.log(queue.dequeue());
}
