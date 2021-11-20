const buildGraph = (edges) => {
  const graph = {};
  for (edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    graph[a] = b;
  }
  return graph;
};
const destCity = (paths) => {
  const graph = buildGraph(paths);

  const keys = Object.keys(graph);
  const values = Object.values(graph);
  for (val of values) {
    if (!keys.includes(val)) {
      return val;
    }
  }
};

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
