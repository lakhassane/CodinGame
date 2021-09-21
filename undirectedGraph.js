const undirectedPath = (edges, src, dst) => {
  const graph = buildGraph(edges);
  return hasPath(graph, src, dst, new Set());
};

const hasPathRecursive = (graph, src, dst, visitedSet) => {
  if (src === dst) return true;

  if (visitedSet.has(src)) return false;

  visitedSet.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visitedSet)) return true;
  }
  return false;
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

console.log(buildGraph([["i", "j"]]));
