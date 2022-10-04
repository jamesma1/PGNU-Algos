/* 
Given an unsorted array containing numbers and a number ‘k’, 
find the first ‘k’ missing positive numbers in the array.

level: hard
*/

function find_first_k_missing_positive(nums, k) {
  const n = nums.length;
  let i = 0;
  while (i < n) {
    const j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  missingNumbers = [];
  const extraNumbers = new Set();
  for (i = 0; i < n; i++) {
    if (missingNumbers.length < k) {
      if (nums[i] !== i + 1) {
        missingNumbers.push(i + 1);
        extraNumbers.add(nums[i]);
      }
    }
  }

  // add the remaining missing numbers
  i = 1;
  while (missingNumbers.length < k) {
    const candidateNumber = i + n;
    // ignore if the array contains the candidate number
    if (!extraNumbers.has(candidateNumber)) {
      missingNumbers.push(candidateNumber);
    }
    i += 1;
  }
  return missingNumbers;
}

console.log(find_first_k_missing_positive([3, -1, 4, 5, 5], 3));
console.log(find_first_k_missing_positive([2, 3, 4], 3));
console.log(find_first_k_missing_positive([-2, -3, 4], 2));

/* 
Time complexity:
The time complexity of the above algorithm is O(n + k), as the last two for loops will run for
O(n) and O(k) times respectively.

Space complexity:
The algorithm needs O(k) space to store the extraNumbers.
 */
