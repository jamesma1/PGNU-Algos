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
//   const [currentNode, currentSum, currentPath] = stack.pop();
//   while (stack.length > 0) {
//     const [currentNode, currentSum, currentPath] = stack.pop();

//     if (currentNode.left === null && currentNode.right === null && currentSum === sum) allPaths.push(currentPath);

//     if (currentNode.left) {
//       const leftSum = currentSum + currentNode.left.value;
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
const find_paths = function (root, sum) {
  if (root === null) return [];

  const allPaths = [];
  find_paths_recursive(root, sum, [root.value], allPaths);

  return allPaths;
};

const find_paths_recursive = (currentNode, sum, currentPath, allPaths) => {
  if (
    currentNode.value === sum &&
    currentNode.left === null &&
    currentNode.right === null
  ) {
    allPaths.push(currentPath);
  }

  if (currentNode.left) {
    find_paths_recursive(
      currentNode.left,
      sum - currentNode.value,
      [...currentPath, currentNode.left.value],
      allPaths
    );
  }
  if (currentNode.right) {
    find_paths_recursive(
      currentNode.right,
      sum - currentNode.value,
      [...currentPath, currentNode.right.value],
      allPaths
    );
  }
};

//     12
//    7  1
//   4  10 5
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
const sum = 23;
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`);
