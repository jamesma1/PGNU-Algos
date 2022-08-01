// Given two lists of intervals, find the intersection of these two lists.
// Each list consists of disjoint intervals sorted on their start time.
// level: medium

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const merge = function (intervals_a, intervals_b) {
  const output = [];
  let i = 0;
  let j = 0;

  while (i < firstList.length && j < secondList.length) {
    const [s1, e1] = firstList[i];
    const [s2, e2] = secondList[j];

    // check if interval1 insersects interval2
    const min = Math.max(s1, s2); // start of intersection
    const max = Math.min(e1, e2); // end of intersection

    // <= to handle same start/end of intersection: [5, 5]
    if (min <= max) output.push([min, max]);

    // increment the pointer which end is < the other end)
    if (e1 < e2) i++;
    else j++;
  }
};

process.stdout.write("Intervals Intersection: ");
let result = merge(
  [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
  [new Interval(2, 3), new Interval(5, 7)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals Intersection: ");
result = merge(
  [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
  [new Interval(5, 10)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
