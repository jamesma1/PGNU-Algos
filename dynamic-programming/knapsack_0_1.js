// /*

// 0/1 Knapsack Problem:
// Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
// In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with n items respectively.
// Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum of the weights of this
// subset is smaller than or equal to W. You cannot break an item, either pick the complete item or don’t pick it (0-1 property).
//  * */

// /* Method: Recursion by Brute-Force algorithm OR Exhaustive Search.

// A simple solution is to consider all subsets of items and calculate the total weight and value of all subsets. Consider the only subsets whose total weight is smaller than W. From all such subsets, pick the maximum value subset.
// Optimal Sub-structure: To consider all subsets of items, there can be two cases for every item.

// Case 1: The item is included in the optimal subset.
// Case 2: The item is not included in the optimal set.
// Therefore, the maximum value that can be obtained from ‘n’ items is the max of the following two values.

// Maximum value obtained by n-1 items and W weight (excluding nth item).
// Value of nth item plus maximum value obtained by n-1 items and W minus the weight of the nth item (including nth item).
// If the weight of ‘nth’ item is greater than ‘W’, then the nth item cannot be included and Case 1 is the only possibility.

// Time Complexity: O(2^n).
// As there are redundant subproblems.
// Auxiliary Space :O(1) + O(N).
// As no extra data structure has been used for storing values but O(N) auxiliary stack space(ASS) has been used for recursion stack.
// */
// function max(a, b) {
//   return a > b ? a : b;
// }

// // Returns the maximum value that can
// // be put in a knapsack of capacity W
// function knapSack(W, wt, val, n) {
//   // Base Case
//   if (n == 0 || W == 0) return 0;

//   // If weight of the nth item is
//   // more than Knapsack capacity W,
//   // then this item cannot be
//   // included in the optimal solution
//   if (wt[n - 1] > W) return knapSack(W, wt, val, n - 1);
//   // Return the maximum of two cases:
//   // (1) nth item included
//   // (2) not included
//   else
//     return max(
//       val[n - 1] + knapSack(W - wt[n - 1], wt, val, n - 1),
//       knapSack(W, wt, val, n - 1)
//     );
// }

/* Method: Dynamic Programming. (take it or leave it approach)
Like other typical Dynamic Programming(DP) problems, re-computation of same subproblems can be avoided by 
constructing a temporary array K[][] in bottom-up manner. 

Approach: In the Dynamic programming we will work considering the same cases as mentioned in the recursive approach. 
In a DP[][] table let’s consider all the possible weights from ‘1’ to ‘W’ as the columns and weights that can be kept as the rows. 
The state DP[i][j] will denote maximum value of ‘j-weight’ considering all values from ‘1 to ith’.
So if we consider ‘wi’ (weight in ‘ith’ row) we can fill it in all columns which have ‘weight values > wi’. 

Now two possibilities can take place: 

(1) Fill ‘wi’ in the given column. (TAKE IT)
(2) Do not fill ‘wi’ in the given column. (LEAVE IT)
Now we have to take a maximum of these two possibilities, formally if we do not fill ‘ith’ weight in ‘jth’ column then DP[i][j] state will 
be same as DP[i-1][j] but if we fill the weight, DP[i][j] will be equal to the value of ‘wi’+ value of the column weighing ‘j-wi’ in the previous row. 
So we take the maximum of these two possibilities to fill the current state.

Time Complexity: O(N*W). 
where ‘N’ is the number of weight element and ‘W’ is capacity. As for every weight element we traverse through all weight capacities 1<=w<=W.
Auxiliary Space: O(N*W). 
The use of 2-D array of size ‘N*W’.
*/

// A utility function that returns
// maximum of two integers
function max(a, b) {
  return a > b ? a : b;
}

// Returns the maximum value that can
// be put in a knapsack of capacity W
function knapSack(W, wt, val, n) {
  let i, w;
  let K = new Array(n + 1);

  // Build table K[][] in bottom up manner
  for (i = 0; i <= n; i++) {
    K[i] = new Array(W + 1);
    for (w = 0; w <= W; w++) {
      if (i == 0 || w == 0) K[i][w] = 0;
      else if (wt[i - 1] <= w)
        K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
      else K[i][w] = K[i - 1][w];
    }
  }

  return K[n][W];
}

const val = [10, 15, 40];
const wt = [1, 2, 3];
const W = 50;
const n = val.length;
console.log(knapSack(W, wt, val, n)); // 65
