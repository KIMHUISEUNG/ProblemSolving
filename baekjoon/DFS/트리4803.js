//let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
/**
 * 사이클이 존재하는지 찾아서 카운트 하는 문제
 * 사이클이란 노드들이 1->2->3->1 식으로 순회가능하게 연결된 상태
 */
const filePath = "/Users/kimhuiseong/Documents/problem/baekjoon/";
const fs = require("fs");
let input = fs.readFileSync(`${filePath}example.txt`).toString().split("\n");
let line = 0;
let testCase = 1;
function isCycle(x, prev) {
  visited[x] = true;
  for (let y of graph[x]) {
    if (!visited[y]) {
      if (isCycle(y, x)) return true;
    } else if (y != prev) return true;
  }
  return false;
}

while (true) {
  let [n, m] = input[line].split(" ").map(Number);
  if (n == 0 && m == 0) break;
  graph = [];
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  for (let i = 1; i <= m; i++) {
    let [x, y] = input[line + i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }
  visited = new Array(n + 1).fill(false);
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (!isCycle(i, 0)) {
        cnt++;
      }
    }
  }
  if (cnt == 0) {
    console.log(`Case ${testCase}: No trees.`);
  } else if (cnt == 1) {
    console.log(`Case ${testCase}: There is one tree.`);
  } else {
    console.log(`Case ${testCase}: A forest of ${cnt} trees.`);
  }
  line += m + 1;
  testCase++;
}
