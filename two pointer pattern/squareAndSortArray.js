/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  let n = nums.length;
  let pointer1 = 0;
  let pointer2 = n - 1;
  let result = Array(n).fill(0);
  let largestIndex = n - 1;
  
  while(pointer1 <= pointer2) {
      if (nums[pointer2] ** 2 > nums[pointer1] ** 2) {
          result[largestIndex] = nums[pointer2] ** 2;
          pointer2--;
      } else {
          result[largestIndex] = nums[pointer1] ** 2;
          pointer1++;
      }
      largestIndex--;
  }
  return result;
};