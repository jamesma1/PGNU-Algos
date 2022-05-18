// Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.
// level: medium

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//Root-Left-Right

const find_sum_of_path_numbers = function (root, string = '') {

  if (!root.left && !root.right) return parseInt(string + root.value, 10);

  if (root.left && root.right) return find_sum_of_path_numbers(root.left, string + root.value) + find_sum_of_path_numbers(root.right, string + root.value);
  else if (root.left) return find_sum_of_path_numbers(root.left, string + root.value);
  else if (root.right) return find_sum_of_path_numbers(root.right, string + root.value);
};


var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)

// time complexity: The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree.This is due to the fact that we traverse each node once.
// space complexity: The space complexity of the above algorithm will be O(N) in the worst case. This space will be used to store the recursion stack.The worst case will happen when the given tree is a linked list(i.e., every node has only one child).
