// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// assume array is not sorted - hash table method:
// t: O(n), s: O(n)
var twoSum = function (nums, target) {
    // create hash table with key as element value and value as element index
    // check if target - element exists in the hash
    // if not, add element and corresponding index to hash

    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (difference in hash) {
            return [i, hash[difference]];
        }
        else hash[nums[i]] = i;
    }
    return [-1, 1];
};

// assume array is sorted - two pointer method:
// t: O(n), s: O(1)
function pair_with_target_sum(arr, targetSum) {
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === targetSum) {
            return [left, right];
        }

        if (targetSum > currentSum) {
            left += 1; // we need a pair with a bigger sum
        } else {
            right -= 1; // we need a pair with a smaller sum
        }
    }
    return [-1, -1];
}

// assume array is sorted - hash table method:
// t: O(n), s: O(n)
function pair_with_target_sum(arr, targetSum) {
    const nums = {}; // to store numbers and their indices
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (targetSum - num in nums) {
            return [nums[targetSum - num], i];
        }
        nums[arr[i]] = i;
    }
    return [-1, -1];
}

