class MyNode {
  val = 0;
  left = null;
  right = null;

  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    // get the root node
    const node = this.root;
    if (node === null) {
      this.root = new MyNode(val);
      return;
    } else {
      const searchTree = (node) => {
        if (val <= node.val) {
          if (node.left === null) {
            node.left = new MyNode(val);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (val >= node.val) {
          if (node.right === null) {
            node.right = new MyNode(val);
            return;
          } else {
            return searchTree(node.right);
          }
        }
        return null;
      };
      return searchTree(node);
    }
  }

  findMin() {
    node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.val;
  }

  findMax() {
    node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.val;
  }

  find(data) {
    let node = this.root;
    while (node.left !== null || node.right !== null) {
      if (node.left.val < data) {
        node = node.left;
      } else if (node.right.val > data) {
        node = node.right;
      } else {
        return node;
      }
    }
    return null;
  }
}
