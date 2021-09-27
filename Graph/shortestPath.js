const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "u"],
  ["t", "u"],
  ["v", "t"],
  ["w", "v"],
];

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  const count = explorePath(graph, nodeA, nodeB, new Set());

  return count;
};

const explorePath = (graph, current, dst, visited) => {
  let queue = [[current, 0]];
  visited.add(current);

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === dst) return distance;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};
  for (edge of edges) {
    const [a, b] = edge;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

console.log(shortestPath(edges, "w", "y"));
