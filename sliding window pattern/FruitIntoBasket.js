// You are visiting a farm to collect fruits.The farm has a single row of fruit trees.
// You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

// You will be given an array of characters where each character represents a fruit tree.
// The farm has following restrictions:

// Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// You can start with any tree, but you can’t skip a tree once you have started.
// You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.

// level: medium

var totalFruit = function (fruits) {
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
