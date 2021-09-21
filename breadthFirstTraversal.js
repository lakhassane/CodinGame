// const graph = {
//   a: ["b", "c"],
//   b: ["d"],
//   c: ["e"],
//   d: ["f"],
//   e: [],
//   f: [],
// };

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const breadthFirstPrint = (graph, startEdge) => {
  let queue = [];
  queue.push(...graph[startEdge]);
  console.log(startEdge);

  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current);
    queue.push(...graph[current]);
  }
};

const hasPathRecursive = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) return true;
  }
  return false;
};

const hasPathIterative = (graph, src, dst) => {
  let queue = [];
  queue.push(...graph[src]);

  while (queue.length > 0) {
    let current = queue.shift();
    if (current === dst) return true;
    queue.push(...graph[current]);
  }
  return false;
};

// breadthFirstPrint(graph, "a");
console.log(hasPathIterative(graph, "f", "k"));
