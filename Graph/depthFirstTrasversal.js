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

const depthFirstPrint = (graph, startEdge) => {
  let stack = [];
  stack = [...graph[startEdge]]; // put all neighbors of a in the stack
  console.log(startEdge);

  while (stack.length > 0) {
    let current = stack.pop();
    console.log(current);
    stack = [...stack, ...graph[current]];
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
  let stack = [];
  stack = [...graph[src]];

  while (stack.length > 0 && !hasPath) {
    let current = stack.pop();
    if (current === dst) return true;
    else stack = [...stack, ...graph[current]];
  }
  return false;
};

// depthFirstPrint(graph, "a");
// console.log(hasPathIterative(graph, "f", "j"));
