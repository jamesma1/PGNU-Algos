// Given a binary tree and a number ‘S’, find if the tree has a path from root - to - leaf
// such that the sum of all the node values of that path equals ‘S’.

// level: easy

// depth first search: traverse through left subtree(s) first, then traverse through right subtree(s)

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// // iterative solution (top to bottom):
// const has_path = function(root, sum) {
//   // traverse all the way down to the left until hit a leaf, then move laterally through the tree
//   // if hit a leaf and sum equals target, return true

//   // check if tree is empty
//   if (root === null) return false;

//   const stack = [[root, root.value]];
//   while (stack.length > 0) {
//     // when you pop a node off a stack, it means you are visiting that node
//     const [currentNode, currentSum] = stack.pop();
//     // console.log(currentSum)
//     if (currentNode.left === null && currentNode.right === null && currentSum === sum) return true;

//     if (currentNode.left) {
//       const leftSum = currentNode.left.value + currentSum;
//       stack.push([currentNode.left, leftSum]);
//       // console.log(leftSum)
//     }
//     if (currentNode.right) {
//       const rightSum = currentNode.right.value + currentSum;
//       stack.push([currentNode.right, rightSum]);
//       // console.log(rightSum)
//     }
//   }
//   return false;
// };

// recursive solution (bottom up):
const has_path = function (root, sum) {
  // start from root and at every step, make two recursive calls: one for left and one for right child
  // if current node is not a leaf node, subtract value of current node from target and make two recursive calls
  // at every step, if the current node being visited is a leaf node and leaf node's value = target, return true
  // if not, return false
  if (root === null) return false;
  if (root.value === sum && root.left === null && root.right === null)
    return true;

  return (
    has_path(root.left, sum - root.value) ||
    has_path(root.right, sum - root.value)
  );
};

//    12
//   7  1
//  9  10 5
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${has_path(root, 23)}`);
console.log(`Tree has path: ${has_path(root, 16)}`);
