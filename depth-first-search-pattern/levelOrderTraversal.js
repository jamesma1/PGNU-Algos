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
  if (root === null) return;

  const queue = [root];
  let levelSize = 1;
    
  while (queue.length > 0) {

    while (levelSize > 0) {
      const currentNode = queue.shift();
      levelSize--;
        
      console.log(currentNode);

      if (currentNode.left) {
        queue.push(currentNode.left);
        levelSize++;
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
        levelSize++;
      }
    }
  }
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

levelOrderTraversal(root); // [[12],[7,1],[9,10,5]] 