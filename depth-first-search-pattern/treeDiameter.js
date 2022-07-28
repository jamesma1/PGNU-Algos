// Given a binary tree, find the length of its diameter. The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. The diameter of a tree may or may not pass through the root.
// Note: You can always assume that there are at least two leaf nodes in the given tree.

// level: medium

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// iterative:
class TreeDiameter {
  constructor() {
    this.treeDiameter = 0;
  }

  find_diameter(root) {
    if (root === null) return -1;

    let maxDiameter = 0;
    // hashmap to keep track of every node as root and its maxHeight (height = 1 + max(leftHeight, rightHeight))
    const heights = new Map();
    const stack = [root];

    const findMaxDiameter = (stack, heights, max) => {
      const currentNode = stack.pop();

      // get height of left subtree from heights hash map
      // if currentNode does not have left subtree, the height will be -1
      const leftHeight =
        heights.get(currentNode.left) === undefined
          ? -1
          : heights.get(currentNode.left);
      // get height of right subtree from heights hash map
      // if currentNode does not have right subtree, the height will be -1
      const rightHeight =
        heights.get(currentNode.right) === undefined
          ? -1
          : heights.get(currentNode.right);

      // get max height currentNode
      const currentNodeMaxHeight = Math.max(leftHeight, rightHeight) + 1;
      // get diameter of currentNode.
      const currentDiameter = leftHeight + rightHeight + 2;
      // add maxHeight of currentNode to heights hashmap
      heights.set(currentNode, currentNodeMaxHeight);
      // update maxDimater
      max = Math.max(max, currentDiameter);

      return max;
    };

    while (stack.length > 0) {
      const curr = stack[stack.length - 1];
      // go all the way to the left most node
      // once i reach left most leaf, check if left leaf node has a right subtree
      // if not, call findMaxDiameter on left leaf node and go from bottom, up
      if (curr.left && !heights.has(curr.left)) {
        stack.push(curr.left);
      }
      // determine if I need to visit my right child or not
      else if (curr.right && !heights.has(curr.right)) {
        stack.push(curr.right);
      } else {
        maxDiameter = findMaxDiameter(stack, heights, maxDiameter);
      }
    }

    return maxDiameter;
  }
}

// // recursive solution 1:
// class TreeDiameter {
//   constructor() {
//     this.treeDiameter = 0;
//   }

//   find_diameter(root) {
//     let maxDiameter = 0;

//     const findNodeHeight = (root) => {
//       if (root === null) {
//         return -1;
//       }
//       const leftHeight = findNodeHeight(root.left);
//       const rightHeight = findNodeHeight(root.right);
//       maxDiameter = Math.max(maxDiameter, 2 + leftHeight + rightHeight);
//       return 1 + Math.max(leftHeight, rightHeight);
//     };
//     findNodeHeight(root);
//     return maxDiameter;
//   }
// }

/*
logic:
1) At every step, we need to find the height of both children of the current node. For this, we will make two recursive calls similar to DFS.
2) The height of the current node will be equal to the maximum of the heights of its left or right children, plus ‘1’ for the current node.
3) The tree diameter at the current node will be equal to the height of the left child plus the height of the right child plus ‘1’ for the current node: diameter = leftTreeHeight + rightTreeHeight + 1. To find the overall tree diameter, we will use a class level variable. This variable will store the maximum diameter of all the nodes visited so far, hence, eventually, it will have the final tree diameter.
*/

// // recursive solution 2:
// class TreeDiameter {
//   constructor() {
//     this.treeDiameter = 0;
//   }

//   find_diameter(root) {
//     this.calculate_height(root);
//     return this.treeDiameter;
//   }

//   calculate_height(currentNode) {
//     if (currentNode === null) {
//       return 0;
//     }

//     const leftTreeHeight = this.calculate_height(currentNode.left);
//     const rightTreeHeight = this.calculate_height(currentNode.right);

//     // if the current node doesn't have a left or right subtree, we can't have
//     // a path passing through it, since we need a leaf node on each side
//     if (leftTreeHeight !== 0 && rightTreeHeight !== 0) {
//       // diameter at the current node will be equal to the height of left subtree +
//       // the height of right sub-trees + '1' for the current node
//       const diameter = leftTreeHeight + rightTreeHeight + 1;

//       // update the global tree diameter
//       this.treeDiameter = Math.max(this.treeDiameter, diameter);
//     }

//     // height of the current node will be equal to the maximum of the heights of
//     // left or right subtrees plus '1' for(the current node
//     return Math.max(leftTreeHeight, rightTreeHeight) + 1;
//   }
// }
/*
Time complexity:
The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree.
This is due to the fact that we traverse each node once.

Space complexity:
The space complexity of the above algorithm will be O(N) in the worst case. This space will be used to store the recursion stack.
The worst case will happen when the given tree is a linked list (i.e., every node has only one child).
*/

var treeDiameter = new TreeDiameter();
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`); // 5
root.left.left = null;
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
root.right.left.right.left = new TreeNode(10);
root.right.right.left.left = new TreeNode(11);
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`); // 7
