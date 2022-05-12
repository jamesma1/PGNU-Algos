var totalFruit = function(fruits) {
  let k = 2;
  let windowStart = 0;
  let max = -1 ;
  let hash = {};
  
  for (let windowEnd = 0 ; windowEnd < fruits.length; windowEnd++) {
    let current = fruits[windowEnd];
    if (!hash[current]) {
      hash[current] = 1;
    } else {
      hash[current] += 1;
    }
    while (Object.keys(hash).length > k) { 
      let currentStart = fruits[windowStart];
      hash[currentStart] -= 1;
      if (hash[currentStart] === 0) {
        delete hash[currentStart]
      }
      windowStart++
    }
    max = Math.max(max, (windowEnd - windowStart + 1))
  }
  return max;
};
