let graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
let visited = Array(graph.length + 1).fill(false);

function dfs(graph, start, visited) {
  const stack = [];
  stack.push(start);

  while (stack.length) {
    let v = stack.pop();
    if (!visited[v]) {
      console.log(v);
      visited[v] = true;

      for (let node of graph[v]) {
        if (!visited[node]) {
          stack.push(node);
        }
      }
    }
  }
}
