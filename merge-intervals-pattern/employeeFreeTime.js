/*
For ‘K’ employees, we are given a list of intervals representing the working hours of each employee.
Our goal is to find out if there is a free interval that is common to all employees.
You can assume that each list of employee working hours is sorted on the start time.

level: hard
*/

const Heap = require("./collections/heap"); //http://www.collectionsjs.com

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

class EmployeeInterval {
  constructor(interval, employeeIndex, intervalIndex) {
    this.interval = interval; // interval representing employee's working hours
    // index of the list containing working hours of this employee
    this.employeeIndex = employeeIndex;
    this.intervalIndex = intervalIndex; // index of the interval in the employee list
  }
}

function find_employee_free_time(schedule) {
  let n = schedule.length,
    result = [];
  if (schedule === null || n === 0) {
    return result;
  }
  minHeap = new Heap([], null, (a, b) => b.interval.start - a.interval.start);
  // insert the first interval of each employee to the queue
  for (i = 0; i < n; i++) {
    minHeap.push(new EmployeeInterval(schedule[i][0], i, 0));
  }
  previousInterval = minHeap.peek().interval;
  while (minHeap.length > 0) {
    const queueTop = minHeap.pop();
    // if previousInterval is not overlapping with the next interval, insert a free interval
    if (previousInterval.end < queueTop.interval.start) {
      result.push(new Interval(previousInterval.end, queueTop.interval.start));
      previousInterval = queueTop.interval;
    } else {
      // overlapping intervals, update the previousInterval if needed
      if (previousInterval.end < queueTop.interval.end) {
        previousInterval = queueTop.interval;
      }
    }
    // if there are more intervals available for(the same employee, add their next interval
    const employeeSchedule = schedule[queueTop.employeeIndex];
    if (employeeSchedule.length > queueTop.intervalIndex + 1) {
      minHeap.push(
        new EmployeeInterval(
          employeeSchedule[queueTop.intervalIndex + 1],
          queueTop.employeeIndex,
          queueTop.intervalIndex + 1
        )
      );
    }
  }
  return result;
}

let input = [
  [new Interval(1, 3), new Interval(5, 6)],
  [new Interval(2, 3), new Interval(6, 8)],
];
process.stdout.write("Free intervals: ", (end = ""));
let result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

input = [
  [new Interval(1, 3), new Interval(9, 12)],
  [new Interval(2, 4)],
  [new Interval(6, 8)],
];
process.stdout.write("Free intervals: ", (end = ""));
result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

input = [
  [new Interval(1, 3)],
  [new Interval(2, 4)],
  [new Interval(3, 5), new Interval(7, 9)],
];
process.stdout.write("Free intervals: ", (end = ""));
result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

/* 
Time complexity:
The above algorithm’s time complexity is O(N*logK), where ‘N’ is the total number of intervals, 
and ‘K’ is the total number of employees. This is because we are iterating through the intervals 
only once (which will take O(N)), and every time we process an interval, we remove (and can insert) 
one interval in the Min Heap, (which will take O(logK)). At any time, the heap will not have more than ‘K’ elements.

Space complexity:
The space complexity of the above algorithm will be O(K) as at any time, the heap will not have more than ‘K’ elements.
*/
