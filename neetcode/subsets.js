var subsets = function(nums) {
  const output = [];
  const numsLen = nums.length
  let k = 0;
  
  function backtrack (index = 0, subset = []){
      if (subset.length === k){
          output.push([...subset]);
          return;
      }
      
      for (let i = index; i < numsLen; i++){
          subset.push(nums[i]);
          backtrack(i+1,subset)
          subset.pop();
      }
  }
  
  while (k < numsLen + 1){
      backtrack();
      k++;
  }
  
  return output;
};