// This calculates the number of component in a given graph
// The graph can be represented as an adjacent list.

const graph = {
  9: ["8", "1", "5"],
  1: ["9"],
  5: ["9", "8"],
  8: ["9", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};

const componentCount = (graph) => {
  const visitedSet = new Set();
  let count = 0;
  for (let node in graph) {
    if (explore(graph, node, visitedSet)) count += 1;
  }
  return count;
};

const explore = (graph, current, visitedSet) => {
  if (visitedSet.has(current)) return false;

  visitedSet.add(current);

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visitedSet);
  }

  return true;
};

console.log("Number of components is:", componentCount(graph));
