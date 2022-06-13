// Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.
// level: medium

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// // iterative solution:
// const find_sum_of_path_numbers = function (root) {
//   if (root === null) return 0;

//   const stack = [[root, root.value]];
//   let sum = 0;

//   while (stack.length > 0) {
//     const [currentNode, currentNum] = stack.pop();
    
//     if (currentNode.left === null && currentNode.right === null) {
//       sum += currentNum; 
//     }

//     if (currentNode.left) {
//       stack.push([currentNode.left, currentNum * 10 + currentNode.left.value]);
//     }
//     if (currentNode.right) {
//       stack.push([currentNode.right, currentNum * 10 + currentNode.right.value]);
//     }
//   }
//   return sum;
// };

// recursive solution:
const find_sum_of_path_numbers = function (root, string = '') {
  if (root == null) return 0;
  if (root.left === null && root.right == null) return parseInt(string + root.value, 10);

  return find_sum_of_path_numbers(root.left, string + root.value) + find_sum_of_path_numbers(root.right, string + root.value) 
};


var root = new TreeNode(1)
root.left = new TreeNode(7)
root.right = new TreeNode(9)
root.right.left = new TreeNode(2)
root.right.right = new TreeNode(9)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)

// time complexity: The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree.This is due to the fact that we traverse each node once.
// space complexity: The space complexity of the above algorithm will be O(N) in the worst case. This space will be used to store the recursion stack.The worst case will happen when the given tree is a linked list(i.e., every node has only one child).
