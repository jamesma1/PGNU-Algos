// Given a binary tree, populate an array to represent the averages of all of its levels.
// level: easy

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_level_averages = function (root) {
  const result = [];
  if (root === null) return result;
  
  const queue = [root];
  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelAverage = 0;
      
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      levelAverage += currentNode.value / levelSize;
        
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
      
    result.push(levelAverage);
  }
    
  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${find_level_averages(root)}`)
