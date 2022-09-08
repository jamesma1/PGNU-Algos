// For ‘K’ employees, we are given a list of intervals representing the working hours of each employee.
// Our goal is to find out if there is a free interval that is common to all employees.
// You can assume that each list of employee working hours is sorted on the start time.
// level: hard

// merge all intervals
// find gaps within the merged intervals

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

const find_employee_free_time = function (schedule) {
  schedule.sort((a, b) => a.start - b.start);
  result = [];
  const freeTime = [];

  let start = schedule[0][0].start;
  let end = schedule[0][0].end;
  console.log(start);
  console.log(end);
  console.log(schedule[0]);

  let j = 1;
  for (let i = 1; i < schedule.length; i++) {
    while (j < schedule[i].length) {
      console.log(j, start, end);
      if (schedule[i][j].start >= end) {
        // overlapping intervals, continue to next iteration
        j++;
        continue;
      } else {
        // non-overlapping interval
        // start is previous end and end is current start
        // add to result and reset
        console.log("hi");
        start = end;
        end = schedule[i][j].start;
        result.push(new Interval(start, end));
        start = schedule[i][j].start;
        end = schedule[i][j].end;
        j++;
      }
    }
    j = 0;
  }
  return result;
};

/*
heap method:

Use it whenever you need quick access to the largest (or smallest) item, 
because that item will always be the first element in the array or at the root of the tree.

However, the remainder of the array is kept partially unsorted. Thus, instant access is 
only possible to the largest (smallest) item. Insertions are fast, so it's a good way to
deal with incoming events or data and always have access to the earliest/biggest.

Useful for priority queues, schedulers (where the earliest item is desired), etc...

A heap is a tree where a parent node's value is larger than that of any of its descendant nodes.

If you think of a heap as a binary tree stored in linear order by depth, with the root node first
(then the children of that node next, then the children of those nodes next); then the children of
a node at index N are at 2N+1 and 2N+2. This property allows quick access-by-index. And since heaps
are manipulated by swapping nodes, this allows for in-place sorting.
*/

// const Heap = require('./collections/heap'); //http://www.collectionsjs.com

// class EmployeeInterval {
//     constructor(interval, employeeIndex, intervalIndex) {
//       this.interval = interval; // interval representing employee's working hours
//       // index of the list containing working hours of this employee
//       this.employeeIndex = employeeIndex;
//       this.intervalIndex = intervalIndex; // index of the interval in the employee list
//     }
//   }
÷

/* 
Time complexity:
The above algorithm’s time complexity is O(N*logK), where ‘N’ is the total number of intervals,
 and ‘K’ is the total number of employees. This is because we are iterating through the intervals 
 only once (which will take O(N), and every time we process an interval, we remove (and can insert) 
 one interval in the Min Heap, (which will take O(logK)). At any time, the heap will not have more than ‘K’ elements.

Space complexity:
The space complexity of the above algorithm will be O(K) as at any time, the heap will not have more than ‘K’ elements.
*/

input = [
  [new Interval(1, 3), new Interval(5, 6)],
  [new Interval(2, 3), new Interval(6, 8)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);

// input = [
//   [new Interval(1, 3), new Interval(9, 12)],
//   [new Interval(2, 4)],
//   [new Interval(6, 8)],
// ];
// intervals = find_employee_free_time(input);
// result = "Free intervals: ";
// for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
// console.log(result);

// input = [
//   [new Interval(1, 3)],
//   [new Interval(2, 4)],
//   [new Interval(3, 5), new Interval(7, 9)],
// ];
// intervals = find_employee_free_time(input);
// result = "Free intervals: ";
// for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
// console.log(result);
