// Given a binary tree, populate an array to represent its zigzag level order traversal.
// You should populate the values of all nodes of the first level from left to right, 
// then right to left for the next level and keep alternating in the same manner for the following levels.

// level: medium

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


const traverse = function (root) {
  let result = [];
  if (root === null) return result;
  
  const queue = [root];
  let leftToRight = true;
    
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
        
      if (leftToRight) {
        currentLevel.push(currentNode.value);
      } else {
        currentLevel.unshift(currentNode.value);
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
      
    result = [...result, ...currentLevel];
    leftToRight = !leftToRight;
  }
    
  return result;
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)
// console.log(root)
console.log(`Zigzag traversal: ${traverse(root)}`)
