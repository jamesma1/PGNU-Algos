// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that
// the sum of all the node values of each path equals ‘S’.

// level: medium

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
}

// // iterative solution:
// const find_paths = function(root, sum) {
//   const allPaths = [];
  
//   if (root === null) return allPaths;
    
//   const stack = [[root, root.value, [root.value]]];
//   // console.log(stack.pop())
//   // const [currentNode, currentSum, currentPath] = stack.pop();
//   // console.log(Array.isArray(currentPath))
//   while (stack.length > 0) {
//     const [currentNode, currentSum, currentPath] = stack.pop();
      
//     if (currentNode.left === null && currentNode.right === null && currentSum === sum) allPaths.push(currentPath);

//     if (currentNode.left) {
//       const leftSum = currentSum + currentNode.left.value;
//       // console.log(currentPath)
//       // console.log(Array.isArray(currentPath))
//       const leftPath = [...currentPath, currentNode.left.value];
//       stack.push([currentNode.left, leftSum, leftPath]);
//     }
//     if (currentNode.right) {
//       const rightSum = currentSum + currentNode.right.value;
//       const rightPath = [...currentPath, currentNode.right.value];
//       stack.push([currentNode.right, rightSum, rightPath]);
//     }
//   }
//   return allPaths;
// };


// recursive solution:
const find_paths = function(root, sum) {
  const allPaths = [];
  
    if (root === null) return allPaths;
    if (root.left){}
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
const sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)
