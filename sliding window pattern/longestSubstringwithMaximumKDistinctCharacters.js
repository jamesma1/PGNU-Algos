// Longest Substring with maximum K Distinct Characters
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    // store unique chars and their freqs
    const freqs = {};
    let windowStart = 0;
    let length = 0;
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        if (freqs.hasOwnProperty(s[windowEnd])) freqs[s[windowEnd]] += 1;
        else freqs[s[windowEnd]] = 1;
        
        while (Object.keys(freqs).length > k) {
            freqs[s[windowStart]]--;
            if (freqs[s[windowStart]] === 0) delete freqs[s[windowStart]];
          
            windowStart += 1;
        }
      
     length = Math.max(length, windowEnd - windowStart + 1);
    }
    return length;
};
