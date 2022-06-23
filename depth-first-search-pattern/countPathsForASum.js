// Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’.
// Please note that the paths can start or end at any node but all paths must follow direction from parent to child(top to bottom).
// level: medium

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const count_paths = function (root, S) {
  let count = 0;
  if (root === null) return 0;

  const traverse = (currentNode, S, pathSum) => {
    if (pathSum === S) count++;

    if (currentNode.left === null && currentNode.right === null) return;

    if (currentNode.left !== null)
      return traverse(currentNode.left, pathSum + currentNode.left.value);
    if (currentNode.right !== null)
      return traverse(currentNode.right, pathSum + currentNode.left.value);
  };

  const stack = [root];
  const stackVals = [root.value];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    console.log(stackVals);

    traverse(currentNode, S, currentNode.value);

    if (currentNode.left) {
      stack.push(currentNode.left);
      stackVals.push(currentNode.left.value);
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
      stackVals.push(currentNode.right.value);
    }
  }

  return count;
};

//     12
//    7  1
//  4  10 5

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has paths: ${count_paths(root, 11)}`);
