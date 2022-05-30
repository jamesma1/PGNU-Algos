class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// edge case: check if root is null
// create queue for level order traversal - holds nodes for each level
// while the queue is not empty, check for children of all current level nodes + push into queue
// need way to know when all nodes of current level have been iterated over
// create variable to hold level size
// once iterated over, shift off node and decrement level size 

// problem: traverse all nodes using Breadth First Search 

const levelOrderTraversal = function (root) {
  const result = [];

  if (root === null) return result;

  const queue = [root];
    
  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      result.push(currentNode.value)

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  return result;
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(levelOrderTraversal(root)) // [[12],[7,1],[9,10,5]] 