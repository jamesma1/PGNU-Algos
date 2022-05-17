/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  //"abcbbcbb"
  if (!s) return 0;
  const chars = {};
  let windowStart = 0;
  let max = -Infinity;
  
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
      if (!chars[s[windowEnd]]) {
          chars[s[windowEnd]] = 1;
      } else {
          while(chars[s[windowEnd]]) {
              delete chars[s[windowStart]];
              windowStart++;
          }
          chars[s[windowEnd]] = 1;
      }
      max = Math.max(max, (windowEnd - windowStart) + 1);
  }
  return max;
};