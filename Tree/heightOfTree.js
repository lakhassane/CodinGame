function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const height = (node) => {
  if (!node) return 0;
  if (node.left !== null && node.right !== null)
    return Math.max(height(node.left), height(node.right)) + 1;

  return 1;
};

var root1 = new TreeNode(8);
root1.left = new TreeNode(3);
root1.right = new TreeNode(10);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(6);
root1.left.right.left = new TreeNode(4);
root1.left.right.right = new TreeNode(7);
root1.right.right = new TreeNode(14);
// root1.right.right.left = new TreeNode(13);

console.log(height(root1));
