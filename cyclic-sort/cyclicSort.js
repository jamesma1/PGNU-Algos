/* 
We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on 
their creation sequence. This means that the object with sequence number 3 was created just before the object with sequence number 4.

Write a function to sort the objects in-place on their creation sequence number in O(n) and without using any extra space. 
For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

level: easy
*/

/* 
 iterate the array one number at a time, and if the current number we are iterating is not at the correct index, we swap it with the number at 
 its correct index. This way, we will go through all numbers and place them at their correct indices, hence, sorting the whole array.
*/

// const cyclic_sort = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     while (nums[i] !== i + 1) {
//       let incorrect = nums[i];
//       [nums[incorrect - 1], nums[i]]= [incorrect, nums[incorrect - 1]];
//     }
//   }
//   return nums;
// };

function cyclic_sort(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  return nums;
}

console.log(cyclic_sort([3, 1, 5, 4, 2]));
console.log(cyclic_sort([2, 6, 4, 3, 1, 5]));
console.log(cyclic_sort([1, 5, 6, 4, 3, 2]));

/* 
Time complexity:
The time complexity of the above algorithm is O(n). Although we are not incrementing the index i when swapping the numbers, 
this will result in more than n iterations of the loop, but in the worst-case scenario, the while loop will swap a total of n-1 numbers, 
and once a number is at its correct index, we will move on to the next number by incrementing i. 
So overall, our algorithm will take O(n) + O(n-1) which is asymptotically equivalent to O(n).

Space complexity:
The algorithm runs in constant space O(1).
*/