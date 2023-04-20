let graph = [[1, 2, 3], [0, 6], [0], [0, 4, 5], [3], [3], [1]];
let visited = Array(graph.length + 1).fill(false);

function dfs(graph, v, visited) {
  visited[v] = true;
  console.log(v);

  for (let node of graph[v]) {
    if (!visited[node]) {
      dfs(graph, node, visited);
    }
  }
}

dfs(graph, 0, visited);
