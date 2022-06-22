// Given a binary tree, connect each node with its level order successor. 
// The last node of each level should point to the first node of the next level.

// level: medium


class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
  
  // tree traversal using 'next' pointer
  print_tree() {
    let result = 'Traversal using \'next\' pointer: ';
    let current = this;
    while (current != null) {
      result += current.value + ' ';
      current = current.next;
    }
    console.log(result);
  }
}

const connect_all_siblings = function(root) {
  if (root === null) return;

  const queue = [root];
  let previousNode = null;
  const currentNode = null;
  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (previousNode !== null) {
      previousNode.next = currentNode;
    }
    
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    previousNode = currentNode;
  }
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
connect_all_siblings(root)
root.print_tree()
