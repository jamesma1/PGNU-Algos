// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// level: medium

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// when i submit this solution on leetcode, it says output limit exceeded, but it passes all 107 tests 

var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;
  const hash = {};
  for (let i = 0; i < s1.length; i++) {
    hash[s1[i]] ? hash[s1[i]]++ : hash[s1[i]] = 1;
  }
  console.log(hash)

  let matchedChars = 0;
  let start = 0;

  for (let end = 0; end < s2.length; end++) {
    // check the first 0 to s1.length characters against hash 
    // if the matchedChar = 0, it means we found the all the matches of one char
    let rightChar = s2[end];
    if (rightChar in hash) {
      hash[s2[end]]--;
      if (hash[rightChar] === 0) {
        matchedChars++;
      }
    }
    console.log(hash)
    if (matchedChars === Object.keys(hash).length) {
      return true;
    }
      
    // after checking the first 0 to s1.length characters, slide the statically-sized window and continue checking 
    let leftChar = s2[start];
    if (end >= s1.length - 1) {
      console.log(end)
      console.log(hash)
      if (leftChar in hash) {
        if (hash[leftChar] === 0) {
          matchedChars--;
        } 
        
        hash[leftChar]++;
      }
      start++;
    }
  }
  return false;
}

// const s1 = 'ab'
// const s2 = 'eidbaooo'
// console.log(checkInclusion(s1, s2)) // true

// const s1 = 'ab'
// const s2 = 'eidboaoo'
// console.log(checkInclusion(s1, s2)) // false

// const s1 = 'adc'
// const s2 = 'dcda'
// console.log(checkInclusion(s1, s2)) // true

const s1 = "abc"
const s2 = "ccccbbbbaaaa"
console.log(checkInclusion(s1, s2)) // false 