const islandCount = (grid) => {
  let count = 0;
  const visited = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited)) {
        count += 1;
      }
    }
  }

  return count;
};

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  if (grid[r][c] === "W") return false;

  if (visited.has(r + "," + c)) return false;
  visited.add(r + "," + c);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);

  return true;
};
