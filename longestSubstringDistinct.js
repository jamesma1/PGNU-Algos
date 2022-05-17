function non_repeat_substring(str) {
  let windowStart = 0,
    maxLength = 0,
    charIndexMap = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    console.log(`Loop ${windowEnd}`)
    console.log('windowStart: ', windowStart)
    console.log('windowEnd: ', windowEnd)
    console.log('rightChar: ', rightChar)
    console.log('charIndexMap: ', charIndexMap)
    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'
    if (rightChar in charIndexMap) {
      // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      console.log(`greater of windowStart (${windowStart}) or previous index of rightChar + 1 (${charIndexMap[rightChar] + 1})`)
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
      console.log('updated windowStart: ', windowStart)
    }
    // insert the 'rightChar' into the map
    charIndexMap[rightChar] = windowEnd;
    console.log('updated charIndexMap: ', charIndexMap)
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    console.log("maxLength: ", maxLength)
  }
  return maxLength;
}


// console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
// console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abccdea')}`);