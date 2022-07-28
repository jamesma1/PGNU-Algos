/* 
Find the path with the maximum sum in a given binary tree. Write a function that returns the maximum sum.

A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root. 
The path must contain at least one node. 

Level: HARD. AHHH
*/

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// // iterative
// const find_maximum_path_sum = function (root) {
//   if (root === null) return 0;
//   let maxSum = -Infinity;
//   // hashmap to keep track of every node as root and its maxSum)
//   const maxSumsHashMap = new Map();
//   const stack = [root];

//   const findMaxSum = (stack, maxSumsHashMap, max) => {
//     const currentNode = stack.pop();

//     // get max sum of left subtree from maxSumsHashMap hash map
//     // if currentNode does not have left subtree, the sum will be 0
//     const maxLeftSum =
//       maxSumsHashMap.get(currentNode.left) === undefined
//         ? 0
//         : Math.max(0, maxSumsHashMap.get(currentNode.left));

//     // get max sum of right subtree from maxSumsHashMap hash map
//     // if currentNode does not have right subtree, the sum will be 0
//     const maxRightSum =
//       maxSumsHashMap.get(currentNode.right) === undefined
//         ? 0
//         : Math.max(0, maxSumsHashMap.get(currentNode.right));

//     // get max sum of currentNode
//     const currentNodeMaxSum = maxLeftSum + maxRightSum + currentNode.value;
//     // update maxSum
//     max = Math.max(max, currentNodeMaxSum);
//     // add max sum *path* of currentNode to maxSumsHashMap has map
//     maxSumsHashMap.set(
//       currentNode,
//       Math.max(maxLeftSum + currentNode.value, maxRightSum + currentNode.value)
//     );
//     return max;
//   };

//   while (stack.length > 0) {
//     const curr = stack[stack.length - 1];
//     // go all the way to the left most node
//     // once i reach left most leaf, check if left leaf node has a right subtree
//     // if not, call findMaxSum on left leaf node and go from bottom, up
//     if (curr.left && !maxSumsHashMap.has(curr.left)) {
//       stack.push(curr.left);
//     }
//     // determine if I need to visit my right child or not
//     else if (curr.right && !maxSumsHashMap.has(curr.right)) {
//       stack.push(curr.right);
//     } else {
//       maxSum = findMaxSum(stack, maxSumsHashMap, maxSum);
//     }
//   }

//   return maxSum;
// };

// recursive
const find_maximum_path_sum = function (root) {
  let maxSum = -Infinity;

  const findMaxSum = (root) => {
    if (root === null) return 0;
    const maxLeftSum = Math.max(findMaxSum(root.left), 0);
    const maxRightSum = Math.max(findMaxSum(root.right), 0);

    const currentNodeMaxSum = maxLeftSum + maxRightSum + root.value;
    maxSum = Math.max(maxSum, currentNodeMaxSum);

    return Math.max(maxLeftSum, maxRightSum) + root.value;
  };

  findMaxSum(root);
  return maxSum;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);

root = new TreeNode(-1);
root.left = new TreeNode(-3);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);

// /*
// logic:
// This problem follows the Binary Tree Path Sum pattern and shares the algorithmic logic with Tree Diameter.
// We can follow the same DFS approach. The only difference will be to ignore the paths with negative sums.
// Since we need to find the overall maximum sum, we should ignore any path which has an overall negative sum.
// */
// // recursive
// class MaximumPathSum {
//   find_maximum_path_sum(root) {
//     this.globalMaximumSum = -Infinity;
//     this.find_maximum_path_sum_recursive(root);
//     return this.globalMaximumSum;
//   }

//   find_maximum_path_sum_recursive(currentNode) {
//     if (currentNode === null) {
//       return 0;
//     }

//     let maxPathSumFromLeft = this.find_maximum_path_sum_recursive(
//       currentNode.left
//     );
//     let maxPathSumFromRight = this.find_maximum_path_sum_recursive(
//       currentNode.right
//     );

//     // ignore paths with negative sums, since we need to find the maximum sum we should
//     // ignore any path which has an overall negative sum.
//     maxPathSumFromLeft = Math.max(maxPathSumFromLeft, 0);
//     maxPathSumFromRight = Math.max(maxPathSumFromRight, 0);

//     // maximum path sum at the current node will be equal to the sum from the left subtree +
//     // the sum from right subtree + val of current node
//     const localMaximumSum =
//       maxPathSumFromLeft + maxPathSumFromRight + currentNode.val;

//     // update the global maximum sum
//     this.globalMaximumSum = Math.max(this.globalMaximumSum, localMaximumSum);

//     // maximum sum of any path from the current node will be equal to the maximum of
//     // the sums from left or right subtrees plus the value of the current node
//     return Math.max(maxPathSumFromLeft, maxPathSumFromRight) + currentNode.val;
//   }
// }

// const maximumPathSum = new MaximumPathSum();
// let root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);

// console.log(`Maximum Path Sum: ${maximumPathSum.find_maximum_path_sum(root)}`);
// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(3);
// root.right.left = new TreeNode(5);
// root.right.right = new TreeNode(6);
// root.right.left.left = new TreeNode(7);
// root.right.left.right = new TreeNode(8);
// root.right.right.left = new TreeNode(9);
// console.log(`Maximum Path Sum: ${maximumPathSum.find_maximum_path_sum(root)}`);

// root = new TreeNode(-1);
// root.left = new TreeNode(-3);
// console.log(`Maximum Path Sum: ${maximumPathSum.find_maximum_path_sum(root)}`);
