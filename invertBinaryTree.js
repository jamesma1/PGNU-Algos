/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
  // check if root is null, if yes then return
  if (!root) return root;
  // store left child in temp variable
  const temp = root.left;
  // reassign left and right children of root node
  root.left = root.right;
  root.right = temp;
  // recursively call function on left child
  invertTree(root.left);
  // do the same for right child
  invertTree(root.right);
  return root;
};