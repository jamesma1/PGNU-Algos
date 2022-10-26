/* 
Given a set of numbers that might contain duplicates, find all of its distinct subsets.

level: easy
*/

function find_subsets(nums) {
  // sort the numbers to handle duplicates
  nums.sort((a, b) => a - b);
  const subsets = [];
  subsets.push([]);
  let startIndex = 0,
    endIndex = 0;
  for (i = 0; i < nums.length; i++) {
    startIndex = 0;
    // if current and the previous elements are same, create new subsets only from the subsets
    // added in the previous step
    if (i > 0 && nums[i] === nums[i - 1]) {
      startIndex = endIndex + 1;
    }
    endIndex = subsets.length - 1;
    for (j = startIndex; j < endIndex + 1; j++) {
      // create a new subset from the existing subset and add the current element to it
      const set1 = subsets[j].slice(0);
      set1.push(nums[i]);
      subsets.push(set1);
    }
  }
  return subsets;
}

console.log("Here is the list of subsets: ");
let result = find_subsets([1, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log("Here is the list of subsets: ");
result = find_subsets([1, 5, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});

/* 
Time complexity:
Since, in each step, the number of subsets doubles (if not duplicate) as we add each 
element to all the existing subsets, therefore, we will have a total of O(2^N)
subsets, where ‘N’ is the total number of elements in the input set. And since we 
construct a new subset from an existing set, therefore, the time complexity of 
the above algorithm will be O(N*2^N).

Space complexity:
All the additional space used by our algorithm is for the output list. 
Since, at most, we will have a total of O(2^N) subsets, and each subset can take up to O(N)
space, therefore, the space complexity of our algorithm will be O(N*2^N).
*/
