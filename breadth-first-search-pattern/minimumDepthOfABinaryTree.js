// Find the minimum depth of a binary tree. The minimum depth is the number 
// of nodes along the shortest path from the root node to the nearest leaf node.

// level: easy

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
}


const find_minimum_depth = function (root) {
  // TODO: Write your code here
  if (root === null) return 0;

  const queue = [root];
  let minDepth = 0;
    
  while (queue.length > 0) {
    const levelSize = queue.length;
    minDepth += 1;
    
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      // check if this is a leaf node
      if (currentNode.left === null && currentNode.right === null) {
        return minDepth;
      }
      // insert the children of currentNode in queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
}


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
