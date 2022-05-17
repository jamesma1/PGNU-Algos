// Given an array of positive numbers and a positive number ‘S,’ 
// find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
// Return 0 if no such subarray exists.

const smallest_subarray_sum = function (s, arr) {
  // create variable to hold the current sum
  // create variable to hold the current subarray size & index of subarray first element
  // create variable to hold overall smallest subarray size
  // iterate through array, adding values to the current sum
  // check if current running sum is > s
  // if < s, continue to subsequent elements to currSum
  // if > s, store size of current subarray and check against overall smallest subarray size
  // subtract first element of the subarray and check if > s, if yes, continue to subtract until currSum < s 

  let currSum = 0;
  let currSize;
  let smallestSize = Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd <= arr.length; windowEnd++) {
    if (currSum < s) {
      currSum += arr[windowEnd];
    //   console.log('currSum < s', currSum);
    }
    else {
      
      //   console.log('windowEnd', windowEnd); 
      currSize = windowEnd - windowStart;
      //   console.log('currSize', currSize); 
      smallestSize = Math.min(currSize, smallestSize);
      //   console.log('smallestSize', smallestSize);
      currSum -= arr[windowStart];
      //   console.log('currSum > s', currSum);
      
      windowStart++;
      windowEnd--;
    //   console.log('windowStart', windowStart);
    //   console.log('windowEnd', windowEnd);
    }
  }
  return smallestSize;
};

// console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`);
// console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 8])}`);
// console.log(`Smallest subarray length: ${smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`);

// educative solution:
// time complexity: O(n)
// space complexity: O(1)

// function smallest_subarray_sum(s, arr) {
//     let windowSum = 0,
//         minLength = Infinity,
//         windowStart = 0;

//     for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//         windowSum += arr[windowEnd]; // add the next element
//         // shrink the window as small as possible until the 'window_sum' is smaller than 's'
//         while (windowSum >= s) {
//             minLength = Math.min(minLength, windowEnd - windowStart + 1);
//             windowSum -= arr[windowStart++];
//             // windowStart += 1;
//         }
//     }

//     if (minLength === Infinity) {
//         return 0;
//     }
//     return minLength;
// }
