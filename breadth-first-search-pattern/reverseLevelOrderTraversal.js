// Given a binary tree, populate an array to represent its level - by - level traversal 
// in reverse order, i.e., the lowest level comes first.
// You should populate the values of all nodes in each level from left to right in separate sub - arrays.

// level: easy

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// edge case: check if root is null
// create queue to hold remaining nodes to traverse over
// create array to hold the nodes for each level
// iterate while queue is not empty
// for each level, iterate over the length of the level
// push each node's child to the current level array
// after iterating over the current level, add the current level's nodes to the beginning of the result array

const traverse = function (root) {
  let result = [];
    
  if (root === null) return result;

  const queue = [root];
    
  while (queue.length > 0) {
    const currentLevel = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    result = [...currentLevel, ...result];
  }
  return result;
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Reverse level order traversal: ${traverse(root)}`) // [[9,10,5],[7,1],[12]]
