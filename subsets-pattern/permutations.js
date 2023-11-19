/* 
Given a set of distinct numbers, find all of its permutations.

level: medium
*/

const Deque = require("./collections/deque"); //http://www.collectionsjs.com

// // iterative solution:
// function find_permutations(nums) {
//   let numsLength = nums.length,
//     result = [],
//     permutations = new Deque();
//   permutations.push([]);
//   for (let i = 0; i < nums.length; i++) {
//     const currentNumber = nums[i];
//     // we will take all existing permutations and add the current number to create new permutations
//     const n = permutations.length;
//     for (let p = 0; p < n; p++) {
//       const oldPermutation = permutations.shift();
//       // create a new permutation by adding the current number at every position
//       for (let j = 0; j < oldPermutation.length + 1; j++) {
//         const newPermutation = oldPermutation.slice(0); // clone the permutation
//         newPermutation.splice(j, 0, currentNumber); // insert currentNumber at index 'j'
//         if (newPermutation.length === numsLength) {
//           result.push(newPermutation);
//         } else {
//           permutations.push(newPermutation);
//         }
//       }
//     }
//   }

//   return result;
// }

const find_permutations = function (nums) {
  const permutations = [];
  const stack = [nums];

  while (stack.length) {
    for (let i = 0; i < nums.length; i++) {
      // remove first permutation from stack
      const oldPermuation = stack.slice();

      for (let j = 0; j < nums.length; j++) {
        
      }
    }
  }
  return result;
};

console.log("Here are all the permutations:");
const result = find_permutations([1, 3, 5]);
result.forEach((permutation) => {
  console.log(permutation);
});

const hey1 = function (array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i])
  }
  return arr;
}

const array = [1,2,3]
const result1 = hey1(array);
console.log(result1)