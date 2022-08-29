/*
Given a certain amount of floors of a building (say f number of floors) and also given certain amount of eggs (say e number of eggs) …

What is the least amount of egg drops one has to perform to find out the threshold floor? (Threshold floor is one from which the egg starts breaking and also egg breaks for all the floors above. Also, if egg dropped from any floor below the threshold floor, it won’t break.)

Constraints:
An egg that survives a fall can be used again.
A broken egg must be discarded.
The effect of a fall is the same for all eggs.
If an egg breaks when dropped, then it would break if dropped from a higher floor.
If an egg survives a fall then it would survive a shorter fall.
*/

function eggDrop(e, f) {
  const dp = Array(e).fill(0).map(el => Array())
  
  for (let i = 1; i <= e; i++) {
    for (let j = 0; j <= f; j++) {
      dp[i - 1][j] = helper(i, j);
    }
  }
  return dp[e - 1][f];
  
  function helper(e, f) {
    if (dp[e - 1][f] !== undefined) return dp[e - 1][f];
		else if (e === 1) return f;
    else if (f === 0) return 0;
    let tests = [];
		for (let i = 1; i <= f; i++) {
      tests[i - 1] = 1 + Math.max(helper(e - 1, i - 1), helper(e, f - i));
    }
    return Math.min(...tests);
  }
}
