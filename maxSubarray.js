// Given an integer array nums, find the contiguous subarray(containing at least one number)
// which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  // initialize variable to hold maxSum to first element in array
  // initialize variable to hold currSum to 0 if first element is negative, or the first element if it is positive
  // iterate through the nums array
    // check if currSum + current element is the max between currSum + current element and the current element 

  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum + nums[i] > nums[i] ? currSum = currSum + nums[i] : currSum = nums[i];
    //   console.log(currSum)
    if (currSum > maxSum) maxSum = currSum;
  }

  return maxSum;
};

// const nums = [-2, 1,-3,  4, -1, 2, 1, -5, 4];
// console.log(maxSubArray(nums))