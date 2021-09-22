const graph = {
  9: ["8", "1", "5"],
  1: ["9"],
  5: ["9", "8"],
  8: ["9", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};

const largestComponent = (graph) => {
  const visitedSet = new Set();
  let longest = 0;

  for (let node in graph) {
    const size = explore(graph, node, visitedSet);
    if (longest < size) longest = size;
  }
  return longest;
};

const explore = (graph, current, visitedSet) => {
  if (visitedSet.has(current)) return 0;

  visitedSet.add(current);

  let size = 1;
  for (let neighbor of graph[current]) {
    size += explore(graph, neighbor, visitedSet);
  }

  return size;
};

console.log("largest size is:", largestComponent(graph));
