// Given a binary tree, return an array containing nodes in its right view. 
// The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.

// level: easy

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
}

const tree_right_view = function(root) {
  const result = [];
  if (root === null) return result;

  const queue = [root];
  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift;
      if (i === levelSize - 1) result.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  return result;
};


var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.left.left.left = new TreeNode(3);
console.log('Tree right view: ' + tree_right_view(root))
