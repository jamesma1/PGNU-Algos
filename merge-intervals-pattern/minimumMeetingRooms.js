// Given a list of intervals representing the start and end time of ‘N’ meetings,
// find the minimum number of rooms required to hold all the meetings.
// level: hard

/*

(1) Sort all the meetings on their start time.
(2) Create a min-heap to store all the active meetings. This min-heap will also be used to find the active meeting with the smallest end time.
(3) Iterate through all the meetings one by one to add them in the min-heap. Let’s say we are trying to schedule the meeting m1.
(4) Since the min-heap contains all the active meetings, so before scheduling m1 we can remove all meetings from the heap that have ended before m1, i.e., remove all meetings from the heap that have an end time smaller than or equal to the start time of m1.
(5) Now add m1 to the heap.
(6) The heap will always have all the overlapping meetings, so we will need rooms for all of them. Keep a counter to remember the maximum size of the heap at any time which will be the minimum number of rooms needed.

*/

class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

// const Heap = require("./collections/heap"); //http://www.collectionsjs.com

function min_meeting_rooms(meetings) {
  // sort the meetings by start time
  meetings.sort((a, b) => a.start - b.start);

  let minRooms = 0;
  // let minHeap = new Heap([], null, (a, b) => b.end - a.end);
  let minHeap = [];
  for (i = 0; i < meetings.length; i++) {
    console.log("heap", minHeap);
    // all active meetings are in the min_heap, so we need rooms for all of them.
    minRooms = Math.max(minRooms, minHeap.length);
    // remove all the meetings that have ended
    // if the current meeting start time is later than the meeting that ends first, remove that "active" meeting from the heap
    // while (minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
    while (minHeap.length > 0 && meetings[i].start >= minHeap[0].end) {
      minHeap.pop();
    }
    // add the current meeting into min_heap
    minHeap.push(meetings[i]);
  }
  return minRooms;
}

console.log(
  `Minimum meeting rooms required: ` +
    `${min_meeting_rooms([
      new Meeting(1, 4),
      new Meeting(2, 5),
      new Meeting(7, 9),
    ])}`
);
console.log(
  `Minimum meeting rooms required: ` +
    `${min_meeting_rooms([
      new Meeting(6, 7),
      new Meeting(2, 4),
      new Meeting(8, 12),
    ])}`
);
console.log(
  `Minimum meeting rooms required: ` +
    `${min_meeting_rooms([
      new Meeting(1, 4),
      new Meeting(2, 3),
      new Meeting(3, 6),
    ])}`
);
console.log(
  `Minimum meeting rooms required: ` +
    `${min_meeting_rooms([
      new Meeting(4, 5),
      new Meeting(2, 3),
      new Meeting(2, 4),
      new Meeting(3, 5),
    ])}`
);

/* 
Time complexity:
The time complexity of the above algorithm is O(N*logN), where ‘N’ is the total number of meetings. 
This is due to the sorting that we did in the beginning. Also, while iterating the meetings we might 
need to poll/offer meeting to the priority queue. Each of these operations can take O(logN). 
Overall our algorithm will take O(NlogN).

Space complexity:
The space complexity of the above algorithm will be O(N) which is required for sorting. 
Also, in the worst case scenario, we’ll have to insert all the meetings into the Min Heap 
(when all meetings overlap) which will also take O(N) space. The overall space complexity of our algorithm is O(N).
*/
