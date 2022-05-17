/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
  // create a hashmap to keep track of which characters we need to make up p
  const neededChars = {};
  for (const char of p) {
      if (!neededChars[char]) neededChars[char] = 0;
      neededChars[char] += 1;
  };
  const output = [];
  let left = 0,
      right = 0,
  // count variable will track total number of characters needed to form anagram
      count = p.length;
  while(right < s.length) {
      const currentChar = s[right];
      // if the frequency of currentChar is greater than 0, we need it to form an anagram, so now we can decrement count
      // if it's already at 0 or less than 0, we already have the right number of that character (or more) needed to form anagram in our window, so we just need to decrement it's value in the hashmap
      if(neededChars[currentChar] > 0) count--;
      neededChars[currentChar]--;
      // increment right to expand the window
      right++;
      // if our count is at 0, we have an anagram
      if(count === 0) output.push(left);
      // if right - left is the length of p, we need to shrink our window by one from the left
      if(right - left === p.length) {
          let leftChar = s[left];
          // shrinking the window from the left will discard the left character, so if it's current value in the hashmap is greater than or equal to 0, we need to increment count to account for it being removed from our window
          if(neededChars[leftChar] >= 0) count++;
          // if it is less than 0, that means we still have enough numbers of that character in our window to make an anagram, so we just need to increment it's frequency to account for the removal of it
          neededChars[leftChar]++;
          // here we remove it from our window
          left++
      }
  }
  return output;
};