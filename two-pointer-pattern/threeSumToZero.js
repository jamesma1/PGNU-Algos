// Given an integer array nums, return all the triplets[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// level: medium

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  // sort array (t: O(nlog(n)))
  nums.sort((a, b) => a - b);
    
  // edge case: if first element of sorted arr is > 0, return out of function 
  if (nums[0] > 0) return;

  const result = [];

  for (let firstEl = 0; firstEl < nums.length - 2; firstEl++) {
    const complement = -nums[firstEl];
    let secondEl = firstEl + 1;
    let thirdEl = nums.length - 1;
      
    // check for duplication
    // don't compare firstEl with secondEl bc you could skip over some possible combos, for ex: [-1,-1,0,2]
    if (nums[firstEl] === nums[firstEl - 1]) continue;
    //   console.log(nums[firstEl] === nums[firstEl - 1])
    //   console.log(nums[-1])

    while (secondEl < thirdEl) {
      const sum = nums[secondEl] + nums[thirdEl];

      if (sum === complement) {
        result.push([nums[firstEl], nums[secondEl], nums[thirdEl]]);
        secondEl++;
        thirdEl--;
        // check for duplicates again 
        while (nums[secondEl] === nums[secondEl - 1]) {
          secondEl++;
        }
        while (nums[thirdEl] === nums[thirdEl + 1]) {
          thirdEl--;
        }
      }
      else if (sum < complement) {
        secondEl++;
      }
      else {
        thirdEl--;
      }
    }
  }
  return result;
};

// const nums = [-1, 0, 1, 2, -1, -4]; // [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum(nums));

const nums = [-1, 0, 0, 1, 2, -1, -4]; // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum(nums));