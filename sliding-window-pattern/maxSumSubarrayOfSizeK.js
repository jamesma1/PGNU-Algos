// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

// level: easy

const max_sub_array_of_size_k = function (k, arr) {
  // TODO: Write your code here
  let maxSum = 0;
  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i <= k - 1) {
      maxSum = currSum += arr[i];
      // console.log(maxSum)
      // console.log(currSum)
    }
    else {
      // console.log('arr[i - k]', arr[i - k])
      // console.log('arr[i]', arr[i])
      currSum = currSum + arr[i] - arr[i - k];
      // console.log('currSum', currSum)
      maxSum = Math.max(maxSum, currSum);
    }
  }
  return maxSum;
};


// educative solution:
// time complexity: O(n)
// space complexity: O(1)

// function max_sub_array_of_size_k(k, arr) {
//     let maxSum = 0,
//         windowSum = 0,
//         windowStart = 0;

//     for (window_end = 0; window_end < arr.length; window_end++) {
//         windowSum += arr[window_end]; // add the next element
//         // slide the window, we don't need to slide if we've not hit the required window size of 'k'
//         if (window_end >= k - 1) {
//             maxSum = Math.max(maxSum, windowSum);
//             windowSum -= arr[windowStart]; // subtract the element going out
//             windowStart += 1; // slide the window ahead
//         }
//     }
//     return maxSum;
// }


// console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
// console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);