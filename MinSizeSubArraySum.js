var minSubArrayLen = function(target, nums) {
  let min = Infinity;
  let windowStart = 0;  
  let currentSum = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    currentSum += nums[windowEnd]
    while (currentSum >= target) {
      min = Math.min(min, (windowEnd - windowStart) + 1 )
      currentSum -= nums[windowStart]
      windowStart++
    }
  }
  return min === Infinity? 0 : min;
};
