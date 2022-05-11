// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// tina's first attempt: brute force
// time complexity: O(2n) ????
// space complexity: O(n)
var isAnagram = function (s, t) {
  // edge case: check if length of arguments are different
  if (s.length !== t.length) return false;

  // map t to an object with key value pairs
  const t_Obj = {};
  t.split('').forEach(char => t_Obj[char] !== undefined ? t_Obj[char]++ : t_Obj[char] = 1);
  // console.log(t_Obj)

  // iterate through s and check if object contains key 
  for (let i = 0; i < s.length; i++) {
    if (t_Obj[s[i]] >= 0) t_Obj[s[i]]--;
    // else if (t_Obj[s[i]] === 0) delete t_Obj[s[i]];
  }
  // console.log(t_Obj)
  // return Object.keys(t_Obj).length === 0;
  return Object.values(t_Obj).every(el => el === 0);
}

// const s = 'aaca'
// const t = 'acac'
// console.log(isAnagram(s, t)) // false

const s = 'anagram'
const t = 'nagaram'
console.log(isAnagram(s, t)) // true