/* 
Given an array of intervals, find the next interval of each interval. In a list of intervals,
for an interval ‘i’ its next interval ‘j’ will have the smallest ‘start’ greater than or equal to the ‘end’ of ‘i’.

Write a function to return an array containing indices of the next interval of each input interval. 
If there is no next interval of a given interval, return -1. It is given that none of the intervals have the same start point.
*/

const Heap = require("./collections/heap"); //http://www.collectionsjs.com

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function find_next_interval(intervals) {
  const n = intervals.length;

  // heaps for finding the maximum start and end
  const maxStartHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  const maxEndHeap = new Heap([], null, (a, b) => a[0] - b[0]);

  const result = Array(n).fill(0);
  for (endIndex = 0; endIndex < n; endIndex++) {
    maxStartHeap.push([intervals[endIndex].start, endIndex]);
    maxEndHeap.push([intervals[endIndex].end, endIndex]);
  }

  // go through all the intervals to find each interval's next interval
  for (i = 0; i < n; i++) {
    // let's find the next interval of the interval which has the highest 'end'
    const [topEnd, endIndex] = maxEndHeap.pop();
    result[endIndex] = -1; // defaults to -1
    if (maxStartHeap.peek()[0] >= topEnd) {
      let [topStart, startIndex] = maxStartHeap.pop();
      // find the the interval that has the closest 'start'
      while (maxStartHeap.length > 0 && maxStartHeap.peek()[0] >= topEnd) {
        [topStart, startIndex] = maxStartHeap.pop();
      }
      result[endIndex] = startIndex;
      // put the interval back as it could be the next interval of other intervals
      maxStartHeap.push([topStart, startIndex]);
    }
  }
  return result;
}

result = find_next_interval([
  new Interval(2, 3),
  new Interval(3, 4),
  new Interval(5, 6),
]);
console.log(`Next interval indices are: ${result}`);

result = find_next_interval([
  new Interval(3, 4),
  new Interval(1, 5),
  new Interval(4, 6),
]);
console.log(`Next interval indices are: ${result}`);

/* 
Time complexity:
The time complexity of our algorithm will be O(NlogN), where N is the total number of intervals.

Space complexity:
The space complexity will be O(N) because we will be storing all the intervals in the heaps.
*/
