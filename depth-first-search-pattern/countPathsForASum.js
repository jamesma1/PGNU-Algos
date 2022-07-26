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

// for each node that we visit, want to keep track of current path and count
// also want to check all paths that end in the current node - see if each of those paths sum to S
// after visiting the current node, remove from the current path (backtrack)

// recursive:
const count_paths = function (root, S) {
  const count_paths_recursive = function (currentNode, S, currentPath) {
    if (currentNode === null) return 0;

    // add the current node to the path
    currentPath.push(currentNode.value);
    let pathCount = 0;
    let pathSum = 0;

    // find the sums of all sub-paths in the current path list
    for (i = currentPath.length - 1; i >= 0; i--) {
      pathSum += currentPath[i];
      // if the sum of any sub-path is equal to 'S' we increment our path count.
      if (pathSum === S) {
        pathCount += 1;
      }
    }

    // traverse the left sub-tree
    pathCount += count_paths_recursive(currentNode.left, S, [...currentPath]);
    // traverse the right sub-tree
    pathCount += count_paths_recursive(currentNode.right, S, [...currentPath]);

    // remove the current node from the path to backtrack
    // we need to remove the current node while we are going up the recursive call stack
    currentPath.pop();
    return pathCount;
  };

  return count_paths_recursive(root, S, []);
};

/* 
Time complexity:
The time complexity of the above algorithm is O(N^2)
O(n^2) in the worst case, where ‘N’ is the total number of nodes in the tree. 
This is due to the fact that we traverse each node once, but for every node, we iterate the current path. 
The current path, in the worst case, can be O(N) (in the case of a skewed tree). But, if the tree is balanced, 
then the current path will be equal to the height of the tree, i.e., O(logN). So the best case of our algorithm will be O(NlogN)

Space complexity:
The space complexity of the above algorithm will be O(N). This space will be used to store the recursion stack. 
The worst case will happen when the given tree is a linked list (i.e., every node has only one child). We also need O(N)
O(N)space for storing the currentPath in the worst case. Overall space complexity of our algorithm is O(N)
*/

// // iterative:
// const count_paths = function (root, S) {
//   let count = 0;
//   if (root === null) return 0;

//   const stack = [[root, [root.value]]];

//   while (stack.length > 0) {
//     let [currentNode, currentPath] = stack.pop();

//     // for node visited, check the sums of all paths that end in the currentNode
//     let currentSum = 0;
//     for (i = currentPath.length - 1; i >= 0; i--) {
//       currentSum += currentPath[i];

//       if (currentSum === S) {
//         count += 1;
//       }
//     }

//     if (currentNode.left) {
//       const leftPath = [...currentPath, currentNode.left.value];
//       stack.push([currentNode.left, leftPath]);
//     }
//     if (currentNode.right) {
//       const rightPath = [...currentPath, currentNode.right.value];
//       stack.push([currentNode.right, rightPath]);
//     }

//     currentPath.pop();
//   }

//   return count;
// };

// // prefix approach:
// var count_paths = function (root, sum) {
//   const map = new Map();
//   let count = 0;

//   const traverse = (node, currentSum) => {
//     if (!node) {
//       return;
//     }

//     currentSum += node.val;

//     if (currentSum === sum) {
//       count += 1;
//     }

//     if (map.has(currentSum - sum)) {
//       count += map.get(currentSum - sum);
//     }

//     if (map.has(currentSum)) {
//       map.set(currentSum, map.get(currentSum) + 1);
//     } else {
//       map.set(currentSum, 1);
//     }

//     traverse(node.left, currentSum);
//     traverse(node.right, currentSum);

//     map.set(currentSum, map.get(currentSum) - 1);
//   };

//   traverse(root, 0);

//   return count;
// };
//     12
//    7  1
//  4  10 5

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has paths: ${count_paths(root, 1)}`);
