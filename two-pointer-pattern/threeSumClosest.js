// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

// level: medium
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let minDifference = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;
      
    while (leftPointer < rightPointer) {
      const sum = nums[i] + nums[leftPointer] + nums[rightPointer];
      const difference = target - sum;
        
      if (difference === 0) {
        return target;
      }
        
      // evaluate for value of minDifference
      if (Math.abs(difference) < Math.abs(minDifference) || (Math.abs(difference) === Math.abs(minDifference) && difference > minDifference)) {
        minDifference = difference;
      }
        
      if (difference > 0) {
        leftPointer++; // need sum with bigger value
      }
      else {
        rightPointer--; // need sum with lesser value
      }
    }
  }
  return target - minDifference;
}

const nums = [0, 0, 0]
const target = 1
console.log(threeSumClosest(nums, target)) // 0