/*
Given an unsorted array containing numbers, find the smallest missing positive number in it.

level: medium
*/

function find_first_smallest_missing_positive(nums) {
  let i = 0;
  n = nums.length;
  while (i < n) {
    j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  for (i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
}

console.log(find_first_smallest_missing_positive([-3, 1, 5, 4, 2]));
console.log(find_first_smallest_missing_positive([3, -2, 0, 1, 2]));
console.log(find_first_smallest_missing_positive([3, 2, 5, 1]));

/* 
Time complexity:
The time complexity of the above algorithm is O(n).

Space complexity:
Ignoring the space required for storing the duplicates, the algorithm runs in constant space O(1).
*/
