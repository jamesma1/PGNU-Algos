var longestOnes = function(nums, k) {
  let maxLength = 0, windowStart = 0
  const letterCount = {};
  
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++){
//         check element at windowEnd for 1 or 0
      const rightChar = nums[windowEnd];
//         increment letterCount (and possibly instantiate 0)
      if (letterCount[rightChar] === undefined){
          letterCount[rightChar] = 0;
      }
      letterCount[rightChar]++;
//         check if 0 count in letterCount is greater than k
      while (letterCount['0'] > k){
//             move the windowStart
//             decrement letterCount at new windowStart
          const leftChar = nums[windowStart];
          windowStart++;
          letterCount[leftChar]--;
      }
//             if true, run a while loop to shift window over until 0 count is equal to k
//         reasign maxLength to current value or current window length
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  
  return maxLength;
};