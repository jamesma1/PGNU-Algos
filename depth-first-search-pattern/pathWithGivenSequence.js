// Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
// level: medium

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// // iterative solution
// const find_path = function(root, sequence) {
//   if (root === null) return false;

//   const stack = [[root, 0]];
//   while (stack.length > 0) {
//     const [currentNode, currentIndex] = stack.pop();

//     if (currentNode.left === null && currentNode.right === null && currentNode.value === sequence[currentIndex] && currentIndex === sequence.length - 1) return true;

//     if (currentNode.left !== null && currentNode.value === sequence[currentIndex]) stack.push([currentNode.left, currentIndex + 1]);
//     if (currentNode.right !== null && currentNode.value === sequence[currentIndex]) stack.push([currentNode.right, currentIndex + 1]);
//   }
//   return false;
// };

// recursive solution:
const find_path = function (root, sequence) {
  const helper = function (currentNode, currentIndex) {
    if (currentNode === null) return false;
    if (
      currentNode.left === null &&
      currentNode.right === null &&
      currentNode.value === sequence[currentIndex] &&
      currentIndex === sequence.length - 1
    )
      return true;
    if (currentNode.value !== sequence[currentIndex]) return false;

    return (
      helper(currentNode.left, currentIndex + 1) ||
      helper(currentNode.right, currentIndex + 1)
    );
  };

  return helper(root, 0);
};

//     1
//    0 1
//   1  6 5
var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 0, 1])}`);
